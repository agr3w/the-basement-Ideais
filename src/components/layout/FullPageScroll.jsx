import React, { useState, useEffect, Children } from 'react';
import { motion, useAnimationControls, useMotionValue, animate } from 'framer-motion';
import { Box, Stack } from '@mui/material';

/**
 * @param {*} param0 
 * @returns {JSX.Element}
 * @description Componente de navegação por pontos para indicar a seção ativa.
 */
const NavigationDots = ({ total, activeIndex, onDotClick }) => (
  <Box sx={{ position: 'fixed', top: '50%', right: '32px', transform: 'translateY(-50%)', zIndex: 10 }}>
    <Stack spacing={2}>
      {Array.from({ length: total }).map((_, index) => (
        <Box
          key={index}
          onClick={() => onDotClick(index)}
          sx={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: activeIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        />
      ))}
    </Stack>
  </Box>
);

// Configurações de animação
const animationDuration = 1.0;
const animationEase = [0.4, 0, 0.2, 1];

/**
 * @param {*} param0 
 * @returns {JSX.Element}
 * @description Componente que gerencia a rolagem de página cheia, suportando seções verticais e horizontais.
 */
const FullPageScroll = ({ children }) => {
  const mainControls = useAnimationControls();
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = Children.count(children);
  const childrenArray = Children.toArray(children);

  // NOVO: Controle para a animação horizontal
  const x = useMotionValue(0);

  const goToSection = (index) => {
    if (isAnimating || index < 0 || index >= totalSections) return;
    setIsAnimating(true);
    x.set(0); // Reseta a posição horizontal ao trocar de slide
    mainControls.start({
      y: `-${index * 100}vh`,
      transition: { duration: animationDuration, ease: animationEase },
    }).then(() => {
      setCurrentSection(index);
      setIsAnimating(false);
    });
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (isAnimating) {
        event.preventDefault();
        return;
      }

      const activeChild = childrenArray[currentSection];
      const isHorizontalSection = activeChild.props.type === 'horizontal-scroll';

      const isScrollingDown = event.deltaY > 0;
      const isScrollingUp = event.deltaY < 0;

      if (isHorizontalSection) {
        event.preventDefault();
        const currentX = x.get();
        const newX = currentX - event.deltaY * 2; // Multiplicador para sensibilidade

        // Limites da rolagem horizontal
        const trackWidth = (activeChild.props.trackWidth || 400) - 100; // Largura do trilho em % (ex: 400%)
        const minX = -window.innerWidth * (trackWidth / 100);
        const maxX = 0;

        if (newX > maxX) { // Tentando rolar para cima no início
          goToSection(currentSection - 1);
        } else if (newX < minX) { // Tentando rolar para baixo no final
          goToSection(currentSection + 1);
        } else {
          // Anima o scroll horizontal
          animate(x, newX, { type: 'spring', stiffness: 300, damping: 30 });
        }
      } else { // Se for uma seção vertical normal
        if (isScrollingDown && currentSection < totalSections - 1) {
          event.preventDefault();
          goToSection(currentSection + 1);
        } else if (isScrollingUp && currentSection > 0) {
          event.preventDefault();
          goToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isAnimating, currentSection, totalSections, childrenArray, x]);

  return (
    <>
      <NavigationDots total={totalSections} activeIndex={currentSection} onDotClick={goToSection} />
      <Box sx={{ height: '100vh', overflow: 'hidden' }}>
        <motion.div animate={mainControls} initial={{ y: 0 }}>
          {Children.map(children, (child, index) => (
            <Box key={index} sx={{ height: '100vh', width: '100vw' }}>
              {/* Passamos o controle 'x' para o filho, se ele for do tipo certo */}
              {React.cloneElement(child, { x: child.props.type === 'horizontal-scroll' ? x : undefined })}
            </Box>
          ))}
        </motion.div>
      </Box>
    </>
  );
};

export default FullPageScroll;