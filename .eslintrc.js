module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: { sourceType: 'module' },
    env: { browser: true, node: true },
    extends: [ 'eslint:recommended', 'plugin:vue/vue3-recommended' ],
    rules: {
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'indent': [ 'error', 4 ],
        'semi': [ 'error', 'never' ],
        'curly': [ 'error', 'multi' ],
        'quotes': [ 'error', 'single' ],
        'eol-last': [ 'error', 'never' ],
        'comma-dangle': [ 'error', 'never' ],
        'padded-blocks': [ 'error', 'never' ],
        'brace-style': [ 'error', 'stroustrup' ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'space-before-blocks': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'nonblock-statement-body-position': [ 'error', 'below' ],
        'object-curly-newline': [ 'error', { 'consistent': true } ],
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 0 } ],
        'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
        'camelcase': [ 'error', { 'properties': 'never', 'ignoreDestructuring': true } ],
        'padding-line-between-statements': [ 'error', { 'blankLine': 'always', 'prev': '*', 'next': 'return' } ],

        'vue/html-indent': [ 'error', 4 ],
        'vue/script-indent': [ 'error', 4 ],
        'vue/padding-line-between-blocks': [ 'error', 'always' ],
        'vue/no-spaces-around-equal-signs-in-attribute': [ 'error' ],
        'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
        'vue/no-mutating-props': [ 'error', { 'shallowOnly': true } ],
        'vue/html-quotes': [ 'error', 'double', { 'avoidEscape': true } ],
        'vue/no-child-content': [ 'error', { 'additionalDirectives': [ 'foo' ] } ],
        'vue/padding-lines-in-component-definition': [ 'error', { 'betweenOptions': 'always' } ],
        'vue/first-attribute-linebreak': [ 'error', {
            'singleline': 'beside',
            'multiline': 'below'
        } ],
        'vue/html-closing-bracket-spacing': [ 'error', {
            'startTag': 'never',
            'endTag': 'never',
            'selfClosingTag': 'always'
        } ],
        'vue/max-attributes-per-line': [ 'error', {
            'singleline': { 'max': 2 },
            'multiline': { 'max': 1 }
        } ],
        'vue/component-tags-order': [ 'error', {
            'order': [ 'template', 'script', 'style' ]
        } ],
        'vue/html-button-has-type': [ 'error', {
            'button': true,
            'submit': false,
            'reset': true
        } ],
        'vue/new-line-between-multi-line-property': [ 'error', {
            'minLineOfMultilineProperty': 2
        } ],
        'vue/no-potential-component-option-typo': [ 'error', {
            'presets': [ 'all' ],
            'custom': []
        } ],
        'vue/html-self-closing': [ 'error', {
            'html': {
                'void': 'always',
                'normal': 'never',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        } ],
        'vue/attributes-order': [ 'error', {
            'order': [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                [ 'UNIQUE', 'SLOT' ],
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'OTHER_ATTR',
                'EVENTS',
                'CONTENT'
            ],
            'alphabetical': false
        } ],
        'vue/order-in-components': [ 'error', { 'order': [
            'el',
            'name',
            'key',
            'parent',
            'functional',
            [ 'delimiters', 'comments' ],
            [ 'components', 'directives', 'filters' ],
            'extends',
            'mixins',
            [ 'provide', 'inject' ],
            'ROUTER_GUARDS',
            'layout',
            'middleware',
            'validate',
            'scrollToTop',
            'transition',
            'loading',
            'inheritAttrs',
            'model',
            [ 'props', 'propsData' ],
            'emits',
            'setup',
            'asyncData',
            'data',
            'fetch',
            'head',
            'computed',
            'watch',
            'watchQuery',
            'LIFECYCLE_HOOKS',
            'methods',
            [ 'template', 'render' ],
            'renderError'
        ] } ],
        'vue/multi-word-component-names': [ 'error', { 'ignores': [
            'Dashboards',
            'Transliteration',
            'Info',
            'Alert',
            'Any',
            'Dictory',
            'Ner',
            'Subscribe',
            'Settings',
            'Chronomer',
            'More',
            'Post',
            'Search',
            'Tags',
            'Rate',
            'Comment',
            'Loader',
            'Error400',
            'Error404',
            'Error406',
            'Error417',
            'Error418',
            'Error500',
            'Error502',
            'Error504'
        ] } ],

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    }
}