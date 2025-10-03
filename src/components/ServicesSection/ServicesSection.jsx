// Bibliotecas
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

// Sub-componentes
import ServiceCard from './subcomponents/ServiceCard';
import ConnectingLine from './subcomponents/ConnectingLine';

// Ícones
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import WebIcon from '@mui/icons-material/Web';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import GroupIcon from '@mui/icons-material/Group';

// Dados dos cards
const servicesData = [
    { icon: <DesignServicesIcon sx={{ fontSize: 50 }} />, title: "Design", top: '40%', left: '5%' },
    { icon: <WebIcon sx={{ fontSize: 50 }} />, title: "Interface", top: '15%', left: '28%' },
    { icon: <SettingsSuggestIcon sx={{ fontSize: 50 }} />, title: "Sistemas", top: '50%', left: '50%' },
    { icon: <GroupIcon sx={{ fontSize: 50 }} />, title: "Gestão", top: '20%', left: '72%' },
];


/**
 * @param {*} x - valor de deslocamento horizontal para animação 
 * @returns {JSX.Element}
 * @description Esta seção apresenta os serviços oferecidos com cards animados e uma linha conectando-os.
 */
const ServicesSection = ({ x }) => {
    return (
        <Box sx={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#E0E0E0' }}>
            <Container maxWidth="xl" sx={{ height: '100%', position: 'relative' }}>
                {/* Título da seção */}
                <Typography variant="h3" sx={{ color: 'black', pt: 4, fontWeight: 'bold' }}>
                    Nossos Serviços
                </Typography>
                <motion.div style={{ x, position: 'absolute', top: 0, left: 0, width: '400%', height: '100%' }}>
                    <ConnectingLine />
                    {servicesData.map((service, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'absolute',
                                top: service.top,
                                left: service.left,
                                transform: 'translateY(-50%)',
                                zIndex: 2,
                            }}
                        >
                            <ServiceCard icon={service.icon} title={service.title} />
                        </Box>
                    ))}
                </motion.div>
            </Container>
        </Box>
    );
};

export default ServicesSection;