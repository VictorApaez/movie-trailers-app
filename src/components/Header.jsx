import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Left>
        <Logo to="/">TRAILERS</Logo>
        {/* <BrowseLinks>Browse</BrowseLinks> */}
        <Links>
          <LinkRoute to="/">Home</LinkRoute>
          <LinkRoute to="/movies">Movies</LinkRoute>
        </Links>
      </Left>

      <Right>
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined">expand_more</span>
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
  overflow: visible;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

// const BrowseLinks = styled.div`
//   display: none;
//   margin-left: 15px;
//   @media (max-width: 700px) {
//     display: flex;
//   }
// `;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 0.8rem;

  /* @media (max-width: 700px) {
    display: none;
  } */
`;
const LinkRoute = styled(Link)`
  margin: 0 10px;
  color: white;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  &:hover {
    color: darkgray;
    bottom: 0;
  }
`;

const Logo = styled(Link)`
  color: #e50915;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 10px;
  }
  & span:hover {
    cursor: pointer;
  }
`;
