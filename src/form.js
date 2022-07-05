import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
//import Select from "@mui/material/Select";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MenuItem, Stack } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export const Form = ({ onSubmitOrder }) => {
  const initialState = {
    orderNum: "",
    shippingDate: null,
    orderStatus: "",
  };
  const [open, setOpen] = React.useState(false);
  const [order, setOrder] = React.useState(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = (event, reason) => {
    event.preventDefault();
    if (reason !== "backdropClick") {
      setOpen(false);
    }
    onSubmitOrder(order);
    setOrder({ ...initialState });
  };

  return (
    <Box sx={{ position: "relative", zIndex: "modal" }}>
      <Fab
        color="primary"
        aria-label="add"
        position="right"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Add New Order</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <Stack spacing={2}>
              <FormControl sx={{ m: 1, minWidth: 150 }} variant="outlined">
                <TextField
                  label="Order Number"
                  variant="outlined"
                  type="number"
                  name="orderNum"
                  inputProps={{ min: 0 }}
                  value={order.orderNum}
                  onChange={handleChange}
                  sx={{ mb: 1 }}
                />

                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TextField
                    name="shippingDate"
                    type="date"
                    value={order.shippingDate}
                    label="Shipping Date"
                    onChange={handleChange}
                    sx={{ mb: 1 }}
                    // renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    inputFormat="MMM/dd/yyyy"
                    value={order.shippingDate}
                    label="Shipping Date"
                    onChange={(event) =>
                      setOrder({
                        ...order,
                        shippingDate: event.toLocaleDateString(),
                      })
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <TextField
                  select
                  name="orderStatus"
                  label="Order Status"
                  value={order.orderStatus}
                  onChange={handleChange}
                  sx={{ mt: 1 }}
                >
                  <MenuItem value="Preparing Material">Preparing</MenuItem>
                  <MenuItem value="In Production">Production</MenuItem>
                  <MenuItem value="QC Check">QC</MenuItem>
                  <MenuItem value="Ready for Shipment">Completed</MenuItem>
                </TextField>
              </FormControl>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Ok</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

// <form>
//   <label>
//     Order Number
//     <input
//       type="number"
//       name="orderNum"
//       min="1"
//       value={state.orderNum}
//       onChange={handleChange}
//     ></input>
//   </label>
//   <label>
//     Shipping Date
//     <input
//       type="date"
//       name="shippingDate"
//       value={state.shippingDate}
//       onChange={handleChange}
//     ></input>
//   </label>
//   <label>
//     Order Status
//     <select
//       name="orderStatus"
//       onChange={handleChange}
//       value={state.orderStatus}
//     >
//       <option value="Preparing Material">Preparing</option>
//       <option value="In Production">Production</option>
//       <option value="QC Check">QC</option>
//       <option value="Ready for Shipment">Completed</option>
//     </select>
//   </label>
//   <input type="submit" value="Submit" />
// </form>; */}
