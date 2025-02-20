
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { BsCalendarPlus } from 'react-icons/bs'

function BottomNav() {
    const [activeTab, setActiveTab] = useState("Home")

    const tabs = [
        { name: 'Contact', label: 'Contact Us' },
        { name: 'Home', label: 'Home' },
        { name: 'site', label: 'site' },
        { name: 'Portfolio', label: 'Portfolio' },
    ]
    const Imgs = [
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5030f222577831.56338d49982fe.png',
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27f9c622577831.563150527fb79.png',      

    ]

    return (
        // Remove AnimatePresence from wrapping entire component
        <div className=' max-sm:absolute fixed z-[999999999999] bottom-10 w-screen flex justify-center items-center'>
            <motion.div layout
                className='bg-gray-400/70 rounded-xl   '
            >
                {/* Wrap only the conditional content in AnimatePresence */}
                <AnimatePresence>
                    {activeTab === 'Portfolio' && (
                        <motion.div
                            className='overflow-clip rounded-t-xl w-[100%] -top-[200%] flex flex-col max-sm:flex-col max-sm:justify-center max-sm:items-center justify-start bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-indigo-500/30'
                        >
                            {/* Grid layout container */}
                            <motion.div

                                className="grid grid-cols-2 gap-4 p-4 w-full"
                            >
                                {/* Sample grid items (filler data) */}
                                {Imgs.map((img, index) => (
                                    <motion.div
                                        key={index}

                                        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-start gap-y-4"
                                    >
                                        <img src={img} alt="" className=' max-sm:h-[100px] h-[200px] object-cover object-center' />

                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                    )}
                    {activeTab === 'site' && (
                        <motion.div
                        className='overflow-clip rounded-t-xl w-[100%] -top-[200%] flex flex-col max-sm:flex-col max-sm:justify-center max-sm:items-center justify-start bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-indigo-500/30'
                    >
                        {/* Grid layout container */}
                        <motion.div
                            className="grid grid-cols-2 gap-4 p-4 w-full"
                        >
                            {/* Left column of links */}
                            <div className="flex flex-col space-y-4">
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    Important Link 1
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    Important Link 2
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    Critical Update
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    Priority News
                                </motion.a>
                            </div>
                    
                            {/* Right column of links */}
                            <div className="flex flex-col space-y-4">
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    Breaking Announcement
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    Important Policy Change
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    VIP Access to Resources
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="text-xl font-semibold text-white hover:text-teal-300 transition duration-300"
                                    variants={{
                                        'open': { opacity: 1, y: 0 },
                                        'close': { opacity: 0, y: "-200px" }
                                    }}
                                >
                                    Exclusive Offers & Updates
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                    

                    )}
                    {activeTab === 'Contact' && (
                        <motion.div
                            variants={{
                                'open': {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        staggerChildren: 0.5,
                                        when: 'beforeChildren'
                                    }
                                },
                                'close': {
                                    opacity: 0,
                                    y: "-20px",
                                    transition: {
                                        staggerChildren: 0.5,
                                        when: 'beforeChildren'
                                    }
                                }
                            }}
                            inert='close'
                            animate={`${(activeTab === 'Contact') ? 'open' : 'close'}`}
                            className='overflow-clip rounded-t-xl w-[100%] -top-[200%] flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-start bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-indigo-500/30'
                        >

                            <motion.div
                                variants={{
                                    'open': { opacity: 1, y: 0, delay: 0.2 },
                                    'close': { opacity: 0, y: "-200px" }
                                }}
                                className='h-[200px] bg-no-repeat object-center object-cover rounded-xl w-4/12 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulbV-WHYo-Hh74Gvsf-ZkK5RycDuikznkwQ&s")]'
                            />

                            <motion.div
                                variants={{
                                    'open': { opacity: 1, y: 0, delay: 0.2 },
                                    'close': { opacity: 0, y: "-200px" }
                                }}
                                className="w-8/12 max-w-md mx-auto p-6 rounded-lg shadow-lg flex flex-col items-center justify-start gap-y-4"
                            >
                                <h2 className="text-2xl font-semibold text-white flex gap-x-3 items-center">
                                    Contact Us <BsCalendarPlus className="text-white text-xl" />
                                </h2>
                                <h3 className="text-lg text-white font-medium">info@ELEMENTIS.co | +62 823 4078 1817</h3>
                                <p className="text-center text-white text-sm px-4 py-2 bg-white bg-opacity-30 rounded-md">
                                    Address: <br />
                                    John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA
                                </p>
                            </motion.div>
                        </motion.div>

                    )}
                </AnimatePresence>


                <motion.div className='w-full max-sm:w-screen flex max-sm:px-0 max-sm:flex-wrap px-2 py-1 items-center justify-center gap-x-4 '>
                    {tabs.map((tab, index) => (
                        <motion.span layout
                            className='relative max-sm:px-1 px-3 py-3 w-[15ch] flex justify-center items-center'
                            onClick={() => setActiveTab(tab.name)}
                            key={index}
                        >
                            {/* Active tab indicator with layoutId - removed AnimatePresence interference */}
                            {activeTab === tab.name && (
                                <motion.span
                                    layout
                                    layoutId='activeTab'
                                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                                    className=' bg-white  text-black absolute z-10 inset-1 rounded-lg'
                                />
                            )}
                            <a className='relative z-20 uppercase  font-medium' href="#">
                                {tab.label}
                            </a>
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div >
        </div >
    )
}

export default BottomNav