import Image from 'next/image'
import React from 'react'

function Ratings({starStyle}) {
    
const stars = Array(5).fill(0)
  return (
    <div className='flex gap-0.5'>
       {stars.map((_, index) => (
        
             <Image
                 key={index}
                 src="/Subtract.png"
                 height={13}
                 width={13}
                 className={starStyle}
                 alt="star"
              />
    
         ))
        }
    </div>
  )
}

export default Ratings
