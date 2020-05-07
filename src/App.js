import React, { useState } from 'react';

import Switch from './components/Switch';

const initialState = {
  pepperoni: false,
  portuguesa: false,
  marguerita: false
};

function App() {
  const [switches, setSwitches] = useState(initialState);

  function toggleSwitch(id) {
    const currentState = switches[id];
    if (currentState === undefined) return;
    const activeSwitches = Object.values(switches).filter(value => value).length;
    const MAX_ACTIVE = Object.values(switches).length - 1;
    const newState = (activeSwitches === MAX_ACTIVE) ? initialState : switches;
    setSwitches({...newState, [id]: !currentState})
  }

  return (
    <div className={"container"}>
      <h1>Escolha dois sabores</h1>
      <Switch onClick={toggleSwitch} id={"pepperoni"} active={switches['pepperoni']} label={"Pepperoni"} />
      <Switch onClick={toggleSwitch} id={"portuguesa"} active={switches['portuguesa']} label={"Portuguesa"} />
      <Switch onClick={toggleSwitch} id={"marguerita"} active={switches['marguerita']} label={"Marguerita"} />
    </div>
  );
}

export default App;