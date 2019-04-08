import * as THREE from 'three';
import React from 'react';
import { Canvas } from 'react-three-fiber';

export default ({ vertices, color }) => {
  return (
    <Canvas>
      <group ref={ref => console.log('we have access to instance')}>
        <line>
          <geometry
            attach="geometry"
            vertices={vertices.map(v => new THREE.Vector3(...v))}
            onUpdate={self => (self.verticesNeedUpdate = true)}
          />
          <lineBasicMaterial attach="material" color="black" />
        </line>
        <mesh
          onClick={e => console.log('click')}
          onPointerOver={e => console.log('hover')}
          onPointerOut={e => console.log('unhover')}
        >
          <octahedronGeometry attach="geometry" />
          <meshBasicMaterial attach="material" color="peachpuff" opacity={0.5} transparent />
        </mesh>
        <mesh
          visible
          userData={{ test: 'hello' }}
          position={new THREE.Vector3(-2, 0, 1)}
          rotation={new THREE.Euler(0, 0, 0)}
          geometry={new THREE.SphereGeometry(1, 16, 16)}
          material={
            new THREE.MeshBasicMaterial({ color: new THREE.Color('indianred'), transparent: true })
          }
        />
      </group>
    </Canvas>
  );
};
