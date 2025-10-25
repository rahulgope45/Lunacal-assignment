import React from 'react'


function Gallery() {
  return (
    <div className={`bg-[#363C43]  from-[#4A4E54] to-[#1b1c1e] w-[720px] h-[330px] rounded-[23px]  shadow-[5px_5px_5px_rgba(0,0,0,0.9)] relative ml-3 mt-[40px]`}>

      {/*placing all the icons here  */}
      <img
        src="/qicon.png"
        alt="Decorative icon"
        className="absolute top-[20px] left-[13px] w-[24px] h-[24px]"
      />

      <img
        src="/boxicon.png"
        alt="Decorative icon"
        className="absolute top-[148px] left-[13px] w-[24px] h-[31px]"
      />

      {/* Gallary */}

      <div>
        <div className="flex items-center  px-10  gap-[174px]">
          {/* Gallery Button */}
          <div className="bg-black w-[149px] h-[42px] rounded-[20px] flex items-center justify-center p-7 mt-[20px]">
            <p className="text-white">Gallary</p>
          </div>

          <div className='flex items-center justify-between gap-[37px] mr-[64px]'>
            {/* Add Button */}
          <div className="w-[137px] h-[47px] bg-[#363C43] shadow-[5px_5px_5px_rgba(0,0,0,0.9)] rounded-[23px] flex items-center justify-center gap-2">
            <i className="bi bi-plus text-white"></i>
            <button className="cursor-pointer text-white">Add</button>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <div className="bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <i className="bi bi-arrow-left text-gray-500"></i>
            </div>
            <div className="bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <i className="bi bi-arrow-right text-gray-500  "></i>
            </div>
          </div>
          </div>
        </div>

        <div>
          {/* images */}
        </div>
      </div>

    </div>
  )
}

export default Gallery