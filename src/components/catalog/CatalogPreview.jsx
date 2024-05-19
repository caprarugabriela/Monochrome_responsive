import ProductTile from './ProductTile';

export default function CatalogPreview() {
  return (
    <div className="catalog-preview container">
      <header className="catalog-preview-header">
        <h1>New Stuff</h1>
      </header>
      <section className="product-tiles">
        <ProductTile></ProductTile>

        <ProductTile></ProductTile>

        <ProductTile></ProductTile>

        <ProductTile></ProductTile>
      </section>

      <footer className="catalog-preview-ctas my-3">
        <a title="View all" className="button button-secondary">
          view all
        </a>
      </footer>
    </div>
  );
}
