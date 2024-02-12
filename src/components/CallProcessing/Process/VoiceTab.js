import React from 'react'
import { useTypeWriter } from '../../../hooks/useTypeWriter'

const VoiceTab = () => {
    let content=`<span className="">
    Hi Andrea, this is Charles from ProspectIQ. How is
    your day going so far?
</span>
<span className="mt-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
</span>

<span className="mt-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
</span>`;
    const {displayResponse} = useTypeWriter(content,true)
  return (


										<p id="typed" className="typing-anim text-base font-medium lg:text-lg" dangerouslySetInnerHTML={{ __html: displayResponse }}>
											
										</p>
									
  )
}

export default VoiceTab