import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
        <h1 className='text-7xl font-bold text-[#00d59a] text-center'>Projects</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>MetEmployed - EduSands Hacks Winner</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>Tackling social equity by providing the less fortunate with the same opportunities. This project was geared towards addressing a real-world societal problem. I worked on the front-end as well as some back-end.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://devpost.com/software/soluhacks' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>BioSafe3D</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>The goal was to increase the efficiency of 3D printers while simultaneously making them more affordable, eco-friendly, user-friendly, and efficient. One of our groups aims is to improve the printing process.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://www.linkedin.com/in/syed-kaab-surkhi/details/projects/1725677988584/single-media-viewer/?profileId=ACoAADw7DekBf3zuNXNi6JV7W3xczKhJaG8_5OA' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>ExploreWorld-Unity</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>This project is a world exploration game that includes real world physics to control objects such as vehicles in a fun and interesting way. Developments are ongoing.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://github.com/SurkhiSyed/Final-ExploreWorld' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>WorldTreeSweeper - Unity</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>This game was created using the Unity Game Engine with a solo-type RPG in mind, with the task of controlling the avatar through challenging terrain and difficult enemies. Real world physics that learned in Grade 11 and 12 was taken into consideration and different principles were applied.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://github.com/SurkhiSyed/WorldTreeSweeper-Unity?tab=readme-ov-file' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>DinoNFT - HawkHacks 3rd Place Winner</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>DinoNFT is a simple web3 dino running game, similar to that of the google offline game. It incorporates a reward system for the player based on their score by allowing them to connect their blockchain wallet to the game, and transfer tokens from the owner's wallet to theirs.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://github.com/SurkhiSyed/Hack' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>     
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>Inclusee</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>
                    Inclusee is an accessibility addon for Adobe Express that helps designers ensure their creations are accessible to individuals with low vision, dyslexia, and other visual impairments. Incorporating real-time feedback and suggestions by analyzing colors, fonts, and layouts used in design.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://devpost.com/software/inclusee' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>Vireel - Startup</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>
                    Vireel is currently a news app that aggregates content from multiple APIs to deliver news in a concise and user-friendly format, allowing users to receive quick summaries tailored to their interests, save their favorite stories, share comments, and engage in discussions instead of sifting through long articles as it expands into a startup.
                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://github.com/SurkhiSyed/Vireel' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>       
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#386e4f80]'>
                <p className='text-center text-1xl font-bold text-white my-6'>Average Land Temperatures Analyzer</p>
                <div className='text-center font-medium'>
                    <p className='py-1 text-white mx-8 mt-2'>
                    'Developed a C program that studies different average land temperatures over 3 centuries using CSV files and outputs different averages. Used GNU Plots to create different plots in respect to the outputted data to evaluate trends and report conclusions.                    </p>
                </div>
                <p></p>
                <button className='bg-[#ffffff] w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3'>
                <Link to='https://github.com/SurkhiSyed/LandAverageTemperatures' target='_blank' rel='noopener noreferrer'>Click Here</Link>
                </button>
            </div>            
        </div>
    </div>
  )
}

export default Cards;