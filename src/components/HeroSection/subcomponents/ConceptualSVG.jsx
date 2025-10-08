import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

// Paths para onda suave, movimentando inclusive as pontas
const wavePaths = [
  // original (reta)
  "M2 12 Q6 12 12 12 Q18 12 22 12",
  // onda para cima
  "M2 10 Q6 6 12 12 Q18 18 22 14",
  // onda para baixo
  "M2 14 Q6 18 12 12 Q18 6 22 10",
  // onda invertida
  "M2 12 Q6 8 12 12 Q18 16 22 12",
  // volta ao original
  "M2 12 Q6 12 12 12 Q18 12 22 12",
];

const ConceptualSVG = ({
  width = { xs: 200, md: 300 },
  color = "#000",
  strokeWidth = 2.5,
}) => {
  return (
    <Box
      sx={{
        width: { xs: `${width.xs}px`, md: `${width.md}px` },
        height: { xs: `${width.xs}px`, md: `${width.md}px` },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        style={{ display: "block" }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          d={wavePaths[0]}
          animate={{
            d: wavePaths,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      </motion.svg>
    </Box>
  );
};

export default ConceptualSVG;