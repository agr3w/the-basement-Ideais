import React from "react";
import { Box, Typography, Stack, Avatar, Paper } from "@mui/material";

const TeamMemberCard = ({ name, role, avatarUrl, style }) => {
  return (
    <Paper variant="memberCard" style={style}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Avatar
          src={avatarUrl}
          alt={`Foto de ${name}`}
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography variant="h6" color="text.primary">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default TeamMemberCard;
