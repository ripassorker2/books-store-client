import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

export default function AppbarDropDown() {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [cetegoris, setCetegoris] = React.useState([]);

  React.useEffect(() => {
    fetch("https://books-store-server-six.vercel.app/cetegoris")
      .then((res) => res.json())
      .then((data) => setCetegoris(data));
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 220, zIndex: 999999999 }}>
        <InputLabel id="demo-controlled-open-select-label">
          All Category
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="All Category"
          onChange={handleChange}
        >
          {cetegoris.map((cete) => (
            <MenuItem key={cete?.id} value={cete?.id}>
              <Link to={`/category/${cete?.id}`}>{cete?.category}</Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
