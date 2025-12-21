import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple Fallback Component using standard Three.js geometry
const SimpleParticles = () => {
    const mesh = useRef();
    const particleCount = 2000;

    // Generate random positions
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        // Continuous rotation
        mesh.current.rotation.z += delta * 0.05;

        // Interactive Rotation (Parallax)
        // Lerp towards mouse position for smooth follow effect
        // state.pointer.x goes from -1 to 1
        mesh.current.rotation.x = THREE.MathUtils.lerp(
            mesh.current.rotation.x,
            state.pointer.y * 0.2,
            0.05
        );
        mesh.current.rotation.y = THREE.MathUtils.lerp(
            mesh.current.rotation.y,
            state.pointer.x * 0.2,
            0.05
        );
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                size={0.015}
                color="#00629B"
                sizeAttenuation
                transparent
                opacity={0.8}
            />
        </points>
    );
};


const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[var(--bg-dark)] flex items-center justify-center">
            <Canvas
                camera={{ position: [0, 0, 3] }}
                eventSource={document.getElementById('root')}
                eventPrefix="client"
            >
                <SimpleParticles />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
