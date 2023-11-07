import React from "react";
import Coffee from "../../assets/COFFEE.png";
import Espresso from "../../assets/ESPRESSO.png";
import Bean from "../../assets/Bean.png";
import Beans from "../../assets/Beans.png";
import "./Home.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  GiSugarCane,
  GiMilkCarton,
  GiCoffeeBeans,
  GiSpoon,
} from "react-icons/gi";
import { RiCupFill } from "react-icons/ri";
import { BiRadioCircleMarked } from "react-icons/bi";
import Cafe from "../../assets/Cafe.png";

const Home = () => {
  return (
    <div className="HomePage">
      <section>
        <div className="flex justify-center items-center h-screen flex-col relative">
          <p
            className="text-title font-Roboto mt-10"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Serving up happiness, one cup at a time
          </p>
          <h1
            className="  text-7xl  text-center md:text-8xl lg:text-8xl xl:text-9xl font-Roboto mt-10 font-bold text-title"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            COFFEE TASTE
          </h1>

          <p
            className="text-navtext Title-shadow font-semibold uppercase font-Roboto text-xl mt-32 "
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            A Hug in a mug
          </p>
          <div
            className="absolute right-0 xl:right-56 bottom-0 xl:bottom-56 "
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img
              src={Coffee}
              alt=""
              className="h-64 md:h-72 lg:h-96  w-auto coffeecup"
            />
          </div>
          <div
            className="absolute left-0 lg:left-5 xl:left-10 translate-y-10 md:translate-y-14 xl:translate-y-56"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src={Espresso}
              alt=""
              className="h-36 md:h-40 lg:h-60 xl:h-72 w-auto maker-shadow"
            />
          </div>
          <div
            className="absolute bean"
            data-aos="zoom-out-up"
            data-aos-duration="2000"
          >
            <img
              src={Bean}
              alt=""
              className="h-16 translate-y-10 rotate-12 coffee-shadow"
            />
          </div>
          <div
            className="absolute"
            data-aos="zoom-out-right"
            data-aos-duration="3000"
          >
            <img
              src={Beans}
              alt=""
              className="h-20 lg:h-24 translate-x-32 -translate-y-24 rotate-45 coffee-shadow"
            />
          </div>
          <div
            className="absolute"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={Beans}
              alt=""
              className="h-20 lg:h-24 -translate-x-36 lg:-translate-x-96 -translate-y-24 rotate-12 coffee-shadow"
            />
          </div>
          <div
            className="absolute"
            data-aos="zoom-out-down"
            data-aos-duration="3000"
          >
            <img
              src={Bean}
              alt=""
              className="h-10 lg:h-24 lg:-translate-y-24 -translate-y-12 rotate-45 coffee-shadow"
            />
          </div>
          <div
            className="absolute"
            data-aos="zoom-out-right"
            data-aos-duration="2500"
          >
            <img
              src={Bean}
              alt=""
              className="h-20 lg:h-24 -translate-x-12 lg:-translate-x-56 translate-y-24 coffee-shadow lg:translate-y-4 rotate-45"
            />
          </div>
          <div
            className="absolute"
            data-aos="zoom-out-right"
            data-aos-duration="3000"
          >
            <img
              src={Bean}
              alt=""
              className="h-20 lg:h-36 -translate-x-12 lg:translate-x-96 translate-y-24 coffee-shadow lg:-translate-y-56 rotate-45"
            />
          </div>
          <div
            className="absolute"
            data-aos="zoom-out-right"
            data-aos-duration="2000"
          >
            <img
              src={Bean}
              alt=""
              className="h-28 lg:h-36 -translate-x-32 lg:-translate-x-96 translate-y-56 coffee-shadow lg:-translate-y-56 -rotate-45"
            />
          </div>
          <div
            className="absolute"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={Bean}
              alt=""
              className="h-24 lg:h-36 translate-x-32 lg:translate-x-96 -translate-y-56 coffee-shadow lg:translate-y-56 rotate-12"
            />
          </div>

          <div className="bg-navtext px-3 py-2 rounded font-Roboto mt-5 block md:hidden">
            <div className="flex gap-2">
              <button className="text-xs font-Roboto">Cafe Order</button>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="flex flex-col justify-center items-center font-Roboto mt-10">
          <p className="text-navtext mb-2">Café Harmony</p>
          <h1 className="text-4xl font-semibold font-Roboto">COFFEE BLEND</h1>
          <p className="text-sm mb-10 font-Roboto">
            Coffee Symphony: The Perfect Blend
          </p>
        </div>

        <div className="flex flex-col lg:flex-row relative font-Roboto">
          <div className="flex-1 ">
            <div className="flex  lg:flex-row-reverse">
              <div className="flex justify-center items-center">
                <GiSugarCane size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="text-left text-xl px-2 lg:text-right md:pr-5 font-bold  ">
                  Sugar
                </h1>
                <p className="text-justify md:text-left mt-2 lg:text-right text-sm lg:pr-5 px-2 xl:pl-32">
                  {" "}
                  Sugar in coffee is more than sweetness; it's the alchemy that
                  transforms bitterness into a symphony of flavors, creating a
                  morning ritual worth savoring.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row-reverse mt-5">
              <div className="flex justify-center items-center">
                <GiMilkCarton size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="text-left text-xl px-2 lg:text-right md:pr-5 font-bold  ">
                  Milk
                </h1>
                <p className="text-justify md:text-left mt-2 lg:text-right text-sm lg:pr-5 px-2 xl:pl-32">
                  Milk in coffee is a silky embrace, a gentle companion that
                  tempers the brew's intensity, transforming it into a creamy
                  and comforting experience.
                </p>
              </div>
            </div>

            <div className="flex  lg:flex-row-reverse mt-5">
              <div className="flex justify-center items-center">
                <GiCoffeeBeans size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="text-left text-xl px-2 lg:text-right md:pr-5 font-bold  ">
                  Coffee Bean
                </h1>
                <p className="text-justify md:text-left mt-2 lg:text-right text-sm lg:pr-5 px-2 xl:pl-32">
                  The coffee bean is a miraculous seed, nurtured by nature and
                  artfully roasted, it holds the essence of a thousand stories
                  in every aromatic sip.
                </p>
              </div>
            </div>
          </div>

          <div className="flex  justify-center items-center ">
            <img
              src={Cafe}
              alt=""
              className="block mx-auto cafe h-56 md:h-80"
            />
          </div>

          <div className="flex-1 ">
            <div className="flex  ">
              <div className="flex justify-center items-center">
                <GiSpoon size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="text-left text-xl px-2  md:pr-5 font-bold  ">
                  Spoon
                </h1>
                <p className="text-justify md:text-left mt-2 text-sm px-2 xl:pr-32">
                  It's the conductor of taste, stirring the elements to create a
                  harmonious blend, ensuring every sip is a balanced masterpiece
                  of flavors.
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <div className="flex justify-center items-center">
                <RiCupFill size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="text-left text-xl px-2  md:pr-5 font-bold  ">
                  Mug
                </h1>
                <p className="text-justify md:text-left mt-2 text-sm px-2 xl:pr-32">
                  The coffee mug is the vessel of dreams, cradling the brew's
                  warmth in your hands, its purpose to bring comfort and elevate
                  your morning ritual to a sensory journey.
                </p>
              </div>
            </div>

            <div className="flex  mt-5">
              <div className="flex justify-center items-center">
                <BiRadioCircleMarked size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="text-left text-xl px-2 md:pr-5 font-bold  ">
                  Plate
                </h1>
                <p className="text-justify md:text-left mt-2 text-sm px-2 xl:pr-32">
                  a platform for pastries or snacks to complement
                  your brew, adding a touch of elegance to your coffee break.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
