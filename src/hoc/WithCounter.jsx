import { useState } from 'react'
export default function WithCounter(OriginalComponent) {
  const NewComponent = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount((count) => {
        return count + 1
      })
    }

    return <>
      <OriginalComponent increment={increment} count={count}/>
    </>
  }
  return NewComponent
}
