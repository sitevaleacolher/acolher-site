import styled from "styled-components";

interface EmblaProps {
  $itemsPerPage?: number;
}

export const Embla = styled.section<EmblaProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  max-width: 70rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: ${({ $itemsPerPage = 3 }) => `${100 / $itemsPerPage}%`};
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
`;

export const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
`;

export const EmblaSlideNumber = styled.div`
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  user-select: none;
`;

export const EmblaDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;

  gap: 12px;
`;
