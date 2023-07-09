import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Nav from "../components/Layout/Nav";

export const HomeLayout = ({ children }) => {
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

const Layout = ({ children }) => {
  return (
    <div style={{ width: "1500px", margin: "auto", overflow: "hidden" }}>
      <header>
        <Header />
      </header>
      <Nav />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
