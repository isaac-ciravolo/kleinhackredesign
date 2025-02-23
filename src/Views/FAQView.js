import React from "react";
import Header from "../header";
import {
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const FAQView = () => {
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
          variant="h2"
          style={{
            textAlign: "center",
            paddingTop: "64px",
            color: "white",
            fontFamily: "iceberg",
          }}
        >
          FAQs
        </Typography>
        <div
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
          }}
        >
          <Accordion>
            <AccordionSummary>
              <Typography>What is Klein Hacks?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                KleinHacks is a student-led hackathon that aims to inspire the
                next generation of innovators from around the Klein ISD area.
                High school students, business partners, and community members
                collaborate on projects with applications in technology and a
                variety of other fields. Each spring, students will be immersed
                in a 12-hour innovation challenge. Our event is completely free
                to all students.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "10px" }}>
            <AccordionSummary>
              <Typography>Who can attend Klein Hacks?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All current Klein ISD high school students can attend our event.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "10px" }}>
            <AccordionSummary>
              <Typography>When is Klein Hacks?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The KleinHacks 2026 Schedule will be posted soon!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "10px" }}>
            <AccordionSummary>
              <Typography>Do I Need to Know how to Code</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nope! KleinHacks is a great place to learn how to code, but we
                will have challenges that require no coding at all! As long as
                you have a passion for creating, the resources we provide you
                along with the mentors available will get you on the right path
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "10px" }}>
            <AccordionSummary>
              <Typography>
                What are the challenges and how many can I do?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our challenges won’t be announced until the day of the event! A
                team can only make one project, but it can apply to as many
                challenges as you want!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "10px" }}>
            <AccordionSummary>
              <Typography>How do prizes work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There are two types of prizes: Sponsored Challenges The prizes
                and amount of winning teams for sponsored challenges is up to
                the discretion of the sponsor. General Track There will be three
                winning teams in the general track. They will have the choice of
                one of the three Grand Prizes, subject to availability. 1st
                place will pick first, followed by 2nd, and then 3rd place.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "10px" }}>
            <AccordionSummary>
              <Typography>How do teams work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Teams consist of a maximum of three participants. Prizes are
                awarded to every member of the team individually. You don’t need
                to have a team, but having friends makes it more fun! There will
                be a team formation event at KleinHacks for those who don’t have
                one.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQView;
