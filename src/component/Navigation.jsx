import { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import ButtonCompo from './ButtonCompo'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import clsx from 'clsx'
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { GoArrowUpRight } from 'react-icons/go'


function Navigation() {


    const { scrollYProgress } = useScroll();



    const [menuOpenStatus, setMenuOpenStatus] = useState(false)
    return (<>
        <motion.nav layout className={clsx(' w-full fixed left-1/2 text-white  -translate-x-1/2 z-50 top-0  max-sm:pt-0 pt-6  ', (scrollY) ? 'bg-gradient-to-r from-blue-500/20 via-teal-400/20 to-indigo-500/20' : '')}>
            <div className='flex items-center max-sm:px-5 max-sm:pt-8 max-sm:text-4xl container mx-auto'>
                <div className=' flex justify-center items-center  md:size-20'>
                    <img src="./Logo.svg" alt="Logoforthesite" className=' w-full object-cover object-center' />
                </div>
                <div className=' ml-auto'>
                    <div className=' w-full flex  items-center text-lg gap-x-10 max-sm:hidden'>
                        <span>The Story</span>
                        <span>Innovation</span>
                        <span>Blogs</span>
                        <span>Gallery</span>
                        <ButtonCompo variant='cta' href="/" >
                            Contect Us
                        </ButtonCompo>

                        <span onClick={() => setMenuOpenStatus((prev) => !prev)} className='text-2xl flex justify-center items-center z-50 flex-col gap-y-2'>
                            <div className={clsx(' w-[35px] h-[2px] rounded-xl   origin-center', menuOpenStatus ? "  rotate-45 bg-black" : " bg-white")} />
                            <div className={clsx(' w-[35px] h-[2px] rounded-xl  bg-white', menuOpenStatus ? " hidden" : "")} />
                            <div className={clsx(' w-[35px] h-[2px] rounded-xl   origin-center', menuOpenStatus ? "  -rotate-45 bg-black" : " bg-white")} />
                        </span>

                    </div>
                    <div className=' max-sm:flex relative z-[99999] hidden justify-center items-center'>
                        <motion.span className=' absolute right-5' layout onClick={() => setMenuOpenStatus((prev) => !prev)}>
                            {menuOpenStatus ? <MdClose className='text-black' /> : <MdMenu className=' ' />}
                        </motion.span>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpenStatus && (<motion.div
                    variants={{
                        "hidden": {
                            opacity: 0,
                            y: "100px"
                        },
                        "open": {
                            opacity: 1,
                            y: "0px"
                        }
                    }}

                    initial="hidden"
                    animate="open"
                    exit="hidden"
                    className={clsx(' bg-slate-100 text-black max-sm:w-full -mt-4 w-screen max-sm:left-[0px]   absolute top-0  z-40 max-sm:grid-cols-1 grid grid-cols-12',)}>
                    <div className=' col-span-5  bg-gray-500 max-sm:hidden'>
                        <img src="./imgForNav.jpg" alt="" className=' md:w-full min-h-screen object-cover object-center' />
                    </div>
                    <div className='col-span-7 overflow-y-scroll flex flex-col md:gap-y-20 md:px-40 md:pt-52 pb-10 '>

                        <div className='flex overflow-y-scroll max-sm:flex-col md:max-w-[600px] max-sm:mt-10 md:items-center items-start justify-between md:text-2xl text-xl font-semibold relative'>
                            <h2 className=' md:absolute text-xl md:-top-[50%] max-sm:h-20 max-sm:px-10 max-sm:text-2xl md:left-[0%]'>
                                <img src="./Logo.svg" alt="Logoforthesite" className=' w-full object-cover object-center' />
                            </h2>
                            <motion.div
                                variants={{
                                    "hidden": {
                                        transition: {

                                            when: "afterChildren",
                                        }
                                    },
                                    "open": {
                                        transition: {

                                        }
                                    }
                                }}
                                className=' flex flex-col gap-y-2 items-start justify-start max-sm:gap-y-2'>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'> Retail Fitouts  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'>Turnkey Interiors  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'>Way Finding  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'>Products  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'>Investments  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'>Annual Return  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                            </motion.div>

                            <motion.div
                                variants={{
                                    "hidden": {

                                        transition: {

                                            when: "afterChildren",
                                        }
                                    },
                                    "open": {

                                        transition: {

                                        }
                                    }
                                }} className=' flex flex-col gap-y-2 items-start justify-start max-sm:gap-y-2'>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'>Our Belief  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'> We Are  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'> Blogs  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'> News  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'> Gallery  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                                <motion.h1 variants={{
                                    "hidden": {
                                        y: "100px",
                                        opacity: 0
                                    },
                                    "open": {
                                        y: "0px",
                                        opacity: 1
                                    }
                                }} className=' flex justify-between my-1 items-center max-sm:border-b-2 max-sm:w-screen px-5 max-sm:border-gray-600/30 max-sm:hover:border-gray-900/30'> Let’s Talk  <span className=' flex justify-center items-center md:hidden'><GoArrowUpRight /></span></motion.h1>
                            </motion.div>
                        </div>
                        <div className='text-xl'>
                            <div className=' flex md:items-start items-center justify-center flex-col gap-2'>
                                <span>Contect Us</span>
                                <h2 className=' text-2xl'>info@ELEMENTIS.co <span className=' max-sm:hidden'>|</span> <br className='md:hidden' />   +62 823 4078 1817</h2>
                            </div>

                            <div className=' w-full mt-10 text-xl flex flex-col items-center gap-y-2'>
                                <span>Stay Connected</span>
                                <div className=' flex items-center gap-4'>
                                    <BsInstagram />
                                    <BsFacebook />
                                    <BsWhatsapp />
                                    <BsYoutube />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>)}
            </AnimatePresence>
        </motion.nav>

    </>
    )
}

export default Navigation
