import { useState } from 'react';

/**
 * FlipButton Component
 * A premium 'Vertical Text Slide' interaction.
 * - Background: Remains #F5F5F5 at all times.
 * - Interaction: Text slides vertically (3D-like) to reveal a new message.
 * - Design: Minimalist, clean, and high-contrast.
 */
export default function FlipButton({
  frontText = "Get In Touch",
  backText = "Start Project",
  onClick,
  className = "",
  borderClassName = "border-black/10",
  isDark = false,
  textSize = "text-xs sm:text-sm"
}) {
  const bgColor = isDark ? "bg-black" : "bg-[#F5F5F5]";
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div
      className={`group relative overflow-hidden h-[52px] w-[200px] cursor-pointer rounded-full ${bgColor} border ${borderClassName} ${className}`}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <span className={`absolute transform transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-[150%] group-hover:opacity-0 ${textColor} font-semibold uppercase tracking-wider ${textSize} select-none`}>
          {frontText}
        </span>

        <span className={`absolute transform -translate-y-[150%] opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.4,1.16,0.24,1)] group-hover:translate-y-0 group-hover:opacity-100 ${textColor} font-semibold uppercase tracking-wider ${textSize} select-none`}>
          {backText}
        </span>
      </div>

      <div className={`absolute inset-0 border ${isDark ? 'border-white/10' : 'border-black/5'} rounded-full pointer-events-none z-40`} />
    </div>
  );
}
