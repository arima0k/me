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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
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
            html: '<b class="custom-button1">My Resume</b>',
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
