import { useState } from 'react';
import './App.css';
import UseEffectEx from './components/UseEffectEx';
import UseMemo from './components/UseMemo';
import UseCallBack from './components/UseCallback';
import useHook from './components/CustomHook';

function App() {
  const [selectedID, setSelectedID] = useState(1);
  const todos=useHook();
  return (
    <div>
      <div>
        <h1>1: useEffect example</h1>
        <button onClick={() => setSelectedID(1)}>1</button>
        <button onClick={() => setSelectedID(2)}>2</button>
        <button onClick={() => setSelectedID(3)}>3</button>
        <UseEffectEx id={selectedID} />
      </div>
      <div>
        <UseMemo/>
      </div>
      <UseCallBack/>
      <div>
        <h1>5: useCustom hook</h1>
        {todos}
      </div>
    </div>
  );
}

export default App;
