import { Row } from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductRows = ({ products }) => {
  return (
    <div className="mb-2">
      <h5>{products.product}</h5>
      <Row xs={2} lg={4}>
        {products.data.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </Row>
    </div>
  );
};
export default ProductRows;
