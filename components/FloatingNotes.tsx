import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Music2 } from 'lucide-react';

interface FloatingNotesProps {
  className?: string;
  count?: number;
}

const FloatingNotes: React.FC<FloatingNotesProps> = ({ className = "", count = 15 }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate deterministic-ish random values based on index
  const notes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100, // Horizontal position
    size: Math.floor(Math.random() * 20) + 15, // Size: 15px - 35px
    duration: Math.random() * 15 + 20, // Duration: 20s - 35s (Slow rise)
    delay: Math.random() * 20, // Staggered start
    type: i % 2, // Icon type
    sway: Math.random() * 60 - 30 // Sway amplitude: -30px to 30px
  }));

  const getIcon = (type: number) => {
    return type === 0 ? Music : Music2;
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {notes.map((note) => {
        const Icon = getIcon(note.type);
        return (
          <motion.div
            key={note.id}
            // Colors: Gold in Light Mode, White in Dark Mode
            // Opacity is handled in animate prop for fade in/out
            className="absolute text-gold-500 dark:text-white"
            initial={{ bottom: '-10%', x: 0, opacity: 0 }}
            animate={{ 
              bottom: '120%', 
              opacity: [0, 0.2, 0.4, 0.2, 0], // Gentle fade in and out
              x: [0, note.sway, 0, -note.sway, 0], // S-curve sway path
              rotate: [0, 15, -15, 0] // Subtle rotation
            }}
            transition={{ 
              duration: note.duration, 
              delay: note.delay, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ 
              left: `${note.left}%`,
            }}
          >
            <Icon size={note.size} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingNotes;