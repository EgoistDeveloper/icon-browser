var cols = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';

const iconPalettes = [
    {
        title: 'Material design icons (mdi) v2.2.43',
        npm: 'mdi',
        description: 'The mdi package was renamed to @mdi/font after v2.2.43',
        icons_file: 'mdi.json',
        css_path: 'mdi/css/materialdesignicons.min.css',
        source: 'https://github.com/Templarian/MaterialDesign',
        printIcon: function (icon) {
            const cols = 'col-xl-3 col-lg-4 col-md-6 col-sm-12';

            return `<div id="icon-holder" class="${cols}" data-clipboard-text="mdi ${icon}">
                <i class="mdi ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Material design icons (mdi) v2.2.43+',
        npm: '@mdi/font',
        description: 'Current mdi package, has 2243+ icons',
        icons_file: 'mdi-2-2-43+.json',
        css_path: '@mdi/font/css/materialdesignicons.min.css',
        source: 'https://github.com/Templarian/MaterialDesign',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="mdi ${icon}">
                <i class="mdi ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Font Awesome (4.7)',
        npm: 'font-awesome',
        description: 'Generally used with bootstrap 3',
        icons_file: 'fontawesome-4-7.json',
        css_path: 'font-awesome/css/font-awesome.min.css',
        source: 'https://github.com/FortAwesome/Font-Awesome',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="fa ${icon}">
                <i class="fa ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Unicons',
        npm: '@iconscout/unicons',
        description: '1000+ Pixel-perfect vector icons and Iconfont for your next project.',
        icons_file: 'unicons.json',
        css_path: '@iconscout/unicons/css/line.css',
        source: 'https://github.com/Iconscout/unicons',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="uil ${icon}">
                <i class="uil ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'BoxIcons',
        npm: 'boxicons',
        description: 'High Quality web friendly icons',
        icons_file: 'boxicons.json',
        css_path: 'boxicons/css/boxicons.min.css',
        source: 'https://github.com/atisawd/boxicons',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="bx ${icon}">
                <i class="bx ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Bootstrap Icons',
        npm: 'bootstrap-icons',
        description: 'Official open source SVG icon library for Bootstrap.',
        icons_file: 'bootstrap-icons.json',
        css_path: 'bootstrap-icons/font/bootstrap-icons.css',
        source: 'https://github.com/twbs/icons',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="${icon}">
                <i class="${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Linearicons',
        npm: 'linearicons',
        description: 'Linearicons is the highest quality set of line icons...',
        icons_file: 'linearicons.json',
        css_path: 'linearicons/dist/web-font/style.css',
        source: 'https://github.com/cjpatoilo/linearicons',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="lnr ${icon}">
                <i class="lnr ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Simple line icons',
        npm: 'simple-line-icons',
        description: 'Simple line icons with CSS, SASS, LESS & Web-fonts files.',
        icons_file: 'simple-line-icons.json',
        css_path: 'simple-line-icons/css/simple-line-icons.css',
        source: 'https://github.com/simplelineicons/simplelineicons.github.io',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="${icon}">
                <i class="${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Twemoji Awesome',
        npm: 'twemoji-awesome',
        description: 'Like Font Awesome, but for Twitter Emoji. Works with Emoji Cheat Sheet (CDN)',
        icons_file: 'twemoji-awesome.json',
        css_path: 'twemoji-awesome/dist/twemoji-awesome.min.css',
        source: 'https://github.com/ellekasai/twemoji-awesome',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="twa ${icon}">
                <i class="twa ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: [
            'Warning: all icons loading from CDN'
        ]
    },
    {
        title: 'Typicons',
        npm: 'typicons.font',
        description: 'Typicons. 336 pixel perfect, all-purpose vector icons.',
        icons_file: 'typicons.json',
        css_path: 'typicons.font/src/font/typicons.css',
        source: 'https://github.com/stephenhutchings/typicons.font',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="typcn ${icon}">
                <i class="typcn ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Open Iconic',
        npm: 'open-iconic',
        description: 'Open Iconic is the open source sibling of Iconic.',
        icons_file: 'open-iconic.json',
        css_path: 'open-iconic/font/css/open-iconic.min.css',
        source: 'https://github.com/iconic/open-iconic',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="class=\"oi\" data-glyph=\"${icon}\"">
                <i class="oi" data-glyph="${icon}"></i>
                data-glyph="${icon}"
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'flag-icon-css',
        npm: 'flag-icon-css',
        description: 'A collection of all country flags in SVG & plus the CSS for easier integration.',
        icons_file: 'flag-icon-css.json',
        css_path: 'flag-icon-css/css/flag-icon.min.css',
        source: 'https://github.com/lipis/flag-icon-css',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="flag-icon ${icon}">
                <i class="flag-icon ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: [
            'Warning: all icons loading from SVG files'
        ]
    },
    {
        title: 'Themify Icons',
        npm: 'ti-icons',
        description: 'Themify Icons is a complete set of icons for use in web design and apps...',
        icons_file: 'themify-icons.json',
        css_path: 'ti-icons/css/themify-icons.css',
        source: 'https://github.com/lykmapipo/themify-icons',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="${icon}">
                <i class="${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Socicon',
        npm: 'socicon',
        description: 'Socicon is a social icons font with more than 170 icons from all major services.',
        icons_file: 'socicon.json',
        css_path: 'socicon/css/socicon.css',
        source: 'https://github.com/jivinivan/socicon',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="${icon}">
                <i class="${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'nioicons',
        npm: '@nio/icons',
        description: 'Useful icons set for minimal designs.',
        icons_file: 'nioicons.json',
        css_path: '@nio/icons/dist/nioicons.css',
        source: 'https://niolabs.github.io/nio-icons/',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="nio ${icon}">
                <i class="nio ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    },
    {
        title: 'Feather',
        npm: 'feather-icons',
        description: 'Feather is a collection of simply beautiful open source icons.',
        icons_file: 'feather-icons.json',
        css_path: '',
        js_path: 'feather-icons/dist/feather.min.js',
        source: 'https://niolabs.github.io/nio-icons/',
        printIcon: function (icon) {
            return `<div id="icon-holder" class="${cols}" data-clipboard-text="nio ${icon}">
                <i class="nio ${icon}"></i>${icon}
            </div>`;
        },
        tags: ['css'],
        messages: []
    }
];