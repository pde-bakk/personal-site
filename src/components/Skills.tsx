import React from 'react';
import useTitle from "./UseTitle";

const Skills = () => {
	useTitle("My 'skills'")
	return (
		<div className='w-full h-screen bg-background_colour text-gray-300'>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className=' w-full flex justify-center items-center flex-col mb-7'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
					<p className='py-4 text-2xl'>Here's a list of languages/technologies I work with, because why not?</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#1868cc] hover:scale-110 duration-500'>
						<p className='my-4'>C/C++</p>
					</div>
					<div className='shadow-md shadow-[#FFD43B] hover:scale-110 duration-500'>
						<p className='my-4'>Python</p>
					</div>
					<div className='shadow-md shadow-[#00ADD8] hover:scale-110 duration-500'>
						<p className='my-4'>Go</p>
					</div>
					<div className='shadow-md shadow-[#DEA584] hover:scale-110 duration-500'>
						<p className='my-4'>Rust</p>
					</div>
					<div className='shadow-md shadow-[#3178C6] hover:scale-110 duration-500'>
						<p className='my-4'>TypeScript</p>
					</div>
					<div className='shadow-md shadow-[#336791] hover:scale-110 duration-500'>
						<p className='my-4'>PostgreSQL</p>
					</div>
					<div className='shadow-md shadow-[#326CE5] hover:scale-110 duration-500'>
						<p className='my-4'>Kubernetes</p>
					</div>
					<div className='shadow-md shadow-[#2496ED] hover:scale-110 duration-500'>
						<p className='my-4'>Docker</p>
					</div>
					<div className='shadow-md shadow-[#FF9900] hover:scale-110 duration-500'>
						<p className='my-4'>AWS</p>
					</div>
					<div className='shadow-md shadow-[#244c5a] hover:scale-110 duration-500'>
						<p className='my-4'>gRPC</p>
					</div>
					<div className='shadow-md shadow-[#2088FF] hover:scale-110 duration-500'>
						<p className='my-4'>CI/CD</p>
					</div>
					<div className='shadow-md shadow-[#F05032] hover:scale-110 duration-500'>
						<p className='my-4'>Git</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Skills;
