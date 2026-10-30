"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function OrbitRing({
  radius,
  tilt,
  color,
  opacity,
  speed,
  nodes,
}: {
  radius: number;
  tilt: [number, number, number];
  color: string;
  opacity: number;
  speed: number;
  nodes: number;
}) {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const ring: [number, number, number][] = [];
    for (let i = 0; i <= 128; i += 1) {
      const angle = (i / 128) * Math.PI * 2;
      ring.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
    }
    return ring;
  }, [radius]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={tilt}>
      <group ref={group}>
        <Line
          points={points}
          color={color}
          lineWidth={1}
          transparent
          opacity={opacity}
        />
        {Array.from({ length: nodes }).map((_, index) => {
          const angle = (index / nodes) * Math.PI * 2;
          return (
            <group
              key={index}
              position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            >
              <mesh>
                <sphereGeometry args={[0.045, 16, 16]} />
                <meshBasicMaterial color="#ffffff" />
              </mesh>
              <mesh>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshBasicMaterial
                  color={color}
                  transparent
                  opacity={0.22}
                  blending={THREE.AdditiveBlending}
                  depthWrite={false}
                />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
}

function GlassStructure({
  position,
  rotation,
  accent,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  accent: string;
}) {
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[0.78, 2.4, 0.18]} radius={0.14} smoothness={5}>
        <meshPhysicalMaterial
          color="#0b1422"
          roughness={0.16}
          metalness={0.55}
          clearcoat={1}
          clearcoatRoughness={0.2}
          transparent
          opacity={0.72}
        />
      </RoundedBox>
      <RoundedBox
        args={[0.5, 1.92, 0.02]}
        radius={0.08}
        smoothness={4}
        position={[0, 0, 0.1]}
      >
        <meshBasicMaterial color={accent} transparent opacity={0.18} />
      </RoundedBox>
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.02, 1.55, 0.01]} />
        <meshBasicMaterial color={accent} transparent opacity={0.9} />
      </mesh>
      <mesh position={[0, 1.28, 0]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      <mesh position={[0, 1.28, 0]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial
          color={accent}
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Core() {
  const inner = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (inner.current) {
      inner.current.rotation.y += delta * 0.16;
      inner.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
    }
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.08;
      wire.current.rotation.z += delta * 0.04;
    }
  });

  return (
    <group>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshStandardMaterial
          color="#0a1c2a"
          metalness={0.85}
          roughness={0.2}
          emissive="#00a6d6"
          emissiveIntensity={0.28}
        />
      </mesh>
      <mesh ref={wire} scale={1.06}>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshBasicMaterial
          color="#8feaff"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>
      <mesh scale={0.42}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#d8f8ff" />
      </mesh>
      <mesh scale={0.62}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#2fe0ff"
          transparent
          opacity={0.24}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <pointLight color="#4de6ff" intensity={4.5} distance={4.5} />
    </group>
  );
}

function Bridge({ side, accent }: { side: -1 | 1; accent: string }) {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(side * 1.62, 0.72, 0),
      new THREE.Vector3(side * 1.05, 0.24, 0.45),
      new THREE.Vector3(side * 0.35, 0, 0.1),
    );
    return curve.getPoints(32).map((p) => [p.x, p.y, p.z] as [number, number, number]);
  }, [side]);

  return (
    <Line
      points={points}
      color={accent}
      lineWidth={1.4}
      transparent
      opacity={0.55}
    />
  );
}

function SceneGroup() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const targetX = state.pointer.y * 0.1;
    const targetY = state.pointer.x * 0.2;
    group.current.rotation.x += (targetX - group.current.rotation.x) * Math.min(1, delta * 2.4);
    group.current.rotation.y += (targetY - group.current.rotation.y) * Math.min(1, delta * 2.4);
  });

  return (
    <group ref={group} rotation={[0.04, -0.1, 0]}>
      <Float speed={1.15} rotationIntensity={0.14} floatIntensity={0.4}>
        <Core />
        <GlassStructure
          position={[-1.72, -0.06, -0.16]}
          rotation={[0.04, 0.32, 0.14]}
          accent="#00c8f5"
        />
        <GlassStructure
          position={[1.72, 0.06, -0.16]}
          rotation={[-0.04, -0.32, -0.14]}
          accent="#852eff"
        />
        <OrbitRing
          radius={2.15}
          tilt={[1.28, 0.32, 0.1]}
          color="#00c8f5"
          opacity={0.28}
          speed={0.07}
          nodes={3}
        />
        <OrbitRing
          radius={2.65}
          tilt={[1.1, -0.5, 0.5]}
          color="#852eff"
          opacity={0.22}
          speed={-0.045}
          nodes={4}
        />
        <OrbitRing
          radius={1.55}
          tilt={[1.5, 0.9, -0.24]}
          color="#286bff"
          opacity={0.2}
          speed={0.1}
          nodes={2}
        />
        <Bridge side={-1} accent="#00c8f5" />
        <Bridge side={1} accent="#852eff" />
        <Sparkles
          count={54}
          scale={[7, 6, 3]}
          size={1.6}
          speed={0.25}
          opacity={0.45}
          color="#8feaff"
          noise={0.6}
        />
        <Sparkles
          count={26}
          scale={[6, 5, 2]}
          size={2.1}
          speed={0.18}
          opacity={0.3}
          color="#b79cff"
          noise={0.8}
        />
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.7]}
      camera={{ position: [0, 0, 7.4], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 5, 5]} intensity={1.1} color="#dff8ff" />
      <pointLight position={[4, 2, 4]} intensity={40} distance={14} color="#00c8f5" />
      <pointLight position={[-4, -2, 3]} intensity={34} distance={14} color="#852eff" />
      <SceneGroup />
    </Canvas>
  );
}
