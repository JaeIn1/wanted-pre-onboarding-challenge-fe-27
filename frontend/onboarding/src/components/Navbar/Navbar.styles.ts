import styled from "styled-components";

export const NavbarLayout = styled.div`
  height: ${({ theme }) => theme.navbarHeight};
  background-color: black;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarUl = styled.ul`
  list-style-type: none;
  color: white;
  display: flex;

  & li {
    font-size: 1.3rem;
    margin-right: 30px;
  }

  & li:hover {
    cursor: pointer;
  }
`;
