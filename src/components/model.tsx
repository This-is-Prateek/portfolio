import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface MouseRef {
    x: number;
    y: number;
}

interface ModelProps {
    mouse: React.MutableRefObject<MouseRef>;
}

function Model({ mouse }: ModelProps) {
  const { nodes, scene } = useGLTF("/models/skull.glb") as any;
  const ref = useRef<THREE.Object3D>(null);

  // Grab the eye meshes from the GLTF nodes
  const leftEye = nodes.Left as THREE.Mesh;
  const rightEye = nodes.Right as THREE.Mesh;

  useFrame(() => {
    if (!leftEye || !rightEye) return;

    // Map mouse position to small rotation range
    const eyeRotX = mouse.current.y * 0.5; // up/down tilt
    const eyeRotY = mouse.current.x * 0.5; // left/right

    leftEye.rotation.set(eyeRotX, eyeRotY, 0);
    rightEye.rotation.set(eyeRotX, eyeRotY, 0);
  });

  return (
    <Center>
      <primitive ref={ref} object={scene} scale={55} />
    </Center>
  );
}

export default function ModelViewer() {
    const mouse = useRef<MouseRef>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="w-full h-full relative">
            <Canvas camera={{ position: [0, 0, 120], fov: 50 }} className="rounded-lg">
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <Model mouse={mouse} />
            </Canvas>
        </div>
    );
}
