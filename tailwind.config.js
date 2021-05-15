module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        times: ['Times New Roman']
      },
      colors: {
        a: 'var(--color-a)',
        b: 'var(--color-b)',
        c: 'var(--color-c)',
        d: 'var(--color-d)',
        e: 'var(--color-e)'
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        accent: 'var(--bg-accent)',
        default: 'var(--bg-default)'
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: 'var(--text-accent)'
      }

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
