import React from "react";
import { Paper, Avatar, Typography, Stack } from "@mui/material";

const TeamMemberCard = ({ name, role, avatarUrl, style, onClick }) => (
  <Paper
    variant="memberCard"
    style={style}
    onClick={onClick}
    sx={{ cursor: "pointer" }}
    elevation={0}
  >
    <Stack direction="row" spacing={2} alignItems="center" sx={{ height: "100%" }}>
      <Avatar src={avatarUrl} alt={name} sx={{ width: 56, height: 56 }} />
      <div>
        <Typography variant="h6" color="text.primary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </div>
    </Stack>
  </Paper>
);

export default TeamMemberCard;