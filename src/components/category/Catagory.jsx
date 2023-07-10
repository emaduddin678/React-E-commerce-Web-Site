import React, { useEffect } from "react";
import "./Category.css";
import SingleCategory from "./single-category/SingleCategory";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Catagory = () => {
  //   const [categoryData, setCategoryData] = useState([]);
  const categoryData = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
    "electronics",
  ];

//   useEffect(() => {
//     // Fetch data from the API
//     fetch("https://fakestoreapi.com/products/categories")
//       .then((response) => response.json())
//       .then((data) => {
//         setCategoryData(data);
//       })
//       .catch((error) => {
//         console.log("Error fetching data from API:", error);
//       });
//   }, []);
  return (
    <>
      <div className="category-bg">
        <div className="all-category">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000000",
              "--swiper-pagination-color": "#000000",
            }}
            navigation={true}
            slidesPerView={1}
            //   spaceBetween={10}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                //   spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                //   spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                //   spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 4,
                //   spaceBetween: 35,
              },
            }}
            modules={[Navigation]}
            className="mySwiper swiper-new"
          >
            {categoryData.map((category, index) => (
              <SwiperSlide key={index}>
                {/* {console.log(category)} */}
                <SingleCategory category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Catagory;
