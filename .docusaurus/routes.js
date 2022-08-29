import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', 'da2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '961'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '5f7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '020'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '5c2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '3bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', 'bb8'),
    exact: true
  },
  {
    path: '/versions/',
    component: ComponentCreator('/versions/', '1f7'),
    exact: true
  },
  {
    path: '/docs/next/',
    component: ComponentCreator('/docs/next/', 'b73'),
    routes: [
      {
        path: '/docs/next/',
        component: ComponentCreator('/docs/next/', '873'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/',
        component: ComponentCreator('/docs/next/api/', '933'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Accessibility/',
        component: ComponentCreator('/docs/next/api/Accessibility/', 'a46'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Account/',
        component: ComponentCreator('/docs/next/api/Account/', '86c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Advertising/',
        component: ComponentCreator('/docs/next/api/Advertising/', '557'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Authentication/',
        component: ComponentCreator('/docs/next/api/Authentication/', '482'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Device/',
        component: ComponentCreator('/docs/next/api/Device/', '12a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Discovery/',
        component: ComponentCreator('/docs/next/api/Discovery/', '60a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Keyboard/',
        component: ComponentCreator('/docs/next/api/Keyboard/', '3e2'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Lifecycle/',
        component: ComponentCreator('/docs/next/api/Lifecycle/', '786'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Localization/',
        component: ComponentCreator('/docs/next/api/Localization/', 'cf9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Metrics/',
        component: ComponentCreator('/docs/next/api/Metrics/', '31b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Parameters/',
        component: ComponentCreator('/docs/next/api/Parameters/', 'af6'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/Profile/',
        component: ComponentCreator('/docs/next/api/Profile/', 'f44'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/_index/',
        component: ComponentCreator('/docs/next/api/schemas/_index/', '369'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/Discovery/',
        component: ComponentCreator('/docs/next/api/schemas/Discovery/', '3c1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/Entertainment/',
        component: ComponentCreator('/docs/next/api/schemas/Entertainment/', '269'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/Errors/',
        component: ComponentCreator('/docs/next/api/schemas/Errors/', 'f43'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/Intents/',
        component: ComponentCreator('/docs/next/api/schemas/Intents/', '247'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/Lifecycle/',
        component: ComponentCreator('/docs/next/api/schemas/Lifecycle/', '736'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/SecondScreen/',
        component: ComponentCreator('/docs/next/api/schemas/SecondScreen/', '8a3'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/schemas/Types/',
        component: ComponentCreator('/docs/next/api/schemas/Types/', 'ccd'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/api/SecondScreen/',
        component: ComponentCreator('/docs/next/api/SecondScreen/', '309'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/accessbility/',
        component: ComponentCreator('/docs/next/category/accessbility/', 'b14'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/app-lifecycle/',
        component: ComponentCreator('/docs/next/category/app-lifecycle/', '6e7'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/authentication/',
        component: ComponentCreator('/docs/next/category/authentication/', '931'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/changelog/',
        component: ComponentCreator('/docs/next/category/changelog/', 'ab9'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/discovery/',
        component: ComponentCreator('/docs/next/category/discovery/', '959'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/getting-started/',
        component: ComponentCreator('/docs/next/category/getting-started/', 'f39'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/localization/',
        component: ComponentCreator('/docs/next/category/localization/', '2c1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/metadata/',
        component: ComponentCreator('/docs/next/category/metadata/', 'a65'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/category/profiles/',
        component: ComponentCreator('/docs/next/category/profiles/', '493'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/changelog/',
        component: ComponentCreator('/docs/next/changelog/', '6d1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/accessibility/',
        component: ComponentCreator('/docs/next/firebolt_docs/accessibility/', '39d'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/accessibility/closed-captions/',
        component: ComponentCreator('/docs/next/firebolt_docs/accessibility/closed-captions/', '7b0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/accessibility/voice-guidance/',
        component: ComponentCreator('/docs/next/firebolt_docs/accessibility/voice-guidance/', 'a59'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/app-lifecycle/lifecycle-management/',
        component: ComponentCreator('/docs/next/firebolt_docs/app-lifecycle/lifecycle-management/', '8a1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/app-lifecycle/listening-for-events/',
        component: ComponentCreator('/docs/next/firebolt_docs/app-lifecycle/listening-for-events/', 'a5a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/app-lifecycle/listening-for-property-changes/',
        component: ComponentCreator('/docs/next/firebolt_docs/app-lifecycle/listening-for-property-changes/', '222'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/authentication/email-prefill/',
        component: ComponentCreator('/docs/next/firebolt_docs/authentication/email-prefill/', 'c3b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/authentication/sign-in-and-sign-up/',
        component: ComponentCreator('/docs/next/firebolt_docs/authentication/sign-in-and-sign-up/', 'd86'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/discovery/content-discovery/',
        component: ComponentCreator('/docs/next/firebolt_docs/discovery/content-discovery/', '2ee'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/discovery/deep-linking/',
        component: ComponentCreator('/docs/next/firebolt_docs/discovery/deep-linking/', 'a2c'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/discovery/voice-commands/',
        component: ComponentCreator('/docs/next/firebolt_docs/discovery/voice-commands/', 'bb1'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/getting-started/quick-start-guide/',
        component: ComponentCreator('/docs/next/firebolt_docs/getting-started/quick-start-guide/', 'db0'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/localization/',
        component: ComponentCreator('/docs/next/firebolt_docs/localization/', 'c57'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/metadata/metadata-integration/',
        component: ComponentCreator('/docs/next/firebolt_docs/metadata/metadata-integration/', 'e48'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/metadata/open-gmrss-format/',
        component: ComponentCreator('/docs/next/firebolt_docs/metadata/open-gmrss-format/', 'f58'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/profile/parental-controls/',
        component: ComponentCreator('/docs/next/firebolt_docs/profile/parental-controls/', '306'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/next/firebolt_docs/profile/profile-flags/',
        component: ComponentCreator('/docs/next/firebolt_docs/profile/profile-flags/', 'dec'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '9e8'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '10f'),
        exact: true
      },
      {
        path: '/docs/api/',
        component: ComponentCreator('/docs/api/', '5b4'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Accessibility/',
        component: ComponentCreator('/docs/api/Accessibility/', 'd5a'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Account/',
        component: ComponentCreator('/docs/api/Account/', '3e1'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Advertising/',
        component: ComponentCreator('/docs/api/Advertising/', 'c1e'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Authentication/',
        component: ComponentCreator('/docs/api/Authentication/', '235'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Device/',
        component: ComponentCreator('/docs/api/Device/', '87a'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Discovery/',
        component: ComponentCreator('/docs/api/Discovery/', 'e55'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Keyboard/',
        component: ComponentCreator('/docs/api/Keyboard/', 'c3c'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Lifecycle/',
        component: ComponentCreator('/docs/api/Lifecycle/', '2f8'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Localization/',
        component: ComponentCreator('/docs/api/Localization/', '4f5'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Metrics/',
        component: ComponentCreator('/docs/api/Metrics/', '01b'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Parameters/',
        component: ComponentCreator('/docs/api/Parameters/', '64c'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/Profile/',
        component: ComponentCreator('/docs/api/Profile/', 'aac'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/_index/',
        component: ComponentCreator('/docs/api/schemas/_index/', 'e67'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/Discovery/',
        component: ComponentCreator('/docs/api/schemas/Discovery/', 'f39'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/Entertainment/',
        component: ComponentCreator('/docs/api/schemas/Entertainment/', '7e6'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/Errors/',
        component: ComponentCreator('/docs/api/schemas/Errors/', '397'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/Intents/',
        component: ComponentCreator('/docs/api/schemas/Intents/', '05f'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/Lifecycle/',
        component: ComponentCreator('/docs/api/schemas/Lifecycle/', 'cdc'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/SecondScreen/',
        component: ComponentCreator('/docs/api/schemas/SecondScreen/', 'c73'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/schemas/Types/',
        component: ComponentCreator('/docs/api/schemas/Types/', 'bd9'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/api/SecondScreen/',
        component: ComponentCreator('/docs/api/SecondScreen/', '2c4'),
        exact: true,
        sidebar: "api"
      },
      {
        path: '/docs/category/accessbility/',
        component: ComponentCreator('/docs/category/accessbility/', 'df5'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/category/app-lifecycle/',
        component: ComponentCreator('/docs/category/app-lifecycle/', 'c32'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/category/authentication/',
        component: ComponentCreator('/docs/category/authentication/', '287'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/category/discovery/',
        component: ComponentCreator('/docs/category/discovery/', '986'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/category/getting-started/',
        component: ComponentCreator('/docs/category/getting-started/', 'b15'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/category/localization/',
        component: ComponentCreator('/docs/category/localization/', 'ec7'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/category/metadata/',
        component: ComponentCreator('/docs/category/metadata/', '8f2'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/category/profiles/',
        component: ComponentCreator('/docs/category/profiles/', '48a'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/changelog/',
        component: ComponentCreator('/docs/changelog/', '2d3'),
        exact: true
      },
      {
        path: '/docs/firebolt_docs/accessibility/',
        component: ComponentCreator('/docs/firebolt_docs/accessibility/', '22f'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/accessibility/closed-captions/',
        component: ComponentCreator('/docs/firebolt_docs/accessibility/closed-captions/', '94e'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/accessibility/voice-guidance/',
        component: ComponentCreator('/docs/firebolt_docs/accessibility/voice-guidance/', '511'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/app-lifecycle/lifecycle-management/',
        component: ComponentCreator('/docs/firebolt_docs/app-lifecycle/lifecycle-management/', '0a2'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/app-lifecycle/listening-for-events/',
        component: ComponentCreator('/docs/firebolt_docs/app-lifecycle/listening-for-events/', '720'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/app-lifecycle/listening-for-property-changes/',
        component: ComponentCreator('/docs/firebolt_docs/app-lifecycle/listening-for-property-changes/', 'd7d'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/authentication/email-prefill/',
        component: ComponentCreator('/docs/firebolt_docs/authentication/email-prefill/', 'bc5'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/authentication/sign-in-and-sign-up/',
        component: ComponentCreator('/docs/firebolt_docs/authentication/sign-in-and-sign-up/', 'e46'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/discovery/content-discovery/',
        component: ComponentCreator('/docs/firebolt_docs/discovery/content-discovery/', '5d9'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/discovery/deep-linking/',
        component: ComponentCreator('/docs/firebolt_docs/discovery/deep-linking/', 'cbc'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/discovery/voice-commands/',
        component: ComponentCreator('/docs/firebolt_docs/discovery/voice-commands/', 'cac'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/getting-started/quick-start-guide/',
        component: ComponentCreator('/docs/firebolt_docs/getting-started/quick-start-guide/', '195'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/localization/',
        component: ComponentCreator('/docs/firebolt_docs/localization/', '437'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/metadata/metadata-integration/',
        component: ComponentCreator('/docs/firebolt_docs/metadata/metadata-integration/', '243'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/metadata/open-gmrss-format/',
        component: ComponentCreator('/docs/firebolt_docs/metadata/open-gmrss-format/', 'f50'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/profile/parental-controls/',
        component: ComponentCreator('/docs/firebolt_docs/profile/parental-controls/', 'a4a'),
        exact: true,
        sidebar: "firebolt_docs"
      },
      {
        path: '/docs/firebolt_docs/profile/profile-flags/',
        component: ComponentCreator('/docs/firebolt_docs/profile/profile-flags/', 'bb4'),
        exact: true,
        sidebar: "firebolt_docs"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '345'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
