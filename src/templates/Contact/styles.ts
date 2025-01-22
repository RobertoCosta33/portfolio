import { css, styled } from "styled-components";
import media from "styled-media-query";

export const ContactsWrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-around;
    background-color: ${theme.palette.background.paper};

    border-radius: 0.8rem;
    padding: 4rem;

    article {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      text-align: start;
      padding: 1.2rem;

      span {
        width: 2.4rem;
        height: 2.4rem;
      }

      button {
        color: ${theme.palette.text.primary};
      }

      ${media.lessThan("medium")`
        ${() => css`
          padding: 0.8rem 0.4rem;
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
