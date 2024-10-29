import {
  useGetFilmsQuery,
  useSearchFilmsQuery,
  useGetListQuery,
} from "./srore/films/films.api";
import Header from "./components/Header";
import Search from "./components/Search";
import Film from "./components/Film";
import { Box, Container } from "@mui/material";
// import Swiper core and required modules
import { Navigation, A11y, Virtual } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CategoryName from "./components/CategoryName";
import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/debounce";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const debounce = useDebounce(searchValue);
  // const { data: list } = useGetListQuery("");
  const { data } = useGetFilmsQuery("bestofamediateka");
  const { data: search } = useSearchFilmsQuery(debounce, {
    skip: debounce.length < 1,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  console.log(data);

  useEffect(() => {}, [debounce]);

  return (
    <>
      <Header></Header>
      <Container maxWidth="sm">
        <Search
          value={searchValue}
          handleChange={handleChange}
          searchResults={search ? search?.docs : []}
        ></Search>
      </Container>
      <Box>
        <CategoryName name="Хиты Амедиатеки"></CategoryName>
        <Swiper
          className="films"
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
          modules={[Navigation, A11y, Virtual]}
          spaceBetween={25}
          slidesPerView={5.15}
          slidesPerGroup={5}
          virtual
          navigation
          // onSwiper={(swiper) => console.log(null)}
          // onSlideChange={() => console.log("slide change")}
        >
          {data?.docs.map((poster, index) => (
            <SwiperSlide className="film" key={poster.id} virtualIndex={index}>
              <Film
                poster={poster?.poster?.url}
                rate={Number(poster?.rating?.kp.toFixed(1))}
                key={poster.id}
                color={poster?.rating?.kp > 8 ? "#000" : "#fff"}
                bg={
                  poster?.rating?.kp > 7
                    ? poster?.rating?.kp > 8
                      ? "#eacc7f"
                      : "#3bb33b"
                    : "#777"
                }
              ></Film>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default App;
