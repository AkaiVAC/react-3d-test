import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Windmill from './components/Windmill';
import { OrbitControls } from '@react-three/drei';
import Controls from './components/Controls';

import './App.css';

const App = () => {
    const [turnState, setTurnState] = useState(true);
    const [bladeState, setBladeState] = useState(true);
    const [bladeSpeed, setBladeSpeed] = useState(1);

    return (
        <>
            <h1>Windmill Animation</h1>
            <Canvas>
                <ambientLight intensity={0.3} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Windmill
                        position={[0, -4, 0]}
                        scale={0.3}
                        turnOnAxis={turnState}
                        bladeTurning={bladeState}
                        bladeSpeed={bladeSpeed}
                    />
                    <OrbitControls target={[0, -1, 0]} />
                </Suspense>
            </Canvas>

            <Controls
                turnState={{ state: turnState, handler: setTurnState }}
                bladeState={{ state: bladeState, handler: setBladeState }}
                bladeSpeed={{ state: bladeSpeed, handler: setBladeSpeed }}
            />
        </>
    );
};

export default App;
