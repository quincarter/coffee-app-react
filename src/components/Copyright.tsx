import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { APP_NAME } from "../app-constants";

export const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://brewme.app">
        {APP_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
