import React from 'react'

const Button = (props) => {
  return (
      <div >
          {props.button.map((item,i)=>{
              return (
                  <button onClick={()=> props.filtered(item)}>{item}</button>
              )
          })}


      </div>
  )
}

export default Button
