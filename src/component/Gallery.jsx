import React, { useState } from 'react'
import '../App.css'


function Gallery() {

const [images, setImages] = useState([
  "/main.png",
  "/main.png",
  "/main.png",
  
]);

const handleFileChange = (e)=>{
  const file= e.target.files[0];
  if(file){
    const imgUrl = URL.createObjectURL(file);
    setImages([...images, imgUrl]);
  }
};


  return (
    <div className={`bg-[#363C43]  from-[#4A4E54] to-[#1b1c1e] w-[720px] h-[330px] rounded-[23px]  shadow-[5px_5px_5px_rgba(0,0,0,0.9)] relative ml-3 mt-[40px] mb-4`}>

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
        <div className="flex items-center  px-10  gap-[150px]">
          {/* Gallery Button */}
          <div className="bg-black w-[149px] h-[42px] rounded-[20px] flex items-center justify-center p-7 mt-[20px] ml-1">
            <p className="text-white">Gallary</p>
          </div>

          <div className='flex items-center justify-between gap-[37px] mr-[64px]'>
            {/* Add Button */}
          <div className="w-[137px] h-[47px] bg-[#363C43] shadow-[5px_5px_5px_rgba(0,0,0,0.9)] rounded-[23px] flex items-center justify-center gap-2">
            <i className="bi bi-plus text-white"></i>
            <label htmlFor="file-upload" className="cursor-pointer text-white z-10">Add</label>
            <input 
            id='file-upload'
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='hidden '
            />
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <div className="bg-gradient-to-b from-[#303439] to-[#161718] rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_4px_30px_5px_#101213]">
              <i className="bi bi-arrow-left text-gray-500"></i>
            </div>
            <div className="bg-gradient-to-b from-[#303439] to-[#161718] rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_4px_30px_5px_#101213]">
              <i className="bi bi-arrow-right text-gray-500  "></i>
            </div>
          </div>
          </div>
        </div>

        <div className='mt-[48px] overflow-x-auto  hide-scrollbar px-5 '>
          {/* images */}
          <div className='flex gap-[16px] w-max items-center justify-center mx-auto'>
            {
              images.map((src,index) =>{
              return  (
                <img
                key={index}
                src={src}
                alt={`Gallary ${index}`}
                className='w-[191px] h-[180px] rounded-[24px] object-fill filter grayscale hover:grayscale-0 transition-transform duration-500 ease-in-out hover:scale-[1.05] hover:-rotate-2 hover:-translate-y-2'
                />
              )
                
              })
            }

          </div>

        </div>
      </div>

    </div>
  )
}

export default Gallery