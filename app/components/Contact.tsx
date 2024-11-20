"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

interface contactDatatype {
    contactData: any;
    updateText: any;
    email: string;
    load: any;
}
const Contact: React.FC<contactDatatype> = ({ contactData, updateText, load, email }) => {
    const [email2, setEmail2] = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    const [name, setName] = useState("")

    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    const contactUs = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "" || email2.trim() === "") {
                alert("Fill all fields")
                return
            }
            load(true);
            const body = {
                name,
                to: email,
                subject,
                message,
                email: email2
            };

            const res = await fetch("https://admirable-croissant-3aaba1.netlify.app/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch data. Status: ${res.status}`);
            }

            const data = await res.json();
            if (data.Success) {
                setMessage("")
                setEmail2("")
                setSubject("")
                setName("")
            }
            load(false);
        } catch (error) {
            // console.error("error", error);
            load(false);
        }
    }

    return (
        <>
            <section id="sec8" className='w-full relative overflow-hidden max-w-7xl m-auto bg-stone-50 py-28'>
                <h2 className='font-bold text-[1.6rem] text-center m-auto max-w-[80%]' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`contactDatahead`, 20)}>{contactData.head}</h2>
                <p className='mt-7 m-auto text-[0.95rem] text-gray-500 w-[90%] md:w-2/3 xl:w-1/2 text-center' data-aos="fade-up" data-aos-duration="1000" onClick={() => updateText(`contactDatabody`, 83)}>{contactData.body}</p>
                <div className='w-full px-10 flex flex-wrap'>
                    {contactData.exp.map((ex: any, index: any) => (
                        <div key={index} className='md:w-1/3 w-full md:px-6 xl:px-10 text-center mt-14'>
                            <span className='border-2 border-blue-700 inline-block p-6 rounded-full' data-aos="fade-up" data-aos-duration="1000">{ex.img}</span>
                            <p data-aos="fade-up" data-aos-duration="1000" className='font-medium text-[0.9rem] mt-4'>{ex.head}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500 mt-3 max-w-[70%] m-auto' onClick={() => updateText(`contactDataexp${index}det`, 78)}>{ex.det}</p>
                            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm text-gray-500' onClick={() => updateText(`contactDataexp${index}det1`, 78)}>{ex.det1}</p>
                        </div>
                    ))}
                </div>
                <div className='w-full md:px-10 flex flex-wrap'>
                    <div onClick={() => updateText(`contactDatacoordinate`, 78)} data-aos="fade-right" data-aos-duration="1000" className='md:w-1/2 w-full px-3 mt-24 h-96'>
                        <Map posix={contactData.coordinate.split(",")} />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className='md:w-1/2 w-full px-3 mt-24'>
                        <form className="flex flex-wrap justify-between">
                            <input value={name} onChange={(e) => setName(e.target.value)} className="border bg-stone-100 px-5 py-3 text-[16px] md:text-sm outline-none placeholder:font-light md:w-[48%] w-full" type="text" placeholder="Name*" />
                            <input value={email2} onChange={(e) => setEmail2(e.target.value)} className="border bg-stone-100 px-5 py-3 md:mt-0 mt-8 text-[16px] md:text-sm outline-none placeholder:font-light md:w-[48%] w-full" type="text" placeholder="Email*" />
                            <input value={subject} onChange={(e) => setSubject(e.target.value)} className="border bg-stone-100 px-5 py-3 text-[16px] md:text-sm outline-none placeholder:font-light mt-8 w-full" type="text" placeholder="Subject" />
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="border resize-none h-36 bg-stone-100 px-5 py-3 text-[16px] md:text-sm mt-8 outline-none placeholder:font-light w-full" placeholder="Your Message*" />
                            <button onClick={(e) => contactUs(e)} className="w-full mt-8 font-semibold text-[16px] md:text-sm text-white py-3 bg-blue-700">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact