import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('Mark')
  const [age, setAge] = useState(33)
  const [hobby, setHobby] = useState('darts')

  return (
    <div>
      <h1>useState object example</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2>
    </div>
  )
}

export default UseStateObject
