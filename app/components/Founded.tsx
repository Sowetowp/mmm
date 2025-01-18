import React from 'react'

interface foundedProps {
    foundedData: any,
    updateText: any,
    updateImage: any
}
const Founded: React.FC<foundedProps> = ({ foundedData, updateText, updateImage }) => {
    return (
        <>
            <section className='w-full relative flex overflow-hidden items-center flex-wrap max-w-[95rem] m-auto bg-stone-50 px-3 md:px-16 py-28'>
                <div data-aos="fade-right" data-aos-duration="1000" className='md:w-1/2 w-full'>
                    <h2 className='font-bold md:w-[80%] text-[1.9rem] mb-6' onClick={() => updateText(`foundedDatahead`, 40)}>{foundedData.head}</h2>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1' onClick={() => updateText(`foundedDataimp`, 33)}>- {foundedData.imp}</p>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1' onClick={() => updateText(`foundedDataimp1`, 33)}>- {foundedData.imp1}</p>
                    <p className='text-[1.1rem] border-b pb-1 w-fit font-light text-gray-500 mt-1' onClick={() => updateText(`foundedDataimp2`, 33)}>- {foundedData.imp2}</p>
                    <a href="#sec8" className='mt-8 px-5 py-3 bg-[#004436] inline-block text-xs text-white font-semibold'>CONTACT US</a>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='md:w-1/2 w-full mt-12 md:mt-0'>
                    <img onClick={()=>updateImage("foundedDataimg")} className='w-full object-cover max-h-80' src={foundedData.img} alt="" />
                </div>
            </section>
        </>
    )
}

export default Founded