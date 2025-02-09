"use client";
import React, { useEffect, useState } from 'react';

interface Work {
  id: number,
  img: string,
  content: string
}
interface caseProps {
  caseData: any,
  updateText: any,
  updateImage: any,
  production: any
}
const CaseStudies: React.FC<caseProps> = ({ caseData, updateText, updateImage, production }) => {
  const [more, setMore] = useState(6)
  const [preview, setPreview] = useState("")
  const [current, setCurrent] = useState(0)
  const [works, setWorks] = useState<Work[]>([])
  const filterer = (id: number) => {
    let filtered: Work[] = caseData.worksData.filter((fil: Work) => fil.id === id)
    setWorks(filtered)
    setCurrent(id)
  }

  const seeMore = () => {
    if (works.length - 7 > more) {
      setMore(more + 6)
    } else {
      setMore(works.length)
    }
  }

  useEffect(() => {
    setWorks(caseData.worksData)
  }, [caseData])

  return (
    <>
      <section id='sec6' className='w-full relative max-w-[90rem] m-auto bg-white py-24'>
        <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`caseDatahead`, 17)}>{caseData.head}</h2>
        <p className='mt-7 m-auto text-[0.9rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`caseDatabody`, 131)}>{caseData.body}</p>
        <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-wrap mt-11 justify-center items-center gap-5'>
          <a className={`font-medium cursor-pointer hover:text-[#004436] text-xs ${current === 0 ? "text-[#A4B72E]" : "text-gray-600"}`} onClick={() => { setWorks(caseData.worksData), setCurrent(0) }}>ALL</a>
          <a className={`font-medium cursor-pointer hover:text-[#004436] text-xs ${current === 1 ? "text-[#A4B72E]" : "text-gray-600"}`} onClick={() => filterer(1)}>WASHING/WATERING</a>
          <a className={`font-medium cursor-pointer hover:text-[#004436] text-xs ${current === 2 ? "text-[#A4B72E]" : "text-gray-600"}`} onClick={() => filterer(2)}>CUTTING</a>
          <a className={`font-medium cursor-pointer hover:text-[#004436] text-xs ${current === 3 ? "text-[#A4B72E]" : "text-gray-600"}`} onClick={() => filterer(3)}>DRILLING</a>
          <a className={`font-medium cursor-pointer hover:text-[#004436] text-xs ${current === 4 ? "text-[#A4B72E]" : "text-gray-600"}`} onClick={() => filterer(4)}>DULLING</a>
          <a className={`font-medium cursor-pointer hover:text-[#004436] text-xs ${current === 5 ? "text-[#A4B72E]" : "text-gray-600"}`} onClick={() => filterer(5)}>TEMPERING</a>
          <a className={`font-medium cursor-pointer hover:text-[#004436] text-xs ${current === 6 ? "text-[#A4B72E]" : "text-gray-600"}`} onClick={() => filterer(6)}>LAMINATING</a>
        </div>
        <div className='w-full md:px-10 flex flex-wrap'>
          {Array.from({ length: more }).map((work, index) => (
            <div data-aos="fade-up" data-aos-duration="1000" onClick={() => production ? setPreview(works[0]?.img) : updateImage(`caseDataworksData${index}img`)} key={index} className='xl:w-1/3 cursor-pointer md:w-1/2 w-full mt-14 px-3'>
              <div className='w-full h-64 overflow-hidden group'>
                <img className='w-full object-cover h-full group-hover:h-[80%] transition-all duration-500' src={works[index]?.img} alt="" />
                <p className='h-[20%] bg-[#004436] px-4 flex items-center text-base text-white'>{works[index]?.content || "NIL"}</p>
              </div>
            </div>
          ))}
        </div>
        {works.length !== more && <a onClick={seeMore} className='text-[#A4B72E] block cursor-pointer hover:text-[#004436] mt-10 w-fit mx-auto'>see more</a>}
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