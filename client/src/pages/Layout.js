import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ width: "1500px", margin: "auto", overflow: "hidden" }}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
