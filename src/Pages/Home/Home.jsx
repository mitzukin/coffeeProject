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
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="HomePage">
      <section>
        <div className="relative flex flex-col items-center justify-center h-screen">
          <p
            className="mt-10 text-title font-Roboto"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Serving up happiness, one cup at a time
          </p>
          <h1
            className="mt-10 font-bold text-center text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-Roboto text-title"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            COFFEE TASTE
          </h1>

          <p
            className="mt-32 text-xl font-semibold uppercase text-navtext Title-shadow font-Roboto "
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            A Hug in a mug
          </p>
          <div
            className="absolute bottom-0 right-0 xl:right-56 xl:bottom-56 "
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img
              src={Coffee}
              alt=""
              className="w-auto h-64 md:h-72 lg:h-96 coffeecup"
            />
          </div>
          <div
            className="absolute left-0 translate-y-10 lg:left-5 xl:left-10 md:translate-y-14 xl:translate-y-56"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src={Espresso}
              alt=""
              className="w-auto h-36 md:h-40 lg:h-60 xl:h-72 maker-shadow"
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
              className="h-20 rotate-45 translate-x-32 -translate-y-24 lg:h-24 coffee-shadow"
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
              className="h-20 -translate-y-24 lg:h-24 -translate-x-36 lg:-translate-x-96 rotate-12 coffee-shadow"
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
              className="h-10 rotate-45 -translate-y-12 lg:h-24 lg:-translate-y-24 coffee-shadow"
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
              className="h-20 rotate-45 -translate-x-12 translate-y-24 lg:h-24 lg:-translate-x-56 coffee-shadow lg:translate-y-4"
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
              className="h-20 rotate-45 -translate-x-12 translate-y-24 lg:h-36 lg:translate-x-96 coffee-shadow lg:-translate-y-56"
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
              className="-rotate-45 -translate-x-32 translate-y-56 h-28 lg:h-36 lg:-translate-x-96 coffee-shadow lg:-translate-y-56"
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
              className="h-24 translate-x-32 -translate-y-56 lg:h-36 lg:translate-x-96 coffee-shadow lg:translate-y-56 rotate-12"
            />
          </div>

          <div className="block px-3 py-2 mt-5 rounded bg-navtext font-Roboto md:hidden">
            <div className="flex gap-2">
              <button className="text-xs font-Roboto">Cafe Order</button>
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </section>
      <section className="relative pb-20">
        <div className="flex flex-col items-center justify-center mt-10 font-Roboto ">
          <p className="mb-2 text-navtext">Café Harmony</p>
          <h1 className="text-4xl font-semibold font-Roboto">COFFEE BLEND</h1>
          <p className="mb-10 text-sm font-Roboto">
            Coffee Symphony: The Perfect Blend
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row font-Roboto">
          <div className="flex-1 ">
            <div className="flex lg:flex-row-reverse">
              <div className="flex items-center justify-center">
                <GiSugarCane size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="px-2 text-xl font-bold text-left lg:text-right md:pr-5 ">
                  Sugar
                </h1>
                <p className="px-2 mt-2 text-sm text-justify md:text-lg md:text-left lg:text-right lg:pr-5 xl:pl-32">
                  {" "}
                  Sugar in coffee is more than sweetness; it's the alchemy that
                  transforms bitterness into a symphony of flavors, creating a
                  morning ritual worth savoring.
                </p>
              </div>
            </div>

            <div className="flex mt-5 lg:flex-row-reverse">
              <div className="flex items-center justify-center">
                <GiMilkCarton size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="px-2 text-xl font-bold text-left lg:text-right md:pr-5 ">
                  Milk
                </h1>
                <p className="px-2 mt-2 text-sm text-justify md:text-lg md:text-left lg:text-right lg:pr-5 xl:pl-32">
                  Milk in coffee is a silky embrace, a gentle companion that
                  tempers the brew's intensity, transforming it into a creamy
                  and comforting experience.
                </p>
              </div>
            </div>

            <div className="flex mt-5 lg:flex-row-reverse">
              <div className="flex items-center justify-center">
                <GiCoffeeBeans size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="px-2 text-xl font-bold text-left lg:text-right md:pr-5 ">
                  Coffee Bean
                </h1>
                <p className="px-2 mt-2 text-sm text-justify md:text-lg md:text-left lg:text-right lg:pr-5 xl:pl-32">
                  The coffee bean is a miraculous seed, nurtured by nature and
                  artfully roasted, it holds the essence of a thousand stories
                  in every aromatic sip.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <img
              src={Cafe}
              alt=""
              className="block h-56 mx-auto cafe md:h-80"
            />
          </div>

          <div className="flex-1 ">
            <div className="flex ">
              <div className="flex items-center justify-center">
                <GiSpoon size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="px-2 text-xl font-bold text-left md:pr-5 ">
                  Spoon
                </h1>
                <p className="px-2 mt-2 text-sm text-justify md:text-lg md:text-left xl:pr-32">
                  It's the conductor of taste, stirring the elements to create a
                  harmonious blend, ensuring every sip is a balanced masterpiece
                  of flavors.
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <div className="flex items-center justify-center">
                <RiCupFill size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="px-2 text-xl font-bold text-left md:pr-5 ">
                  Mug
                </h1>
                <p className="px-2 mt-2 text-sm text-justify md:text-lg md:text-left xl:pr-32">
                  The coffee mug is the vessel of dreams, cradling the brew's
                  warmth in your hands, its purpose to bring comfort and elevate
                  your morning ritual to a sensory journey.
                </p>
              </div>
            </div>

            <div className="flex mt-5">
              <div className="flex items-center justify-center">
                <BiRadioCircleMarked size={40} color="#fca311" />
              </div>
              <div>
                <h1 className="px-2 text-xl font-bold text-left md:pr-5 ">
                  Plate
                </h1>
                <p className="px-2 mt-2 text-sm text-justify md:text-lg md:text-left xl:pr-32">
                  a platform for pastries or snacks to complement your brew,
                  adding a touch of elegance to your coffee break.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="px-2 mt-20 text-sm text-justify xl:px-56 font-Roboto">
          &emsp;&emsp;Amidst the chaos, a cup of coffee becomes a sanctuary of mindfulness.
          It's a pause to appreciate the present, savoring the intricate flavors
          that make each brew unique. So, as you lift that mug to your lips,
          remember you're not just drinking coffee; you're immersing yourself in
          an art form that celebrates the simple joy of living.
        </p>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 ">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full "
            />
          </div>
          <div className="flex-1 px-2 mt-5 xl:mt-32 xl:pl-8">
            <h1 className="text-6xl font-bold lg:text-7xl xl:text-8xl font-Roboto">
              Brewing Harmony: The Art of Coffee Creation
            </h1>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
