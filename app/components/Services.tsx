"use client"
import React, { useState } from 'react'

interface servicesProp {
    servicesData: any,
    updateText: any
}
const Services: React.FC<servicesProp> = ({ servicesData, updateText }) => {
    const [preview, setPreview] = useState([])
    const [counter, setCounter] = useState(0)
    const handleParentClick = (event: any) => {
        if (event.target === event.currentTarget) {
            setPreview([])
            setCounter(0)
        }
    };

    return (
        <>
            <section id='sec4' className='w-full relative max-w-[95rem] m-auto bg-stone-50 py-28'>
                <h2 data-aos="fade-up" data-aos-duration="1000" className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' onClick={() => updateText(`servicesDatahead`, 12)}>{servicesData.head}</h2>
                <p data-aos="fade-up" data-aos-duration="1000" className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-[60%] xl:w-[40%] text-center' onClick={() => updateText(`servicesDatabody`, 97)}>{servicesData.body}</p>
                <div className='w-full snap-x px-10 flex overflow-x-scroll' style={{ scrollbarWidth: "none" , scrollSnapType: "x mandatory"}}>
                    {servicesData.exp.map((ex: any, index: any) => (
                        <div onClick={() => setPreview(ex.img2)} key={index} className='xl:w-1/4 scroll-ml-14 snap-start md:w-1/2 w-full md:px-10 text-center flex-shrink-0 mt-14'>
                            <span data-aos="fade-up" data-aos-duration="1000" className='bg- [#A4B72E] inline-block p-2 rounded-md' >{ex.img}</span>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-[0.9rem] mt-4' onClick={() => updateText(`servicesDataexp${index}head`, 17)}>{ex.head}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500 mt-3' onClick={() => updateText(`servicesDataexp${index}body`, 100)}>{ex.body}</p>
                        </div>
                    ))}
                </div>
                <div className={`${preview.length === 0 ? "hidden" : "fixed"} top-0 w-full h-screen bg-[#ffffffeb] z-[99999]`}>
                    <div onClick={handleParentClick} className='flex items-center justify-center w-full h-full'>
                        <img onClick={() => setCounter((counter - 1 + preview.length) % preview.length)} className='w-4 md:w-8 cursor-pointer' src="/arrow2.svg" alt="" />
                        <img className='w-[90%] md:w-[50%]' src={preview[counter]} alt="" />
                        <img onClick={() => setCounter((counter + 1) % preview.length)} className='w-4 md:w-8 cursor-pointer' src="/arrow1.svg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services