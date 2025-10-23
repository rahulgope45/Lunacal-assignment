import React, { useState } from 'react'

function Sliderintro() {

    const Abouteme = () =>
        <div>
            <p>
                Aboute me section is here
            </p>
        </div>;
    

    const Experiences = () =>
        <div>
            <p>
                Experiences section is here
            </p>
        </div>;
    

    const Reccomeneded = () =>
        <div>
            <p>
                Reccomeneded section is here
            </p>
        </div>;
    

    const [active, setactive] = useState('one')


  return (
    <div>
        <div className='flex items-center gap-2'>
            <button 
            onClick={() => setactive('one')}
            className='cursor-pointer '
            >
                About me
            </button>
            <button
            onClick={() => setactive('two')}
            className='cursor-pointer '
            >
                Experiences
            </button>
            <button 
            onClick={() => setactive('three')}
            className='cursor-pointer '
            >
                Reccomeneded
            </button>
        </div>
        <div>
            {
                active === 'one' && <Abouteme/>
            }
            {
                active === 'two' && <Experiences/>
            }
            {
                active === 'three' && <Reccomeneded/>
            }

        </div>
    </div>
  )
}

export default Sliderintro