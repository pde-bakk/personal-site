import React from 'react';
import code from '../assets/code2.png';
import webserv_png from '../assets/webserv.png';
import gomoku_png from '../assets/gomoku.png';
import ft_transcendence_jpg from '../assets/ft_transcendence.jpg';

const Portfolio = () => {
	return (
		<div name='portfolio' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
			<br/><br/><br/>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8 w-full flex justify-center items-center flex-col'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
						My Portfolio
					</p>
					<p className='py-6 text-2xl'>
						<a href={'https://github.com/42pde-bakk/42Cursus'}>Click here for the complete overview of my University projects.</a>
					</p>
				</div>
				{/* Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${webserv_png})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
			  <span className=' text-lg font-bold text-white tracking-wider'>
				Our own webserver
			  </span>
							<p className='text-center'>Together with Sam Kortekaas and Tuan Perera, I wrote a lightweight version of nginx.</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/42pde-bakk/webserv.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										View the code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${code})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
			  <span className=' text-lg font-bold text-white tracking-wider'>
				ft_containers
			  </span>
							<p className='text-center'>The best way to learn the C++ vector, map and deque is by rewriting them!</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/42pde-bakk/ft_containers.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										View the code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${code})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
			  <span className=' text-lg font-bold text-white tracking-wider'>
				My own SSL
			  </span>
							<p className='text-center'>Rewriting the MD5, SHA256, DES and RSA algorithms.</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/42pde-bakk/ft_ssl.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										View the code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${gomoku_png})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
			  <span className=' text-lg font-bold text-white tracking-wider'>
				Gomoku AI
			  </span>
							<p className='text-center'>Our own AI that beats us at Gomoku. Minimax + Alphabeta pruning. Created together with Arturs Bumbieris.</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/42pde-bakk/gomoku.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										View the code, and play against it if you dare!
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${code})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
			  <span className=' text-lg font-bold text-white tracking-wider'>
				Hacking 🕵️
			  </span>
							<p className='text-center'>Here, Xavier Perrin and me reverse engineered C and C++ binaries, and exploited those.</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/42pde-bakk/rainfall.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Rainfall
									</button>
								</a>
								<a href='https://github.com/42pde-bakk/override.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Override
									</button>
								</a>
							</div>
						</div>
					</div>


					<div
						style={{ backgroundImage: `url(${ft_transcendence_jpg})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
			  <span className=' text-lg font-bold text-white tracking-wider'>
				ft_transcendence
			  </span>
							<p className='text-center text-sm'>
								Our own pong tournament website, complete with guilds, matchmaking, chatrooms, friends.<br/>
								Co-authors: Sam Kortekaas and Soufiane El Melcaoui
							</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/42pde-bakk/ft_transcendence.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										View the code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${code})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
			  <span className=' text-lg font-bold text-white tracking-wider'>
				Kubernetes
			  </span>
							<p className='text-center'>K8s</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/42pde-bakk/ft_services.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										ft_services
									</button>
								</a>
								<a href='https://github.com/42pde-bakk/inception-of-things.git'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Inception-of-Things
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Portfolio;
