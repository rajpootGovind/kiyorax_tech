"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

export type HandVariant = "human" | "robot";

export type HandMaterials = {
  skin: THREE.MeshPhysicalMaterial;
  skinShade: THREE.MeshPhysicalMaterial;
  nail: THREE.MeshPhysicalMaterial;
  plate: THREE.MeshStandardMaterial;
  chrome: THREE.MeshStandardMaterial;
  dark: THREE.MeshStandardMaterial;
  accent: THREE.MeshStandardMaterial;
};

export type ThumbPose = {
  origin: [number, number, number];
  /** Orientation of the thumb base: [x, y, z] euler radians. */
  base: [number, number, number];
  /** Bend of the metacarpal / proximal / distal joints. */
  joints: [number, number, number];
  /** Out-of-plane rotation applied to each thumb joint. */
  roll: [number, number, number];
  lengths: [number, number, number];
  radius: number;
};

export type HandPose = {
  /** Curl of the finger joints: metacarpal, proximal, distal (radians). */
  curl: [number, number, number];
  /** Additional splay multiplier for the four fingers. */
  spread: number;
  thumb: ThumbPose;
};

export const PALM = {
  width: 0.336,
  height: 0.4,
  thickness: 0.098,
  knuckleY: 0.196,
};

type FingerSpec = {
  x: number;
  z: number;
  lengths: [number, number, number];
  radius: number;
  spread: number;
  phase: number;
};

/** Index, middle, ring and little finger — local +Y is the fingertip direction. */
const FINGERS: FingerSpec[] = [
  { x: 0.108, z: 0.008, lengths: [0.104, 0.07, 0.052], radius: 0.0295, spread: 0.14, phase: 0.0 },
  { x: 0.036, z: 0.014, lengths: [0.114, 0.076, 0.056], radius: 0.0305, spread: 0.035, phase: 1.2 },
  { x: -0.036, z: 0.008, lengths: [0.107, 0.072, 0.054], radius: 0.029, spread: -0.05, phase: 2.3 },
  { x: -0.104, z: -0.002, lengths: [0.09, 0.061, 0.048], radius: 0.026, spread: -0.15, phase: 3.4 },
];

/**
 * Shared PBR materials for one handshake. Created once and disposed by the
 * scene that owns them, so the whole rig costs a handful of shader programs.
 */
export function useHandMaterials(): HandMaterials {
  return useMemo(() => {
    const skin = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#d8a383"),
      roughness: 0.56,
      metalness: 0,
      clearcoat: 0.32,
      clearcoatRoughness: 0.62,
      sheen: 0.55,
      sheenColor: new THREE.Color("#ffd7bd"),
      sheenRoughness: 0.75,
    });

    const skinShade = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#bf8365"),
      roughness: 0.62,
      clearcoat: 0.18,
      clearcoatRoughness: 0.7,
    });

    const nail = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#e5b49a"),
      roughness: 0.28,
      clearcoat: 0.75,
      clearcoatRoughness: 0.22,
    });

    const plate = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#2f3d52"),
      metalness: 0.82,
      roughness: 0.34,
      envMapIntensity: 1.15,
    });

    const chrome = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#d7e1ef"),
      metalness: 1,
      roughness: 0.16,
      envMapIntensity: 1.5,
    });

    const dark = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#111a26"),
      metalness: 0.55,
      roughness: 0.55,
    });

    const accent = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#4cc6f5"),
      emissive: new THREE.Color("#2b9fe0"),
      emissiveIntensity: 1.15,
      metalness: 0.35,
      roughness: 0.28,
    });

    return { skin, skinShade, nail, plate, chrome, dark, accent };
  }, []);
}

export function disposeHandMaterials(materials: HandMaterials) {
  Object.values(materials).forEach((material) => material.dispose());
}

function Phalanx({
  length,
  radius,
  variant,
  materials,
  nail,
}: {
  length: number;
  radius: number;
  variant: HandVariant;
  materials: HandMaterials;
  nail?: boolean;
}) {
  if (variant === "human") {
    return (
      <>
        <mesh position={[0, length / 2, 0]} castShadow receiveShadow material={materials.skin}>
          <capsuleGeometry args={[radius, Math.max(length - radius * 1.1, 0.012), 6, 16]} />
        </mesh>
        {nail ? (
          <mesh
            position={[0, length * 0.56, -radius * 0.66]}
            rotation={[0.2, 0, 0]}
            material={materials.nail}
            castShadow
          >
            <boxGeometry args={[radius * 1.15, length * 0.6, radius * 0.3]} />
          </mesh>
        ) : null}
      </>
    );
  }

  return (
    <>
      <RoundedBox
        args={[radius * 2.02, length * 0.96, radius * 1.88]}
        radius={radius * 0.32}
        smoothness={4}
        position={[0, length / 2, 0]}
        castShadow
        receiveShadow
        material={materials.plate}
      />
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow material={materials.chrome}>
        <cylinderGeometry args={[radius * 1.04, radius * 1.04, radius * 2.08, 18]} />
      </mesh>
    </>
  );
}

function Finger({
  spec,
  pose,
  variant,
  materials,
  animate,
  groupRef,
}: {
  spec: FingerSpec;
  pose: HandPose;
  variant: HandVariant;
  materials: HandMaterials;
  animate: boolean;
  groupRef: (node: THREE.Group | null) => void;
}) {
  const [mcp, pip, dip] = pose.curl;
  const spread = spec.spread * pose.spread;
  const [l1, l2, l3] = spec.lengths;

  return (
    <group position={[spec.x, PALM.knuckleY, spec.z]} rotation={[0, 0, spread]}>
      <group ref={groupRef} rotation={[mcp, 0, 0]}>
        <Phalanx length={l1} radius={spec.radius} variant={variant} materials={materials} />

        <group position={[0, l1, 0]} rotation={[pip, 0, 0]}>
          <Phalanx
            length={l2}
            radius={spec.radius * 0.93}
            variant={variant}
            materials={materials}
          />

          <group position={[0, l2, 0]} rotation={[dip, 0, 0]}>
            <Phalanx
              length={l3}
              radius={spec.radius * 0.87}
              variant={variant}
              materials={materials}
              nail
            />
          </group>
        </group>
      </group>
    </group>
  );
}

function Thumb({
  pose,
  variant,
  materials,
}: {
  pose: ThumbPose;
  variant: HandVariant;
  materials: HandMaterials;
}) {
  const [base, meta, prox] = pose.joints;
  const [l1, l2, l3] = pose.lengths;

  return (
    <group position={pose.origin} rotation={pose.base}>
      <group rotation={[base, 0, pose.roll[0]]}>
        <Phalanx length={l1} radius={pose.radius} variant={variant} materials={materials} />

        <group position={[0, l1, 0]} rotation={[meta, 0, pose.roll[1]]}>
          <Phalanx
            length={l2}
            radius={pose.radius * 0.9}
            variant={variant}
            materials={materials}
          />

          <group position={[0, l2, 0]} rotation={[prox, 0, pose.roll[2]]}>
            <Phalanx
              length={l3}
              radius={pose.radius * 0.84}
              variant={variant}
              materials={materials}
              nail
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export function Hand({
  variant,
  materials,
  pose,
  animate = true,
}: {
  variant: HandVariant;
  materials: HandMaterials;
  pose: HandPose;
  animate?: boolean;
}) {
  const fingerJoints = useRef<(THREE.Group | null)[]>([]);
  const material = variant === "human" ? materials.skin : materials.plate;

  useFrame(({ clock }) => {
    if (!animate) return;
    const t = clock.elapsedTime;

    fingerJoints.current.forEach((joint, index) => {
      if (!joint) return;
      const phase = index * 1.31;
      joint.rotation.x = pose.curl[0] + Math.sin(t * 0.52 + phase) * 0.014;
    });
  });

  return (
    <group>
      {variant === "human" ? (
        <HumanPalm materials={materials} />
      ) : (
        <RobotPalm materials={materials} />
      )}

      {FINGERS.map((spec, index) => (
        <Finger
          key={index}
          spec={spec}
          pose={pose}
          variant={variant}
          materials={materials}
          animate={animate}
          groupRef={(node) => {
            fingerJoints.current[index] = node;
          }}
        />
      ))}

      <Thumb pose={pose.thumb} variant={variant} materials={materials} />

      {variant === "human" ? (
        <>
          <mesh position={[0, -0.226, 0]} castShadow receiveShadow material={material}>
            <cylinderGeometry args={[0.062, 0.07, 0.1, 24]} />
          </mesh>
          <mesh position={[0, -0.6, 0]} castShadow receiveShadow material={material}>
            <cylinderGeometry args={[0.068, 0.11, 0.76, 28]} />
          </mesh>
        </>
      ) : (
        <RobotForearm materials={materials} />
      )}
    </group>
  );
}

function HumanPalm({ materials }: { materials: HandMaterials }) {
  return (
    <group>
      <RoundedBox
        args={[PALM.width, PALM.height, PALM.thickness]}
        radius={0.047}
        smoothness={5}
        position={[0, 0.004, 0]}
        castShadow
        receiveShadow
        material={materials.skin}
      />

      {/* Thenar and hypothenar muscle mass. */}
      <mesh
        position={[0.119, -0.052, 0.014]}
        scale={[0.078, 0.135, 0.055]}
        castShadow
        receiveShadow
        material={materials.skin}
      >
        <sphereGeometry args={[1, 24, 18]} />
      </mesh>
      <mesh
        position={[-0.116, -0.062, 0.008]}
        scale={[0.062, 0.118, 0.046]}
        castShadow
        receiveShadow
        material={materials.skin}
      >
        <sphereGeometry args={[1, 22, 16]} />
      </mesh>

      {FINGERS.map((finger, index) => (
        <mesh
          key={index}
          position={[finger.x, PALM.knuckleY - 0.004, -0.016]}
          scale={[0.031, 0.03, 0.031]}
          castShadow
          material={materials.skinShade}
        >
          <sphereGeometry args={[1, 16, 12]} />
        </mesh>
      ))}
    </group>
  );
}

function RobotPalm({ materials }: { materials: HandMaterials }) {
  return (
    <group>
      <RoundedBox
        args={[PALM.width - 0.006, PALM.height - 0.004, PALM.thickness - 0.006]}
        radius={0.028}
        smoothness={4}
        position={[0, 0.004, 0]}
        castShadow
        receiveShadow
        material={materials.plate}
      />

      {/* Dorsal service plate with sky-blue seams. */}
      <RoundedBox
        args={[PALM.width - 0.05, PALM.height - 0.1, 0.016]}
        radius={0.012}
        smoothness={4}
        position={[0, 0.012, -(PALM.thickness / 2) - 0.002]}
        castShadow
        material={materials.chrome}
      />
      <mesh position={[0.012, 0.012, -(PALM.thickness / 2) - 0.012]} material={materials.accent}>
        <boxGeometry args={[0.014, 0.23, 0.004]} />
      </mesh>
      <mesh position={[-0.092, 0.012, -(PALM.thickness / 2) - 0.012]} material={materials.accent}>
        <boxGeometry args={[0.004, 0.19, 0.004]} />
      </mesh>

      {/* Palmate seam and knuckle hardware. */}
      <mesh position={[0, -0.066, 0]} material={materials.dark}>
        <boxGeometry args={[PALM.width + 0.002, 0.011, PALM.thickness + 0.002]} />
      </mesh>
      <mesh position={[0, 0.104, 0]} material={materials.dark}>
        <boxGeometry args={[PALM.width + 0.002, 0.007, PALM.thickness + 0.002]} />
      </mesh>

      {FINGERS.map((finger, index) => (
        <mesh
          key={index}
          position={[finger.x, PALM.knuckleY - 0.002, -0.004]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
          material={materials.chrome}
        >
          <cylinderGeometry args={[finger.radius * 1.28, finger.radius * 1.28, 0.03, 18]} />
        </mesh>
      ))}
    </group>
  );
}

function RobotForearm({ materials }: { materials: HandMaterials }) {
  return (
    <group>
      <mesh position={[0, -0.204, 0]} castShadow receiveShadow material={materials.chrome}>
        <cylinderGeometry args={[0.076, 0.074, 0.05, 28]} />
      </mesh>
      <mesh position={[0, -0.238, 0]} material={materials.accent}>
        <cylinderGeometry args={[0.0745, 0.0745, 0.009, 28]} />
      </mesh>

      <mesh position={[0, -0.33, 0]} castShadow receiveShadow material={materials.plate}>
        <cylinderGeometry args={[0.078, 0.086, 0.17, 28]} />
      </mesh>
      <mesh position={[0, -0.424, 0]} castShadow material={materials.chrome}>
        <cylinderGeometry args={[0.088, 0.088, 0.028, 28]} />
      </mesh>

      <mesh position={[0, -0.53, 0]} castShadow receiveShadow material={materials.plate}>
        <cylinderGeometry args={[0.087, 0.099, 0.19, 28]} />
      </mesh>
      <mesh position={[0, -0.634, 0]} castShadow material={materials.chrome}>
        <cylinderGeometry args={[0.101, 0.101, 0.026, 28]} />
      </mesh>

      <mesh position={[0, -0.76, 0]} castShadow receiveShadow material={materials.plate}>
        <cylinderGeometry args={[0.1, 0.115, 0.24, 28]} />
      </mesh>
      <mesh position={[0, -0.286, 0]} material={materials.dark}>
        <cylinderGeometry args={[0.079, 0.079, 0.014, 28]} />
      </mesh>
    </group>
  );
}
