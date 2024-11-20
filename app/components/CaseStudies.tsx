"use client";
import React, { useEffect, useState } from 'react'

interface Work {
  id: number,
  img: string
}
interface caseProps {
  caseData: any,
  updateText: any,
  updateImage: any,
  production: any
}
const CaseStudies: React.FC<caseProps> = ({ caseData, updateText, updateImage, production }) => {
  const [preview, setPreview] = useState("")
  const [current, setCurrent] = useState(0)
  const [works, setWorks] = useState<Work[]>([])
  const filterer = (id: number) => {
    let filtered: Work[] = caseData.worksData.filter((fil: Work) => fil.id === id)
    setWorks(filtered)
    setCurrent(id)
  }

  useEffect(() => {
    setWorks(caseData.worksData)
  }, [caseData])

  return (
    <>
      <section id='sec6' className='w-full relative max-w-7xl m-auto bg-white py-24'>
        <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`caseDatahead`, 17)}>{caseData.head}</h2>
        <p className='mt-7 m-auto text-[0.9rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`caseDatabody`, 131)}>{caseData.body}</p>
        <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-wrap mt-11 justify-center items-center gap-5'>
          <a className={`font-medium cursor-pointer hover:text-[#1d4ed8] text-xs ${current === 0 ? "text-blue-700" : "text-gray-600"}`} onClick={() => { setWorks(caseData.worksData), setCurrent(0) }}>ALL</a>
          <a className={`font-medium cursor-pointer hover:text-[#1d4ed8] text-xs ${current === 1 ? "text-blue-700" : "text-gray-600"}`} onClick={() => filterer(1)}>LOGO</a>
          <a className={`font-medium cursor-pointer hover:text-[#1d4ed8] text-xs ${current === 2 ? "text-blue-700" : "text-gray-600"}`} onClick={() => filterer(2)}>GRAPHIC</a>
          <a className={`font-medium cursor-pointer hover:text-[#1d4ed8] text-xs ${current === 3 ? "text-blue-700" : "text-gray-600"}`} onClick={() => filterer(3)}>PRINT</a>
        </div>
        <div className='w-full md:px-10 flex flex-wrap'>
          {works.map((work, index) => (
            <div data-aos="fade-up" data-aos-duration="1000" onClick={() => production ? setPreview(work.img) : updateImage(`caseDataworksData${index}img`)} key={index} className='xl:w-1/3 cursor-pointer md:w-1/2 w-full mt-14 px-3'>
              <div className='w-full h-64 overflow-hidden group'>
                <img className='w-full object-cover h-full group-hover:h-[80%] transition-all duration-500' src={work.img} alt="" />
                <p className='h-[20%] bg-blue-700 px-4 flex items-center text-lg text-white'>Lightbox</p>
              </div>
            </div>
          ))}
        </div>
        <div onClick={() => setPreview("")} className={`${preview === "" ? "hidden" : "fixed"} top-0 w-full h-screen bg-[#0000003a] z-[99999]`}>
          <div className='flex items-center justify-center w-full h-full'>
            <img className='w-full md:w-[50%]' src={preview} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies