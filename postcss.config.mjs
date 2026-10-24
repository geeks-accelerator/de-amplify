// Tailwind v4 ships its PostCSS plugin as a separate package and handles vendor
// prefixing internally (via Lightning CSS), so autoprefixer is gone.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
