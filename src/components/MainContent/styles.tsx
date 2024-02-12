import styled, { css } from "styled-components";
import media from "styled-media-query";

interface IMainContentWrapperProps {
  isVisible: boolean;
}

export const MainContentWrapper = styled.section<IMainContentWrapperProps>`
  ${({ theme, isVisible }) => css`
    flex: 9;
    position: relative;
    cursor: ${isVisible ? 'pointer' : 'default'};

    padding: ${isVisible ? '0' : '4rem'};
    background-color: ${theme.palette.background.default};
    overflow-y: auto;

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    h1,
    h2,
    p {
      color: ${theme.palette.text.primary};
    }

    ${media.lessThan('medium')`
      ${() => css`
        h1 {
          font-size: 1.6rem;
        }

        h2 {
          font-size: 1.2rem;
        }
      `}
    `}

    ${Overlay} {
      display: ${isVisible ? 'block' : 'none'};
    }
  `}
`;

export const Overlay = styled.div`
  ${() => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  `}
`
