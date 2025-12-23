import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Float,
  MeshDistortMaterial,
  OrbitControls,
} from '@react-three/drei'
import * as THREE from 'three'

const TorusBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)

  const [primary, secondary, accent] = useMemo(
    () => ['#60a5fa', '#a855f7', '#22d3ee'].map((c) => new THREE.Color(c)),
    [],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.35
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2
    }
    if (materialRef.current) {
      // Add a gentle breathing effect on the distortion
      const distortStrength = 0.2 + Math.sin(t * 1.2) * 0.08
      ;(materialRef.current as unknown as { distort: number }).distort = distortStrength
      materialRef.current.color.lerpColors(primary, secondary, (Math.sin(t) + 1) / 2)
      materialRef.current.emissive.lerpColors(secondary, accent, (Math.cos(t * 0.7) + 1) / 2)
    }
  })

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.3}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <torusKnotGeometry args={[2.4, 0.7, 420, 32]} />
        <MeshDistortMaterial
          ref={materialRef}
          roughness={0.15}
          metalness={0.4}
          emissiveIntensity={0.6}
          envMapIntensity={0.7}
          clearcoat={0.9}
          clearcoatRoughness={0.05}
          distort={0.2}
          speed={3}
          color={primary}
        />
      </mesh>
    </Float>
  )
}

const AbstractOrb = () => {
  return (
    <div className="w-full h-[320px] sm:h-[420px] lg:h-[520px]">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[6, 8, 8]} intensity={2} angle={0.35} penumbra={0.8} castShadow />
        <pointLight position={[-6, -4, -4]} intensity={1.2} color="#38bdf8" />

        <Suspense fallback={null}>
          <TorusBlob />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.5} scale={12} blur={3} far={4.5} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(Math.PI * 2) / 3}
        />
      </Canvas>
    </div>
  )
}

export default AbstractOrb
