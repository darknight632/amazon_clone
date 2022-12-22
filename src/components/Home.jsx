import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            title="GHOST Legend Pre-Workout Energy Powder, Peach - 25 Servings - Caffeine, L-Citrulline, & Beta Alanine Blend for Energy Focus & Pumps - Free of Soy, Sugar & Gluten, Vegan"
            price={42.74}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Ze5P89ZfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}
          />
          <Product
            title="Marvel Select: Incredible Hulk Action Figure"
            price={82.0}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61df9QHD8kL._AC_SY741_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="Bandai Vital Hero Digimon - Black, 87791"
            price={57.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81msubMuyVL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            title="Bandai Spirits Ichibansho Ichiban - One Piece - Monkey.D.Luffy (Wano Country -Third Act Figure"
            price={54.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61Q7w8CuzAL._AC_SY679_.jpg"
            rating={4}
          />
          <Product
            title="LAORENTOU Men's Small Messenger Bag Waterproof Shoulder Bag Cellphone Bag for Men Crossbody Bag Sling Bag for Work School"
            price={34.89}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61RbokKAsVL._AC_UL1200_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            title="Thermaltake LCGS View 390 AIO Liquid Cooled CPU Gaming PC(AMD Ryzen 7 5800X 8-core, ToughRam DDR4 3600Mhz 16GB RGB Memory, NVIDIA GeForce RTX 3090, 1TB NVMe Gen4 M.2, Win 10 Home) V51B-X570-39V-LCS"
            price={8017.12}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91Y39x9PnPL._AC_SX679_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
