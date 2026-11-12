"use client";

import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import {
  Hand,
  disposeHandMaterials,
  useHandMaterials,
  type HandPose,
} from "./hand-model";

const ASSEMBLY_ROTATION: [number, number, number] = [-0.1, 0.86, 0];
const ASSEMBLY_POSITION: [number, number, number] = [0, 0.02, 0];

const humanPose: HandPose = {
  curl: [1.02, 1.16, 0.46],
  spread: 1,
  thumb: {
    origin: [0.146, -0.006, 0.012],
    base: [0.3, 0, -0.5],
    joints: [0.16, 0.44, 0.34],
    roll: [0, 0.12, 0.16],
    lengths: [0.098, 0.07, 0.054],
    radius: 0.036,
  },
};

const robotPose: HandPose = {
  curl: [1.06, 1.2, 0.5],
  spread: 1,
  thumb: {
    origin: [0.146, -0.004, 0.012],
    base: [0.28, 0, -0.5],
    joints: [0.14, 0.5, 0.36],
    roll: [0, 0.1, 0.14],
    lengths: [0.096, 0.07, 0.054],
    radius: 0.036,
  },
};

type SceneProps = {
  reduced?: boolean;
  compact?: boolean;
  onReady?: () => void;
};

function PointerTarget() {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(event: PointerEvent) {
      target.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return target;
}

function Handshake({ reduced = false, compact = false }: SceneProps) {
  const materials = useHandMaterials();
  const group = useRef<THREE.Group>(null);
  const pointer = PointerTarget();
  const smoothed = useRef({ x: 0, y: 0 });
  const { invalidate } = useThree();

  useEffect(() => () => disposeHandMaterials(materials), [materials]);

  // Static pose still needs one frame when motion is reduced.
  useEffect(() => {
    invalidate();
  }, [invalidate]);

  useFrame((state, delta) => {
    const rig = group.current;
    if (!rig) return;

    const t = state.clock.elapsedTime;
    const damp = reduced ? 0 : Math.min(delta * 3.2, 1);
    const parallax = reduced ? 0 : 0.16;

    smoothed.current.x += (pointer.current.x - smoothed.current.x) * damp;
    smoothed.current.y += (pointer.current.y - smoothed.current.y) * damp;

    const idle = reduced ? 0 : 1;

    rig.rotation.y =
      ASSEMBLY_ROTATION[1] +
      Math.sin(t * 0.31) * 0.035 * idle +
      smoothed.current.x * parallax;
    rig.rotation.x =
      ASSEMBLY_ROTATION[0] +
      Math.sin(t * 0.24 + 1.1) * 0.018 * idle +
      smoothed.current.y * parallax * 0.45;
    rig.position.y = ASSEMBLY_POSITION[1] + Math.sin(t * 0.55) * 0.006 * idle;
    rig.position.x = smoothed.current.x * 0.012 * idle;
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#ffffff", "#c8dced", 0.7]} />
      <directionalLight
        position={[2.6, 3.6, 2.8]}
        intensity={2.3}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0006}
        shadow-normalBias={0.02}
      />
      <directionalLight position={[-3, 1.4, 1.6]} intensity={0.75} color="#cfe6ff" />
      <directionalLight position={[0.5, -1.6, -2.4]} intensity={0.5} color="#a9d4f7" />

      <Environment resolution={192} frames={1}>
        <color attach="background" args={["#eef5fb"]} />
        <Lightformer
          form="rect"
          intensity={3.4}
          position={[0, 3.2, 1.8]}
          scale={[5, 3, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          color="#ffffff"
        />
        <Lightformer
          form="rect"
          intensity={2.2}
          position={[3.2, 1.4, 1]}
          scale={[3, 3, 1]}
          rotation={[0, -Math.PI / 2, 0]}
          color="#dceeff"
        />
        <Lightformer
          form="rect"
          intensity={1.5}
          position={[-3.2, 1.2, -1]}
          scale={[4, 4, 1]}
          rotation={[0, Math.PI / 2, 0]}
          color="#cbe2fb"
        />
        <Lightformer
          form="circle"
          intensity={1.8}
          position={[0, -2.4, 1.4]}
          scale={[2.4, 2.4, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          color="#eaf4ff"
        />
      </Environment>

      <group ref={group} rotation={ASSEMBLY_ROTATION} position={ASSEMBLY_POSITION}>
        <group position={[-0.052, 0.052, 0]} rotation={[0, 0, -0.3]}>
          <group rotation={[0, Math.PI / 2, 0]}>
            <Hand
              variant="human"
              materials={materials}
              pose={humanPose}
              animate={!reduced}
            />
          </group>
        </group>

        <group position={[0.052, -0.052, 0]} rotation={[0, 0, 0.3]}>
          <group rotation={[0, -Math.PI / 2, 0]}>
            <Hand
              variant="robot"
              materials={materials}
              pose={robotPose}
              animate={!reduced}
            />
          </group>
        </group>
      </group>

      <ContactShadows
        position={[0, -0.66, 0]}
        scale={compact ? 2.6 : 3.2}
        opacity={0.2}
        blur={2.8}
        far={1.4}
        resolution={256}
        color="#2f5372"
      />
    </>
  );
}

/**
 * Real-time WebGL handshake. Loaded only on the client, only when the hero is
 * visible, and only when the device reports WebGL support.
 */
export default function HandshakeScene({
  reduced = false,
  compact = false,
  onReady,
}: SceneProps) {
  return (
    <Canvas
      shadows="soft"
      onCreated={() => onReady?.()}
      dpr={[1, compact ? 1.4 : 1.75]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }}
      camera={{
        position: compact ? [0.1, 0.24, 2.14] : [0.06, 0.26, 1.86],
        fov: compact ? 32 : 30,
        near: 0.1,
        far: 20,
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Handshake reduced={reduced} compact={compact} />
      </Suspense>
    </Canvas>
  );
}
