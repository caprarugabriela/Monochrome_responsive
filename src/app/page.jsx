import CatalogPreview from '@/components/catalog/CatalogPreview';
import Marketing from '@/components/catalog/Marketing';
import ProductTile from '@/components/catalog/ProductTile';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <>
      <div className="home">
        <header className="header">
          <Header></Header>
        </header>

        <main className="content">
          <section className="banner-main d-block d-lg-none">
            <a href="" className="button button-primary">
              new in
            </a>
          </section>
          <CatalogPreview></CatalogPreview>

          <CatalogPreview></CatalogPreview>

          <Marketing></Marketing>

          <CatalogPreview></CatalogPreview>

          <CatalogPreview></CatalogPreview>
        </main>

        <footer className="footer">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}
