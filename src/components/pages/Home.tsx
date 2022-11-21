import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import image from "../../assets/img/R.jpg";

const Home = () => {
    const [openTab, setOpenTab] = useState(1);
let color = "pink";
  return (
    <div>
      <div>
        <h1 className="header_content text-center mt-4 mb-16">
          Explore, collect, and sell NFTs
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 3,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
          type: "custom",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="container mx-auto swiper-container">
          <SwiperSlide>
            <div className="slider-item relative">
              <img src={image} alt="" />
              <div className="absolute left-3 bottom-4 text-white">
                <h2>Oma Oma</h2>
                <p>Floor: 0.1 ETH</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item relative">
              <img src={image} alt="" />
              <div className="absolute left-3 bottom-4 text-white">
                <h2>Oma Oma</h2>
                <p>Floor: 0.1 ETH</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item relative">
              <img src={image} alt="" />
              <div className="absolute left-3 bottom-4 text-white">
                <h2>Oma Oma</h2>
                <p>Floor: 0.1 ETH</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item relative">
              <img src={image} alt="" />
              <div className="absolute left-3 bottom-4 text-white">
                <h2>Oma Oma</h2>
                <p>Floor: 0.1 ETH</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item relative">
              <img src={image} alt="" />
              <div className="absolute left-3 bottom-4 text-white">
                <h2>Oma Oma</h2>
                <p>Floor: 0.1 ETH</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-item relative">
              <img src={image} alt="" />
              <div className="absolute left-3 bottom-4 text-white">
                <h2>Oma Oma</h2>
                <p>Floor: 0.1 ETH</p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Profile
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Settings
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Options
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-44">
                      <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                          <p>COLLECTION</p>
                          <div className="flex flex-row">
                            <p className="pr-20">FLOOR PRICE</p>
                            <p>VOLUME</p>
                          </div>
                        </div>
                        <div className="flex flex-row justify-between">
                          <div>ml</div>
                          <div>ml</div>
                          <div>ml</div>
                          <div className="flex flex-row">
                            <div className="pr-20">
                                <p>FLOOR PRICE</p>
                            </div>
                            <div>
                                <p>VOLUME</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row justify-between">
                        <p>COLLECTION</p>
                        <div className="flex flex-row">
                          <p className="pr-20">FLOOR PRICE</p>
                          <p>VOLUME</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
