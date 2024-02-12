import styled, { css } from "styled-components";
import media from "styled-media-query";

interface SidebarProps {
  visible?: boolean;
}

export const SidebarWrapper = styled.section<SidebarProps>`
  ${({ theme, visible }) => css`
    flex: 3;

    border-right: 1px solid ${theme.palette.text.primary};
    background-color: ${theme.palette.background.default};
    padding: 2rem;

    overflow-y: auto;

    ${media.lessThan("large")`
      ${() => css`
        opacity: ${visible ? 1 : 0};
        flex: ${visible ? 9 : 0};
        height: ${visible ? "100vh" : "0"};
        padding: ${visible ? "2rem" : "0"};
        border-right: ${visible
          ? `1px solid ${theme.palette.text.primary}`
          : "none"};

        transition: opacity 0.4s ease-in-out, flex 0.4s ease-in-out,
          height 0.4s ease-in-out, padding 0.4s ease-in-out;
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
  `}
`;

export const AvatarWrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* margin-bottom: 2rem; */
    padding: 0.8rem;
    background-color: ${theme.palette.background.paper};
    border-radius: 0.8rem;

    div {
      margin-bottom: 0.8rem;
    }

    h1,
    h2,
    h5,
    h6,
    p {
      color: ${theme.palette.text.primary};
    }

    ${media.lessThan("medium")`
      ${() => css`
        h5 {
          font-size: 1.2rem;
        }
      `}
    `}

    ${media.lessThan("small")`
      ${() => css`
        h5 {
          font-size: 0.8rem;
        }
      `}
    `}
  `}
`;
