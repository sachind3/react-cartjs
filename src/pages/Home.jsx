import { useContext } from "react";
import { AppContext } from "../context";
import ProductRows from "../components/ProductRows";
import { Col, Row } from "react-bootstrap";
import CheckoutBox from "../components/CheckoutBox";

const Home = () => {
  const { productList } = useContext(AppContext);
  return (
    <Row>
      <Col lg={9}>
        <h4 className="text-center">Flexible Benefits Solution</h4>
        {productList.map((products) => {
          return <ProductRows products={products} key={products.id} />;
        })}
      </Col>
      <Col lg={3}>
        <CheckoutBox />
      </Col>
    </Row>
  );
};
export default Home;
