//lect15

// import React from 'react'

// const College = ({a}) => {
//   return (
//     <div>College {a}</div>
//   )
// }

// export default College

//lect 22

import React, { useContext } from 'react'
import Context from './Context'

const College = () => {
  let data =useContext(Context)

  return (
    <div>{data}</div>
  )
}

export default College