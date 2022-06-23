import styled, { css } from 'styled-components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const GalleryImages = styled.div`
  width: 100%;
  height: fit-content;
  margin-right: 1.5rem;

  .slick-track {
    height: fit-content !important;
  }
`

export const CurrentImage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80%;

  height: 0;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  div {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  max-width: 100%;
  overflow: hidden;

  *:focus {
    outline: 0 !important;
  }

  ${GalleryImages}, ${CurrentImage} {
    img {
      object-fit: contain;
      cursor: pointer;
    }
  }
`
interface ThumbnailProps {
  active: boolean
}

export const Thumbnail = styled.div<ThumbnailProps>`
  ${({ theme, active }) => css`
    position: relative;

    width: 4.88rem;
    height: 4.88rem;

    opacity: ${active ? 1 : 0.6};
    transition: opacity 200ms ease;
    text-align: center;

    border: ${active ? `2px solid ${theme.colors.danger}` : 'none'};

    img {
      position: absolute;
      left: 0;
      top: 0;

      width: 100%;
      height: 100%;
      padding: 0.25rem;
    }
  `}
`
