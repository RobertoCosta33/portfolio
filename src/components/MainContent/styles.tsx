import styled, { css } from "styled-components";
import media from "styled-media-query";

export const MainContentWrapper = styled.section`
  ${({ theme }) => css`
    flex: 9;

    padding: 4rem;
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
  `}
`;
