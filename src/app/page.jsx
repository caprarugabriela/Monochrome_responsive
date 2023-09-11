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
