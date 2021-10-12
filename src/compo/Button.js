import React from 'react'

const Button = (props) => {
  return (
      <div className="buttons">
          {props.button.map((item,i)=>{
              return (
                  <div className="divs" onClick={()=> props.filtered(item)}>{item}</div>
              )
          })}


      </div>
  )
}

export default Button
