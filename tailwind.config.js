/** Tema no modelo da Haven Servicing: creme de base, verde-profundo no texto, blocos escuros e tintas claras alternando. */
module.exports = {
  content: ['./public/index.html'],
  corePlugins: { container: false },
  theme: {
    extend: {
      colors: {
        pearl: '#F9F7F3', ink: '#1E3A2F', soft: '#4D5F56', sea: '#1F4134', forest: '#2B7A4B', 'forest-dark': '#226440',
        patina: '#9DBFA9', sage: '#ECF3EE', clay: '#F4E5DC', sky: '#E9F1F4', sand: '#F2ECE1', sun: '#F2B33D', 'clay-ink': '#8E4428',
        draft: '#FFF1C9', 'on-draft': '#5A4310', wa: '#1F8F4E',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Garamond', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: { md: '10px', lg: '20px' },
    },
  },
};
