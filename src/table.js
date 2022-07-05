import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

// function createData(orderNum, shippingDate, orderStatus) {
//   return { orderNum, shippingDate, orderStatus };
// }

// const rows = [
//   createData(1, "20/07/2022", "Ready for shipment"),
//   createData(2, "22/07/2022", "QC inspection"),
//   createData(3, "25/07/2022", "In Production"),
//   createData(4, "30/07/2022", "In Production"),
//   createData(5, "01/08/2022", "Preparing Material"),
// ];

export default function BasicTable({ orders }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 335 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: 20, fontWeight: "bold" }}>
              Current Orders
            </TableCell>
            {/* <TableCell align="right">Shipping Date</TableCell>
            <TableCell align="right">Order Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {orders.map((order) => (
            <TableRow
              key={order.orderNum}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.orderNum}
              </TableCell>
              <TableCell align="right">{order.shippingDate}</TableCell>
              <TableCell align="right">{order.orderStatus}</TableCell>
            </TableRow>
          ))} */}

          {orders.map((order) => (
            <Card sx={{ minWidth: 335, minHeight: 100, textAlign: "left" }} key={order.orderNum}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Avatar
                  sx={{
                    maxWidth: 50,
                    maxHeight: 50,
                    bgcolor: deepPurple["A400"],
                    fontWeight: "bold",
                    fontSize: 30,
                    ml: 3,
                    mb: 1.5,
                  }}
                  variant="rounded"
                >
                  O
                </Avatar>
                <CardContent>
                  <Typography
                    sx={{ mb: 0.5, fontSize: 16, fontWeight: "bold" }}
                  >
                    Order {order.orderNum}
                  </Typography>
                  <Typography
                    sx={{ mb: 0.5, fontSize: 12 }}
                    color="text.secondary"
                  >
                    Shipping Date: {order.shippingDate}
                  </Typography>
                  <Typography
                    sx={{ mb: 0.5, fontSize: 12 }}
                    color="text.secondary"
                  >
                    Order Status: {order.orderStatus}
                  </Typography>
                </CardContent>
              </Stack>
              <CardActions>
                <Stack direction="row" spacing={1}>
                  <IconButton size="small" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </CardActions>
            </Card>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
