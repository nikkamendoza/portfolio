/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': ['Comfortaa', 'cursive'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'float1': 'float1 5.5s ease-in-out infinite',
        'float2': 'float2 6.2s ease-in-out infinite',
        'float3': 'float3 6.9s ease-in-out infinite',
        'float4': 'float4 7.6s ease-in-out infinite',
        'float5': 'float5 8.3s ease-in-out infinite',
        'float6': 'float6 9.0s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'robot-transform': 'robot-transform 2s ease-out both',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
          '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
          '70%': { transform: 'translate3d(0, -15px, 0)' },
          '90%': { transform: 'translate3d(0, -4px, 0)' },
        },
        float1: {
          '0%': { transform: 'translateY(0) rotate(-18deg)' },
          '50%': { transform: 'translateY(-24px) rotate(-18deg)' },
          '100%': { transform: 'translateY(0) rotate(-18deg)' },
        },
        float2: {
          '0%': { transform: 'translateY(0) rotate(12deg)' },
          '50%': { transform: 'translateY(18px) rotate(12deg)' },
          '100%': { transform: 'translateY(0) rotate(12deg)' },
        },
        float3: {
          '0%': { transform: 'translateY(0) rotate(8deg)' },
          '50%': { transform: 'translateY(-18px) rotate(8deg)' },
          '100%': { transform: 'translateY(0) rotate(8deg)' },
        },
        float4: {
          '0%': { transform: 'translateY(0) rotate(-10deg)' },
          '50%': { transform: 'translateY(20px) rotate(-10deg)' },
          '100%': { transform: 'translateY(0) rotate(-10deg)' },
        },
        float5: {
          '0%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-6deg)' },
          '100%': { transform: 'translateY(0) rotate(-6deg)' },
        },
        float6: {
          '0%': { transform: 'translateY(0) rotate(8deg)' },
          '50%': { transform: 'translateY(22px) rotate(8deg)' },
          '100%': { transform: 'translateY(0) rotate(8deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '60%': { opacity: '1', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'robot-transform': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.2) rotateX(90deg) skewY(30deg) translateY(80px)',
            filter: 'brightness(1.5) grayscale(1)',
          },
          '60%': {
            opacity: '1',
            transform: 'scale(1.2, 0.8) rotateX(-10deg) skewY(-10deg) translateY(-10px)',
            filter: 'brightness(1.2) grayscale(0.3)',
          },
          '80%': {
            transform: 'scale(0.95, 1.05) rotateX(2deg) skewY(2deg) translateY(2px)',
            filter: 'brightness(1.1) grayscale(0)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
            filter: 'none',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontSize: {
        '7.5xl': '7.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
