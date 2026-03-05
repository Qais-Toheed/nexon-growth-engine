import { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Elegant floating particles — bright, sparse, premium ── */
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.018;
    ref.current.rotation.x = Math.sin(t * 0.01) * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0080FF" size={0.025} sizeAttenuation depthWrite={false} opacity={0.45} />
    </Points>
  );
}

/* ── Bright inner ring — electric blue ── */
function InnerRing() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 1.8 + (Math.random() - 0.5) * 0.6;
      arr[i * 3]     = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.35;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.18;
    ref.current.rotation.z = Math.sin(t * 0.04) * 0.07;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#09BDD6" size={0.030} sizeAttenuation depthWrite={false} opacity={0.60} />
    </Points>
  );
}

/* ── Violet outer orbit ── */
function OuterOrbit() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 280;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 3.2 + (Math.random() - 0.5) * 0.22;
      arr[i * 3]     = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.16;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = -clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = 0.38;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#7A52F4" size={0.018} sizeAttenuation depthWrite={false} opacity={0.40} />
    </Points>
  );
}

/* ── Wireframe geometry cluster — cleaner, lighter ── */
function GeometryCluster() {
  const group = useRef<THREE.Group>(null!);
  const oct1  = useRef<THREE.Mesh>(null!);
  const oct2  = useRef<THREE.Mesh>(null!);
  const tet   = useRef<THREE.Mesh>(null!);
  const ico   = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.06;
    if (oct1.current) {
      oct1.current.rotation.x = t * 0.32;
      oct1.current.rotation.z = t * 0.18;
      oct1.current.position.y = Math.sin(t * 0.42) * 0.18;
    }
    if (oct2.current) {
      oct2.current.rotation.x = -t * 0.22;
      oct2.current.rotation.y = t * 0.38;
      oct2.current.position.y = Math.cos(t * 0.32) * 0.24;
    }
    if (tet.current) {
      tet.current.rotation.x = t * 0.48;
      tet.current.rotation.z = -t * 0.28;
      tet.current.position.y = Math.sin(t * 0.55 + 1) * 0.15;
    }
    if (ico.current) {
      ico.current.rotation.y = t * 0.18;
      ico.current.rotation.x = t * 0.12;
      ico.current.position.y = Math.cos(t * 0.36 + 2) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={oct1} position={[0.3, 0, 0]}>
        <octahedronGeometry args={[0.60, 0]} />
        <meshBasicMaterial color="#0080FF" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh ref={oct2} position={[-0.75, 0.2, 0.4]}>
        <octahedronGeometry args={[0.38, 0]} />
        <meshBasicMaterial color="#09BDD6" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh ref={tet} position={[0.95, -0.4, -0.3]}>
        <tetrahedronGeometry args={[0.32, 0]} />
        <meshBasicMaterial color="#7A52F4" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh ref={ico} position={[-0.4, 0.6, -0.5]}>
        <icosahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color="#52A8FF" wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

/* ── Mouse parallax ── */
function MouseParallax({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse    = useRef({ x: 0, y: 0 });
  const current  = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / size.width  - 0.5) * 2;
      mouse.current.y = -(e.clientY / size.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [size]);

  useFrame(() => {
    current.current.x += (mouse.current.x - current.current.x) * 0.034;
    current.current.y += (mouse.current.y - current.current.y) * 0.034;
    if (groupRef.current) {
      groupRef.current.rotation.y = current.current.x * 0.22;
      groupRef.current.rotation.x = current.current.y * 0.13;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 58 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <MouseParallax>
        <FloatingParticles />
        <InnerRing />
        <OuterOrbit />
        <GeometryCluster />
      </MouseParallax>
    </Canvas>
  );
}
