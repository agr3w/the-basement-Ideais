import React from 'react';
import { Box } from '@mui/material';

// Importando os componentes das seções da Home
// import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TeamSection from '../components/home/TeamSection';
import ContactCTA from '../components/home/ContactCTA';
import Footer from '../components/layout/Footer';

const Home = () => {
    return (
        <Box>
            <main style={{ marginTop: '64px', backgroundColor: '#000000' }}>
                <HeroSection />
                {/* Adicione um ID aqui */}
                <div id="services-section">
                    <ServicesSection />
                </div>
                <FeaturedProjects />
                <TeamSection />
                <ContactCTA />
            </main>
            <Footer />
        </Box>
    );
};

export default Home;