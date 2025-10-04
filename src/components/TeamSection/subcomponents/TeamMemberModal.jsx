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
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TeamMemberModal = ({ open, onClose, member }) => {
  if (!member) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      disableAutoFocus={false}
      disableEnforceFocus={false}
      disableRestoreFocus={true}
      sx={{
        zIndex: 1300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiBackdrop-root": {
          backdropFilter: open ? "blur(6px)" : "blur(0px)",
          backgroundColor: "rgba(0,0,0,0.3)",
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            bgcolor: "#222",
            color: "#fff",
            borderRadius: 4,
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
            p: 4,
            width: { xs: 320, md: 500 },
            maxHeight: "90vh",
            overflowY: "auto",
            outline: "none",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <IconButton
              onClick={onClose}
              sx={{
                color: "#fff",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Avatar
              src={member.avatarUrl}
              alt={member.name}
              sx={{
                width: 72,
                height: 72,
                border: "2px solid #666",
              }}
            />
            <Box>
              <Typography variant="h5" fontWeight="bold" color="#fff">
                {member.name}
              </Typography>
              <Typography variant="subtitle1" color="#bdbdbd">
                {member.role}
              </Typography>
            </Box>
          </Box>

          <Typography sx={{ mb: 3, color: "#e0e0e0" }}>{member.bio}</Typography>

          <Divider sx={{ my: 2, bgcolor: "#444" }} />

          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#fff"
            sx={{ mb: 1 }}
          >
            Competências
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ flexWrap: "wrap", gap: 1, mb: 3 }}
          >
            {member.skills?.map((skill, idx) => (
              <Chip
                key={idx}
                label={skill}
                sx={{
                  bgcolor: "#333",
                  color: "#90caf9",
                  border: "1px solid #666",
                  "&:hover": { bgcolor: "#444" },
                }}
              />
            ))}
          </Stack>

          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#fff"
            sx={{ mb: 1 }}
          >
            Formação
          </Typography>
          <Stack spacing={1} sx={{ mb: 3 }}>
            {member.education?.map((ed, idx) => (
              <Typography key={idx} variant="body2" color="#e0e0e0">
                <strong>{ed.degree}</strong> - {ed.institution} ({ed.year})
              </Typography>
            ))}
          </Stack>

          {member.hobbies && (
            <>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                color="#fff"
                sx={{ mb: 1 }}
              >
                Hobbies
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: "#e0e0e0" }}>
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
                  sx={{
                    color: "#90caf9",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  LinkedIn
                </Link>
              )}
              {member.social.github && (
                <Link
                  href={member.social.github}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "#90caf9",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  GitHub
                </Link>
              )}
            </Stack>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default TeamMemberModal;
