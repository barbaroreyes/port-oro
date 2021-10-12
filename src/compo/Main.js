import React from 'react'
import CardFlip from './CardFlip'
const Main = (props) => {
   
  return (
    <div className="all">
      {props.product.map((item,i)=>{
          return (
            <CardFlip
            {...item}
            />
          )
      })}
    </div>
  )
}

export default Main
