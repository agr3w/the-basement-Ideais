import React, { useState, useEffect, Children } from "react";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  animate,
} from "framer-motion";
import NavigationDots from "./NavigationDots";
import { Box } from "@mui/material";

// Configurações de animação
const animationDuration = 0.7;
const animationEase = [0.4, 0, 0.2, 1];

// Breakpoint para mobile
const MOBILE_BREAKPOINT = 768;

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

  // Detecta se está em tela pequena (mobile/tablet)
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Controle para a animação horizontal
  const x = useMotionValue(0);

  const goToSection = React.useCallback(
    (index) => {
      if (isAnimating || index < 0 || index >= totalSections) return;
      setIsAnimating(true);
      x.set(0); // Reseta a posição horizontal ao trocar de slide
      mainControls
        .start({
          y: `-${index * 100}vh`,
          transition: { duration: animationDuration, ease: animationEase },
        })
        .then(() => {
          setCurrentSection(index);
          setIsAnimating(false);
        });
    },
    [isAnimating, totalSections, mainControls, x]
  );

  useEffect(() => {
    if (isMobile) return; // Em mobile, usar scroll nativo: não anexa o handler customizado

    const handleWheel = (event) => {
      if (isAnimating) {
        event.preventDefault();
        return;
      }

      const activeChild = childrenArray[currentSection];
      const isHorizontalSection =
        activeChild.props.type === "horizontal-scroll";

      const isScrollingDown = event.deltaY > 0;
      const isScrollingUp = event.deltaY < 0;

      if (isHorizontalSection) {
        event.preventDefault();
        const currentX = x.get();
        const newX = currentX - event.deltaY * 6; // Multiplicador para sensibilidade

        // Limites da rolagem horizontal
        const trackWidth = (activeChild.props.trackWidth || 400) - 100; // Largura do trilho em % (ex: 400%)
        const minX = -window.innerWidth * (trackWidth / 100);
        const maxX = 0;

        if (newX > maxX) {
          // Tentando rolar para cima no início
          goToSection(currentSection - 1);
        } else if (newX < minX) {
          // Tentando rolar para baixo no final
          goToSection(currentSection + 1);
        } else {
          // Anima o scroll horizontal
          animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
        }
      } else {
        // Se for uma seção vertical normal
        if (isScrollingDown && currentSection < totalSections - 1) {
          event.preventDefault();
          goToSection(currentSection + 1);
        } else if (isScrollingUp && currentSection > 0) {
          event.preventDefault();
          goToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [
    isAnimating,
    currentSection,
    totalSections,
    childrenArray,
    x,
    goToSection,
    isMobile,
  ]);

  // Em mobile, renderiza scroll nativo (página normal)
  if (isMobile) {
    return (
      <>
        <Box sx={{ height: "100vh", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
          {Children.map(children, (child, index) => (
            <Box key={index} sx={{ height: "100vh", width: "100vw" }}>
              {child}
            </Box>
          ))}
        </Box>
      </>
    );
  }

  return (
    <>
      <NavigationDots
        total={totalSections}
        activeIndex={currentSection}
        onDotClick={goToSection}
      />
      <Box sx={{ height: "100vh", overflow: "hidden" }}>
        <motion.div animate={mainControls} initial={{ y: 0 }}>
          {Children.map(children, (child, index) => (
            <Box key={index} sx={{ height: "100vh", width: "100vw" }}>
              {/* Passamos o controle 'x' para o filho, se ele for do tipo certo */}
              {React.cloneElement(child, {
                x: child.props.type === "horizontal-scroll" ? x : undefined,
              })}
            </Box>
          ))}
        </motion.div>
      </Box>
    </>
  );
};

export default FullPageScroll;
