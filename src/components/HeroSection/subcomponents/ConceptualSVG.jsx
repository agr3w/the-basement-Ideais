import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const lines = [
  { x: 30, baseY: 200, width: 190, opacity: 1 },
  { x: 50, baseY: 170, width: 150, opacity: 0.8 },
  { x: 70, baseY: 140, width: 110, opacity: 0.6 },
  { x: 90, baseY: 110, width: 70, opacity: 0.4 },
];

const ConceptualSVG = ({ width = { xs: 180, md: 250 }, color = "#fff" }) => {
  // Parâmetros da animação
  const baseHeight = 20;
  const waveHeight = 25;
  const duration = 3.5;
  const stagger = 0.3; // Delay entre cada barra

  return (
    <Box
      sx={{
        width: { xs: `${width.xs}px`, md: `${width.md}px` },
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        viewBox="0 0 250 250"
        width="100%"
        height="100%"
        style={{ display: "block" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lines.map((line, i) => {
          const maxGrowth = waveHeight - baseHeight;

          return (
            <motion.rect
              key={i}
              x={line.x}
              width={line.width}
              rx={5}
              fill={color}
              opacity={line.opacity}
              animate={{
                height: [
                  baseHeight,
                  baseHeight + maxGrowth * 0.3,
                  waveHeight,
                  baseHeight + maxGrowth * 0.7,
                  baseHeight,
                ],
                y: [
                  line.baseY,
                  line.baseY - maxGrowth * 0.15,
                  line.baseY - maxGrowth * 0.5,
                  line.baseY - maxGrowth * 0.35,
                  line.baseY,
                ],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * stagger,
                ease: [0.25, 0.46, 0.45, 0.94], // Curva bezier customizada mais suave
                times: [0, 0.25, 0.5, 0.75, 1], // Controle preciso dos keyframes
              }}
            />
          );
        })}
      </svg>
    </Box>
  );
};

export default ConceptualSVG;
