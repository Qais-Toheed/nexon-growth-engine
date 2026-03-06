import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Floating Network Graph — nodes + connections ── */
function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null!);
  const nodeCount = 28;

  const { nodes, edges } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3 - 1,
      ));
    }
    // Build edges: connect nearby nodes
    const edgeList: [number, number][] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 2.6 && edgeList.length < 45) {
          edgeList.push([i, j]);
        }
      }
    }
    return { nodes: pts, edges: edgeList };
  }, []);

  // Build line segments buffer
  const edgePositions = useMemo(() => {
    const arr = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      arr[i * 6 + 0] = nodes[a].x;
      arr[i * 6 + 1] = nodes[a].y;
      arr[i * 6 + 2] = nodes[a].z;
      arr[i * 6 + 3] = nodes[b].x;
      arr[i * 6 + 4] = nodes[b].y;
      arr[i * 6 + 5] = nodes[b].z;
    });
    return arr;
  }, [nodes, edges]);

  const nodePositions = useMemo(() => {
    const arr = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      arr[i * 3] = n.x;
      arr[i * 3 + 1] = n.y;
      arr[i * 3 + 2] = n.z;
    });
    return arr;
  }, [nodes]);

  const nodeFloatOffsets = useMemo(() =>
    nodes.map(() => Math.random() * Math.PI * 2), [nodes]);

  const lineRef = useRef<THREE.LineSegments>(null!);
  const pointsRef = useRef<THREE.Points>(null!);
  const accentRef = useRef<THREE.Points>(null!);

  // Accent large nodes (subset)
  const accentPositions = useMemo(() => {
    const indices = [0, 5, 11, 17, 22];
    const arr = new Float32Array(indices.length * 3);
    indices.forEach((ni, i) => {
      arr[i * 3] = nodes[ni].x;
      arr[i * 3 + 1] = nodes[ni].y;
      arr[i * 3 + 2] = nodes[ni].z;
    });
    return arr;
  }, [nodes]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.07) * 0.18;
      groupRef.current.rotation.x = Math.cos(t * 0.05) * 0.06;
    }
    // Pulse node sizes
    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.size = 0.038 + Math.sin(t * 1.2) * 0.008;
    }
    if (accentRef.current) {
      const mat = accentRef.current.material as THREE.PointsMaterial;
      mat.size = 0.09 + Math.sin(t * 0.8) * 0.02;
      mat.opacity = 0.7 + Math.sin(t * 1.0) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0.6, 0, 0]}>
      {/* Edge lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#0080FF" transparent opacity={0.12} />
      </lineSegments>

      {/* All nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#0080FF" size={0.038} sizeAttenuation transparent opacity={0.65} depthWrite={false} />
      </points>

      {/* Accent glow nodes */}
      <points ref={accentRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[accentPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#09BDD6" size={0.09} sizeAttenuation transparent opacity={0.8} depthWrite={false} />
      </points>
    </group>
  );
}

/* ── Holographic data grid ── */
function HoloGrid() {
  const gridRef = useRef<THREE.Group>(null!);

  const lines = useMemo(() => {
    const result: Float32Array[] = [];
    // Horizontal lines
    for (let row = -4; row <= 4; row++) {
      const arr = new Float32Array([-6, row * 0.55, 0, 6, row * 0.55, 0]);
      result.push(arr);
    }
    // Vertical lines
    for (let col = -6; col <= 6; col++) {
      const arr = new Float32Array([col, -2.2, 0, col, 2.2, 0]);
      result.push(arr);
    }
    return result;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.rotation.x = -0.55 + Math.sin(t * 0.04) * 0.04;
      gridRef.current.position.y = -2.8 + Math.sin(t * 0.08) * 0.1;
      gridRef.current.rotation.z = Math.sin(t * 0.06) * 0.02;
    }
  });

  return (
    <group ref={gridRef} scale={[0.85, 0.85, 0.85]}>
      {lines.map((pos, i) => (
        <lineSegments key={i}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[pos, 3]} />
          </bufferGeometry>
          <lineBasicMaterial
            color={i < 9 ? "#0080FF" : "#09BDD6"}
            transparent
            opacity={0.045}
          />
        </lineSegments>
      ))}
    </group>
  );
}

/* ── Floating data orbs — UI panel fragments ── */
function DataOrbs() {
  const orbs = useRef<(THREE.Mesh | null)[]>([]);

  const configs = useMemo(() => [
    { pos: [2.8,  1.2, 0.5] as const, color: "#0080FF", size: 0.14, speed: 0.7, phase: 0 },
    { pos: [-2.4, 0.8, 0.2] as const, color: "#09BDD6", size: 0.10, speed: 0.5, phase: 1.2 },
    { pos: [3.2, -1.0, 0.8] as const, color: "#7A52F4", size: 0.12, speed: 0.9, phase: 2.4 },
    { pos: [-1.8,-1.6, 0.3] as const, color: "#0080FF", size: 0.08, speed: 0.6, phase: 0.8 },
    { pos: [0.5,  2.4, 0.6] as const, color: "#09BDD6", size: 0.09, speed: 0.8, phase: 1.8 },
  ], []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    orbs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const cfg = configs[i];
      mesh.position.y = cfg.pos[1] + Math.sin(t * cfg.speed + cfg.phase) * 0.22;
      mesh.position.x = cfg.pos[0] + Math.cos(t * cfg.speed * 0.4 + cfg.phase) * 0.08;
      (mesh.material as THREE.MeshBasicMaterial).opacity = 0.55 + Math.sin(t * 1.2 + cfg.phase) * 0.2;
    });
  });

  return (
    <group>
      {configs.map((cfg, i) => (
        <mesh
          key={i}
          ref={el => { orbs.current[i] = el; }}
          position={cfg.pos}
        >
          <sphereGeometry args={[cfg.size, 16, 16]} />
          <meshBasicMaterial color={cfg.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Ambient star field ── */
function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const count = 500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 24;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.006;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0080FF" size={0.012} sizeAttenuation depthWrite={false} opacity={0.18} />
    </Points>
  );
}

/* ── Flowing data streams (light trails) ── */
function DataStreams() {
  const streams = useRef<(THREE.Mesh | null)[]>([]);

  const configs = useMemo(() => [
    { x: 1.2, y: -0.5, z: 0,   w: 0.004, h: 2.8, color: "#0080FF", speed: 0.9, phase: 0   },
    { x: -1.6, y: 0.3, z: 0.2, w: 0.003, h: 2.0, color: "#09BDD6", speed: 1.3, phase: 1.5 },
    { x: 2.4,  y: 0.8, z: 0.1, w: 0.003, h: 1.6, color: "#7A52F4", speed: 0.7, phase: 0.8 },
  ], []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    streams.current.forEach((mesh, i) => {
      if (!mesh) return;
      const cfg = configs[i];
      mesh.position.y = cfg.y + ((t * cfg.speed + cfg.phase) % 6) - 3;
      (mesh.material as THREE.MeshBasicMaterial).opacity = 0.3 + Math.sin(t * 2 + cfg.phase) * 0.15;
    });
  });

  return (
    <group>
      {configs.map((cfg, i) => (
        <mesh
          key={i}
          ref={el => { streams.current[i] = el; }}
          position={[cfg.x, cfg.y, cfg.z]}
        >
          <planeGeometry args={[cfg.w, cfg.h]} />
          <meshBasicMaterial color={cfg.color} transparent opacity={0.35} side={THREE.DoubleSide} />
        </mesh>
      ))}
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
    current.current.x += (mouse.current.x - current.current.x) * 0.022;
    current.current.y += (mouse.current.y - current.current.y) * 0.022;
    if (groupRef.current) {
      groupRef.current.rotation.y = current.current.x * 0.14;
      groupRef.current.rotation.x = current.current.y * 0.08;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 52 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <MouseParallax>
        <StarField />
        <HoloGrid />
        <NetworkGraph />
        <DataOrbs />
        <DataStreams />
      </MouseParallax>
    </Canvas>
  );
}
