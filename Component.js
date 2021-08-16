import { useState } from './MyReact.js'

const Component = ({ propCount }) => {
  const [count, setCount] = useState(0)
  const propCountDoubled = 0

  setTimeout(()=>{
    setCount(currentCount => currentCount + 1)
  }, 1000)

  return `
    State: ${count}
    Prop: ${propCount}
    Prop Doubled: ${propCountDoubled}
  `
}

export default Component
