import React from 'react'

interface blogProp {
    blogData: any,
    updateText: any,
    updateImage: any
}
const Blog: React.FC<blogProp> = ({ blogData, updateText, updateImage }) => {

    return (
        <>
            <section id='sec7' className='w-full relative max-w-7xl m-auto bg-white py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`blogDatahead`, 11)}>{blogData.head}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`blogDatabody`, 97)}>{blogData.body}</p>
                <div className='w-full md:px-10 flex flex-wrap'>
                    {blogData.works.map((work: any, index: any) => (
                        <div data-aos="fade-up" data-aos-duration="1000" key={index} className='xl:w-1/3 m-auto md:w-1/2 w-full mt-14 px-4'>
                            <div data-aos="fade-up" data-aos-duration="1000" className='w-full h-60 relative'>
                                <p className='bg-blue-700 w-fit bottom-0 px-4 absolute py-2 text-xs text-white' onClick={() => updateText(`blogDataworks${index}day`, 7)}>{work.day}</p>
                                <img className='w-full object-cover h-full' onClick={()=>updateImage(`blogDataworks${index}img`)} src={work.img} alt="" />
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-lg mt-5' onClick={() => updateText(`blogDataworks${index}title`, 34)}>{work.title}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-[0.8rem] mt-1 text-gray-500' onClick={() => updateText(`blogDataworks${index}det`, 117)}>{work.det}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog