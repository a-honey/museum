import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import imgs from "../api/img";

const SliderBlock = styled.div`
  overflow: hidden;
  position: relative;
  ul {
    display: flex;
    img {
      width: 1500px;
    }
  }
`;

const Slider = () => {
  const ulRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (imgs.length + 1));
      },
      !isTransitionEnabled && currentIndex === 0 ? 5 : 4000
    );

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, isTransitionEnabled]);

  useEffect(() => {
    const ul = ulRef.current;

    if (currentIndex === imgs.length + 1) {
      setTimeout(() => {
        ul.style.transition = "none";
        ul.style.transform = "translateX(0%)";
      }, 0);
    } else if (currentIndex === 0) {
      ul.style.transition = "none";
      ul.style.transform = "translateX(0%)";
    } else {
      setTimeout(setTransitionEnabled(false), 0);
      ul.style.transition = ul.style.transition = "transform 1s ease";
      ul.style.transform = `translateX(${currentIndex * -100}%)`;
    }
  }, [currentIndex, isTransitionEnabled]);

  return (
    <SliderBlock>
      <ul ref={ulRef} style={{}} id="slider">
        {imgs.map((img) => (
          <li>
            <img src={img[1]} alt={img[0]} />
          </li>
        ))}
        <li>
          <img src={imgs[0][1]} alt={imgs[0][0]} />
        </li>
      </ul>
    </SliderBlock>
  );
};

export default Slider;
