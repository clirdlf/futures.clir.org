const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const { EleventyHtmlBasePlugin, EleventyRenderPlugin } = require('@11ty/eleventy');
const { eleventyImageTransformPlugin } = require('@11ty/eleventy-img');

const baseUrl = '/futures.clir.org/';
const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || baseUrl;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ['avif', 'webp', 'auto'],
    widths: [480, 960, 1440, 'auto'],
    urlPath: '/img/',
    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async',
      },
    },
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  const markdown = markdownIt({ html: true, linkify: true, typographer: true })
    .use(markdownItAnchor, { slugify: (value) => value.toLowerCase().trim().replace(/[^\w]+/g, '-') });
  eleventyConfig.setLibrary('md', markdown);
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon/favicon.ico': 'assets/favicon/favicon.ico' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon/favicon-16x16.png': 'assets/favicon/favicon-16x16.png' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon/favicon-32x32.png': 'assets/favicon/favicon-32x32.png' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon/apple-touch-icon.png': 'assets/favicon/apple-touch-icon.png' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon/android-chrome-192x192.png': 'assets/favicon/android-chrome-192x192.png' });
  eleventyConfig.addPassthroughCopy({ 'src/favicon/android-chrome-512x512.png': 'assets/favicon/android-chrome-512x512.png' });
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addWatchTarget('src/css');
  eleventyConfig.addCollection('contributions', (collectionApi) => collectionApi
    .getFilteredByGlob(['src/content/*.md', 'src/content/*.njk'])
    .sort((a, b) => a.data.order - b.data.order));
  eleventyConfig.addFilter('readableDate', (value) => new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}-01T00:00:00Z`)));
  eleventyConfig.addFilter('padNumber', (value) => String(value).padStart(2, '0'));
  eleventyConfig.addFilter('absoluteUrl', (value, base) => new URL(String(value).replace(/^\//, ''), base).toString());
  eleventyConfig.addFilter('json', (value) => JSON.stringify(value).replace(/</g, '\\u003c'));
  return {
    pathPrefix,
    dir: { input: 'src', includes: '_includes', data: '_data', output: 'public' },
    markdownTemplateEngine: 'njk',
    templateFormats: ['md', 'njk', 'html'],
  };
};
