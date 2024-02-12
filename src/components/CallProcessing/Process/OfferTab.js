import React from 'react'
import { useTypeWriter } from '../../../hooks/useTypeWriter';

const OfferTab = () => {
   let content = ` <span className="">
   This month, we are running a special offer. Your
   first 100 reaches are for free.
</span>`;
    const {displayResponse} = useTypeWriter(content,true)
  return (
  
    <p id="typed" className="typing-anim text-base font-medium lg:text-lg" dangerouslySetInnerHTML={{ __html: displayResponse }}>
       
    </p>

  )
}

export default OfferTab