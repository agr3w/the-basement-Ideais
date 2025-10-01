import React from 'react';
import { Box, Container, Typography, Grid, Button, CardMedia, Stack, Chip } from '@mui/material';

// Dados mockados. No futuro, isso pode vir de uma API/CMS.
const projectsData = [
  {
    title: 'Projeto Neon',
    description: 'Uma plataforma de análise de dados financeiros que transforma informações complexas em dashboards visuais e interativos. O foco foi em performance e clareza visual para tomada de decisões rápidas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    tags: ['React.js', 'Material UI', 'D3.js', 'Node.js']
  },
  {
    title: 'App Aura',
    description: 'Um aplicativo mobile de bem-estar e meditação com uma interface minimalista e calmante. O desafio foi criar uma experiência imersiva e relaxante através de micro-interações e design de som.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    tags: ['React Native', 'UI/UX Design', 'Firebase']
  }
];

const FeaturedProjects = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" sx={{ mb: 8 }}>
          Projetos que nos orgulhamos
        </Typography>
        <Stack spacing={12}> {/* Espaçamento entre cada projeto */}
          {projectsData.map((project, index) => (
            <Grid 
              container 
              spacing={5} 
              key={project.title}
              direction={index % 2 === 0 ? 'row' : 'row-reverse'} // Alterna a direção
              alignItems="center"
            >
              {/* Coluna da Imagem */}
              <Grid item xs={12} md={7}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    border: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                />
              </Grid>
              {/* Coluna do Texto */}
              <Grid item xs={12} md={5}>
                <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
                  {project.tags.map(tag => <Chip key={tag} label={tag} variant="outlined" />)}
                </Stack>
                <Button variant="outlined" color="primary">
                  Ver estudo de caso
                </Button>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;