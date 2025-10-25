import React from 'react'
import Emptybox from '../component/Emptybox'
import Sliderintro from '../component/Sliderintro'
import Gallery from '../component/Gallery'

function Home() {
  return (
    <div className='flex items-center justify-between p-5 gap-5'>
        <div>
            <Emptybox/>
        </div>
        <div className='relative'>
          <img 
          src="/endline.png"
        alt="Decorative icon"
        className="absolute top-[375px] right-[60px] w-[620px] h-[12px]"
          />
          <img 
          src="/endline.png"
        alt="Decorative icon"
        className="absolute top-[745px] right-[60px] w-[620px] h-[12px]"
          />
            <Sliderintro/>
            <Gallery/>
        </div>
    </div>
  )
}

export default Home