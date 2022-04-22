const Controls = ({
    turnState,
    bladeState,
    bladeSpeed,
}: {
    turnState: ActionState<boolean>;
    bladeState: ActionState<boolean>;
    bladeSpeed: ActionState<number>;
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <button onClick={() => turnState.handler(!turnState.state)}>
                Toggle Turning On Axis
            </button>
            <button
                onClick={() => {
                    bladeState.handler(!bladeState.state);
                    bladeSpeed.handler(0);
                }}
            >
                Stop Blades Turning
            </button>
            <div>
                <label htmlFor='bladeSpeed'>Blade Speed</label> <br />
                <input
                    type='range'
                    name='bladeSpeed'
                    id='bladeSpeed'
                    step={1}
                    max={10}
                    value={bladeSpeed.state}
                    onChange={(e) => {
                        bladeState.handler(true);
                        bladeSpeed.handler(Number(e.target.value));
                    }}
                />
            </div>
        </form>
    );
};
export default Controls;
