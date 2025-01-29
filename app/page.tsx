"use client";
import Carousel from "./components/Carousel";
import Expert from "./components/Expert";
import Founded from "./components/Founded";
import Award from "./components/Award";
import Services from "./components/Services";
// import Consultants from "./components/Consultants";
import Happy from "./components/Happy";
import CaseStudies from "./components/CaseStudies";
// import Testimony from "./components/Testimony";
// import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Suspense } from 'react';

export default function Home() {
  const [view, setView] = useState<string>('');
  const [range, setRange] = useState(0);
  const [edit, setEdit] = useState("");
  const [key, setKey] = useState("");
  const [modal, setModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [emailModal, setEmailModal] = useState(true)
  const [production, setProduction] = useState(true)
  const [welcome, setWelcome] = useState(true)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [message2, setMessage2] = useState("")


  useEffect(() => {
    setLoading(false);
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const offsetTop = (section as HTMLElement).offsetTop - 200;
        if (scrollTop >= offsetTop && scrollTop < offsetTop + (section as HTMLElement).offsetHeight) {
          setView(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleParentClick = (event: any) => {
    if (event.target === event.currentTarget) {
      setModal(false);
      setImageModal(false);
      setEmailModal(false)
    }
  };

  const [textsToSave, setTextsToSave] = useState<{ [key: string]: string }>({});
  const [imagesToSave, setImagesToSave] = useState<{ [key: string]: string }>({});

  const [texts, setTexts] = useState<any>({
    socials: { dribble: textsToSave?.["socialsdribble"] || "", behance: textsToSave?.["socialsbehance"] || "", ig: textsToSave?.["socialsig"] || "", fb: textsToSave?.["socialsfb"] || "", lin: textsToSave?.["socialslin"] || "", x: textsToSave?.["socialsx"] || "" },
    slides: [
      { img: imagesToSave["slides0img"] || '/IMG-1925.jpg', title: textsToSave?.["slides0title"] || "Innovative Glass Products", details: textsToSave?.["slides0details"] || "With 20 years of expertise, we deliver comprehensive glass solutions.", url: "#sec4", btn: "OUR SERVICES" },
      { img: imagesToSave["slides1img"] || '/toughenedGlass.88f577c38f3e527c3003.jpg', title: textsToSave?.["slides1title"] || "Qualified Professionals", details: textsToSave?.["slides1details"] || "We have spent thousands of hours to learn technology for solving problems", url: "#sec2", btn: "ABOUT US" },
      { img: imagesToSave["slides2img"] || '/CH10.1fba641681ab4e8131a7.jpg', title: textsToSave?.["slides2title"] || "Returns Guaranteed", details: textsToSave?.["slides2details"] || "We have helped hundreds of companies to grow their business in the competitive world", url: "#sec6", btn: "CASE STUDIES" },
      // { img: imagesToSave["slides0img"] || '/IMG-1925.jpg', title: textsToSave?.["slides0title"] || "Innovative Glass Products", details: textsToSave?.["slides0details"] || "With 20 years of expertise, we deliver comprehensive glass solutions.", url: "#sec4", btn: "OUR SERVICES" },
      // { img: imagesToSave["slides1img"] || '/toughenedGlass.88f577c38f3e527c3003.jpg', title: textsToSave?.["slides1title"] || "Qualified Professionals", details: textsToSave?.["slides1details"] || "We have spent thousands of hours to learn technology for solving problems", url: "#sec2", btn: "ABOUT US" },
      // { img: imagesToSave["slides2img"] || '/CH10.1fba641681ab4e8131a7.jpg', title: textsToSave?.["slides2title"] || "Returns Guaranteed", details: textsToSave?.["slides2details"] || "We have helped hundreds of companies to grow their business in the competitive world", url: "#sec6", btn: "CASE STUDIES" },
    ],
    contactData: {
      head: textsToSave?.["contactDatahead"] || "Get in touch with us",
      body: textsToSave?.["contactDatabody"] || "Reach out to us for tailored solutions and expert support.",
      exp: [
        {
          img: <svg className='w-5' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#A4B72E"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <polygon className="fill-[#A4B72E]" points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862 77.841,493.862 77.841,293.382 256.002,153.862 "></polygon> <polygon className="fill-[#A4B72E]" points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764 "></polygon> <polygon className="fill-[#A4B72E]" points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138 "></polygon> </g> </g></svg>,
          head: textsToSave?.["contactDataexp0head"] || "CONTACT ADDRESS",
          det: textsToSave?.["contactDataexp0det"] || "Plot C62, Crystal Glass Close, Amowo Odofin Industrial Estate, Off Oshodi Apapa Expressway, Lagos, Nigeria."
        },
        {
          img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#A4B72E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>,
          head: textsToSave?.["contactDataexp1head"] || "EMAIL ADDRESS",
          det: textsToSave?.["contactDataexp1det"] || "info@technoglassng.com",
          det1: textsToSave?.["contactDataexp1det1"] || "info@technoglassng.com"
        },
        {
          img: <svg className='w-5' viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#A4B72E"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>call [#192]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#A4B72E"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596" id="call-[#192]"> </path> </g> </g> </g> </g></svg>,
          head: textsToSave?.["contactDataexp2head"] || "PHONE NUMBER",
          det: textsToSave?.["contactDataexp2det"] || "+ 234-704 306 7310",
          det1: textsToSave?.["contactDataexp2det1"] || "+ 234-704 496 5310"
        }
      ],
      coordinate: textsToSave?.["contactDatacoordinate"] || "6.4558, 3.3365"
    },
    navData: textsToSave?.["navData"] || "SPERE",
    expertData: {
      head: textsToSave?.["expertDatahead"] || "We are an expert glass solutions provider.",
      body: textsToSave?.["expertDatabody"] || "We at Technoglass Industries Limited, established in 2004, provide high-quality architectural glass solutions for commercial and residential projects. Our products include float, decorative, energy-efficient, and safety glass, enhancing building aesthetics and sustainability. With our 24/7 facility, we deliver exceptional production, quality, and service to prestigious projects.",
      exp: [
        {
          img: <svg className='w-5 bg' fill="#fff" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bell-solid</title> <path className="clr-i-solid clr-i-solid-path-1" d="M32.85,28.13l-.34-.3A14.37,14.37,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93l-.34.3v2.82H32.85Z"></path><path className="clr-i-solid clr-i-solid-path-2" d="M15.32,32a2.65,2.65,0,0,0,5.25,0Z"></path> <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect> </g></svg>,
          head: textsToSave?.["expertDataexp0head"] || "Modern Design",
          body: textsToSave?.["expertDataexp0body"] || "Offering innovative and aesthetic glass solutions for contemporary architectural needs."
        },
        {
          img: <svg className='w-5' viewBox="0 -7.5 104 104" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>17-multimeda-speaker-megaphone</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="3.Multimedia" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"> <g id="Multimedia-(Color)" transform="translate(-1298.000000, -308.000000)" stroke="#fff" strokeWidth="3.5"> <g id="17-multimeda-speaker-megaphone" transform="translate(1300.000000, 310.000000)"> <rect id="Layer-1" fill="#fff" x="92" y="0" width="8" height="74" rx="4"> </rect> <path d="M52,22.2792969 C52,22.2792969 76.1601562,22.2792969 92,2.04785156 L92,72 C75.9351563,51.9902344 52,51.9902344 52,51.9902344 L52,22.2792969 Z" id="Layer-2" fill="#FFFFFF"> </path> <rect id="Layer-3" fill="#fff" x="12" y="19" width="40" height="36" rx="3"> </rect> <path d="M10,49 L5,49 C2.23857625,49 0,46.76369 0,43.9980273 L0,30.0019727 C0,27.2394595 2.24419519,25 5,25 L10,25" id="Layer-4" fill="#fff"> </path> <path d="M20.5,28 L43.5,28" id="Layer-5" fill="#fff"> </path> <path d="M30,55 L18,55 L18,81.0007252 C18,83.2132053 19.7889923,85 21.9958262,85 L32.4243989,84.9999999 C34.3526936,85 36.5622035,82.3296774 34.5478516,80 C34.5478516,80 30,74.6191406 30,72.8208008 C30,69.8348349 30,55 30,55 Z" id="Layer-6" fill="#fff"> </path> </g> </g> </g> </g></svg>,
          head: textsToSave?.["expertDataexp1head"] || "Free Support",
          body: textsToSave?.["expertDataexp1body"] || "Providing reliable customer service and expert guidance throughout every project."
        },
        {
          img: <svg className='w-5' fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"></path></g></svg>,
          head: textsToSave?.["expertDataexp2head"] || "24/7 availability",
          body: textsToSave?.["expertDataexp2body"] || "Ensuring continuous production and delivery to meet both small and large-scale requirements."
        }
      ]
    },
    foundedData: {
      head: "Pioneering Innovative Glass Solutions",
      imp: "Cutting-Edge Designs - Advanced glass technology for modern architecture and interiors.",
      imp1: "Superior Durability - High-performance, energy-efficient, and long-lasting glass solutions.",
      imp2: "Customization & Precision - Tailored glass innovations to meet unique client needs.",
      imp3: "Unmatched Excellence - Commitment to quality, aesthetics, and functional brilliance.",
      img: "/banner.png"
    },
    awardData: "We are an award-winning glass solutions provider.",
    servicesData: {
      head: "Our services",
      body: "Our services are designed to provide seamless solutions, offering high-quality glass products that are easy to integrate and use for commercial and residential projects.",
      exp: [
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/LAMINATING.jpg" />,
          // img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#fff"></path> </g></svg>,
          head: "CNC Cutting Table",
          body: "Our CNC cutting table provides highly accurate and efficient glass cutting, delivering custom shapes with minimal waste for any design requirement."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/DOUBLE GLAZING..jpg" />,
          // img: <svg className='w-5' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 2C15.432 2 2 15.432 2 32l.001.053l-.001.053C2 48.616 15.357 62 31.835 62l.064-.002L32 62c16.568 0 30-13.432 30-30S48.568 2 32 2m28 30c0 2.394-.302 4.717-.866 6.934c-.261-.18-.951.564-1.121-.422c-.213-1.224-1.593-2.074-2.336-1.489s-2.866 2.286-2.971 3.35c-.107 1.063-1.01 2.339-1.433 1.437c-.426-.904-1.698-3.723-1.646-4.467c.052-.744-.586.266-1.538-1.223c-.956-1.489-2.601-.214-3.928-.958c-1.327-.745-2.813-1.755-3.557-2.073c-.741-.32 1.327 2.977 1.593 2.552c.267-.425 1.327.319 1.646.319s1.167.744.637 1.436s-5.253 3.566-5.731 2.818c-.48-.748-3.29-6.541-3.769-6.186c-.478.355 2.973 6.398 3.557 6.77c.582.373 2.335.054 3.183-.318c.85-.372-1.751 4.148-2.864 4.68c-1.114.531-2.016 2.18-1.54 2.924c.478.744.531 3.563-.476 3.936c-1.01.371-1.381.956-1.063 1.648c.317.69-.742 1.859-1.22 2.604c-.479.744-2.335 2.286-2.495 2.712c-.158.426-2.44.319-3.344.319c-.901 0-.212-1.117-.319-2.073c-.104-.958-.9-1.862-.9-2.34c0-.479-.267-1.596-.637-2.127c-.371-.533-.479-1.543-.107-2.127c.373-.586.637-2.286-.104-3.031c-.744-.744-1.594-2.021-1.009-3.031c.584-1.01-.637-.903-1.645-1.383c-1.009-.479-3.079.16-4.14.32c-1.062.159-2.122-.266-2.441-.799c-.318-.531-1.008-1.86-1.715-2.18c-.705-.318-.301-1.701.123-2.232c.426-.531-.424-1.542 0-1.969c.426-.425.69-1.966 1.539-2.303c.85-.336.69-.567.716-1.365c.027-.798.955-.798 1.113-1.223c.16-.426.637-.638 1.595-.638c.955 0 2.572-.559 3.342-.745s2.097-.452 1.99.293c-.106.744-.079 1.594.424 1.594c.505 0 1.195.293 1.991.789c.796.495.822.09.929-.469s1.22-.346 2.372.186s2.723.159 3.225.107c.505-.055.718-1.569.585-2.074c-.134-.505-.929.239-1.433-.08c-.504-.318-1.195.08-1.698-.373c-.505-.451-.585-1.515 0-1.541c.583-.027.876-.213 1.22-.611c.346-.399 1.646-.638 2.15-.24c.503.399 1.248.665 1.697.213c.451-.451-.9-1.328-1.194-1.568c-.292-.239-.053-1.01-.344-1.01c-.293 0-.532.132-.372.505c.159.372-.849 1.036-1.01.665c-.158-.373-.423-1.09-.821-1.09c-.397 0-.928 1.808-.955 2.1c-.027.293-.717.771-1.273.771c-.556 0-.556.639-.265.932c.292.292.079 1.462-.451 1.529c-.531.068-.717-.12-.796-.573c-.079-.451-.61-.398-.637-1.329s-.611-1.382-.982-1.808s-1.327-1.675-1.698-1.116s1.327 1.755 1.777 2.073c.453.319.373 1.01.134 1.17s-.69 1.463-.955 1.568c-.267.106-.52-.396-.52-.396c-.398-.159.556-.638.716-.877c.158-.239-1.671-1.914-2.001-2.393s-1.74.398-2.376.08c-.637-.318-1.593 1.196-1.671 2.073c-.081.878-1.116 1.116-2.071 1.116c-.954 0-1.592-.717-1.272-1.435c.318-.718-.16-1.914.398-1.994c.557-.079 2.147 0 2.466-.877c.318-.877-1.513-1.675-.795-1.834c.715-.16 1.831-1.275 2.627-1.914c.794-.638.874-1.435 1.59-1.491c.718-.055-.158-1.381.479-1.779c.638-.399.796 1.436 1.274 1.436s1.431-.16 2.228.239s1.035-.399 1.354-1.437c.318-1.036 1.114-1.595 2.705-2.392c1.592-.798-1.829.239-2.467-.559c-.637-.798.239-2.553.638-3.792c.398-1.24-1.274 1.239-2.15 2.516c-.877 1.276.239 1.834.158 2.711c-.079.878-1.51 1.914-1.51 1.914c-.637.08-.558-1.196-.876-1.754c-.319-.558-.877-.319-1.753.319c-.876.638-.955-1.515-1.193-2.393c-.237-.876 1.433-1.994 2.218-2.59c.784-.598 2.079-3.471 3.513-5.703c1.434-2.233 3.503-1.117 4.06-.239c.559.876 1.989.318 3.344 1.914c1.354 1.595-.319 2.312-1.829 1.664c-1.515-.648.317 1.606 1.191 2.244c.876.637 1.354-1.436 1.673-1.914c.318-.479 1.511-.239 2.386-1.516c.877-1.276 2.866-1.036 4.002-.896c1.137.141.854-.699.138-1.386c-.53-.508.554-.063 1.83.56C54.476 12.768 60 21.737 60 32m-39.958-9.528c-.264-.273.267-1.348.505-1.667c.24-.319-.664-.213-.609.24c.053.451-.346 1.143-.903 1.329s-1.192.132-.875-.373c.317-.505.026-.957-.213-1.436c-.238-.479 1.326-.771 1.646-1.063c.318-.292-.503-.479-.478-.93c.027-.453.213-.851.529-.904c.319-.053.617-.257.903-.239c.877.054.609 2.047.929 2.686c.318.637 1.221 1.409 1.141 1.966c-.08.559-.25.878-.9.718c-.653-.16-1.698.824-2.098.638c-.399-.187.69-.692.423-.965m-5.718-11.181c.797.398 1.432-.324 1.988-.479c.659-.182 1.035 2.154.399 2.074c-.637-.08-1.353 1.276-2.273 1.196c-.921-.08-.513-.717-1.548-1.674c-.222-.206-.313-.392-.321-.555c.221-.213.441-.427.67-.632c.358-.095.783-.081 1.085.07m24.902 40.141c.743-.159.6-1.573 1.274-1.648c1.433-.159.053 3.828-.477 4.945c-.531 1.117-.745 1.063-1.25.372c-.507-.69-.343-1.808 0-2.339c.342-.533-.291-1.17.453-1.33" fill="#fff"></path></g></svg>,
          head: "Washing",
          body: "Our automated glass washing process effectively removes dirt, grease, and contaminants, ensuring spotless, clear glass ready for further processing or installation."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/TEMPERING3.jpg" />,
          // img: <svg className='w-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22 12v8h-1v-8zm-4 8V7h-1v13zm-4 0V2h-1v18zm-4 0V7H9v13zm-5 0h1v-8H5zM1 1v22h22v-1H2V1z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>,
          head: "Tempering",
          body: "Our tempering process strengthens glass by heating and rapidly cooling it, enhancing its durability and impact resistance, ideal for safety-critical applications."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/DULLING .jpg" />,
          // img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.3308C16.5 13.1552 14.7029 15 12 15C9.29713 15 7.5 13.1552 7.5 11.3308V7.5H16.5V11.3308ZM17.9502 12C17.7751 13.1667 17.1485 14.2115 16.2263 15H18V16.5L12 16.5L6 16.5V15H7.77371C6.67832 14.0635 6 12.7654 6 11.3308V6H18C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H17.9502ZM18 7.5V10.5C18.8284 10.5 19.5 9.82843 19.5 9C19.5 8.17157 18.8284 7.5 18 7.5ZM7.5 18.75L7.5 17.25L16.5 17.25V18.75L7.5 18.75Z" fill="#fff"></path> </g></svg>,
          head: "Drilling / Dulling",
          body: "We offer precise drilling for various hole sizes and locations, along with dulling to smooth sharp edges, ensuring safety and a clean, polished finish."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/LAMINATING.jpg" />,
          // img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.75 1C6.16421 1 6.5 1.33579 6.5 1.75V3.6L8.22067 3.25587C9.8712 2.92576 11.5821 3.08284 13.1449 3.70797L13.3486 3.78943C14.9097 4.41389 16.628 4.53051 18.2592 4.1227C19.0165 3.93339 19.75 4.50613 19.75 5.28669V12.6537C19.75 13.298 19.3115 13.8596 18.6864 14.0159L18.472 14.0695C16.7024 14.5119 14.8385 14.3854 13.1449 13.708C11.5821 13.0828 9.8712 12.9258 8.22067 13.2559L6.5 13.6V21.75C6.5 22.1642 6.16421 22.5 5.75 22.5C5.33579 22.5 5 22.1642 5 21.75V1.75C5 1.33579 5.33579 1 5.75 1Z" fill="#fff"></path> </g></svg>,
          head: "Laminating",
          body: "We laminate multiple glass layers with an interlayer, creating shatter-resistant, soundproof, and durable glass, perfect for safety and privacy applications."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/DOUBLE GLAZING..jpg" />,
          // img: <svg className='w-5' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 2C15.432 2 2 15.432 2 32l.001.053l-.001.053C2 48.616 15.357 62 31.835 62l.064-.002L32 62c16.568 0 30-13.432 30-30S48.568 2 32 2m28 30c0 2.394-.302 4.717-.866 6.934c-.261-.18-.951.564-1.121-.422c-.213-1.224-1.593-2.074-2.336-1.489s-2.866 2.286-2.971 3.35c-.107 1.063-1.01 2.339-1.433 1.437c-.426-.904-1.698-3.723-1.646-4.467c.052-.744-.586.266-1.538-1.223c-.956-1.489-2.601-.214-3.928-.958c-1.327-.745-2.813-1.755-3.557-2.073c-.741-.32 1.327 2.977 1.593 2.552c.267-.425 1.327.319 1.646.319s1.167.744.637 1.436s-5.253 3.566-5.731 2.818c-.48-.748-3.29-6.541-3.769-6.186c-.478.355 2.973 6.398 3.557 6.77c.582.373 2.335.054 3.183-.318c.85-.372-1.751 4.148-2.864 4.68c-1.114.531-2.016 2.18-1.54 2.924c.478.744.531 3.563-.476 3.936c-1.01.371-1.381.956-1.063 1.648c.317.69-.742 1.859-1.22 2.604c-.479.744-2.335 2.286-2.495 2.712c-.158.426-2.44.319-3.344.319c-.901 0-.212-1.117-.319-2.073c-.104-.958-.9-1.862-.9-2.34c0-.479-.267-1.596-.637-2.127c-.371-.533-.479-1.543-.107-2.127c.373-.586.637-2.286-.104-3.031c-.744-.744-1.594-2.021-1.009-3.031c.584-1.01-.637-.903-1.645-1.383c-1.009-.479-3.079.16-4.14.32c-1.062.159-2.122-.266-2.441-.799c-.318-.531-1.008-1.86-1.715-2.18c-.705-.318-.301-1.701.123-2.232c.426-.531-.424-1.542 0-1.969c.426-.425.69-1.966 1.539-2.303c.85-.336.69-.567.716-1.365c.027-.798.955-.798 1.113-1.223c.16-.426.637-.638 1.595-.638c.955 0 2.572-.559 3.342-.745s2.097-.452 1.99.293c-.106.744-.079 1.594.424 1.594c.505 0 1.195.293 1.991.789c.796.495.822.09.929-.469s1.22-.346 2.372.186s2.723.159 3.225.107c.505-.055.718-1.569.585-2.074c-.134-.505-.929.239-1.433-.08c-.504-.318-1.195.08-1.698-.373c-.505-.451-.585-1.515 0-1.541c.583-.027.876-.213 1.22-.611c.346-.399 1.646-.638 2.15-.24c.503.399 1.248.665 1.697.213c.451-.451-.9-1.328-1.194-1.568c-.292-.239-.053-1.01-.344-1.01c-.293 0-.532.132-.372.505c.159.372-.849 1.036-1.01.665c-.158-.373-.423-1.09-.821-1.09c-.397 0-.928 1.808-.955 2.1c-.027.293-.717.771-1.273.771c-.556 0-.556.639-.265.932c.292.292.079 1.462-.451 1.529c-.531.068-.717-.12-.796-.573c-.079-.451-.61-.398-.637-1.329s-.611-1.382-.982-1.808s-1.327-1.675-1.698-1.116s1.327 1.755 1.777 2.073c.453.319.373 1.01.134 1.17s-.69 1.463-.955 1.568c-.267.106-.52-.396-.52-.396c-.398-.159.556-.638.716-.877c.158-.239-1.671-1.914-2.001-2.393s-1.74.398-2.376.08c-.637-.318-1.593 1.196-1.671 2.073c-.081.878-1.116 1.116-2.071 1.116c-.954 0-1.592-.717-1.272-1.435c.318-.718-.16-1.914.398-1.994c.557-.079 2.147 0 2.466-.877c.318-.877-1.513-1.675-.795-1.834c.715-.16 1.831-1.275 2.627-1.914c.794-.638.874-1.435 1.59-1.491c.718-.055-.158-1.381.479-1.779c.638-.399.796 1.436 1.274 1.436s1.431-.16 2.228.239s1.035-.399 1.354-1.437c.318-1.036 1.114-1.595 2.705-2.392c1.592-.798-1.829.239-2.467-.559c-.637-.798.239-2.553.638-3.792c.398-1.24-1.274 1.239-2.15 2.516c-.877 1.276.239 1.834.158 2.711c-.079.878-1.51 1.914-1.51 1.914c-.637.08-.558-1.196-.876-1.754c-.319-.558-.877-.319-1.753.319c-.876.638-.955-1.515-1.193-2.393c-.237-.876 1.433-1.994 2.218-2.59c.784-.598 2.079-3.471 3.513-5.703c1.434-2.233 3.503-1.117 4.06-.239c.559.876 1.989.318 3.344 1.914c1.354 1.595-.319 2.312-1.829 1.664c-1.515-.648.317 1.606 1.191 2.244c.876.637 1.354-1.436 1.673-1.914c.318-.479 1.511-.239 2.386-1.516c.877-1.276 2.866-1.036 4.002-.896c1.137.141.854-.699.138-1.386c-.53-.508.554-.063 1.83.56C54.476 12.768 60 21.737 60 32m-39.958-9.528c-.264-.273.267-1.348.505-1.667c.24-.319-.664-.213-.609.24c.053.451-.346 1.143-.903 1.329s-1.192.132-.875-.373c.317-.505.026-.957-.213-1.436c-.238-.479 1.326-.771 1.646-1.063c.318-.292-.503-.479-.478-.93c.027-.453.213-.851.529-.904c.319-.053.617-.257.903-.239c.877.054.609 2.047.929 2.686c.318.637 1.221 1.409 1.141 1.966c-.08.559-.25.878-.9.718c-.653-.16-1.698.824-2.098.638c-.399-.187.69-.692.423-.965m-5.718-11.181c.797.398 1.432-.324 1.988-.479c.659-.182 1.035 2.154.399 2.074c-.637-.08-1.353 1.276-2.273 1.196c-.921-.08-.513-.717-1.548-1.674c-.222-.206-.313-.392-.321-.555c.221-.213.441-.427.67-.632c.358-.095.783-.081 1.085.07m24.902 40.141c.743-.159.6-1.573 1.274-1.648c1.433-.159.053 3.828-.477 4.945c-.531 1.117-.745 1.063-1.25.372c-.507-.69-.343-1.808 0-2.339c.342-.533-.291-1.17.453-1.33" fill="#fff"></path></g></svg>,
          head: "Double Glazing",
          body: "Our double glazing services improve energy efficiency, sound insulation, and comfort by combining two layers of glass with a sealed air gap."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/TEMPERING3.jpg" />,
          // img: <svg className='w-5' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22 12v8h-1v-8zm-4 8V7h-1v13zm-4 0V2h-1v18zm-4 0V7H9v13zm-5 0h1v-8H5zM1 1v22h22v-1H2V1z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>,
          head: "IGU",
          body: "Our insulated glass units (IGUs) provide excellent thermal and acoustic insulation, helping to enhance energy efficiency and reduce costs in residential and commercial buildings."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/DULLING .jpg" />,
          // img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.3308C16.5 13.1552 14.7029 15 12 15C9.29713 15 7.5 13.1552 7.5 11.3308V7.5H16.5V11.3308ZM17.9502 12C17.7751 13.1667 17.1485 14.2115 16.2263 15H18V16.5L12 16.5L6 16.5V15H7.77371C6.67832 14.0635 6 12.7654 6 11.3308V6H18C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H17.9502ZM18 7.5V10.5C18.8284 10.5 19.5 9.82843 19.5 9C19.5 8.17157 18.8284 7.5 18 7.5ZM7.5 18.75L7.5 17.25L16.5 17.25V18.75L7.5 18.75Z" fill="#fff"></path> </g></svg>,
          head: "WaterJet Cutting",
          body: "Using high-pressure water jets, we achieve precise and complex cuts on glass without heat, ideal for detailed designs and custom applications."
        },
        {
          img2: ["/LAMINATING.jpg", "/TEMPERING3.jpg"],
          img: <img className="w-full h-full rounded-md" src="/DULLING .jpg" />,
          // img: <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M16.5 11.3308C16.5 13.1552 14.7029 15 12 15C9.29713 15 7.5 13.1552 7.5 11.3308V7.5H16.5V11.3308ZM17.9502 12C17.7751 13.1667 17.1485 14.2115 16.2263 15H18V16.5L12 16.5L6 16.5V15H7.77371C6.67832 14.0635 6 12.7654 6 11.3308V6H18C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H17.9502ZM18 7.5V10.5C18.8284 10.5 19.5 9.82843 19.5 9C19.5 8.17157 18.8284 7.5 18 7.5ZM7.5 18.75L7.5 17.25L16.5 17.25V18.75L7.5 18.75Z" fill="#fff"></path> </g></svg>,
          head: "Robotic Glass Carrier",
          body: "Our robotic glass carriers automate the handling and transportation of glass panels, reducing risks and ensuring efficient, safe movement throughout production."
        }
      ]
    },
    consultantData: {
      head: textsToSave?.["consultantDatahead"] || "Our dedicated team",
      body: textsToSave?.["consultantDatabody"] || "Meet our dedicated team of professionals, committed to delivering exceptional glass solutions with expertise and excellence.",
      exp: [
        { img: imagesToSave["consultantDataexp0img"] || "/image copy 2.png", name: textsToSave?.["consultantDataexp0name"] || "JAMES WILLAMSON", post: textsToSave?.["consultantDataexp0post"] || "FOUNDER", fb: textsToSave?.["consultantDataexp0fb"] || "", lin: textsToSave?.["consultantDataexp0lin"] || "", x: textsToSave?.["consultantDataexp0x"] || "" },
        { img: imagesToSave["consultantDataexp1img"] || "/image copy 4.png", name: textsToSave?.["consultantDataexp1name"] || "KATE NELSON", post: textsToSave?.["consultantDataexp1post"] || "ACCOUNTANT", fb: textsToSave?.["consultantDataexp1fb"] || "", lin: textsToSave?.["consultantDataexp1lin"] || "", x: textsToSave?.["consultantDataexp1x"] || "" },
        { img: imagesToSave["consultantDataexp2img"] || "/image copy 3.png", name: textsToSave?.["consultantDataexp2name"] || "LISA RAY", post: textsToSave?.["consultantDataexp2post"] || "DESIGNER", fb: textsToSave?.["consultantDataexp2fb"] || "", lin: textsToSave?.["consultantDataexp2lin"] || "", x: textsToSave?.["consultantDataexp2x"] || "" },
        { img: imagesToSave["consultantDataexp3img"] || "/image copy.png", name: textsToSave?.["consultantDataexp3name"] || "JOHN DOE", post: textsToSave?.["consultantDataexp3post"] || "DIRECTOR", fb: textsToSave?.["consultantDataexp3fb"] || "", lin: textsToSave?.["consultantDataexp3lin"] || "", x: textsToSave?.["consultantDataexp3x"] || "" }
      ]
    },
    details: [
      {
        img: <svg className='w-9 m-auto' viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#A4B72E"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ic_fluent_people_community_28_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ic_fluent_people_community_28_filled" fill="#A4B72E" fillRule="nonzero"> <path d="M17.75,18 C18.7164983,18 19.5,18.7835017 19.5,19.75 L19.5,21.7519766 L19.4921156,21.8604403 C19.1813607,23.9866441 17.2715225,25.0090369 14.0667905,25.0090369 C10.8736123,25.0090369 8.93330141,23.9983408 8.51446278,21.8965776 L8.5,21.75 L8.5,19.75 C8.5,18.7835017 9.28350169,18 10.25,18 L17.75,18 Z M18.2439108,11.9999135 L24.25,12 C25.2164983,12 26,12.7835017 26,13.75 L26,15.7519766 L25.9921156,15.8604403 C25.6813607,17.9866441 23.7715225,19.0090369 20.5667905,19.0090369 L20.3985759,19.007437 C20.0900029,17.9045277 19.1110503,17.0815935 17.9288034,17.0057197 L17.75,17 L16.8277704,17.0007255 C17.8477843,16.1757619 18.5,14.9140475 18.5,13.5 C18.5,12.9740145 18.4097576,12.4691063 18.2439108,11.9999135 Z M3.75,12 L9.75608915,11.9999135 C9.59024243,12.4691063 9.5,12.9740145 9.5,13.5 C9.5,14.8308682 10.0777413,16.0267978 10.996103,16.8506678 L11.1722296,17.0007255 L10.25,17 C8.9877951,17 7.92420242,17.85036 7.60086562,19.0094363 L7.5667905,19.0090369 C4.37361228,19.0090369 2.43330141,17.9983408 2.01446278,15.8965776 L2,15.75 L2,13.75 C2,12.7835017 2.78350169,12 3.75,12 Z M14,10 C15.9329966,10 17.5,11.5670034 17.5,13.5 C17.5,15.4329966 15.9329966,17 14,17 C12.0670034,17 10.5,15.4329966 10.5,13.5 C10.5,11.5670034 12.0670034,10 14,10 Z M20.5,4 C22.4329966,4 24,5.56700338 24,7.5 C24,9.43299662 22.4329966,11 20.5,11 C18.5670034,11 17,9.43299662 17,7.5 C17,5.56700338 18.5670034,4 20.5,4 Z M7.5,4 C9.43299662,4 11,5.56700338 11,7.5 C11,9.43299662 9.43299662,11 7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 Z" id="🎨-Color"> </path> </g> </g> </g></svg>,
        val: parseInt(textsToSave?.["details0val"]) || 1542,
        det: textsToSave?.["details0det"] || "Happy Clients"
      },
      {
        img: <svg className='w-9 m-auto' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z" fill="#A4B72E"></path> <path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" fill="#A4B72E"></path> <path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#A4B72E"></path> <path d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z" fill="#A4B72E"></path> <path d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" fill="#A4B72E"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#A4B72E"></path> <path d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z" fill="#A4B72E"></path> <path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#A4B72E"></path> <path d="M19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z" fill="#A4B72E"></path> <path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#A4B72E"></path> <path d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11Z" stroke="#A4B72E" strokeWidth="1.5"></path> <path d="M7 16H17" stroke="#A4B72E" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>,
        val: parseInt(textsToSave?.["details1val"]) || 2591,
        det: textsToSave?.["details1det"] || "Projects Done"
      },
      {
        img: <svg className='w-9 m-auto' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#A4B72E"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.5 3A1.5 1.5 0 003 4.5V6h14V4.5A1.5 1.5 0 0015.5 3h-11zM4 15.5A1.5 1.5 0 005.5 17h9a1.5 1.5 0 001.5-1.5V8H4v7.5zM7 11h6v2H7v-2z" fill="#A4B72E"></path></g></svg>,
        val: parseInt(textsToSave?.["details2val"]) || 1045,
        det: textsToSave?.["details2det"] || "Repositories"
      },
      {
        img: <svg className='w-9 h-9 m-auto' fill="#A4B72E" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M178.853,272.412c-41.117,0-74.567,33.45-74.567,74.567s33.45,74.567,74.567,74.567s74.567-33.45,74.567-74.567 S219.97,272.412,178.853,272.412z M178.853,399.717c-29.08,0-52.738-23.658-52.738-52.738s23.658-52.738,52.738-52.738 s52.738,23.658,52.738,52.738S207.933,399.717,178.853,399.717z"></path> <path d="M332.961,305.914h-32.693c-1.825-5.382-4.009-10.64-6.538-15.736l23.131-23.131c4.262-4.262,4.262-11.173,0-15.435 l-42.64-42.64c-4.262-4.262-11.173-4.262-15.436,0l-23.13,23.131c-5.096-2.528-10.353-4.713-15.735-6.537v-32.693 c0-6.028-4.886-10.914-10.914-10.914h-60.302c-6.028,0-10.914,4.886-10.914,10.914v32.693c-5.382,1.824-10.64,4.009-15.736,6.537 l-23.13-23.13c-2.046-2.046-4.823-3.197-7.718-3.197c-2.894,0-5.671,1.15-7.718,3.197l-42.64,42.64 c-2.046,2.046-3.197,4.823-3.197,7.718s1.15,5.671,3.197,7.718l23.131,23.13c-2.528,5.096-4.713,10.354-6.537,15.736H24.747 c-6.028,0-10.914,4.886-10.914,10.914v60.302c0,6.028,4.886,10.914,10.914,10.914H57.44c1.824,5.382,4.009,10.64,6.537,15.736 l-23.13,23.13c-2.046,2.046-3.197,4.823-3.197,7.718c0,2.895,1.15,5.671,3.197,7.718l42.64,42.64 c2.046,2.046,4.823,3.197,7.718,3.197c2.895,0,5.671-1.15,7.718-3.197l23.13-23.13c5.096,2.528,10.354,4.713,15.736,6.537v32.693 c0,6.028,4.886,10.914,10.914,10.914h60.302c6.028,0,10.914-4.886,10.914-10.914v-32.693c5.382-1.824,10.64-4.009,15.735-6.537 l23.13,23.131c2.046,2.046,4.823,3.197,7.718,3.197c2.894,0,5.671-1.15,7.718-3.197l42.64-42.64 c4.262-4.262,4.262-11.173,0-15.435l-23.131-23.13c2.528-5.095,4.713-10.354,6.538-15.735h32.693 c6.028,0,10.914-4.886,10.914-10.914V316.83C343.875,310.8,338.989,305.914,332.961,305.914z M322.048,366.216h-0.002h-29.875 c-4.946,0-9.274,3.326-10.547,8.105c-2.419,9.08-6.047,17.811-10.782,25.952c-2.491,4.282-1.787,9.704,1.716,13.206 l21.149,21.149l-27.205,27.205l-21.149-21.15c-3.504-3.501-8.926-4.206-13.208-1.716c-8.141,4.737-16.871,8.365-25.95,10.782 c-4.779,1.273-8.106,5.6-8.106,10.547v29.875h-38.473v-29.875c0-4.946-3.327-9.274-8.106-10.547 c-9.08-2.418-17.81-6.045-25.951-10.782c-4.284-2.491-9.705-1.787-13.207,1.717l-21.149,21.149l-27.205-27.205l21.149-21.149 c3.502-3.502,4.208-8.926,1.717-13.207c-4.737-8.14-8.365-16.871-10.782-25.951c-1.273-4.779-5.6-8.106-10.547-8.106H35.662 v-38.473h29.875c4.946,0,9.274-3.326,10.547-8.106c2.417-9.08,6.045-17.81,10.782-25.951c2.491-4.282,1.787-9.704-1.716-13.207 L64,259.328l27.205-27.205l21.149,21.149c3.502,3.502,8.925,4.208,13.208,1.717c8.14-4.737,16.871-8.365,25.951-10.782 c4.779-1.273,8.106-5.6,8.106-10.547v-29.875h38.473v29.875c0,4.946,3.326,9.274,8.106,10.547 c9.079,2.418,17.81,6.045,25.95,10.782c4.283,2.491,9.704,1.787,13.207-1.716l21.149-21.15l27.205,27.205l-21.149,21.15 c-3.502,3.502-4.206,8.925-1.716,13.206c4.736,8.141,8.364,16.873,10.782,25.952c1.273,4.779,5.6,8.105,10.547,8.105h29.875 V366.216z"></path> <path d="M393.63,62.758c-24.073,0-43.657,19.585-43.657,43.657s19.585,43.658,43.657,43.658 c24.073,0,43.658-19.585,43.658-43.658S417.703,62.758,393.63,62.758z M393.63,128.244c-12.036,0-21.829-9.792-21.829-21.829 s9.792-21.829,21.829-21.829c12.036,0,21.829,9.792,21.829,21.829S405.667,128.244,393.63,128.244z"></path> <path d="M492.708,125.81l-12.616-7.284c0.568-4.024,0.854-8.073,0.854-12.111s-0.286-8.086-0.854-12.109l12.616-7.284 c5.22-3.013,7.009-9.689,3.995-14.909l-21.829-37.808c-3.013-5.22-9.69-7.009-14.909-3.995l-12.66,7.308 c-6.388-4.986-13.456-9.08-20.932-12.123V10.914C426.374,4.886,421.487,0,415.459,0h-43.657c-6.028,0-10.914,4.886-10.914,10.914 v14.581c-7.475,3.043-14.543,7.137-20.932,12.123l-12.66-7.308c-5.221-3.016-11.896-1.226-14.909,3.995l-21.829,37.808 c-3.015,5.22-1.226,11.896,3.995,14.909l12.616,7.284c-0.568,4.023-0.854,8.073-0.854,12.109s0.286,8.086,0.854,12.111 l-12.616,7.284c-5.22,3.013-7.009,9.689-3.995,14.909l21.829,37.808c1.447,2.507,3.831,4.336,6.627,5.085 c2.797,0.749,5.776,0.357,8.282-1.09l12.66-7.309c6.388,4.986,13.456,9.08,20.932,12.123v14.581 c0,6.028,4.886,10.914,10.914,10.914h43.657c6.028,0,10.914-4.886,10.914-10.914v-14.581c7.475-3.043,14.543-7.137,20.932-12.123 l12.66,7.309c2.507,1.447,5.484,1.84,8.282,1.09c2.796-0.75,5.18-2.578,6.627-5.085l21.829-37.808 C499.717,135.499,497.928,128.823,492.708,125.81z M457.322,91.247c1.191,4.999,1.794,10.102,1.794,15.168 s-0.604,10.169-1.794,15.169c-1.118,4.695,0.98,9.568,5.16,11.981l9.859,5.692l-10.914,18.905l-9.898-5.715 c-4.181-2.414-9.45-1.794-12.956,1.523c-7.439,7.036-16.512,12.291-26.237,15.196c-4.622,1.381-7.791,5.633-7.791,10.458v11.378 h-21.829v-11.38c0-4.824-3.167-9.076-7.791-10.458c-9.725-2.905-18.798-8.16-26.237-15.196 c-3.507-3.317-8.777-3.937-12.956-1.523l-9.898,5.715l-10.914-18.905l9.859-5.692c4.18-2.413,6.278-7.285,5.16-11.981 c-1.191-5-1.794-10.103-1.794-15.169s0.604-10.169,1.794-15.168c1.118-4.695-0.98-9.568-5.16-11.981l-9.859-5.692l10.914-18.905 l9.898,5.715c4.181,2.414,9.45,1.794,12.956-1.523c7.44-7.036,16.513-12.291,26.237-15.196c4.622-1.381,7.791-5.633,7.791-10.458 V21.829h21.829v11.38c0,4.824,3.167,9.076,7.791,10.458c9.724,2.905,18.797,8.16,26.237,15.196 c3.507,3.316,8.775,3.936,12.956,1.523l9.898-5.715l10.914,18.905l-9.859,5.692C458.303,81.68,456.204,86.552,457.322,91.247z"></path> <path d="M471.941,286.399h-6.508c-0.757-2.535-1.764-4.963-3.005-7.248l4.604-4.604c4.262-4.262,4.262-11.173,0-15.436 c-4.262-4.261-11.173-4.261-15.436,0l-4.604,4.604c-2.285-1.24-4.714-2.247-7.248-3.005v-6.508 c0-6.028-4.886-10.914-10.914-10.914s-10.914,4.886-10.914,10.914v6.508c-2.535,0.757-4.963,1.764-7.248,3.005l-4.604-4.604 c-4.262-4.261-11.173-4.261-15.436,0c-4.262,4.262-4.262,11.173,0,15.436l4.604,4.604c-1.24,2.285-2.247,4.714-3.005,7.248 h-6.508c-6.028,0-10.914,4.886-10.914,10.914s4.886,10.914,10.914,10.914h6.508c0.758,2.535,1.764,4.963,3.005,7.248 l-4.604,4.604c-4.262,4.262-4.262,11.173,0,15.436c2.132,2.13,4.925,3.197,7.718,3.197s5.587-1.066,7.718-3.197l4.604-4.604 c2.285,1.24,4.714,2.247,7.248,3.005v6.508c0,6.028,4.886,10.914,10.914,10.914s10.914-4.886,10.914-10.914v-6.508 c2.535-0.757,4.963-1.764,7.248-3.005l4.604,4.604c2.132,2.13,4.925,3.197,7.718,3.197c2.793,0,5.587-1.066,7.718-3.197 c4.262-4.262,4.262-11.173,0-15.436l-4.604-4.604c1.24-2.285,2.247-4.714,3.005-7.248h6.508c6.028,0,10.914-4.886,10.914-10.914 S477.969,286.399,471.941,286.399z M428.829,313.685c-9.027,0-16.372-7.344-16.372-16.372s7.344-16.372,16.372-16.372 s16.372,7.344,16.372,16.372S437.857,313.685,428.829,313.685z"></path> </g> </g> </g> </g></svg>,
        val: parseInt(textsToSave?.["details3val"]) || 1347,
        det: textsToSave?.["details3det"] || "Client's served"
      }
    ],
    caseData: {
      head: "Our Products",
      body: "At Technoglass Industries Limited, we turn ideas into reality with innovative glass solutions. Explore our case studies to see how we deliver excellence and value in every project.",
      worksData: [
        // { img: "/IMG-20250117-WA0001.jpg", id: 1, content: "Curtain wall" },
        { img: "/IMG-20250117-WA0002.jpg", id: 2, content: "Curtain wall" },
        // { img: "/IMG-20250117-WA0003.jpg", id: 3, content: "Glass Staircase with Aluminuim Railings & Accesories" },
        { img: "/image copy 7.png", id: 1, content: "MMIA Ikeja Lagos" },
        { img: "/image copy 8.png", id: 2, content: "Mega Chicken Complex, Amuwo Odofin, Lagos" },
        { img: "/image copy 9.png", id: 3, content: "Black Diamond Apartments, VI Lagos" },
        { img: "/IMG-20250117-WA0004.jpg", id: 1, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0005.jpg", id: 2, content: "Curtain wall" },
        { img: "/IMG-20250117-WA0006.jpg", id: 3, content: "Mirrors" },
        { img: "/IMG-20250117-WA0007.jpg", id: 1, content: "Glass Staircase with Aluminuim Railings & Accesories" },
        { img: "/IMG-20250117-WA0008.jpg", id: 2, content: "Balustrade" },
        { img: "/IMG-20250117-WA0009.jpg", id: 3, content: "Balustrade" },
        { img: "/IMG-20250117-WA0010.jpg", id: 1, content: "Glass Staircase with Aluminuim Railings & Accesories" },
        { img: "/IMG-20250117-WA0011.jpg", id: 2, content: "Balustrade" },
        { img: "/IMG-20250117-WA0012.jpg", id: 3, content: "Balustrade" },
        { img: "/IMG-20250117-WA0013.jpg", id: 1, content: "Balustrade" },
        { img: "/IMG-20250117-WA0014.jpg", id: 2, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0015.jpg", id: 3, content: "Balustrade" },
        { img: "/IMG-20250117-WA0016.jpg", id: 1, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0017.jpg", id: 2, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0018.jpg", id: 3, content: "Sliding doors" },
        { img: "/IMG-20250117-WA0019.jpg", id: 1, content: "Sliding doors" },
        { img: "/IMG-20250117-WA0020.jpg", id: 2, content: "Sliding doors" },
        // { img: "/IMG-20250117-WA0021.jpg", id: 3, content: "Balustrade" },
        { img: "/IMG-20250117-WA0022.jpg", id: 1, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0023.jpg", id: 2, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0024.jpg", id: 3, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0025.jpg", id: 1, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0026.jpg", id: 2, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0027.jpg", id: 3, content: "Sliding doors" },
        { img: "/IMG-20250117-WA0028.jpg", id: 1, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0029.jpg", id: 2, content: "Shower Doors" },
        { img: "/IMG-20250117-WA0030.jpg", id: 3, content: "Sliding doors" },
        { img: "/IMG-20250117-WA0031.jpg", id: 1, content: "Curtain wall" },
        { img: "/IMG-20250117-WA0032.jpg", id: 2, content: "Curtain wall" },
        { img: "/IMG-20250117-WA0033.jpg", id: 3, content: "Sliding doors" },
      ]
    },
    testimonyData: {
      head: textsToSave?.["testimonyDatahead"] || "Our client's testimonials",
      body: textsToSave?.["testimonyDatabody"] || "At Technoglass Industries, we value our clients' trust and satisfaction. Here's what they have to say about working with us.",
      works: [
        { img: imagesToSave["testimonyDataworks0img"] || "/img_5.jpg", name: textsToSave?.["testimonyDataworks0name"] || "JAMES WILLAMSON", title: textsToSave?.["testimonyDataworks0title"] || "CREATIVE DIRECTOR", comment: textsToSave?.["testimonyDataworks0comment"] || "This theme is very easy to use and understand, and provides enough options and customization without being overwhelming." },
        { img: imagesToSave["testimonyDataworks1img"] || "/img_4 (1).jpg", name: textsToSave?.["testimonyDataworks1name"] || "JAMES WILLAMSON", title: textsToSave?.["testimonyDataworks0title"] || "CREATIVE DIRECTOR", comment: textsToSave?.["testimonyDataworks1comment"] || "This theme is very easy to use and understand, and provides enough options and customization without being overwhelming." },
        { img: imagesToSave["testimonyDataworks2img"] || "/img_6 (1).jpg", name: textsToSave?.["testimonyDataworks2name"] || "JAMES WILLAMSON", title: textsToSave?.["testimonyDataworks0title"] || "CREATIVE DIRECTOR", comment: textsToSave?.["testimonyDataworks2comment"] || "This theme is very easy to use and understand, and provides enough options and customization without being overwhelming." }
      ],
      sponsors: [
        { img: "/tata.svg" },
        { img: "/icon.svg" },
        { img: "/kfc.svg" },
        { img: "/boc.svg" },
      ]
    },
    blogData: {
      head: textsToSave?.["blogDatahead"] || "Latest news",
      body: textsToSave?.["blogDatabody"] || "There are many variations of passages of Lorem Ipsum but the majority have suffered in some form.",
      works: [
        { img: imagesToSave["blogDataworks0img"] || "/img_9.jpeg", title: textsToSave?.["blogDataworks0title"] || "Points to remember in the meeting", det: textsToSave?.["blogDataworks0det"] || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text for print.", day: textsToSave?.["blogDataworks0day"] || "JAN 11" },
        { img: imagesToSave["blogDataworks1img"] || "/img_10.jpeg", title: textsToSave?.["blogDataworks1title"] || "The perfect plan for the business", det: textsToSave?.["blogDataworks1det"] || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text for print.", day: textsToSave?.["blogDataworks1day"] || "JAN 11" },
        { img: imagesToSave["blogDataworks2img"] || "/img_11.jpeg", title: textsToSave?.["blogDataworks2title"] || "Analytics is the important factor", det: textsToSave?.["blogDataworks2det"] || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text for print.", day: textsToSave?.["blogDataworks2day"] || "JAN 11" }
      ]
    }
  })

  const updateText = (key: any, range: number) => {
    if (production) {
      return
    }
    setModal(true)
    setRange(range)
    setEdit(textsToSave[key] || "")
    setKey(key)
  }

  const update = () => {
    if (key === "contactDatacoordinate" && (edit.split(",").length !== 2 || isNaN(Number(edit.split(",")[0])) || isNaN(Number(edit.split(",")[1])))) {
      setMessage2("Input a correct coordinate separated by comma")
      return;
    }
    setTextsToSave((prev: any) => ({ ...prev, [key]: edit }))
    setModal(false)
  }

  const editor = (e: string) => {
    setMessage2("")
    if (e.length <= range) {
      setEdit(e)
    }
  }

  const handleChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImagesToSave((prev: any) => ({ ...prev, [key]: reader.result }))
    }
  }

  const updateImage = (key: any) => {
    if (production) {
      return
    }
    setImageModal(true)
    setKey(key)
  }

  const submitHandler = async () => {
    try {
      if (!email) {
        setEmailModal(true)
        return
      }
      setLoading(true)
      const body = {
        email,
        texts: textsToSave,
        images: imagesToSave
      }
      const res = await fetch("https://admirable-croissant-3aaba1.netlify.app/api/webBuilder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setLoading(false)
      if (data.status === "ok") {
        window.open(`https://admirable-croissant-3aaba1.netlify.app/${data.data._id}`)
      }
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
  }


  const mailSetter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const trimmedEmail = email.trim();

      if (emailRegex.test(trimmedEmail)) {
        setEmailModal(false);
        setWelcome(false);
        setLoading(true);

        const body = { email: trimmedEmail };

        const res = await fetch("https://admirable-croissant-3aaba1.netlify.app/api/getWeb", {
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

        setTextsToSave(data.data.texts)
        const element: { [Key: string]: string } = {};
        for (const key in data.data.images) {
          if (Object.prototype.hasOwnProperty.call(data.data.images, key)) {
            element[key] = data.data.images[key].url
          }
        }
        setImagesToSave(element)
        setLoading(false);
      } else {
        setMessage("Please enter a valid email address.");
      }
    } catch (error) {
      setTextsToSave({})
      setImagesToSave({})
      // console.error("An error occurred during the mailSetter process:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        {loading ? <Loader /> : null}
        <Carousel view={view} emailModal={setEmailModal} submitHandler={submitHandler} slides={texts.slides} navData={texts.navData} production={production} updateText={updateText} updateImage={updateImage} email={email} />
        <Expert expertData={texts.expertData} updateText={updateText} />
        <Founded foundedData={texts.foundedData} updateText={updateText} updateImage={updateImage} />
        <Award awardData={texts.awardData} updateText={updateText} />
        <Services servicesData={texts.servicesData} updateText={updateText} />
        {/* <Consultants consultantData={texts.consultantData} updateText={updateText} production={production} updateImage={updateImage} /> */}
        <Happy view={view} details={texts.details} production={production} updateText={updateText} />
        <CaseStudies production={production} updateImage={updateImage} caseData={texts.caseData} updateText={updateText} />
        {/* <Testimony updateImage={updateImage} testimonyData={texts.testimonyData} updateText={updateText} /> */}
        {/* <Blog updateImage={updateImage} blogData={texts.blogData} updateText={updateText} /> */}
        <Contact load={setLoading} email={email} contactData={texts.contactData} updateText={updateText} />
        <Footer navData={texts.navData} socials={texts.socials} updateText={updateText} production={production} />
        {/* {modal &&
          <div onClick={(e) => handleParentClick(e)} className="fixed flex items-center justify-center top-0 w-full min-h-screen bg-[#00000023] z-[999999]">
            <div className="bg-white relative z-auto flex flex-col w-full md:w-1/2 xl:w-1/3 m-auto rounded-lg p-9">
              <p className="text-[0.57rem] text-red-500 my-2">{message2}</p>
              <input onChange={(e) => editor(e.target.value)} value={edit} className="w-full border outline-none text-[16px] md:text-xs px-3 py-2 rounded" type="text" />
              <button type="button" className="bg-blue-600 text-white mt-5 w-fit px-9 text-xs ml-auto py-2 rounded" onClick={update}>OK</button>
            </div>
          </div>
        }
        <div onClick={(e) => handleParentClick(e)} className={`fixed flex items-center transition-opacity duration-700 justify-center top-0 w-full min-h-screen bg-[#00000023] ${!production && emailModal ? "z-[999999] opacity-100" : "-z-[91] opacity-0"}`}>
          <div className="bg-white relative z-auto flex flex-col w-full md:w-1/2 xl:w-1/3 m-auto rounded-lg p-9">
            {welcome && <p className="text-xs font-medium">Welcome!</p>}
            {welcome && <p className="text-[0.5rem]">Please enter your email to start designing a new portfolio or to continue editing your existing one.</p>}
            <p className="text-[0.55rem] text-red-500 my-2">{message}</p>
            <input onChange={(e) => { setEmail(e.target.value); setMessage(""); }} value={email} className="w-full border outline-none text-[16px] md:text-xs px-3 py-2 rounded" type="text" />
            <button type="button" className="bg-blue-600 text-white mt-5 w-fit px-9 text-xs ml-auto py-2 rounded" onClick={(e) => mailSetter(e)}>OK</button>
          </div>
        </div>
        {imageModal &&
          <div onClick={(e) => handleParentClick(e)} className="fixed flex items-center justify-center top-0 w-full min-h-screen bg-[#00000023] z-[999999]">
            <div className="bg-white relative z-auto flex flex-col w-full md:w-1/2 xl:w-1/3 m-auto rounded-lg p-9">
              <input className="w-full border outline-none text-[16px] md:text-xs px-3 py-2 rounded" type="file" accept='image/png, image/jpeg, image/jpg, image/jfif' onChange={e => handleChange(e)} />
              <button type="button" className="bg-blue-600 text-white mt-5 w-fit px-9 text-xs ml-auto py-2 rounded" onClick={() => setImageModal(false)}>OK</button>
            </div>
          </div>
        } */}
      </Suspense>
    </>
  );
}
