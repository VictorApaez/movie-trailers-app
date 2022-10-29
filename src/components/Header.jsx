import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);

  const handleSearchAnime = (e) => {
    toggle ? setToggle(false) : setToggle(true);
    document.getElementById("search-bar").focus();
  };

  return (
    <HeaderContainer>
      <Left>
        <Logo>Trailers</Logo>
        <BrowseLinks>Browse</BrowseLinks>
        <Links>
          {/* <BrowseLinks>Browse</BrowseLinks> */}
          <LinkRoute to="/">Home</LinkRoute>
          <LinkRoute to="/tv-shows">TV Shows</LinkRoute>
          <LinkRoute to="/movies">Movies</LinkRoute>
          {/* <LinkRoute to="/popular">New & Popular</LinkRoute> */}
        </Links>
      </Left>

      <Right>
        <SearchForm>
          <label htmlFor="search-bar"></label>
          <span
            className="material-symbols-outlined"
            onClick={handleSearchAnime}
          >
            search
          </span>
          <FormInput id="search-bar" type="text" hideDisplay={toggle} />
        </SearchForm>
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

const BrowseLinks = styled.div`
  display: none;
  margin-left: 15px;
  @media (max-width: 700px) {
    display: flex;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 0.8rem;

  @media (max-width: 700px) {
    display: none;
  }
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

const Logo = styled.h2`
  color: #e50915;
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

const SearchForm = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
`;

const FormInput = styled.input`
  transition: width 0.5s ease-in-out;
  outline: none;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  margin-left: 10px;
  ${(props) => {
    if (props.hideDisplay) {
      return `
        width: 0;
        padding: 0;
        margin: 0;
        border: 0;
      `;
    } else {
      return `
        width: 200px;
        padding: 5px 10px;
        border: 1px solid white;
      `;
    }
  }}
`;
