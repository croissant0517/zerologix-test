import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;

  svg {
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  .link {
    margin-right: 20px;
    text-decoration: none;
    color: #000;
  }

  a:last-child {
    margin-right: 0;
  }
`;
