import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <Left>
        <Logo>NETFLIX</Logo>
        <Links>
          <Link>Home</Link>
          <Link>TV Shows</Link>
          <Link>Movies</Link>
          <Link>New & Popular</Link>
        </Links>
      </Left>

      <Right>
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">notifications</span>
        <span class="material-symbols-outlined">expand_more</span>
      </Right>
    </HeaderContainer>
  );
}
export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  height: 80px;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background-color: black;
  z-index: 999;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 0.8rem;
`;
const Link = styled.p`
  margin: 0 10px;
`;

const Logo = styled.h2`
  color: #e50915;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 10px;
  }
`;
