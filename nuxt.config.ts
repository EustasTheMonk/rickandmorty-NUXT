// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    build: {
        transpile: ['vuetify'],
    },
    css: [
        '@/assets/css/styles.css',  // Вказуємо шлях до глобального стилю
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        middleware: [
            { name: 'manifest-route-rule', override: true }
        ]
    },
    modules: [
        '@pinia/nuxt',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@nuxtjs/tailwindcss',
        'nuxt-particles',
        'nuxt-mdi',
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true}
})
