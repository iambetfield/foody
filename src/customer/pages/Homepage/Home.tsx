import "./Home.css";
import MultipleItemCarrousel from "./MultipleItemCarrousel";
import { restaurants } from "../../../types/types";
import RestaurantCard from "./RestaurantCard";

const Home = () => {
  return (
    <div>
      <section className="banner relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-5xl lg:text-8xl font-bold z-10 py-5">foody</p>
          <p className="z-10 text-gray-300 text-xl lg:text-2xl space-x-5">
            Dejate tentar
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Comidas Top
          </p>
        </div>
        <MultipleItemCarrousel />
      </section>
      <section className="px-5 lg:px-20">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-400 py-3">
            Restaurantes
          </h1>
          <div className="flex flex-wrap flex-row items-center justify-around">
            {restaurants.map((item: any, index:any) => (
              <RestaurantCard item={item} 
              index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
