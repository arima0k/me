// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Luis Vera',
  tagline: 'Personal website',
  url: 'https://me.tectim.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arima0k', // Usually your GitHub org/user name.
  projectName: 'me', // Usually your repo name.
  trailingSlash: false,
  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/arima0k/me/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/arima0k/me/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og_image.png',
      metadata: [
        {
          property: 'og:image',
          content: 'img/og_image.png',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {
          name: 'twitter:image',
          content: 'img/og_image.png',
        },
        {name: 'twitter:site', content: 'summary'},
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'tecstim logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/arima0k',
            className: "header-icon-link header-github-link",
            position: 'right',
          },
          {
            href: '/CV',
            html: '<button class="custom-btn-1">My Resume</button>',
            position: 'left',
          },
        ],
      },
      footer: {
        links: [
          {
            label: 'lvera@tectim.com',
            href: 'mailto:lvera@tectim.com',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/arima0k',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Luis Vera | Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
