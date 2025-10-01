import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dados para gerar a grade de blocos 3x3
const initialBlocks = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  x: (i % 3) * 40,
  y: Math.floor(i / 3) * 40,
}));

// Função para embaralhar os blocos
function shuffleBlocks(blocks) {
  const shuffled = [...blocks];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  // Recalcula as posições x e y para o novo arranjo
  return shuffled.map((block, idx) => ({
    ...block,
    x: (idx % 3) * 40,
    y: Math.floor(idx / 3) * 40,
  }));
}

const FoundationAnimation = () => {
  const [blocks, setBlocks] = useState(initialBlocks);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks(prev => shuffleBlocks(prev));
      setAnimationKey(prev => prev + 1); // Força re-render para animação contínua
    }, 1200); // Reduzido para 1.2s para mais fluidez
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '120px'
    }}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMidYMid meet"
        style={{
          overflow: 'visible'
        }}
      >
        <AnimatePresence mode="sync">
          {blocks.map((block, index) => (
            <motion.rect
              key={`${block.id}-${animationKey}`}
              x={block.x + 10} // Centraliza no SVG
              y={block.y + 10}
              width="28"
              height="28"
              fill="#FFFFFF"
              rx="4"
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                rotate: Math.random() * 360
              }}
              animate={{
                x: block.x + 10,
                y: block.y + 10,
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                rotate: Math.random() * 360
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                mass: 0.8,
                delay: index * 0.05, // Delay escalonado para efeito cascata
              }}
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            />
          ))}
        </AnimatePresence>
        
        {/* Elemento de fundo sutil para dar contexto */}
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          strokeDasharray="4,4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );
};

export default FoundationAnimation;