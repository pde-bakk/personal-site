import React from "react";

const About = () => {
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
            {/*<div>*/}
            <p>
              {" "}
              I'm a software engineering student at 42Paris. I originally
              started off at Codam, 42Paris' sister school in Amsterdam, the
              Netherlands. Back in 2019, I did the piscine and it was there I
              wrote my first ever lines of code. Since then, it's been a wild
              journey which has given me many new hobbies and skills.
              <br />
              <br />
              After finishing the Common Core (read: Bachelor), I was intrigued
              by AI and decided to make it my focus area. Because I also
              believed that every engineer should have at least some knowledge
              about cybersecurity since it is becoming so important, I went
              ahead and also dived into Binary Exploitation and Reverse
              Engineering. That, combined with listening to many an episode of
              Darknet Diaries, has brought me to pursue a career in
              cybersecurity.
            </p>
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
