import React from 'react'
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div className="flex justify-center">
        <Helmet><title>Bicycle System | About</title></Helmet>
            <div className="max-w-7xl w-full">
                <div className="py-16 px-16">
                    <h1 className="abt-titles">About Tulin Bicycle Shop</h1>
                    <div className="grid grid-cols-3 mt-5">
                        <div className="col-span-1 w-3/4">
                            <img className="object-cover w-full rounded-md ml-5 shadow-xl" src="/image/tulinowner.jpg" alt="owner" />
                        </div>
                        <div className="col-span-2">
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur, deleniti nesciunt repudiandae dolore ducimus itaque possimus sit. Eius iste ullam beatae ratione eum incidunt voluptate vel reiciendis, architecto est, modi illo, recusandae possimus animi. Reiciendis, incidunt eum? Iure, similique magni. Consequatur saepe maiores recusandae corporis cupiditate modi vel, doloribus sint laborum quam ab sed soluta fugit illum culpa repellat a, nisi in voluptatum rem! Accusamus, impedit? Tempore deserunt a itaque in quibusdam vel sapiente rem alias inventore facilis. Repudiandae, dolores dolorem molestias nesciunt quidem odio porro voluptatibus? Eius ea esse numquam vero dolor est cum incidunt tenetur facere nihil.</p>
                        </div>
                    </div>
                </div>

                <div className="px-16 py-16">
                    <h1 className="abt-titles">Our Mission</h1>
                    <div className="grid grid-cols-3 mt-5">
                        <div className="col-span-2">
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur, deleniti nesciunt repudiandae dolore ducimus itaque possimus sit. Eius iste ullam beatae ratione eum incidunt voluptate vel reiciendis, architecto est, modi illo, recusandae possimus animi. Reiciendis, incidunt eum? Iure, similique magni. Consequatur saepe maiores recusandae corporis cupiditate modi vel, doloribus sint laborum quam ab sed soluta fugit illum culpa repellat a, nisi in voluptatum rem! Accusamus, impedit? Tempore deserunt a itaque in quibusdam vel sapiente rem alias inventore facilis. Repudiandae, dolores dolorem molestias nesciunt quidem odio porro voluptatibus? Eius ea esse numquam vero dolor est cum incidunt tenetur facere nihil.</p>
                        </div>
                        <div className="col-span-1 justify-items-center w-full">
                            <img className="object-cover w-full h-32 rounded-md ml-5 shadow-xl" src="/image/tulinfront.jpg" alt="front" />
                            <div className="flex mt-2 w-full gap-2 ml-4">
                                <img className="object-cover w-1/2 rounded-md shadow-xl" src="/image/tulinfronttop.jpg" alt="fronttop" />
                                <img className="object-cover w-1/2 rounded-md shadow-xl" src="/image/bikefront.jpg" alt="bikefront" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-16 py-12 text-center">
                    <h1 className="abt-titles">Our Vision</h1>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam repellendus perspiciatis aperiam voluptas laboriosam temporibus blanditiis inventore, voluptatibus eum ratione amet aspernatur consequuntur nisi omnis explicabo ad. Non qui autem mollitia quo eius impedit corporis perspiciatis laboriosam ut magni. Consequatur commodi molestiae esse expedita quos eum necessitatibus suscipit voluptatibus?</p>
                </div>

                <div className="px-16 py-16">
                    <h1 className="abt-titles">Store Branches</h1>
                    <div className="flex mt-5">
                        <img className="w-48 rounded-xl" src="/image/tulinfront.jpg" alt="tanza" />
                        <div className="ml-4">
                            <p>Mulawin Tanza, Cavite</p>
                            <p>(02) 12-345-67</p>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <img className="w-48 rounded-xl" src="/image/tulinfront.jpg" alt="tanza" />
                        <div className="ml-4">
                            <p>Mulawin Tanza, Cavite</p>
                            <p>(02) 12-345-67</p>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <img className="w-48 rounded-xl" src="/image/tulinfront.jpg" alt="tanza" />
                        <div className="ml-4">
                            <p>Mulawin Tanza, Cavite</p>
                            <p>(02) 12-345-67</p>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <img className="w-48 rounded-xl" src="/image/tulinfront.jpg" alt="tanza" />
                        <div className="ml-4">
                            <p>Mulawin Tanza, Cavite</p>
                            <p>(02) 12-345-67</p>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default About
