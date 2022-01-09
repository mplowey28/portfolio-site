import React, { useState } from "react";
import { sliderData } from "./content";
import {
  SliderContainer,
  SlideContainer,
  RightIcon,
  LeftIcon,
  Img,
  Video,
} from "./SliderElements";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <SliderContainer id="projects">
      <LeftIcon>
        <IoIosArrowBack onClick={prevSlide} />
      </LeftIcon>
      <RightIcon>
        <IoIosArrowForward onClick={nextSlide} />
      </RightIcon>
      {sliderData.map((slide, index) => {
        return (
          <SlideContainer
            key={index}
            current={index === current ? "slide active" : "slide"}
          >
            {index === current &&
              (slide.type === "img" ? (
                <Img src={slide.image} alt={slide.title} />
              ) : (
                <Video autoPlay loop muted src={slide.image} type="video/mp4" />
              ))}
          </SlideContainer>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
