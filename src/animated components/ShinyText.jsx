const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
    
    return (
      <div
        className={ `text-[#332c2ca4] dark:text-[#b1a2a2a4] bg-clip-text inline-block text-[44px] font-bold ${disabled ? '' : 'animate-shine'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
    };
    
    export default ShinyText;
  