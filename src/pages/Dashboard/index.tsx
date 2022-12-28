import React, { useState } from 'react';
import reactLogo from '../../assets/react.svg'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>CtrlHub</h1>
      <p>Skeleton SPA to quickly start new admin app with yarn, vite, react, typescript, tw.macro and emotion</p>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}