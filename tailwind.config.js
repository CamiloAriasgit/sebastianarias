module.exports = {
  theme: {
    extend: {
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      animation: {
        'gradient-slow': 'gradient-xy 15s ease infinite',
      }
    },
  },
}