import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginForm = () => {
  return (
    <Box
      className="rounded-md shadow-md p-4 w-min"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box className="flex flex-col space-y-4"> 
        <Box>Email</Box>
        <TextField id="Email" label="Email" variant="outlined" />
        <Box>Password</Box>
        <TextField id="Password" label="Password" variant="outlined" />
        <Box className="flex space-x-4">
          <Button variant="contained" color="success">Login</Button>
          <Button variant="outlined" color="error">Cancel</Button>
          <Button variant="outlined" color="error">Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
