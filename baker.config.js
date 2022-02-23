const entrypoints = [
  // Add more script entrypoints here as needed
  'app',
];

export default {
  domain: 'http://baker-example-page-template-production.s3-website-us-east-1.amazonaws.com/',
  entrypoints: `scripts/${
    entrypoints.length > 1 ? `{${entrypoints.join(',')}}` : entrypoints[0]
  }.js`,
  pathPrefix: process.env.BAKER_PATH_PREFIX || process.env.DELIVERY_BASE_PATH || '/',
// An example of how creating dynamic pages, as described in the README
// createPages(createPage, data) {
//   const pageList = data.example;
//   for (const d of pageList) {
//     const template = 'year-detail.html';
//     const url = `${d.year}`;
//     const context = { obj: d };
//     createPage(template, url, context);
//   }
// },
};
