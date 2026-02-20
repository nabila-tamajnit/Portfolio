export const Logo = ({ variant = 'dualDark', className = '' }) => {

  const colorSchemes = {
    white: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF'
    },
    dark: {
      primary: '#1E1E24',
      secondary: '#1E1E24'
    },
    green: {
      primary: '#6B9080',
      secondary: '#6B9080'
    },
    dualDark: {
      primary: '#1E1E24',
      secondary: '#6B9080'
    },
    dualWhite: {
        primary: '#FFFFFF',
        secondary: '#6B9080'
    }
  };

  const colors = colorSchemes[variant] || colorSchemes.dualDark;

  return (
    <svg 
      width="30" 
      height="26" 
      viewBox="0 0 30 26" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rectangle vertical (gauche) */}
      <rect 
        x="3.52686" 
        y="4.02271" 
        width="6" 
        height="20" 
        rx="1" 
        fill={colors.primary}
      />
      
      {/* Triangle (haut droite) */}
      <path 
        d="M22.5273 4.02274C23.0796 4.02274 23.5273 4.47046 23.5273 5.02274L23.5273 14.9024C23.5273 15.8752 22.279 16.2752 21.7136 15.4836L14.6564 5.60406C14.1836 4.9422 14.6567 4.02281 15.4701 4.0228L22.5273 4.02274Z" 
        fill={colors.secondary}
      />
      
      {/* Forme diagonale (bas) */}
      <path 
        d="M9.99535 4.02248C10.3277 4.02247 10.6383 4.18755 10.8242 4.463L22.9742 22.4628C23.4225 23.127 22.9467 24.0223 22.1454 24.0223L17.5697 24.0223C17.2313 24.0223 16.9158 23.8511 16.7313 23.5673L5.03105 5.56763C4.59863 4.90239 5.07602 4.02265 5.86945 4.02263L9.99535 4.02248Z" 
        fill={colors.primary}
      />
    </svg>
  );
};