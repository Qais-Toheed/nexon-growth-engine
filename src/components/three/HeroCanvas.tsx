import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// --- Outer particle cloud ---
function ParticleCloud() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 1800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.0 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = Math.sin(t * 0.025) * 0.12;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3D8EFF" size={0.014} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  );
}

// --- Inner ring of particles ---
function InnerRing() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 1.7 + (Math.random() - 0.5) * 0.5;
      arr[i * 3]     = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.14;
    ref.current.rotation.z = Math.sin(t * 0.04) * 0.08;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0FCFEE" size={0.022} sizeAttenuation depthWrite={false} opacity={0.45} />
    </Points>
  );
}

// --- Outer slow orbital ring ---
function OuterOrbit() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 280;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 2.8 + (Math.random() - 0.5) * 0.2;
      arr[i * 3]     = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = -clock.getElapsedTime() * 0.06;
    ref.current.rotation.x = 0.45;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#8B5CF6" size={0.018} sizeAttenuation depthWrite={false} opacity={0.35} />
    </Points>
  );
}

// --- Floating tetrahedron geometry ---
function FloatingGeo() {
  const groupRef = useRef<THREE.Group>(null!);
  const mesh1 = useRef<THREE.Mesh>(null!);
  const mesh2 = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
    }
    if (mesh1.current) {
      mesh1.current.rotation.x = t * 0.4;
      mesh1.current.rotation.z = t * 0.25;
      mesh1.current.position.y = Math.sin(t * 0.5) * 0.2;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x = -t * 0.3;
      mesh2.current.rotation.y = t * 0.5;
      mesh2.current.position.y = Math.cos(t * 0.4) * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main wireframe octahedron */}
      <mesh ref={mesh1} position={[0.4, 0, 0]}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color="#3D8EFF" wireframe transparent opacity={0.18} />
      </mesh>
      {/* Smaller tetrahedron offset */}
      <mesh ref={mesh2} position={[-0.8, 0.3, 0.3]}>
        <tetrahedronGeometry args={[0.35, 0]} />
        <meshBasicMaterial color="#0FCFEE" wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

// --- Mouse parallax wrapper ---
function MouseParallax({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / size.width - 0.5) * 2;
      mouse.current.y = -(e.clientY / size.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [size]);

  useFrame(() => {
    current.current.x += (mouse.current.x - current.current.x) * 0.04;
    current.current.y += (mouse.current.y - current.current.y) * 0.04;
    if (groupRef.current) {
      groupRef.current.rotation.y = current.current.x * 0.25;
      groupRef.current.rotation.x = current.current.y * 0.15;
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
        <ParticleCloud />
        <InnerRing />
        <OuterOrbit />
        <FloatingGeo />
      </MouseParallax>
    </Canvas>
  );
}
