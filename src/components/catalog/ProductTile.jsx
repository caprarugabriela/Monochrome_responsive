export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <a href="/" title="Machine black watch">
            <picture>
              <img
                src="/images/products/monochrome-watch.png"
                alt="Machine black watch"
              ></img>
            </picture>
          </a>
        </div>

        <a href="/" title="Wishlist" className="whislist-link">
          <i className="fa-solid fa-heart"></i>
        </a>

        <div>
          <h1 className="product-tile-title">
            <a href="/" title="Monochrome">
              Monochrome
            </a>
          </h1>
        </div>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price">$425</span>
      </section>
    </article>
  );
}
