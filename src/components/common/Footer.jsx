export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <section className="footer-nav">
          <div className="footer-nav-inner">
            <header className="footer-nav-header pt-4 d-block d-lg-none">
              <h1> How can we help?</h1>
            </header>

            <div className="nav mt-4">
              <nav>
                <ul>
                  <li>
                    <a href="/" title="About us">
                      About us
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Careers">
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Affiliates">
                      Affiliates
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Advertising">
                      Advertising
                    </a>
                  </li>
                </ul>
              </nav>

              <nav>
                <ul>
                  <li>
                    <a href="/" title="Style  fit advice">
                      Style and fit
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Faqs">
                      Faqs
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Delivery">
                      Delivery
                    </a>
                  </li>

                  <li>
                    <a href="/" title="returns">
                      Returns
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="terms pb-4 d-block d-lg-none">
              <ul>
                <li>
                  <a href="/" title="terms & conditions">
                    terms & conditions
                  </a>
                </li>

                <li>
                  <a href="/" title="privacy & cookies">
                    privacy & cookies
                  </a>
                </li>
              </ul>
            </div>

            <section className="footer-contact my-4 d-none d-lg-block">
              <ul>
                <li>
                  <a href="tel:+4401023456789" title="Call us">
                    Call us <span> +44 (0)10 2345 6789</span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:office@monochrome.com"
                    title="Email customer care"
                  >
                    Email customer care
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section className="footer-connect mb-4">
          <div className="footer-connect-inner">
            <form className="footer-newsletter">
              <header className="d-block d-lg-none">
                <h1 className="my-3 text-center">Let us connect</h1>

                <p>Be the first to receive exclusives offers</p>
              </header>

              <div className="newsletter">
                <label
                  className="newsletter-title d-none d-lg-block"
                  htmlFor="email"
                >
                  sign up for our newsletter
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                ></input>

                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  title="Sign up for our newsletter"
                  className="button-submit"
                >
                  Submit
                </button>
              </div>

              <div className="terms">
                <input type="checkbox" name="terms" id="terms" required></input>
                <label
                  htmlFor="terms"
                  title="I agree with Privacy Policy and I want to receive emails from Monochrome"
                >
                  I agree with
                  <a
                    href="/"
                    title="Privacy Policy"
                    className="text-decoration-underline mx-1"
                  >
                    Privacy Policy
                  </a>
                  and I want to receive emails from Monochrome
                </label>
              </div>
            </form>

            <section className="footer-social">
              <header className="footer-social-header d-black d-lg-none">
                <h1>We are highly likeable</h1>
              </header>

              <ul>
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
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Pinterest"
                  >
                    <i class="fa-brands fa-pinterest-p"></i>
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
              </ul>
            </section>
          </div>
        </section>
      </div>
    </footer>
  );
}
