import { memo, useContext } from "react";
import { Card, CardBody, Col } from "react-bootstrap";
import { AppContext } from "../context";

const ProductItem = ({ product }) => {
  const { handleChangeInput } = useContext(AppContext);
  return (
    <Col>
      <label htmlFor={product.id} className="d-block">
        <Card
          className="mb-4"
          bg={product.selected ? "success" : "light"}
          text={product.selected ? "light" : "dark"}
        >
          <CardBody>
            <h5>{product.name}</h5>
            <div className="d-flex justify-content-between">
              <p className="mb-0">{product.details}</p>
              <p className="mb-0">x {product.qt}</p>
            </div>
            <input
              type="radio"
              onChange={() => handleChangeInput(product)}
              id={product.id}
              defaultChecked={product.selected}
              value={product.id}
              name={product.category}
              className="d-none"
            />
          </CardBody>
        </Card>
      </label>
    </Col>
  );
};
export default memo(ProductItem);
