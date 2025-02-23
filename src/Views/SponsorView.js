import {
  Typography,
  AppBar,
  Tab,
  Tabs,
  Link,
  ImageList,
  ImageListItem,
  Paper,
} from "@mui/material";

import Carousel from "react-bootstrap/Carousel";

import Header from "../header";

function SponsorView() {
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
          Thank You to Our Sponsors!
        </Typography>
        <Carousel
          indicators={false}
          slide={false}
          interval={2500}
          style={{
            width: "500px",
            height: "50%",
            padding: "10px",
            marginTop: "8vh",

            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            border: "8px solid black",
            backgroundColor: "white",
          }}
        >
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/BRock.avif"
                alt="BlackRock"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/Canes.avif"
                alt="Canes"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/CFA.avif"
                alt="Chick-fil-A"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/CodeHS.avif"
                alt="CodeHS"
              />
            </Paper>
          </Carousel.Item>

          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/Crust.avif"
                alt="Crust"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/EZEE.avif"
                alt="EZEE"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/FengCha.avif"
                alt="FengCha"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/GandyInk.avif"
                alt="Gandy Ink"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/HEB.avif"
                alt="HEB"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/HP.avif"
                alt="HP"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "300px" }}
                src="../sponsors/inSpireRock.avif"
                alt="inSpire Rock Climbing"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/Klein.avif"
                alt="Klein ISD"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/Lightspeed.avif"
                alt="Lightspeed"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/MainEvent.avif"
                alt="Main Event"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/Mister.avif"
                alt="Mister Car Wash"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/Netsync.avif"
                alt="Netsync"
              />
            </Paper>
          </Carousel.Item>
          <Carousel.Item>
            <Paper
              sx={{
                display: "flex",
                margin: "auto",
                maxWidth: 500,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ maxHeight: "50%", maxWidth: "50%" }}
                src="../sponsors/Nord.avif"
                alt="NordVPN"
              />
            </Paper>
          </Carousel.Item>
        </Carousel>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "iceberg",
            marginTop: "6vh",
          }}
        >
          Interested in sponsoring Klein Hacks 2026? Email us at:{" "}
          <Link
            href="mailto:kleinhacks@kleinisd.net"
            style={{ color: "white" }}
          >
            kleinhacks@kleinisd.net
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default SponsorView;
