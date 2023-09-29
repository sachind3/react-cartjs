import { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  ListGroup,
  Stack,
  Table,
} from "react-bootstrap";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

const CheckoutBox = () => {
  const { cart, wallet, totalPrice } = useContext(AppContext);
  return (
    <Stack gap={3}>
      <Card bg={"secondary"} text={"light"}>
        <CardBody>
          <div className="d-flex justify-content-between">
            Wallet Allocation: <span>{wallet}</span>
          </div>
        </CardBody>
      </Card>
      <div>
        <Table striped bordered hover className="mb-0">
          <thead>
            <tr>
              <th>Point</th>
              <th>Multiplier</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.price}</td>
                  <td>{item.qt}</td>
                  <td>{item.price * item.qt}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>Total</th>
              <th>{totalPrice}</th>
            </tr>
          </tfoot>
        </Table>
      </div>
      <div>
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between">
            Wallet Amount <span>{wallet}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            Used <span>{totalPrice > wallet ? wallet : totalPrice}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            Available{" "}
            <span>{wallet > totalPrice ? wallet - totalPrice : 0}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            You Pay <span>{totalPrice > wallet ? totalPrice - wallet : 0}</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Button as={Link} to="invoice" variant="primary">
        Checkout
      </Button>
    </Stack>
  );
};
export default CheckoutBox;
