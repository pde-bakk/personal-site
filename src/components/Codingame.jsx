import React from "react";
import {
  KeepOffTheGrass,
  SpiderAttack,
  NatureSpirit,
  ZeldaWitches,
  Pacman,
  FantasticBits,
} from "../assets/Codingame";
import useTitle from "./UseTitle";
import { useTranslation } from "react-i18next";

const Codingame = () => {
  const [t] = useTranslation("codingame");
  useTitle(t("title"));
  return (
    <div name="codingame" className="w-full text-gray-300 bg-background_colour">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            {t("p-title")}
          </p>
          <p className="py-6 text-2xl">
            {t("text.p1")}
            <br />
            <br />
            {t("text.p2")}
            <br />
            <br />
            {t("text.p3")}
            <br />
            <br />
            {t("text.p4")}
            <br />
            <br />
            {t("text.p5")}
            <br />
            {t("text.p6")}
            <br />
            <br />
            {t("text.p7")}
          </p>
          <p className="py-6 text-l">
            <a
              href={
                "https://www.codingame.com/profile/c6d6426a60c45cad19b5c716e713d17a6669273"
              }
            >
              {t("profile-title")}
            </a>
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Fall Challenge 2022 */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.codingame.com/contests/fall-challenge-2022"
          >
            <div
              style={{ backgroundImage: `url(${KeepOffTheGrass})` }}
              className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
                <span className="text-center text-lg font-bold text-white tracking-wider">
                  Keep Off The Grass
                </span>
                <p className="text-center">
                  {t("keep-off-the-grass.p1")} 🏆
                  <br />
                  {t("keep-off-the-grass.p2")}
                  <br />
                  {t("keep-off-the-grass.p3")}
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
            style={{ backgroundImage: `url(${SpiderAttack})` }}
            className="shadow-lg shadow-almost_black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-center text-lg font-bold text-white tracking-wider">
                Spider Attack
              </span>
              <p className="text-center">
                {t("spider-attack.p1")}
                🤪
                {t("spider-attack.p2")}
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.codingame.com/contests/spring-challenge-2022">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base">
                    {t("challenge")}
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Spring Challenge 2021 */}
          <div
            style={{ backgroundImage: `url(${NatureSpirit})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-center text-lg font-bold text-white tracking-wider">
                Nature Spirit
              </span>
              <p className="text-center">{t("nature-spirit.p1")}</p>
              <div className="pt-8 text-center">
                <a href="https://www.codingame.com/contests/spring-challenge-2021">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base">
                    {t("challenge")}
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Fall Challenge 2020 */}
          <div
            style={{ backgroundImage: `url(${ZeldaWitches})` }}
            className="shadow-lg shadow-almost_black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-center text-lg font-bold text-white tracking-wider">
                Zelda Witches
              </span>
              <p className="text-center">{t("zelda-witches.p1")}</p>
              <div className="pt-8 text-center">
                <a href="https://www.codingame.com/contests/spring-challenge-2021">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base">
                    {t("challenge")}
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Spring Challenge 2020 */}
          <div
            style={{ backgroundImage: `url(${Pacman})` }}
            className="shadow-lg shadow-white group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-center text-lg font-bold text-white tracking-wider">
                {t("pacman.title")}
                {/*Pacman with a<br />*/}
                {/*Rock Paper Scissors twist*/}
              </span>
              <p className="text-center">{t("pacman.p1")}</p>
              <div className="pt-8 text-center">
                <a href="https://www.codingame.com/contests/spring-challenge-2021">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base">
                    {t("challenge")}
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* 42Network challenge */}
          <div
            style={{ backgroundImage: `url(${FantasticBits})` }}
            className="shadow-lg shadow-almost_black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-center text-lg font-bold text-white tracking-wider">
                Fantastic Bits
                <br />
                42Network Edition
              </span>
              <p className="text-center">{t("fantastic-bits.p1")}</p>
              <div className="pt-8 text-center">
                <a href="https://www.codingame.com/contests/spring-challenge-2021">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-base">
                    {t("challenge")}
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
