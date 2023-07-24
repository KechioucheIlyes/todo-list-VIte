import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Title } from './Title'
import { Input } from './assets/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Title/>
      <Input/>
    </div>
  )
}

export default App
