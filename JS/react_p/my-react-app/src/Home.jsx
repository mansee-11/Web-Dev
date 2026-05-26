import React from 'react'
import College from './College'
const Home = ({data}) => {      //or by taking normal varialble ex- a
  // console.log(data)             //print by a.data
  return (
    <div>Home <College a={data}/></div>
  )
}

const New = () => {
  return (
    <div>hiiiiiii</div>
  )
}

export {New}
export default Home