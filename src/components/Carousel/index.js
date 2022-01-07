import React, { useState, useEffect } from "react";
import {
  CarouselOuterContainer,
  CarouselH1,
  CarouselButtonArrowLeft,
  CarouselButtonArrowRight,
  CarouselButtonPrev,
  CarouselButtonNext,
  CarouselContainer,
  CarouselDotsButton,
  CarouselInner,
  CarouselSlideItemImgLink,
  CarouselSlideItemStyle,
  CarouselSlideList,
  CarouselSlideItemBody,
  CarouselWrapper,
  CarouselButtonArrow,
  CarouselButton,
  CarouselDotsContainer,
  LinkContainer,
  GithubContainer,
  LiveDemoContainer,
} from "./CarouselElements";
import { FaGithub, FaPlay } from "react-icons/fa";
import { _items } from "./content";

const slideWidth = 30;

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    project: _items[idx].project,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  return (
    <CarouselSlideItemStyle style={item.styles}>
      <CarouselSlideItemImgLink>
        {item.project.type === "img" ? (
          <img src={item.project.image} alt={item.project.title} />
        ) : (
          <video
            autoPlay
            loop
            muted
            src={item.project.image}
            type="video/mp4"
          />
        )}
      </CarouselSlideItemImgLink>
      <CarouselSlideItemBody>
        <h4>{item.project.title}</h4>
        <LinkContainer>
          <GithubContainer
            href={item.project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Code
          </GithubContainer>

          {item.project?.demo && (
            <LiveDemoContainer
              href={item.project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay />
              Demo
            </LiveDemoContainer>
          )}
        </LinkContainer>
        <p>{item.project.desc}</p>
      </CarouselSlideItemBody>
    </CarouselSlideItemStyle>
  );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <CarouselOuterContainer id="projects">
      <CarouselH1>Projects</CarouselH1>
      <CarouselWrapper>
        <CarouselInner>
          <CarouselButtonPrev as={CarouselButton} onClick={() => prevClick()}>
            <CarouselButtonArrowLeft as={CarouselButtonArrow} />
          </CarouselButtonPrev>
          <CarouselContainer>
            <CarouselSlideList>
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </CarouselSlideList>
          </CarouselContainer>
          <CarouselButtonNext as={CarouselButton} onClick={() => nextClick()}>
            <CarouselButtonArrowRight as={CarouselButtonArrow} />
          </CarouselButtonNext>
          <CarouselDotsContainer>
            {items.slice(0, length).map((pos, i) => (
              <CarouselDotsButton
                key={i}
                onClick={() => handleDotClick(i)}
                active={i === activeIdx ? true : false}
              />
            ))}
          </CarouselDotsContainer>
        </CarouselInner>
      </CarouselWrapper>
    </CarouselOuterContainer>
  );
};

export default Carousel;
