import styled, { css } from "styled-components";
import media from "styled-media-query";

interface IMainContentWrapperProps {
  visible: boolean;
}

export const MainContentWrapper = styled.section<IMainContentWrapperProps>`
  ${({ theme, visible }) => css`
    flex: 9;
    cursor: ${visible ? "pointer" : "default"};

    padding: 4rem;
    background-color: ${theme.palette.background.default};
    overflow-y: auto;
    height: 100vh;

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

    ${media.lessThan("medium")`
      ${() => css`
        h1 {
          font-size: 1.6rem;
        }

        h2 {
          font-size: 1.2rem;
        }
      `}
    `}

    ${media.lessThan("small")`
      ${() => css`
        padding: ${visible ? "0.4rem" : "4rem"};
      `}
    `}

    &::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #555555;
      border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #414757;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 0.8rem;
      box-shadow: inset 0.8rem 1.2rem 1.2rem #ccc;
    }

    ${Overlay} {
      display: ${visible ? "block" : "none"};
    }
  `}
`;

export const Overlay = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  `}
`;
