import React from 'react'
import Emptybox from '../component/Emptybox'
import Sliderintro from '../component/Sliderintro'
import Gallery from '../component/Gallery'

function Home() {
  return (
    <div>
        <div>
            <Emptybox/>
        </div>
        <div>
            <Sliderintro/>
            <Gallery/>
        </div>
    </div>
  )
}

export default Home