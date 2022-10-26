import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Left>
        <Logo>NETFLIX</Logo>
      </Left>

      <Right>
        <h2>ICON</h2>
      </Right>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

const Left = styled.div``;

const Logo = styled.h3`
  color: red;
`;

const Right = styled.div``;
