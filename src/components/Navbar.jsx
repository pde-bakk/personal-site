import React, { useState } from 'react';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
			<div>
				<h1 className=' font-thin text-2xl italic font-serif'>PeerDB</h1>
			</div>
			{/* menu */}
			<ul className='hidden md:flex gap-x-8'>
				<li>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to='about' smooth={true} duration={500}>
						About me
					</Link>
				</li>
				<li>
					<Link to='portfolio' smooth={true} duration={500}>
						Portfolio
					</Link>
				</li>
				<li>
					<Link to='codingame' smooth={true} duration={500}>
						Codingame
					</Link>
				</li>
				<li>
					<Link to='skills' smooth={true} duration={500}>
						My skills
					</Link>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/peer-de-bakker-a5b866120/'>
						<FaLinkedin size={25} />
					</a>
				</li>
				<li>
					<a href='https://github.com/pde-bakk'>
						<FaGithub size={25} />
					</a>
				</li>
			</ul>
			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='about' smooth={true} duration={500}>
						About me
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
						Portfolio
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='codingame' smooth={true} duration={500}>
						Codingame
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
						My skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<a href='https://www.linkedin.com/in/peer-de-bakker-a5b866120/'>
						<FaLinkedin />
					</a>
				</li>
				<li className='py-6 text-4xl'>
					<a href='https://github.com/pde-bakk'>
						<FaGithub />
					</a>
				</li>

			</ul>
			{/*/!* Social icons *!/*/}
			{/*<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>*/}
			{/*    <ul>*/}
			{/*        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>*/}
			{/*            <a*/}
			{/*                className='flex justify-between items-center w-full text-gray-300'*/}
			{/*                href='/'*/}
			{/*            >*/}
			{/*                Linkedin <FaLinkedin size={30} />*/}
			{/*            </a>*/}
			{/*        </li>*/}
			{/*        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>*/}
			{/*            <a*/}
			{/*                className='flex justify-between items-center w-full text-gray-300'*/}
			{/*                href='/'*/}
			{/*            >*/}
			{/*                Github <FaGithub size={30} />*/}
			{/*            </a>*/}
			{/*        </li>*/}
			{/*        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>*/}
			{/*            <a*/}
			{/*                className='flex justify-between items-center w-full text-gray-300'*/}
			{/*                href='/'*/}
			{/*            >*/}
			{/*                Email <HiOutlineMail size={30} />*/}
			{/*            </a>*/}
			{/*        </li>*/}
			{/*        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>*/}
			{/*            <a*/}
			{/*                className='flex justify-between items-center w-full text-gray-300'*/}
			{/*                href='/'*/}
			{/*            >*/}
			{/*                Resume <BsFillPersonLinesFill size={30} />*/}
			{/*            </a>*/}
			{/*        </li>*/}
			{/*    </ul>*/}
			{/*</div>*/}
		</div>
	);
};
export default Navbar;
