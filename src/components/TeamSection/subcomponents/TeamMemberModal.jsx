import React from "react";
import {
  Modal,
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
  Divider,
  IconButton,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TeamMemberModal = ({ open, onClose, member }) => {
  if (!member) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          width: { xs: 320, md: 500 },
          outline: "none",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          <Avatar
            src={member.avatarUrl}
            alt={member.name}
            sx={{ width: 72, height: 72 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {member.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {member.role}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ mb: 2 }}>{member.bio}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2" fontWeight="bold">
          Competências
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          {member.skills?.map((skill, idx) => (
            <Chip key={idx} label={skill} color="primary" variant="outlined" />
          ))}
        </Stack>
        <Typography variant="subtitle2" fontWeight="bold">
          Formação
        </Typography>
        <Stack spacing={1} sx={{ mb: 2 }}>
          {member.education?.map((ed, idx) => (
            <Typography key={idx} variant="body2">
              {ed.degree} - {ed.institution} ({ed.year})
            </Typography>
          ))}
        </Stack>
        {member.hobbies && (
          <>
            <Typography variant="subtitle2" fontWeight="bold">
              Hobbies
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {member.hobbies.join(", ")}
            </Typography>
          </>
        )}
        {member.social && (
          <Stack direction="row" spacing={2}>
            {member.social.linkedin && (
              <Link
                href={member.social.linkedin}
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                LinkedIn
              </Link>
            )}
            {member.social.github && (
              <Link
                href={member.social.github}
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                GitHub
              </Link>
            )}
          </Stack>
        )}
      </Box>
    </Modal>
  );
};

export default TeamMemberModal;
