import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { DeleteForeverOutlined, Verified } from "@mui/icons-material";
const VerifyAccount = () => {
  const rows = [{ name: "Munir Hossain" }, "21dec,2022", "Bangladesh", "Admin"];
  return (
    <div>
      <div className="py-4">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Start typing to search for user verification"
            inputProps={{ "aria-label": "Start typing to search for users" }}
          />
        </Paper>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>User Role</TableCell>
              <TableCell>Verify User</TableCell>
              <TableCell>Delete User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* map here */}
            <TableRow>
              <TableCell>Munir Hossain Juwel</TableCell>
              <TableCell>munirhossainjuwel@gmail.com</TableCell>
              <TableCell>Seller</TableCell>
              <TableCell>
                <Verified></Verified>
              </TableCell>
              <TableCell>
                <DeleteForeverOutlined className="cursor-pointer" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VerifyAccount;
