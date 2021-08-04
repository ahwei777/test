import logo from './logo.svg';
import './App.css';

import { useEffect, useState, useMemo, memo } from 'react';

function Text({ fruits }) {
  console.log('first');

  useEffect(() => {
    console.log('something changed!');
  }, [fruits]);

  return (
    <>
      <div>banana:{fruits[0]}</div>
      <div>orange:{fruits[1]}</div>
    </>
  );
}
const MemoText = memo(Text)

function App() {
  console.log('render app');
  const [apple, setApple] = useState(1);

  let fruits = [];
  const [banana, setBanana] = useState(2);
  const [orange, setOrange] = useState(3);
  fruits = useMemo(() => [banana, orange], [banana, orange]);

  return (
    <div className="App">
      <button type="button" onClick={() => setApple(apple + 1)}>
        apple +
      </button>
      <button type="button" onClick={() => setBanana(banana + 1)}>
        banana +
      </button>
      <button type="button" onClick={() => setOrange(orange + 1)}>
        orange +
      </button>
      <div>apple: {apple}</div>
      <MemoText fruits={fruits} />
    </div>
  );
}

export default App;
