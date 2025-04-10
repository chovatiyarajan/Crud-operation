import React from 'react'
import { memo } from 'react'

const Memo = ({ name }) => {
  return (
    <div>
      <p>Hello my name is {name} </p>
    </div>
  )
}
export default memo(Memo)
