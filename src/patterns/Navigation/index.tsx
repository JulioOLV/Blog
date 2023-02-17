import styled from 'styled-components';

const StyledNavBar = styled.nav`
  background-color: #eff0f3;
`;

const SearchBar = styled.nav`
  background-color: #eff0f3;
  border-bottom: 1px solid #e0e0e0;
`;

const NavBarBrand = styled.a`
  font-family: Pumpkin;
  text-transform: capitalize;
  font-size: 1.5rem;

  span {
    color: #14c38e;
    font-size: 1.25rem;
  }
`;

const Navigation = () => {
  return (
    <>
      <StyledNavBar className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavBarBrand className="navbar-brand" href="#">
            Julio<span>.blog</span>
          </NavBarBrand>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Categoria
              </a>
              <a className="nav-link me-2" href="#">
                Sobre mim
              </a>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </StyledNavBar>
    </>
  );
};

export default Navigation;
