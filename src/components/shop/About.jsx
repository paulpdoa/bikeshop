import React,{ useEffect } from 'react'
import { Helmet } from 'react-helmet';
import LogoutModal from '../modals/LogoutModal';
import { motion,useAnimation } from 'framer-motion';
import {useInView}  from 'react-intersection-observer';

const topVariant = {
    hidden: {
        y:-100,
        opacity:0
    },
    visible: {
        duration:2,
        y:0,
        opacity:1
    }
}

const About = ({ logoutMssg }) => {

    const {ref,inView} = useInView({
        threshold:0.3
    })
    const animation = useAnimation();
    useEffect(() => {
        if(inView) {
            animation.start('visible')
        } else {
            animation.start('hidden')
        }
    },[animation, inView])


    return (
        <div className="flex justify-center">
        <Helmet><title>Bicycle System | About</title></Helmet>
            <div className="max-w-7xl w-full">
                <motion.div ref={ref} className="py-16 px-16 h-screen"
                variants={topVariant}
                initial="hidden"
                animate={animation}
                >
                    <h1 className="abt-titles">About Tulin Bicycle Shop</h1>
                    <div className="grid grid-cols-3 mt-5">
                        <div className="col-span-1 w-3/4">
                            <img className="object-cover w-full rounded-md ml-5 shadow-xl" src="/image/tulinowner.jpg" alt="owner" />
                        </div>
                        <div className="col-span-2">
                            <p className="text-justify text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur, deleniti nesciunt repudiandae dolore ducimus itaque possimus sit. Eius iste ullam beatae ratione eum incidunt voluptate vel reiciendis, architecto est, modi illo, recusandae possimus animi. Reiciendis, incidunt eum? Iure, similique magni. Consequatur saepe maiores recusandae corporis cupiditate modi vel, doloribus sint laborum quam ab sed soluta fugit illum culpa repellat a, nisi in voluptatum rem! Accusamus, impedit? Tempore deserunt a itaque in quibusdam vel sapiente rem alias inventore facilis. Repudiandae, dolores dolorem molestias nesciunt quidem odio porro voluptatibus? Eius ea esse numquam vero dolor est cum incidunt tenetur facere nihil.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="px-16 py-16 h-screen"
               
                >
                    <h1 className="abt-titles">Our Mission</h1>
                    <div className="grid grid-cols-3 mt-5">
                        <div className="col-span-2">
                            <p className="text-justify text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur, deleniti nesciunt repudiandae dolore ducimus itaque possimus sit. Eius iste ullam beatae ratione eum incidunt voluptate vel reiciendis, architecto est, modi illo, recusandae possimus animi. Reiciendis, incidunt eum? Iure, similique magni. Consequatur saepe maiores recusandae corporis cupiditate modi vel, doloribus sint laborum quam ab sed soluta fugit illum culpa repellat a, nisi in voluptatum rem! Accusamus, impedit? Tempore deserunt a itaque in quibusdam vel sapiente rem alias inventore facilis. Repudiandae, dolores dolorem molestias nesciunt quidem odio porro voluptatibus? Eius ea esse numquam vero dolor est cum incidunt tenetur facere nihil.</p>
                        </div>
                        <div className="col-span-1 justify-items-center w-full">
                            <img className="object-cover w-full h-32 rounded-md ml-5 shadow-xl" src="/image/tulinfront.jpg" alt="front" />
                            <div className="flex mt-2 w-full gap-2 ml-4">
                                <img className="object-cover w-1/2 rounded-md shadow-xl" src="/image/tulinfronttop.jpg" alt="fronttop" />
                                <img className="object-cover w-1/2 rounded-md shadow-xl" src="/image/bikefront.jpg" alt="bikefront" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="px-16 py-12 text-center h-screen">
                    <h1 className="abt-titles">Our Vision</h1>
                    <p className="mt-5 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam repellendus perspiciatis aperiam voluptas laboriosam temporibus blanditiis inventore, voluptatibus eum ratione amet aspernatur consequuntur nisi omnis explicabo ad. Non qui autem mollitia quo eius impedit corporis perspiciatis laboriosam ut magni. Consequatur commodi molestiae esse expedita quos eum necessitatibus suscipit voluptatibus?</p>
                </div>

                <div className="px-16 py-16">
                    <h1 className="abt-titles">Store Branch</h1>
                    <div className="flex">
                        <img className="w-48 rounded-xl" src="/image/tulinfront.jpg" alt="tanza" />
                        <div className="ml-4">
                            <p>Mulawin Tanza, Cavite</p>
                            <p>(02) 12-345-67</p>
                        </div>
                    </div>
                </div>
            </div>          
            { logoutMssg && <LogoutModal /> } 
        </div>
    )
}

export default About
