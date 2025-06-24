import { useState } from 'react'
import Main  from './components'
import Router from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 >
      <R/>
     </h1> */}
     <Router/>
     
    </>
  )
}

export default App
