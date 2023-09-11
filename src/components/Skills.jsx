import React from 'react';

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen bg-background_colour text-gray-300'>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className=' w-full flex justify-center items-center flex-col mb-7'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
					<p className='py-4 text-2xl'>Here's a list of languages/technologies I work with, because why not?</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#1868cc] hover:scale-110 duration-500'>
						<p className='my-4'>C</p>
					</div>
					<div className='shadow-md shadow-[#FFD43B] hover:scale-110 duration-500'>
						<p className='my-4'>Python</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<p className='my-4'>C++</p>
					</div>
					<div className='shadow-md shadow-[#1868cc] hover:scale-110 duration-500'>
						<p className='my-4'>VB.NET</p>
					</div>
					<div className='shadow-md shadow-[#1868cc] hover:scale-110 duration-500'>
						<p className='my-4'>Github</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<p className='my-4'>React</p>
					</div>
					<div className='shadow-md shadow-[#e0115f] hover:scale-110 duration-500'>
						<p className='my-4'>Ruby</p>
					</div>
					<div className='shadow-md shadow-[#1868cc] hover:scale-110 duration-500'>
						<p className='my-4'>Assembly</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Skills;
