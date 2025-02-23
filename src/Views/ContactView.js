import { Box, Grid2, Paper, Typography } from "@mui/material";
import React from "react";
import Header from "../header.js";

const ContactView = () => {
  return (
    <div>
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
          variant="h2"
          style={{
            textAlign: "center",
            paddingTop: "64px",
            color: "white",
            fontFamily: "iceberg",
          }}
        >
          Contact us at
          <a href="mailto:kleinhacks@kleinisd.net"></a>
        </Typography>
        <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
          <Paper sx={{ padding: "10px", margin: "10px", width: "300px" }}>
            <button
              onClick={() =>
                window.open("https://www.instagram.com/kleinhacks/")
              }
              style={{
                border: "none",
                backgroundColor: "white",
                width: "60px",
              }}
            >
              <img
                src="../instalogo.jpg"
                alt="Logo"
                style={{
                  height: "65px",

                  marginTop: "5px",
                  marginLeft: "105px",
                  marginRight: "150px",
                  marginBottom: "10px",
                }}
              />
            </button>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Follow us on Instagram
            </Typography>
          </Paper>
          <Paper
            sx={{
              padding: "10px",
              margin: "10px",
              width: "300px",
            }}
          >
            <button
              onClick={() => window.open("https://twitter.com/klein_hacks")}
              style={{
                border: "none",
                backgroundColor: "white",
                width: "60px",
              }}
            >
              <img
                src="../xLogo.png"
                alt="Logo"
                style={{
                  height: "65px",
                  marginTop: "5px",
                  marginLeft: "105px",
                  marginRight: "150px",
                  marginBottom: "10px",
                }}
              />
            </button>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Follow us on Twitter
            </Typography>
          </Paper>
        </Grid2>
      </div>
    </div>
  );
};

export default ContactView;
