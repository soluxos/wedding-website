import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '@motionone/easing';

/**
 * @framerIntrinsicWidth 100
 * @framerIntrinsicHeight 100
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function Grain(props) {
  const { opacity = 0.1, style } = props;
  const keyframesX = ['0%', '-5%', '-15%', '7%', '-5%', '-15%', '15%', '0%', '3%', '-10%'];
  const keyframesY = ['0%', '-10%', '5%', '-25%', '25%', '10%', '0%', '15%', '35%', '10%'];

  return (
    <motion.div
      style={{
        ...containerStyle,
        opacity: opacity,
        inset: '-200%',
        width: '400%',
        height: '400%',
        position: 'absolute',
      }}
      animate={{ x: keyframesX, y: keyframesY }}
      transition={{ ease: steps(10, 'start'), repeat: Infinity, duration: 8 }}
    />
  );
}

const containerStyle = {
  backgroundSize: '256px 256px',
  backgroundRepeat: 'repeat',
  background: "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
  pointerEvents: 'none',
};
