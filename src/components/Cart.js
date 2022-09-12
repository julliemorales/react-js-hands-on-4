import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.item = [];
  }
  render() {
    return (
      <div className="container">
        <table className="table table-dark table-striped table-hover">
          <thead className="table table-info">
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.item.map((item, index) => (
              <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
