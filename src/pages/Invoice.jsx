import { useContext } from "react";
import { Table } from "react-bootstrap";
import { AppContext } from "../context";

const Invoice = () => {
  const { cart, totalPoints, totalPrice } = useContext(AppContext);
  return (
    <div>
      <h4 className="text-center">Flexible Benefits Solution : Invoice</h4>
      <Table striped bordered hover className="mb-0">
        <thead>
          <tr>
            <th>Category</th>
            <th>Benefit</th>
            <th>Description</th>
            <th>Points</th>
            <th>Multiplier</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td className="text-capitalize">{item.category}</td>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.price}</td>
                <td>{item.qt}</td>
                <td>{item.price * item.qt}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3} className="text-center">
              Total
            </th>
            <th>{totalPoints}</th>
            <th></th>
            <th>{totalPrice}</th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
export default Invoice;
