const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  const markdown = markdownIt({ html: true, linkify: true, typographer: true })
    .use(markdownItAnchor, { slugify: (value) => value.toLowerCase().trim().replace(/[^\w]+/g, '-') });
  eleventyConfig.setLibrary('md', markdown);
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addWatchTarget('src/css');
  eleventyConfig.addCollection('contributions', (collectionApi) => collectionApi
    .getFilteredByGlob(['src/content/*.md', 'src/content/*.njk'])
    .sort((a, b) => a.data.order - b.data.order));
  eleventyConfig.addFilter('readableDate', (value) => new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}-01T00:00:00Z`)));
  eleventyConfig.addFilter('padNumber', (value) => String(value).padStart(2, '0'));
  return { dir: { input: 'src', includes: '_includes', data: '_data', output: 'public' }, markdownTemplateEngine: 'njk', templateFormats: ['md', 'njk', 'html'] };
};
