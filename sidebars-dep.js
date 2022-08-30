/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  firebolt_docs: [{
    //type: 'autogenerated',
    type:'category',
    label: 'Docs',
    collapsible: true,
    collapsed: true,
    items:['accessibi']
    //dirName: 'firebolt_docs'
  }],
  api: [
    'api/index', // The navbar item will be linking to this doc
    {
      type: 'autogenerated',
      dirName: 'api',
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = {

};
