declare global {
    type GLTFResult = import('three-stdlib').GLTF & {
        nodes: {
            Windturbine_Support: THREE.Mesh;
            Windturbine_Blades: THREE.Mesh;
        };
        materials: {
            Windmill: THREE.MeshStandardMaterial;
        };
    };

    type WindmillProps = JSX.IntrinsicElements['group'] & {
        turnOnAxis: boolean;
        bladeTurning: boolean;
        bladeSpeed: number;
    };

    type ActionState<T> = {
        state: T;
        handler: React.Dispatch<React.SetStateAction<T>>;
    };
}

export {};
