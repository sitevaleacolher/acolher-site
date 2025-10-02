"use client";

import { useState, useEffect } from "react";

import { Wrapper, Slide, ImgStyled } from "./styles";

type SlideshowProps = {
  images: string[];
};

export default function SlideShow({ images }: SlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <Wrapper>
      {images.map((src, index) => (
        <Slide key={index} $active={index === current}>
          <ImgStyled src={src} alt={`slide-${index}`} fill />
        </Slide>
      ))}
    </Wrapper>
  );
}
