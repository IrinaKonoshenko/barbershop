/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./markup/**/*.html'],
    theme: {
        extend: {
            colors: {
                'light-blue': '#99BAED',
                blue100: '#163561',
                bg100: 'rgba(82, 150, 255, 0.35)',
            },
            container: {
                screens: {
                    sm: '1430px',
                    md: '1430px',
                    lg: '1430px',
                    xl: '1430px',
                    '2xl': '1430px',
                },
            },
            boxShadow: {
                '3xl': '0px 1px 0px 0px #008FDD',
                '4xl': '0px 5px 0px 0px #99BAED',
            },
            backgroundImage: {
                'back-img': "url('%=static=%img/content/background.png')",
            },
        },
    },
    plugins: [],
};
