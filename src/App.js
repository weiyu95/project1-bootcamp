import React from "react";
import "./App.css";
import BasicTable from "./table.js";
import { Form } from "./form";

export default function App() {
  const [orders, setOrders] = React.useState([]);

  const onSubmitOrder = (order) => {
    setOrders((prevOrders) => {
      return [...prevOrders, order];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Orders Dashboard</h1>
      </header>

      <body className="App-body">
        <BasicTable orders={orders} />
        <div className="bottomright">
          <Form onSubmitOrder={onSubmitOrder} />
        </div>
      </body>
    </div>
  );
}
