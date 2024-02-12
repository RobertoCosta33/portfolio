import styled, { css } from "styled-components";

export const HomeWrapper = styled.section`
  ${() => css`
    display: flex;
    flex: 12;
    height: 100vh;
  `}
`;

export const MainNavWrapper = styled.article`
  ${() => css`
    display: flex;
    flex-direction: column;
    flex: 11;
    height: 100vh;
  `}
`;
