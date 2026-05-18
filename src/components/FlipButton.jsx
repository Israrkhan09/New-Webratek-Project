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
  backText = "Get In Touch",
  onClick,
  className = "",
  textSize = "text-[16px]",
  bgColor = "bg-[#006a63]",
  textColor = "text-white",
  borderClassName = ""
}) {
  return (
    <button
      className={`group relative overflow-hidden h-[54px] cursor-pointer rounded-full ${bgColor} transition-all duration-300 ${borderClassName} ${className}`}
      onClick={onClick}
    >
      <div className="relative w-full h-full flex items-center justify-center px-6">
        {/* Relative hidden text to provide natural width */}
        <span className={`${textSize} font-bold invisible whitespace-nowrap`}>
          {frontText.length > backText.length ? frontText : backText}
        </span>

        <span className={`absolute inset-0 w-full h-full flex items-center justify-center px-6 whitespace-nowrap transform transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-[150%] group-hover:opacity-0 ${textColor} font-bold ${textSize} select-none`}>
          {frontText}
        </span>

        <span className={`absolute inset-0 w-full h-full flex items-center justify-center px-6 whitespace-nowrap transform -translate-y-[150%] opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.4,1.16,0.24,1)] group-hover:translate-y-0 group-hover:opacity-100 ${textColor} font-bold ${textSize} select-none`}>
          {backText}
        </span>

      </div>
    </button>
  );
}
