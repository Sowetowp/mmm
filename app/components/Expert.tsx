import React from 'react'

interface expertProp {
    expertData: any,
    updateText: any
}
const Expert: React.FC<expertProp> = ({ expertData, updateText }) => {
    return (
        <>
            <section id='sec2' className='w-full relative max-w-[90rem] m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' onClick={() => updateText(`expertDatahead`, 33)}>{expertData.head}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-2/3 text-center' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`expertDatabody`, 223)}>{expertData.body}</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {expertData.exp.map((ex: any, index: any) => (
                        <div key={index} className='md:w-1/3 w-full md:px-6 xl:px-10 text-center mt-14'>
                            <span data-aos="fade-up" data-aos-duration="1000" className='bg-[#A4B72E] inline-block p-6 rounded-full'>{ex.img}</span>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-[0.9rem] mt-4' onClick={() => updateText(`expertDataexp${index}head`, 15)}>{ex.head}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500 mt-3' onClick={() => updateText(`expertDataexp${index}body`, 100)}>{ex.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Expert