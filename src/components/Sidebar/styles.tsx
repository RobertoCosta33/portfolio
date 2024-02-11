import styled, { css } from "styled-components";

export const SidebarWrapper = styled.section`
  ${({ theme }) => css`
    flex: 3;
    border-right: 1px solid ${theme.palette.text.primary};
    background-color: ${theme.palette.background.default};
    padding: 2rem;

    overflow-y: auto;

    @media (max-width: 900px) {
      display: none;
    }
  `}
`;

export const AvatarWrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 2rem;
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
  `}
`;
