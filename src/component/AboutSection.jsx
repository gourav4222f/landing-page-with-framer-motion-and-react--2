import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

function AboutSection() {
    const AboutSectionbox = useRef();

    const { scrollYProgress } = useScroll({
        target: AboutSectionbox,
        offset: ['start start', 'end end']
    })

    const first = useTransform(scrollYProgress, [0.2, 0.4], ['0%', '-100%'])

    return (
        <motion.div ref={AboutSectionbox} className=' h-[600vh] bg-purple-600 relative' >
            <motion.div className=' h-screen bg-slate-800 sticky top-0'>
                <motion.p className=' w-full transform -translate-x-full  text-nowrap text-[150px] flex flex-col justify-center items-start'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo nostrum, expedita modi quibusdam ea omnis maxime, rerum, voluptate temporibus cumque sed. Nemo quasi suscipit deserunt consequuntur dignissimos commodi dolore veritatis reiciendis ea odio amet ad harum vero nisi minus iure voluptatibus perferendis velit modi ipsum laboriosam, delectus sapiente nihil.</motion.p>
                <motion.p className=' w-full  text-nowrap text-[150px] flex flex-col justify-center items-end'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo nostrum, expedita modi quibusdam ea omnis maxime, rerum, voluptate temporibus cumque sed. Nemo quasi suscipit deserunt consequuntur dignissimos commodi dolore veritatis reiciendis ea odio amet ad harum vero nisi minus iure voluptatibus perferendis velit modi ipsum laboriosam, delectus sapiente nihil.</motion.p>
                <motion.p className=' w-full  text-nowrap text-[150px] flex flex-col justify-center items-start'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo nostrum, expedita modi quibusdam ea omnis maxime, rerum, voluptate temporibus cumque sed. Nemo quasi suscipit deserunt consequuntur dignissimos commodi dolore veritatis reiciendis ea odio amet ad harum vero nisi minus iure voluptatibus perferendis velit modi ipsum laboriosam, delectus sapiente nihil.</motion.p>
            </motion.div>
        </motion.div>
    )
}

export default AboutSection
