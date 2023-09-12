import React from 'react';
import {KeepOffTheGrass, SpiderAttack, NatureSpirit, ZeldaWitches, Pacman, FantasticBits} from '../assets/Codingame';
import useTitle from "./UseTitle";

const Codingame = () => {
	useTitle("Peer de Bakker on Codingame");
	return (
		<div name='codingame' className='w-full text-gray-300 bg-background_colour'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8 w-full flex justify-center items-center flex-col'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
						My Codingame resume
					</p>
					<p className='py-6 text-2xl'>
						In 2020, when Covid first hit, our entire education went remote.
						This was a tall order for all of us who loved to work on Campus and
						rather struggled to motivate themselves to work from home.
						<br/><br/>
						It was then, that the 42 Network decided to organize a small bot programming contest
						just for us. My friends and I loved it and put all our time in this.
						<br/><br/>
						This contest was hosted on codingame.com who just so happen to organize these kinds of contests
						globally, twice a year.
						Since then, I have never missed an edition. I'm always looking forward to these challenges for
						months,
						and when they are over I feel a bit empty inside.
						<br/><br/>
						Aside from just being tons of fun, this has helped me discover new interests in the tech field.
						And for that, Codingame, I thank you.
						<br/><br/>
						They also offer a few other game-modes I'm enthralled with: Code golfing and Clash of Code.
						Clash of Code is a 15 minute game, where everyone gets the same exercise and has to solve it
						as fast as possible.<br/>
						Code golfing is writing a solution to the problem in as few characters of code as possible.
						<br/><br/>
						Both of these game-modes I sucked at. I had friends who loved them, and reluctantly I gave them
						a try.
						And because I was pretty bad at them, I decided to grind it and now I'm top 100 in Clash of
						Code.
					</p>
					<p className='py-6 text-l'>
						<a href={'https://www.codingame.com/profile/c6d6426a60c45cad19b5c716e713d17a6669273'}>
							My Codingame profile
						</a>
					</p>
				</div>

				{/* Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


					{/* Fall Challenge 2022 */}
					<a target="_blank" rel="noopener noreferrer" href='https://www.codingame.com/contests/fall-challenge-2022'>
					<div
						style={{backgroundImage: `url(${KeepOffTheGrass})`}}
						className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-center text-lg font-bold text-white tracking-wider'>
								Keep Off The Grass
							</span>
							<p className='text-center'>
								I ranked 56th out of 4557 participants and helped 42Paris secure #1 🏆! <br/>
								I spent so many nights together with Victor Francal at 42 for this one.
								It was a great Christmas period! <br/>
								Also, shoutout to Auguste Faure and Adrian Weaver!
							</p>
							{/*<div className='pt-8 text-center'>*/}
							{/*	<a href='https://www.codingame.com/contests/fall-challenge-2022'>*/}
							{/*		<button*/}
							{/*			className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base'>*/}
							{/*			Challenge*/}
							{/*		</button>*/}
							{/*	</a>*/}
							{/*</div>*/}
						</div>
					</div>
					</a>

					{/* Spring Challenge 2022 */}
					<div
						style={{backgroundImage: `url(${SpiderAttack})`}}
						className='shadow-lg shadow-almost_black group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-center text-lg font-bold text-white tracking-wider'>
								Spider Attack
							</span>
							<p className='text-center'>
								I finished 255th out of 7695 participants, 3 spots in front of Harm Smits. 🤪
								Helped bring Codam to 7th on the Schools ranking.
							</p>
							<div className='pt-8 text-center'>
								<a href='https://www.codingame.com/contests/spring-challenge-2022'>
									<button
										className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base'>
										Challenge
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Spring Challenge 2021 */}
					<div
						style={{backgroundImage: `url(${NatureSpirit})`}}
						className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-center text-lg font-bold text-white tracking-wider'>
								Nature Spirit
							</span>
							<p className='text-center'>
								I finished 309th out of 6867 participants, just shy of Legend league.
								Helped bring Codam to 9th on the Schools ranking.
							</p>
							<div className='pt-8 text-center'>
								<a href='https://www.codingame.com/contests/spring-challenge-2021'>
									<button
										className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base'>
										Challenge
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Fall Challenge 2020 */}
					<div
						style={{backgroundImage: `url(${ZeldaWitches})`}}
						className='shadow-lg shadow-almost_black group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-center text-lg font-bold text-white tracking-wider'>
								Zelda Witches
							</span>
							<p className='text-center'>
								I finished 424th out of 7011 participants.
								On the last night, me and Aristotelis Bobas stayed up most of the night hotfixing
								in order to enter (succesfully) enter Gold League.
							</p>
							<div className='pt-8 text-center'>
								<a href='https://www.codingame.com/contests/spring-challenge-2021'>
									<button
										className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base'>
										Challenge
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* Spring Challenge 2020 */}
					<div
						style={{backgroundImage: `url(${Pacman})`}}
						className='shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-center text-lg font-bold text-white tracking-wider'>
								Pacman with a<br/>
								Rock Paper Scissors twist
							</span>
							<p className='text-center'>
								Finished 234th out of 4955 participants, one spot below Stan Verschuuren.
								On the very last day, I jumped ship to 42Paris to help them secure a top 3 ranking.
							</p>
							<div className='pt-8 text-center'>
								<a href='https://www.codingame.com/contests/spring-challenge-2021'>
									<button
										className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base'>
										Challenge
									</button>
								</a>
							</div>
						</div>
					</div>

					{/* 42Network challenge */}
					<div
						style={{backgroundImage: `url(${FantasticBits})`}}
						className='shadow-lg shadow-almost_black group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover Effects */}
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-center text-lg font-bold text-white tracking-wider'>
								Fantastic Bits<br/>
								42Network Edition
							</span>
							<p className='text-center'>
								I finished 70th out of 358 participants.
								Not bad for a first timer who only learned how to code half a year prior, huh?
							</p>
							<div className='pt-8 text-center'>
								<a href='https://www.codingame.com/contests/spring-challenge-2021'>
									<button
										className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base'>
										Challenge
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
export default Codingame;
