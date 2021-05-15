import { useState } from 'react'

export default (props) => {
  const [value, set] = useState(null)
  return (
    <input
      onChange={(e) => set(e.target.value)}
      {...props}
    />
  )
}
