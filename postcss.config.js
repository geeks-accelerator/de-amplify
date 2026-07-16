module.exports = {
  plugins: {
    // Tailwind v4 ships its PostCSS plugin as a separate package and handles
    // vendor prefixing internally (via Lightning CSS), so autoprefixer is gone.
    "@tailwindcss/postcss": {},
  },
};
