import { useState, useEffect } from "react";
import React  from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import taskTracker from "../assets/image/task-tracker.png";
import bookApp from '../assets/image/books-app.png';
import passwordGenerator from '../assets/image/password-generator.png';
import calculator from '../assets/image/calculator.png';
import dapur_Minang from '../assets/image/dapurMinang.png';
import netplix from '../assets/image/netflix.png';
import external from '../assets/icons/external-link.svg';
import sc from '../assets/icons/code.svg';

const Project = () => {

    const [settings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
                responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    })

    const [projects] = useState([
        {
            id:1,
            title : 'Task Tracker',
            category: 'CRUD App',
            description:'A web app to-do list that is simplified with features for completion and deletion from the lis',
            repo:'https://github.com/Yossi-nordiansah/task-tracker-App',
            page:'https://loquacious-horse-45d5f2.netlify.app/',
            img:taskTracker
        },
        {
            id:2,
            title : 'Books App',
            category: 'CRUD App',
            description:'A web app that is useful for storing book data, featuring Create, Read, Update, and Delete functionalities.',
            repo:'https://github.com/Yossi-nordiansah/task-tracker-App',
            page:'https://yossi-nordiansah.github.io/books-app//',
            img:bookApp
        },
        {
            id:3,
            title : 'Password Generator',
            category: 'Generate App',
            description:'A web app that functions to generate a random password based on the username you input.',
            repo:'https://github.com/Yossi-nordiansah/password-generator',
            page:'https://yossi-nordiansah.github.io/password-generator/',
            img:passwordGenerator
        },
        {
            id:4,
            title : 'Calculator',
            category: 'Calculator',
            description:'A simple calculator App',
            repo:'https://github.com/Yossi-nordiansah/kalkulator',
            page:'https://yossi-nordiansah.github.io/kalkulator/',
            img:calculator
        },
        {
            id:5,
            title : 'Dapur Minang',
            category: 'Restaurant Landing Page',
            description:'This is a landing page for the "Dapur Minang" restaurant website, equipped with simple and attractive animations. Additionally, this landing page is also equipped with a dark mode to better suit users.',
            repo:'https://github.com/Yossi-nordiansah/dapur-minang',
            page:'https://yossi-nordiansah.github.io/dapur-minang/',
            img: dapur_Minang
        },
        {
            id:6,
            title : 'Netflix Clone',
            category: 'Landing Page',
            description:'A cloning of the Netflix landing page.',
            repo:'https://github.com/Yossi-nordiansah/netplix',
            page:'https://yossi-nordiansah.github.io/netplix/',
            img:netplix
        },

    ])

    return (
        <div className='bg-gradient-to-b pt-20 pb-28 from-blue-950 to-blue-800'>
            <h1 className="font-poppins font-bold text-4xl text-center text-blue-300 mb-10">Projects</h1>
            <div className='w-[80%] mx-auto mt-7 flex flex-col'>
                <Slider {...settings}>
                {
                    projects?.map((items) => (
                        <div key={items.id} className='bg-[#0e1b34] w-72 h-fit pb-3 overflow-hidden rounded-lg border-2 flex flex-col border-white'>
                            <img src={items.img} className='w-full' alt="" />
                            <div className='py-3 px-4 group'>
                                <h1 className='text-white xl:text-2xl lg:text-[20px]  xs:text-xl font-poppins font-bold underline mb-1 '>{items.title}</h1>
                                <p className='font-inter text-white font-semibold'>{items.category}</p>
                                <p className='font-inter text-white line-clamp-1 group-hover:line-clamp-none max-w-full mt-1 transition-all duration-200 text-justify mb-2 '>{items.description}</p>
                            </div>
                            <div className='mt-auto px-4 flex gap-3'>
                                <a href={items.repo} target='_blank'>
                                    <button title='see repository' className='px-2 py-1 border-2 hover:bg-yellow-400 rounded-md bg-yellow-500'><img src={sc} alt="" /></button>
                                </a>
                                <a href={items.page} target='_blank'>
                                    <button title='visit site' className='px-2 py-1 border-2 hover:bg-yellow-400 rounded-md bg-yellow-500'><img src={external} alt="" /></button>
                                </a>
                            </div>
                        </div>
                    ))
                }
                </Slider>

            </div>
        </div>
    )
}

export default Project;
