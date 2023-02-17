import styled from "styled-components"

const StyledNavBar = styled.nav`
  background-color: #EFF0F3;
`

const SearchBar = styled.nav`
  background-color: #EFF0F3;
  border-bottom: 1px solid #E0E0E0;
`

const NavBarBrand = styled.a`
  font-family: Pumpkin;
  text-transform: capitalize;

  span {
    color: #14c38e;
  }
`

const Navigation = () => {
  return (
    <>
      <SearchBar className="navbar bg-body-tertiary">
        <div className="container d-flex justify-content-center align-items-center">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </SearchBar>
      <StyledNavBar className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavBarBrand className="navbar-brand" href="#">Julio<span>.blog</span></NavBarBrand>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Categoria</a>
              <a className="nav-link" href="#">Sobre mim</a>
            </div>
          </div>
        </div>
      </StyledNavBar>
    </>
  )
}

export default Navigation
