module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [
        './*.html',
    ],
    theme: {
        extend: {
            colors: {
                'shop-blue': '#0C6FFF',
                'shop-white-blue': '#56CAEC',
                'shop-dark-blue': '#243BC4',
                'shop-primary': '#1D334B',
                'shop-grey': '#8791A0'
            }
        },

    },
    variants: {
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}