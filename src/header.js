import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#081924",
        height: "64px",
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "inline-block" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "inline-block" }}
        >
          <img
            src="../kleinhackslogo.avif"
            alt="Logo"
            style={{ height: "60px", marginTop: "5px" }}
          />
        </Typography>
        <Button
          onClick={() => navigate("/contactus")}
          sx={{
            ":hover": { fontSize: "1.1rem", marginTop: "14px" },
            color: "white",
            marginTop: "15px",
            marginRight: "10px",
            fontSize: "1rem",
            fontFamily: "inherit",
            float: "right",
          }}
        >
          Contact Us
        </Button>
        <Button
          onClick={() => navigate("/faq")}
          sx={{
            ":hover": { fontSize: "1.1rem", marginTop: "14px" },
            color: "white",
            marginTop: "15px",
            fontSize: "1rem",
            fontFamily: "inherit",
            float: "right",
          }}
        >
          FAQs
        </Button>

        <Button
          onClick={() => navigate("/sponsors")}
          sx={{
            ":hover": { fontSize: "1.1rem", marginTop: "14px" },
            color: "white",
            marginTop: "15px",
            fontSize: "1rem",
            fontFamily: "inherit",
            float: "right",
          }}
        >
          Sponsors
        </Button>
        <Button
          onClick={() => navigate("/")}
          sx={{
            ":hover": { fontSize: "1.1rem", marginTop: "14px" },
            color: "white",
            marginTop: "15px",
            fontSize: "1rem",
            fontFamily: "inherit",
            float: "right",
          }}
        >
          Home
        </Button>
      </Box>
    </AppBar>
  );
}
export default Header;
