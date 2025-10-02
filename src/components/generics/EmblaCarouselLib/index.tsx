"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
  DotButton,
  useDotButton,
} from "./components";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import {
  Embla,
  EmblaViewport,
  EmblaContainer,
  EmblaSlide,
  EmblaSlideNumber,
  EmblaDots,
} from "./styles";
import { useResponsive } from "@/hooks/useResponsive";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const { isTablet } = useResponsive();
  const itemsPerPage = isTablet ? 1 : 3;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <Embla itemsPerPage={itemsPerPage}>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {slides.map((index) => (
            <EmblaSlide key={index}>
              <EmblaSlideNumber>{index + 1}</EmblaSlideNumber>
            </EmblaSlide>
          ))}
        </EmblaContainer>

        <EmblaDots>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            />
          ))}
        </EmblaDots>
      </EmblaViewport>

      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </Embla>
  );
};

export default EmblaCarousel;
