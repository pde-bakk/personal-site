export const particlesOptions = {
  background: {
    color: {
      value: '#FFFFFF',
    },
  },
  fullScreen: {
    enable: true,
  },
  fpsLimit: 144,
  particles: {
    color: {
      value: 'random',
    },

    links: {
      color: 'random',
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 0.5,
      warp: true,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: 'circle',
    },
    shadow: {
      enable: true,
      blue: 100,
      color: '#000000',
    },
    size: {
      random: false,
      value: 2,
    },
  },
  detectRetina: true,
};
