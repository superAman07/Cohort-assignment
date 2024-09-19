import React from 'react';
import './index.css';  
import TiptapEditor from '../src/components/tiptapEditor';  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Collaboration Comments Extension</h1>
      </header>
      <main>
        <TiptapEditor />
      </main>
    </div>
  );
}

export default App;
