import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import { IRegistrationCredentials, useAuth } from "../utils/AuthContext";
import Alert from "@mui/material/Alert";
import MuiPhoneNumber from "material-ui-phone-number";
// import {
//   parsePhoneNumber,
//   isValidPhoneNumber,
//   getNumberType,
//   validatePhoneNumberLength,
// } from "libphonenumber-js";
// import parseMax from "libphonenumber-js/max";
// import { FormControl, Input } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const SignUp = () => {
  const { handleUserRegister, errors } = useAuth();
  const [credentials, setCredentials] = useState<IRegistrationCredentials>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    password2: "",
  });

  const lottieStyles = {
    height: "10rem",
  };

  const handleInputChange = (e: any) => {
    console.log("event here", e);
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
    console.log("creds here", credentials);
  };
  const handlePhoneInputChange = (e: any) => {
    // const name = e.target.name;
    // const value = e.target.value;

    setCredentials({ ...credentials, phone: e });
    console.log("creds here", credentials);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/*
          This is the spilled coffee image
          <DotLottieReact
            style={lottieStyles}
            autoResizeCanvas
            playOnHover
            autoplay
            src="https://lottie.host/80153480-3c79-4431-8b24-d5c8e39f4cda/rrxRyzNsgX.lottie"
          /> */}

          <DotLottieReact
            style={lottieStyles}
            autoResizeCanvas
            playOnHover
            autoplay
            src="https://lottie.host/03816c4b-c34f-4131-8b63-dd7e76f7b238/1jSAR1o9Xp.lottie"
          />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => handleUserRegister(e, credentials)}
            sx={{ mt: 3 }}
          >
            {errors.length > 0 &&
              errors.map((error: string) => (
                <Alert severity="error">{error}</Alert>
              ))}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={credentials.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={credentials.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPhoneNumber
                  required
                  fullWidth
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={credentials.phone}
                  label="Phone Number"
                  defaultCountry={"us"}
                  onChange={handlePhoneInputChange}
                />
                {/* 
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  helperText="Enter Number with Country code - e.g. +15558885555 for US Numbers"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={credentials.phone}
                  onChange={handleInputChange}
                ></TextField> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  autoComplete="new-password"
                  value={credentials.password2}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
