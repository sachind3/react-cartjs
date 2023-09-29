import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="py-4">
        <Container>
          <Outlet />
        </Container>
      </section>
    </>
  );
};
export default Layout;
