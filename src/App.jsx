import { useState } from 'react'
import Main  from './components/main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 >
      <Main/>
     </h1>
     
     
    </>
  )
}

export default App
