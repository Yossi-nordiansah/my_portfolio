import { useState, useEffect } from "react";
import React  from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

    const [projects, setProjects] = useState([
        {
            id:1,
            title : 'Task Tracker',
            category: 'Web App',
            description:'A web app to-do list that is simplified with features for completion and deletion from the lis',
            repo:'https://github.com/Yossi-nordiansah/task-tracker-App',
            page:'https://loquacious-horse-45d5f2.netlify.app/',
            img:'/image/task-tracker.png'
        },
        {
            id:2,
            title : 'Books App',
            category: 'Web App',
            description:'A web app that is useful for storing book data, featuring Create, Read, Update, and Delete functionalities     Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quam laborum tenetur maxime! Reiciendis fugiat nemo, et, quaerat beatae eaque dignissimos perspiciatis architecto, quam delectus cum nisi voluptas laborum. Facere.',
            repo:'https://github.com/Yossi-nordiansah/task-tracker-App',
            page:'https://yossi-nordiansah.github.io/books-app//',
            img:'/image/books-app.png'
        },
        {
            id:3,
            title : 'Books App',
            category: 'Web App',
            description:'A web app that is useful for storing book data, featuring Create, Read, Update, and Delete functionalities',
            repo:'https://github.com/Yossi-nordiansah/task-tracker-App',
            page:'https://yossi-nordiansah.github.io/books-app//',
            img:'/image/books-app.png'
        },
        {
            id:4,
            title : 'Books App',
            category: 'Web App',
            description:'A web app that is useful for storing book data, featuring Create, Read, Update, and Delete functionalities',
            repo:'https://github.com/Yossi-nordiansah/task-tracker-App',
            page:'https://yossi-nordiansah.github.io/books-app//',
            img:'/image/books-app.png'
        },
        {
            id:5,
            title : 'Books App',
            category: 'Web App',
            description:'A web app that is useful for storing book data, featuring Create, Read, Update, and Delete functionalities',
            repo:'https://github.com/Yossi-nordiansah/task-tracker-App',
            page:'https://yossi-nordiansah.github.io/books-app//',
            img:'/image/books-app.png'
        },

    ])

    return (
        <div className='bg-gradient-to-b min-h-screen pt-32 from-blue-950 to-blue-800'>
            <h1 className="font-poppins font-bold text-4xl text-center text-blue-300 mb-16">Projects</h1>
            <div className='w-[80%] mx-auto mt-7 flex flex-col pb-20'>
                <Slider {...settings}>
                {
                    projects.map((item) => (
                        <div key={item.id} className='bg-[#0e1b34] overflow-hidden w-72 pb-3 rounded-lg border-2 flex flex-col border-white'>
                            <img src={item.img} className='' alt="" />
                            <div className='py-3 px-4'>
                                <h1 className='text-white text-2xl font-poppins font-bold underline mb-1'>{item.title}</h1>
                                <p className='font-inter text-white font-semibold'>{item.category}</p>
                                <p className='font-inter text-white max-w-full mt-1 text-justify mb-2 max-h-[68px] scrollbar-hide overflow-auto'>{item.description}</p>
                            </div>
                            <div className='mt-auto px-4 flex gap-3'>
                                <a href={item.repo} target='_blank'>
                                    <button title='see repository' className='px-2 py-1 border-2 hover:bg-yellow-400 rounded-md bg-yellow-500'><img src="icons/code.svg" alt="" /></button>
                                </a>
                                <a href={item.page} target='_blank'>
                                    <button title='go to page' className='px-2 py-1 border-2 hover:bg-yellow-400 rounded-md bg-yellow-500'><img src="icons/preview.svg" alt="" /></button>
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

// const MySlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <Slider {...settings}>
//             <div>
//                 <h3>Slide 1</h3>
//             </div>
//             <div>
//                 <h3>Slide 2</h3>
//             </div>
//             <div>
//                 <h3>Slide 3</h3>
//             </div>
//             {/* Add more slides */}
//         </Slider>
//     );
// };

// export default MySlider;