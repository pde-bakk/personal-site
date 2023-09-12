import React from "react";
import useTitle from "./UseTitle";

const About = () => {
	useTitle("About Peer de Bakker");
	return (
		<div
			name="about"
			id="about"
			className="w-full h-screen bg-background_colour text-gray-300"
		>

			<div className="flex flex-col justify-center items-center w-full h-full">

				<p className="text-4xl font-bold inline border-b-4 border-cyan-500">
					About Peer de Bakker
				</p>
				<div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
					<div className="max-w-[1000px] w-full text-center gap-8 px-4">
						<p>
							I'm a Software Engineer, graduated from Codam and 42Paris.
						</p>
						<p>
							Back in 2019, I did the piscine at Codam (Amsterdam) and it was there I wrote my first ever lines of code.
							Since then, it's been a wild journey which has given me a wealth of hobbies and skills.
							During these 2 years I've learnt many a thing about Software Engineering, Embedded Systems and Web Development (Front and Back).
						</p>
						<br/>
						<p>
								After finishing the Common Core (read: Bachelor), I was intrigued by AI and decided to make it my focus area.
								Because I also believed that every engineer should have at least some knowledge about Cyber Security (since it's becoming ever so important),
								I went ahead and also dived into Binary Exploitation and Reverse Engineering.
								That, combined with listening to tons of Darknet Diaries, has brought me to now pursue a career in Cyber Security.
						</p>

					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
