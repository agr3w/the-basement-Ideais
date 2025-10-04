import React, { useState } from "react";
import { Box, Typography, Grid, Stack, Paper } from "@mui/material";
import Logo from "../HeroSection/subcomponents/Logo";
import TeamMemberCard from "./subcomponents/TeamMemberCard";
import TeamMemberModal from "./subcomponents/TeamMemberModal";
import { teamDetails } from "../../data/teamDetails";

const TeamSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  return (
    <Paper variant="sectionContainer">
      <Stack spacing={10}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Logo />
        </Box>
        <Typography
          variant="h3"
          color="text.primary"
          align="center"
          fontWeight={"bold"}
        >
          Conheça a equipe
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamDetails.map((member, index) => (
            <Grid
              key={index}
              sx={{
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
              }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                avatarUrl={member.avatarUrl}
                style={{
                  height: "140px",
                  width: "320px",
                  minWidth: "220px",
                  maxWidth: "100%",
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(member)}
              />
            </Grid>
          ))}
        </Grid>
        <TeamMemberModal
          open={modalOpen}
          onClose={handleClose}
          member={selectedMember}
        />
      </Stack>
    </Paper>
  );
};

export default TeamSection;
