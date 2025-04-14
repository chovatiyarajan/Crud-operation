import React, { useContext } from 'react'

const User5 = () => {
    const Name = useContext(UserContext)
  return (
    <div>
        i'm {Name} !!
    </div>
  )
}

export default User5
