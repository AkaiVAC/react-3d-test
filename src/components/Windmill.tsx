import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MeshPhongMaterial } from 'three';

import { type Group, type Material } from 'three';

const Windmill = ({ ...props }: WindmillProps) => {
    const group = useRef<Group>() as React.MutableRefObject<Group>;
    const { nodes, materials } = useGLTF('/Windmill.glb') as GLTFResult;

    const [pillarMaterial, setPillarMaterial] = useState(materials.Windmill);
    const [bladeMaterial, setBladeMaterial] = useState(materials.Windmill);

    useFrame(() => {
        if (group.current) {
            group.current.rotation.y += props.turnOnAxis ? 0.005 : 0;
            group.current.children[1].rotation.z += props.bladeTurning
                ? props.bladeSpeed * -0.005
                : 0;
        }
    });

    const handleMouseAction = (handler: Function, material: Material) => {
        handler(material);
    };

    const resetMaterial = (handler: Function) => handler(materials.Windmill);

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.Windturbine_Support.geometry}
                material={pillarMaterial}
                scale={[0.4, 0.4, 0.47]}
                onPointerOver={(e) =>
                    handleMouseAction(
                        setPillarMaterial,
                        new MeshPhongMaterial({
                            color: 0xfffd00,
                        })
                    )
                }
                onPointerOut={(e) => resetMaterial(setPillarMaterial)}
            />
            <mesh
                geometry={nodes.Windturbine_Blades.geometry}
                material={bladeMaterial}
                position={[0, 13.16, 0.56]}
                scale={[0.4, 0.4, 0.47]}
                onPointerOver={() =>
                    handleMouseAction(
                        setBladeMaterial,
                        new MeshPhongMaterial({
                            color: 0xfffd00,
                        })
                    )
                }
                onPointerOut={() => resetMaterial(setBladeMaterial)}
            />
        </group>
    );
};

useGLTF.preload('/Windmill.glb');

export default Windmill;
