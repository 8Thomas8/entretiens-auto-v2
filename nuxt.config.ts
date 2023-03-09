// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@pinia/nuxt',
        '@nuxt/devtools'
    ],
    css: [
        '@/assets/scss/main.scss'
    ],
    tailwindcss: {
        cssPath: '~/assets/scss/main.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        config: {
            content: [],
            theme: {
                fontFamily: {
                    'poppins': ['"Poppins"', 'sans-serif'],
                    'roboto': ['"Roboto"', 'sans-serif']
                },
            },
            plugins: [
                require('@tailwindcss/forms'),
                require('@tailwindcss/line-clamp')
            ]
        },
        injectPosition: 0,
        viewer: true,
    }
})
