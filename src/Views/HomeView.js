import React from "react";
import Header from "../header";
import Typography from "@mui/material/Typography";
import { Box, Button, Paper } from "@mui/material";

const HomeView = () => {
  return (
    <div className="App">
      <Header />

      <div
        style={{
          backgroundImage: "url('../background3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(100vh - 64px)",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "12vh",
            fontFamily: "iceberg",
            fontSize: "10rem",
          }}
        >
          KLEIN HACKS 2026
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "11vh",
            backgroundColor: "white",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "10vh",
          }}
        >
          <Paper
            style={{
              display: "flex",
              justifyContent: "center",

              backgroundColor: "white",
            }}
          >
            <Button
              sx={{
                textAlign: "center",
                fontFamily: "iceberg",
                fontSize: "4rem",
                color: "black",
              }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSdlDB2U7vB1SN-JkiOjv_eBb5S6hu5Xt-jK4p5B8H8lKYutsA/formrestricted"
              target="_blank"
              rel="noreferrer noopener"
            >
              Click Here to Register
            </Button>
          </Paper>
          <Paper
            elevation={5}
            sx={{
              marginLeft: "20%",
              marginRight: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="../QRCode.png"
              alt="QR Code"
              style={{ width: "200px", height: "200px" }}
            ></img>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default HomeView;
