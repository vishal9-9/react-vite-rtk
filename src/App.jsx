import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@tanstack/react-query'

import { testAction } from './redux/counter/testSlice'
import { getData } from './redux/counter/testAction'

function App() {
  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  const info = useQuery({ queryKey: ['about-us'], queryFn: getData, staleTime: 2000 })

  const { test } = useSelector((state) => state.test)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          dispatch(testAction())
        }}>
          count is {count}, redux count is {test}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          {info?.data}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
