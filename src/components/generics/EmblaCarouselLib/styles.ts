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

export const EmblaDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px 20px;

  gap: 12px;
`;
