import React from 'react'

interface consultantProp {
    consultantData: any,
    updateText: any,
    production: any,
    updateImage: any
}
const Consultants: React.FC<consultantProp> = ({ consultantData, updateText, production, updateImage }) => {
    const handleParentClick = (event: any, index: number) => {
        if (event.target === event.currentTarget) {
            updateImage(`consultantDataexp${index}img`)
        }
    };
    return (
        <>
            <section id='sec5' className='w-full relative max-w-[90rem] m-auto bg-white py-28'>
                <h2 data-aos="fade" data-aos-duration="1000" className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' onClick={() => updateText(`consultantDatahead`, 22)}>{consultantData.head}</h2>
                <p data-aos="fade" data-aos-duration="1000" className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' onClick={() => updateText(`consultantDatabody`, 131)}>{consultantData.body}</p>
                <div className='w-full md:px-10 flex flex-wrap'>
                    {consultantData.exp.map((ex: any, index: any) => (
                        <div key={index} className='xl:w-1/4 md:w-1/2 w-full text-center mt-14 px-3'>
                            <div className='relative'>
                                <div onClick={(e) => handleParentClick(e, index)} className='h-[19rem] flex items-center justify-center gap-3 w-full opacity-0 hover:opacity-100 transition-opacity duration-500 z-10 absolute bg-[#004436]'>
                                    <a onClick={() => { updateText(`consultantDataexp${index}fb`, 99999999999999999999999); production && window.open(ex.fb) }}><svg className='w-3' viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg></a>
                                    <a onClick={() => { updateText(`consultantDataexp${index}lin`, 99999999999999999999999); production && window.open(ex.lin) }}><svg className='w-3' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin [#161]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"> </path> </g> </g> </g> </g></svg></a>
                                    <a onClick={() => { updateText(`consultantDataexp${index}x`, 99999999999999999999999); production && window.open(ex.x) }}><svg className='w-3' fill={"white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg></a>
                                </div>
                                <img data-aos="fade" data-aos-duration="1000" className='w-full h-[19rem] object-cover' src={ex.img} alt="" />
                            </div>
                            <p data-aos="fade" data-aos-duration="1000" className='font-medium text-xs tracking-wider mt-5 text-center' onClick={() => updateText(`consultantDataexp${index}name`, 17)}>{ex.name}</p>
                            <p data-aos="fade" data-aos-duration="1000" className='text-[0.8rem] mt-1 text-gray-500' onClick={() => updateText(`consultantDataexp${index}post`, 17)}>{ex.post}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Consultants