/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

//'use strict';

//const versions = require('./versions.json');
//const {fbContent, isInternal} = require('internaldocs-fb-helpers');

module.exports = {
  title: 'Firebolt',
  tagline: 'Zero Dependencies and Fast',
  url: 'https://rdkcentral.github.io/firebolt-documentation/',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'rdkcentral',
  projectName: 'firebolt-documentation',
  deploymentBranch: 'main',
  scripts: [],
  favicon: 'img/favicon.png',
  customFields: {
    users: [
      {
        caption: 'Sky Media',
        image: '/img/logos/1stdibs.png',
        infoLink: 'https://www.1stdibs.com/',
        pinned: true,
        description: 'Used on Sky Glass',
      },
      {
        caption: 'Comcast',
        image: '/img/logos/artsy.png',
        infoLink: 'http://artsy.github.io/open-source/',
        pinned: true,
        description: 'Used on artsy.net, and the React Native iOS app, Eigen.',
      },

    ],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',
  presets: [
    [
      //require.resolve('docusaurus-plugin-internaldocs-fb/docusaurus-preset'),
      '@docusaurus/preset-classic',
      {
        docs: {
          exclude: [
            //'**/*.images.{js,jsx,ts,tsx}',
          ],
          // showLastUpdateAuthor: fbContent({
          //   internal: false,
          //   external: true,
          // }),
          // showLastUpdateTime: fbContent({
          //   internal: false,
          //   external: true,
          // }),
          // editUrl: "https://github.com/rdkcentral/firebolt-documentation",
          //
          // path: './docs/',
          //
          // sidebarPath: require.resolve('./sidebars.js'),
          // lastVersion: fbContent({
          //   internal: 'current',
          //   external: versions[0],
          // }),
          versions: {
            current: {
              label: 'Next 🚧',
            },
          },
        },
        blog: {},
        theme: {
          customCss: [
            './src/css/docusaurus-1.css',
            './src/css/prism.css',
            './src/css/customTheme.css',
            './src/css/custom.css',
          ],
        },
        // gtag: {
        //   trackingID: 'UA-44373548-50',
        // },
        // googleAnalytics: {
        //   trackingID: 'UA-44373548-50',
        // },
      },
    ],
  ],
  plugins: [
    // [
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     createRedirects: function (toPath) {
    //       if (toPath.startsWith('/docs/')) {
    //         const docPath = toPath.substring(6);
    //         const fromPaths = ['/docs/en/' + docPath];
    //         if (isInternal()) {
    //           fromPaths.push('/docs/next/' + docPath);
    //           fromPaths.push('/docs/en/next/' + docPath);
    //         }
    //         return fromPaths;
    //       }
    //     },
    //   },
    // ],
  ],
  themeConfig: {
    navbar: {
      title: 'Firebolt',
      style: 'primary',
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'firebolt_docs',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'api',
          label: 'API',
        },
        // {
        //   to: '/help',
        //   label: 'Help',
        //   position: 'left',
        // },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'doc',
          position: 'right',
          docId: 'changelog/changelog',
          label: 'Changelog',
        },
        {
          href: 'https://github.com/rdkcentral/firebolt-documentation',
          label: 'GitHub',
          position: 'right',
        },
        // fbContent({
        //   internal: null,
        //   external: {
        //     type: 'docsVersionDropdown',
        //     position: 'right',
        //     dropdownActiveClassDisabled: true,
        //     dropdownItemsAfter: [
        //       {
        //         to: '/versions',
        //         label: 'All versions',
        //       },
        //     ],
        //   },
        // }),
      ],
    },
    image: 'img/relay.png',
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              href: '/docs',
              target: '_self',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'User Showcase',
              href: '/users',
              target: '_self',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
            {
              label: 'Data Policy',
              href: 'https://opensource.facebook.com/legal/data-policy/',
            },
            {
              label: 'Cookie Policy',
              href: 'https://opensource.facebook.com/legal/cookie-policy/',
            },
          ],
        },
      ],
      logo: {
        src: 'img/relay.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} RDK Central. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
    },
    // algolia: {
    //   appId: 'BH4D9OD16A',
    //   apiKey: '3d7d5825d50ea36bca0e6ad06c926f06',
    //   indexName: 'relay',
    //   contextualSearch: true,
    // },
  },
};
