import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@mui/material";
import { css, styled } from "styled-components";
import media from "styled-media-query";

export const ContactsWrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.paper};

    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));

    border-radius: 0.8rem;
    padding: 4rem;

    article {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      text-align: start;
      padding: 0.8rem;

      h2 {
        color: ${theme.palette.primary.main["500"]};

        min-width: 21rem;
        max-width: 21rem;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

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


export const Card = styled(MuiCard)`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
    border-radius: 0.8rem;
    padding: 1.2rem;

    min-height: 12rem;
    max-height: 12rem;
  `}
`;

export const CardContent = styled(MuiCardContent)`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    min-width: 26rem;
    max-width: 26rem;
  `}
`;

export const Divider = styled(MuiDivider)`
  ${({ theme }) => css`
    background-color: ${theme.palette.text.primary};
  `}
`;

export const Typography = styled.p`
  ${() => css`
    word-wrap: break-word;
  `}
`;
