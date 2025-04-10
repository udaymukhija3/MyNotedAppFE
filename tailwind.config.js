/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          blue: {
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          indigo: {
            400: '#818cf8',
          },
          yellow: {
            100: '#fef9c3',
            200: '#fef08a',
            600: '#ca8a04',
          },
          green: {
            500: '#22c55e',
            600: '#16a34a',
          },
          red: {
            500: '#ef4444',
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
    plugins: [],
  }