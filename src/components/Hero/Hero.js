import React from "react";
import styled from "styled-components/macro";

const HERO_PATH = "/images/hero-img";

const Hero = () => {
  return (
    <Wrapper>
      <picture>
        <source
          srcSet={`${HERO_PATH}.avif 1x, ${HERO_PATH}@2x.avif 2x, ${HERO_PATH}@3x.avif 3x`}
        />
        <HeroImage
          src={`${HERO_PATH}.jpg`}
          srcSet={`${HERO_PATH.jpg} 1x, ${HERO_PATH}@2x.jpg 2x, ${HERO_PATH}@3x.jpg 3x`}
        />
      </picture>
      <Swoop src="/swoop.svg" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
