import React from 'react'
import Child from '../components/Child'

const Parent = () => {
  return (
    <div>
        <Child name="suhitha" age={25} marks={[20,30,40,50]} person={{ name:"suhi",dept:["aids","ct"]}}/>
    </div>
  )
}

export default Parent