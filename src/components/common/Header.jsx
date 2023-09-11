export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <div className="header-secondary-inner container">
          <section className="header-connect d-none d-lg-block">
            <ul>
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="/" title="Call us">
                  CALL US +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </section>

          <section className="header-controls">
            <header className="header-title d-block d-lg-none">
              Monochrome
            </header>

            <form className="header-search d-none d-lg-block">
              <input
                type="text"
                name="Search"
                placeholder="Search"
                className="header-search-input"
                required
              />

              <button
                type="submit"
                title="Search"
                className="header-search-btn"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            <ul className="user-controls">
              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My account"
                >
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Favorites"
                >
                  <i class="fa-solid fa-heart"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My cart"
                >
                  <i class="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="header-primary">
        <div className="header-primary-inner container">
          <div className="header-search d-block d-lg-none">
            <ul>
              <li>
                <button type="button" title="Menu">
                  <i className="fa-solid fa-bars"></i>
                </button>
              </li>

              <li>
                <form className="search-form">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="search"
                    required
                  />

                  <button type="submit" title="Search" className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>
            </ul>
          </div>
          <div className="header-menu d-none d-lg-block">
            <ul>
              <li>
                <a href="/">New Arrivals</a>
              </li>

              <li>
                <a href="/" title="Brands">
                  Brands
                </a>
              </li>

              <li>
                <a href="/" title="Men's">
                  Men
                </a>
              </li>

              <li>
                <a href="/" title="Women's">
                  Women
                </a>
              </li>

              <li>
                <a href="/" title="Accesories">
                  Accesories
                </a>
              </li>

              <li>
                <a href="/" title="Lookbook">
                  Lookbook
                </a>
              </li>
            </ul>
          </div>{' '}
        </div>
      </section>

      <section className="banner-main d-block d-lg-none">
        <a href="" className="button button-primary">
          new in
        </a>
      </section>
    </>
  );
}
