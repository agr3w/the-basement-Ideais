import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';

const teamMembers = [
  { name: 'Nome do Membro 1', role: 'Desenvolvedor Front-end Sênior', avatar: '/path/to/avatar1.jpg' },
  { name: 'Nome do Membro 2', role: 'UI/UX Designer', avatar: '/path/to/avatar2.jpg' },
  { name: 'Nome do Membro 3', role: 'Desenvolvedor Full-stack', avatar: '/path/to/avatar3.jpg' }
];

const TeamSection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" sx={{ mb: 8 }}>
          Conheça o Time
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name} sx={{ textAlign: 'center' }}>
              <Avatar
                alt={member.name}
                src={member.avatar} // Use um placeholder se não tiver imagem
                sx={{
                  width: 150,
                  height: 150,
                  margin: '0 auto',
                  mb: 2,
                  filter: 'grayscale(100%)', // Efeito preto e branco
                  transition: 'filter 0.3s ease-in-out',
                  '&:hover': {
                    filter: 'grayscale(0%)', // Remove o filtro no hover
                  }
                }}
              />
              <Typography variant="h6" component="h3">
                {member.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {member.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;