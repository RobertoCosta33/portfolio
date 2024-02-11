import styled, { css } from "styled-components";

export const SidebarWrapper = styled.section`
  ${({ theme }) => css`
    flex: 3;
    border: 1px solid #000;
    background-color: ${theme.palette.background.default};
    padding: 2rem;
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

    h5 {
      color: ${theme.palette.text.primary};
    }
  `}
`;
