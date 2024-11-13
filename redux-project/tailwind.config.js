import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'kanit': ['Kanit', 'sans-serif'],
            },
        },
    },
    plugins: [
        daisyui,
    ],
};
