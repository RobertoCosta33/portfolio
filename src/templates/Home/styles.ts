import { css, styled } from "styled-components";
import media from "styled-media-query";

export const HomeWrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    background-color: ${theme.palette.background.paper};

    border-radius: 0.8rem;
    padding: 4rem;

    article {
      text-align: start;
      padding: 2rem;

      ${media.lessThan("medium")`
        ${() => css`
          padding: 1.2rem 0.4rem;
        `}
    `}
    }

    ${media.lessThan("medium")`
        ${() => css`
          padding: 0.4rem;
        `}
    `}
  `}
`;

export const TitleWrapper = styled.article`
  ${() => css`
    margin-bottom: 1.2rem;
  `}
`;
