import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Dense outer nebula cloud ── */
function NebulaCloud() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 2200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.65;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.035;
    ref.current.rotation.x = Math.sin(t * 0.018) * 0.18;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3399FF" size={0.013} sizeAttenuation depthWrite={false} opacity={0.52} />
    </Points>
  );
}

/* ── Bright inner core ring ── */
function CoreRing() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 700;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 1.6 + (Math.random() - 0.5) * 0.55;
      arr[i * 3]     = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.16;
    ref.current.rotation.z = Math.sin(t * 0.045) * 0.09;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0DD9F4" size={0.024} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  );
}

/* ── Violet outer orbit ── */
function VioletOrbit() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 340;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 2.85 + (Math.random() - 0.5) * 0.25;
      arr[i * 3]     = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.18;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = -clock.getElapsedTime() * 0.055;
    ref.current.rotation.x = 0.42;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#8866FF" size={0.019} sizeAttenuation depthWrite={false} opacity={0.38} />
    </Points>
  );
}

/* ── Secondary cyan scatter ring ── */
function CyanScatter() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 450;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 2.1 + (Math.random() - 0.5) * 0.7;
      arr[i * 3]     = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.7;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.09;
    ref.current.rotation.x = -t * 0.025;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0DD9F4" size={0.016} sizeAttenuation depthWrite={false} opacity={0.3} />
    </Points>
  );
}

/* ── Wireframe geometry cluster ── */
function GeometryCluster() {
  const group = useRef<THREE.Group>(null!);
  const oct1  = useRef<THREE.Mesh>(null!);
  const oct2  = useRef<THREE.Mesh>(null!);
  const tet   = useRef<THREE.Mesh>(null!);
  const ico   = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.07;
    if (oct1.current) {
      oct1.current.rotation.x = t * 0.38;
      oct1.current.rotation.z = t * 0.22;
      oct1.current.position.y = Math.sin(t * 0.48) * 0.22;
    }
    if (oct2.current) {
      oct2.current.rotation.x = -t * 0.28;
      oct2.current.rotation.y = t * 0.45;
      oct2.current.position.y = Math.cos(t * 0.36) * 0.28;
    }
    if (tet.current) {
      tet.current.rotation.x = t * 0.55;
      tet.current.rotation.z = -t * 0.32;
      tet.current.position.y = Math.sin(t * 0.6 + 1) * 0.18;
    }
    if (ico.current) {
      ico.current.rotation.y = t * 0.2;
      ico.current.rotation.x = t * 0.15;
      ico.current.position.y = Math.cos(t * 0.4 + 2) * 0.15;
    }
  });

  return (
    <group ref={group}>
      {/* Main octahedron — electric blue */}
      <mesh ref={oct1} position={[0.3, 0, 0]}>
        <octahedronGeometry args={[0.58, 0]} />
        <meshBasicMaterial color="#3399FF" wireframe transparent opacity={0.20} />
      </mesh>
      {/* Secondary octahedron — cyan */}
      <mesh ref={oct2} position={[-0.7, 0.2, 0.4]}>
        <octahedronGeometry args={[0.36, 0]} />
        <meshBasicMaterial color="#0DD9F4" wireframe transparent opacity={0.16} />
      </mesh>
      {/* Tetrahedron — violet */}
      <mesh ref={tet} position={[0.9, -0.4, -0.3]}>
        <tetrahedronGeometry args={[0.30, 0]} />
        <meshBasicMaterial color="#8866FF" wireframe transparent opacity={0.14} />
      </mesh>
      {/* Icosahedron — soft blue */}
      <mesh ref={ico} position={[-0.4, 0.55, -0.5]}>
        <icosahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color="#66BBFF" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

/* ── Smooth mouse parallax wrapper ── */
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
    current.current.x += (mouse.current.x - current.current.x) * 0.038;
    current.current.y += (mouse.current.y - current.current.y) * 0.038;
    if (groupRef.current) {
      groupRef.current.rotation.y = current.current.x * 0.28;
      groupRef.current.rotation.x = current.current.y * 0.16;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.8], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.6]}
      gl={{ antialias: false, alpha: true }}
    >
      <MouseParallax>
        <NebulaCloud />
        <CoreRing />
        <CyanScatter />
        <VioletOrbit />
        <GeometryCluster />
      </MouseParallax>
    </Canvas>
  );
}
