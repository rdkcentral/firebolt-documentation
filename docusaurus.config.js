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
  url: 'https://rdkcentral.github.io',
  baseUrl: '/firebolt-documentation/',
  trailingSlash: true,
  organizationName: 'rdkcentral',
  projectName: 'firebolt-documentation',
  deploymentBranch: 'gh-pages',
  scripts: [],
  favicon: 'img/rdk-favicon.png',
  customFields: {
    users: [
      {
        caption: 'Sky Glass',
        image: '/img/logos/sky-logo.png',
        infoLink: 'https://www.sky.com/glass',
        pinned: true,
        description: 'Used on Sky Glass.',
      },
      {
        caption: 'Comcast',
        image: '/img/logos/comcast-logo.png',
        infoLink: 'https://www.xfinity.com/overview',
        pinned: true,
        description: 'Used on Comcast devices.',
      },
      {
        caption: 'Flex',
        image: '/img/logos/Xfinity_logo_blk_RGB.jpg',
        infoLink: 'https://www.xfinity.com/flex',
        pinned: true,
        description: 'Used on Flex.',
      },
      {
        caption: 'XClass',
        image: '/img/logos/Xfinity_logo_blk_RGB.jpg',
        infoLink: 'https://www.xclasstv.com/',
        pinned: true,
        description: 'Used on XClass.',
      },
      {
        caption: 'X1',
        image: '/img/logos/Xfinity_logo_blk_RGB.jpg',
        infoLink: 'https://xfinity.com/x1',
        pinned: true,
        description: 'Used on X1.',
      },

    ],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
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
          
          includeCurrentVersion:false,
    //      versions: {
    //        current: {
     //         label: 'Next 🚧',
    //        },
    //      },

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
      title: 'Docs',
      style: 'primary',
      hideOnScroll: false,
      items: [
 //       {
//          type: 'docSidebar',
//          position: 'left',
//          sidebarId: 'firebolt_docs',
//          label: 'Docs',
 //       },
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
          //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'docSidebar',
          position: 'right',
          sidebarId: 'changelog',
          label: 'Changelog',
        },
        {
          href: 'https://github.com/rdkcentral/firebolt-documentation',
          label: 'RDK Central',
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
     //   {
     //     title: 'Docs',
      //    items: [
       //     {
       //       label: 'Get Started',
       //       href: 'https://rdkcentral.github.io/firebolt-documentation/docs/firebolt_docs/getting-started/quick-start-guide/',
       //       target: '_self',
       //     },
       //   ],
      //  }, 
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              href: 'https://rdkcentral.github.io/firebolt-documentation/docs/firebolt_docs/getting-started/quick-start-guide/',
              target: '_self',
            },
            {
              label: 'Upcoming Events',
              href: 'https://rdkcentral.github.io/firebolt-documentation/docs/firebolt_docs/getting-started/quick-start-guide/',
              target: '_self',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/rdkcentral',
              target: '_self',
            },
             {
              label: 'News / Updates',
              href: 'https://rdkcentral.com/news/rdk-in-the-news/',
              target: '_self',
            },
         ],
        },
       { 
        title: 'Documentation',
          items: [
            {
              label: 'Wiki Space',
              href: 'https://wiki.rdkcentral.com/spacedirectory/view.action#/all',
              target: '_self',
            },
            {
              label: 'Webinars / Trainings',
              href: 'https://wiki.rdkcentral.com/display/RDK/Webinars',
              target: '_self',
            },
            {
              label: 'Glossary',
              href: 'https://wiki.rdkcentral.com/display/RDK/Glossary',
              target: '_self',
            },
             {
              label: 'Logo Guidelines',
              href: 'https://developer.rdkcentral.com/logo-guidelines/',
              target: '_self',
            },
          ],
        },
        { 
        title: 'Plugins',
          items: [
            {
              label: 'Announcement',
              href: 'https://rdkcentral.github.io/firebolt-documentation/docs/api/schemas/Intents/',
              target: '_self',
            },
            {
              label: 'Whats New!',
              href: 'https://rdkcentral.github.io/firebolt-documentation/docs/api/schemas/Intents/',
              target: '_self',
            },
            ],
        },
        { 
        title: 'Support',
          items: [
            {
              label: 'Forum',
              href: 'https://developer.rdkcentral.com/rdk_forum/forums/',
              target: '_self',
            },
            {
              label: 'Contact Us',
              href: 'mailto:support@rdkcentral.com',
              target: '_self',
            },
            {
              label: 'Feedback',
              href: 'https://rdkcentral.github.io/firebolt-documentation/docs/api/schemas/Intents/',
              target: '_self',
            },
            ],
        },
     //    {
     //      title: 'Legal',
      //     items: [
     //       {
      //         label: 'Privacy',
     //         href: 'https://opensource.facebook.com/legal/privacy/',
     //        },
      //       {
     //          label: 'Terms',
     //          href: 'https://opensource.facebook.com/legal/terms/',
     //        },
     //        {
     //          label: 'Data Policy',
     //          href: 'https://opensource.facebook.com/legal/data-policy/',
     //        },
     //        {
     //         label: 'Cookie Policy',
     //          href: 'https://opensource.facebook.com/legal/cookie-policy/',
     //        },
    //       ],
    //     }, 
      ],
      logo: {
        src: 'img/RDK-Logo-without-RefDesign.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} RDK Central`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
    }
  }
};
