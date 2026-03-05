import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Large luminous sphere — premium glass orb ── */
function GlassOrb() {
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const coreRef  = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.04;
      outerRef.current.rotation.z = t * 0.022;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.06;
      innerRef.current.rotation.x = t * 0.035;
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 0.8) * 0.04;
      coreRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={[1.4, 0, 0]}>
      {/* Outer glass shell */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#0080FF" wireframe transparent opacity={0.06} />
      </mesh>

      {/* Mid sphere */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#09BDD6" wireframe transparent opacity={0.10} />
      </mesh>

      {/* Core glow sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color="#52A8FF" transparent opacity={0.04} />
      </mesh>

      {/* Equatorial ring */}
      <EquatorialRing radius={1.9} color="#0080FF" opacity={0.55} speed={0.22} />
      <EquatorialRing radius={2.5} color="#09BDD6" opacity={0.30} speed={-0.14} tilt={0.5} />
      <EquatorialRing radius={3.1} color="#7A52F4" opacity={0.18} speed={0.08} tilt={1.1} />
    </group>
  );
}

function EquatorialRing({
  radius, color, opacity, speed, tilt = 0
}: { radius: number; color: string; opacity: number; speed: number; tilt?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 320;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const jitter = (Math.random() - 0.5) * 0.12;
      arr[i * 3]     = (radius + jitter) * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 0.18;
      arr[i * 3 + 2] = (radius + jitter) * Math.sin(angle);
    }
    return arr;
  }, [radius]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * speed;
    ref.current.rotation.x = tilt;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color={color} size={0.028} sizeAttenuation depthWrite={false} opacity={opacity} />
    </Points>
  );
}

/* ── Ambient star field — very sparse ── */
function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.008;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0080FF" size={0.016} sizeAttenuation depthWrite={false} opacity={0.25} />
    </Points>
  );
}

/* ── Floating wireframe satellites ── */
function Satellites() {
  const s1 = useRef<THREE.Mesh>(null!);
  const s2 = useRef<THREE.Mesh>(null!);
  const s3 = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (s1.current) {
      s1.current.rotation.x = t * 0.5;
      s1.current.rotation.z = t * 0.3;
      s1.current.position.x = 3.2 + Math.sin(t * 0.3) * 0.4;
      s1.current.position.y = Math.cos(t * 0.4) * 0.9;
    }
    if (s2.current) {
      s2.current.rotation.y = t * 0.45;
      s2.current.rotation.x = -t * 0.28;
      s2.current.position.x = -0.4 + Math.cos(t * 0.25) * 0.5;
      s2.current.position.y = 2.2 + Math.sin(t * 0.35) * 0.3;
    }
    if (s3.current) {
      s3.current.rotation.z = t * 0.38;
      s3.current.position.x = 3.6 + Math.sin(t * 0.22 + 1) * 0.3;
      s3.current.position.y = -1.4 + Math.cos(t * 0.28) * 0.4;
    }
  });

  return (
    <group>
      <mesh ref={s1}>
        <octahedronGeometry args={[0.28, 0]} />
        <meshBasicMaterial color="#0080FF" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={s2}>
        <tetrahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color="#7A52F4" wireframe transparent opacity={0.30} />
      </mesh>
      <mesh ref={s3}>
        <icosahedronGeometry args={[0.18, 0]} />
        <meshBasicMaterial color="#09BDD6" wireframe transparent opacity={0.28} />
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
    current.current.x += (mouse.current.x - current.current.x) * 0.028;
    current.current.y += (mouse.current.y - current.current.y) * 0.028;
    if (groupRef.current) {
      groupRef.current.rotation.y = current.current.x * 0.18;
      groupRef.current.rotation.x = current.current.y * 0.10;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <MouseParallax>
        <StarField />
        <GlassOrb />
        <Satellites />
      </MouseParallax>
    </Canvas>
  );
}
