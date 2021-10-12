import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';

const CardFlip = (item) => {
    console.log(item)
    const [isFlipped,setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div className="front"
    onClick={handleClick}
    >
     {item.name}
     
    </div>

    <div className="back"
    onClick={handleClick}>
    
    {item.description}
    </div>
  </ReactCardFlip>
  )
}

export default CardFlip
