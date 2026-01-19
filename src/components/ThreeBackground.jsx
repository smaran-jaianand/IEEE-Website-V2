import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simple Fallback Component using standard Three.js geometry
const SimpleParticles = () => {
    const mesh = useRef();
    const count = 1000; // Number of lines

    const { positions, colors } = useMemo(() => {
        const pos = new Float32Array(count * 2 * 3); // 2 vertices per line, 3 coords
        const col = new Float32Array(count * 2 * 3);
        const colorBlue = new THREE.Color("#00629B");
        const colorRed = new THREE.Color("#C60C30"); // Symbiosis/IEEE Red

        for (let i = 0; i < count; i++) {
            // Random start position
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 15;

            // Random direction and length
            const len = Math.random() * 0.3 + 0.1;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            // Start Vertex
            pos[i * 6] = x;
            pos[i * 6 + 1] = y;
            pos[i * 6 + 2] = z;

            // End Vertex
            pos[i * 6 + 3] = x + len * Math.sin(phi) * Math.cos(theta);
            pos[i * 6 + 4] = y + len * Math.sin(phi) * Math.sin(theta);
            pos[i * 6 + 5] = z + len * Math.cos(phi);

            // Randomly assign Blue or Red
            const isRed = Math.random() > 0.65; // Make Blue slightly more dominant
            const c = isRed ? colorRed : colorBlue;

            // Start Color
            col[i * 6] = c.r;
            col[i * 6 + 1] = c.g;
            col[i * 6 + 2] = c.b;

            // End Color
            col[i * 6 + 3] = c.r;
            col[i * 6 + 4] = c.g;
            col[i * 6 + 5] = c.b;
        }
        return { positions: pos, colors: col };
    }, []);

    useFrame((state, delta) => {
        // Continuous rotation
        mesh.current.rotation.z += delta * 0.02;
        mesh.current.rotation.y += delta * 0.01;

        // Interactive Rotation (Parallax)
        mesh.current.rotation.x = THREE.MathUtils.lerp(
            mesh.current.rotation.x,
            state.pointer.y * 0.1,
            0.05
        );
        mesh.current.rotation.y = THREE.MathUtils.lerp(
            mesh.current.rotation.y,
            state.pointer.x * 0.1,
            0.05
        );
    });

    return (
        <lineSegments ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count * 2}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count * 2}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial
                attach="material"
                vertexColors
                transparent
                opacity={0.5}
            />
        </lineSegments>
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
