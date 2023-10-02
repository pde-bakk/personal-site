import React from "react";
import {
  webserv_img,
  gomoku_img,
  ft_transcendence_img,
} from "../assets/Projects";
import {
  kubernetes,
  cplusplus,
  encryption,
  ghidra,
  malware,
  machinelearning,
} from "../assets/Skills";
import useTitle from "./UseTitle";

const Portfolio = () => {
  useTitle("Peer de Bakker's portfolio");
  return (
    <div className="w-full h-max text-gray-300 bg-background_colour">
      <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            My Portfolio
          </p>
          <p className="py-6 text-2xl">
            <a href={"https://github.com/42pde-bakk/42Cursus"}>
              Click here for the complete overview of my University projects.
            </a>
          </p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${webserv_img})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Our own webserver
              </span>
              <p className="text-center">
                Together with Sam Kortekaas and Tuan Perera, I wrote a
                lightweight version of nginx.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/webserv.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View the code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cplusplus})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                ft_containers
              </span>
              <p className="text-center">
                The best way to learn the C++ vector, map and deque is by
                rewriting them!
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/ft_containers.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View the code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${encryption})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                My own SSL
              </span>
              <p className="text-center">
                Rewriting the MD5, SHA256, DES and RSA algorithms.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/ft_ssl.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View the code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${gomoku_img})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Gomoku AI
              </span>
              <p className="text-center">
                Our own AI that beats us at Gomoku. Minimax + Alphabeta pruning.
                Created together with Arturs Bumbieris.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/gomoku.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View the code, and play against it if you dare!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ghidra})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Hacking 🕵️
              </span>
              <p className="text-center">
                Here, Xavier Perrin and me reverse engineered C and C++
                binaries, and exploited those.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/rainfall.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Rainfall
                  </button>
                </a>
                <a href="https://github.com/42pde-bakk/override.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Override
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ft_transcendence_img})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                ft_transcendence
              </span>
              <p className="text-center text-sm">
                Our own pong tournament website, complete with guilds,
                matchmaking, chatrooms, friends.
                <br />
                Co-authors: Sam Kortekaas and Soufiane El Melcaoui
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/ft_transcendence.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    View the code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${kubernetes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Kubernetes
              </span>
              <p className="text-center">K8s</p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/ft_services.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    ft_services
                  </button>
                </a>
                <a href="https://github.com/42pde-bakk/inception-of-things.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Inception-of-Things
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${machinelearning})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Machine Learning
              </span>
              <p className="text-center">
                A variety of projects centered around Machine Learning.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/ml_modules.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    ML modules
                  </button>
                </a>
                <a href="https://github.com/42pde-bakk/DSLR.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-m">
                    Data Science Logistic Regression
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${malware})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Our own computer virus
              </span>
              <p className="text-center">
                Together with Louisa Malki Haegel, I am currently working on the
                Virus branch of 42.
              </p>
              <div className="pt-8 text-center">
                <a href="https://github.com/42pde-bakk/woody_woodpacker.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-m">
                    woody_woodpacker (coming soon)
                  </button>
                </a>
                <a href="https://github.com/42pde-bakk/dr_quine.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Dr-Quine
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
