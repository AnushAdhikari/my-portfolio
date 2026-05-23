import React from 'react';

const FlagForFlagNepalIcon = ({
  size = undefined,
  color = '#000000',
  strokeWidth = 2,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  const viewBoxSize = 24 + (padding * 2);
  const viewBoxOffset = -padding;
  const viewBox = `0 0 36 36`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <path fill="#22408B" d="M27.796 19L8 5v26h19.796L15.918 19z"/><path fill="#DD2F45" d="M25 18L9 7.196V30h16L13.574 18z"/><path fill="#FFF" d="M14.291 24.041l.586-.816l-1 .098l.1-1l-.817.586l-.414-.916l-.414.916l-.817-.586l.099 1l-1-.098l.586.816l-.916.414l.916.414l-.586.816l1-.098l-.099 1l.817-.586l.414.916l.414-.916l.817.586l-.1-1l1 .098l-.586-.816l.916-.414zm-1.546-7.147l.001.002l.001-.002l.018.002c1.468 0 2.66-1.13 2.784-2.567a3.2 3.2 0 0 1-1.595 1.442l-.175-.244l.611-.276l-.611-.276l.391-.545l-.668.066l.067-.668l-.546.391l-.276-.612l-.276.612l-.546-.391l.067.668l-.668-.066l.391.545l-.611.276l.611.276l-.167.233a3.203 3.203 0 0 1-1.566-1.431a2.795 2.795 0 0 0 2.763 2.565z"/>
    </svg>
  );
};

export default FlagForFlagNepalIcon;