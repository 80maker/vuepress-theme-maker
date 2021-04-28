const counter = function (content) {
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
  const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
  return [cn, en];
};
const calcReadingTime = function(content, { cn = 300, en = 160 } = {}) {
  var len = counter(content);
  var readingTime = len[0] / cn + len[1] / en;
  return readingTime < 1 ? '1' : parseInt(readingTime, 10);
}
const wordcount = function (content) {
  var len = counter(content);
  var count = len[0] + len[1];
  if (count < 1000) {
    return count;
  }
  return Math.round(count / 100) / 10 + 'k';
}

module.exports = (options = {}, context) => ({
  name: 'maker-theme-utils',
  extendPageData($page) {
    if ($page.path === '/archives/') {
      return $page.pageType = 'archive';
    } else if ($page.path === '/categories/') {
      return $page.pageType = 'category';
    } else if (/^\/categories\/\w/.test($page.path)) {
      return $page.pageType = 'categoryItem';
    } else if ($page.path === '/tags/') {
      return $page.pageType = 'tag';
    } else if (/^\/tags\/\w/.test($page.path)) {
      return $page.pageType = 'tagItem';
    } else if ($page.path === '/' || $page.path.startsWith('/page/')) {
      return $page.pageType = 'home';
    } else if ($page.path === '/friend-links/') {
      return $page.pageType = 'friendLink';
    }
    if ($page.pid === 'post') {
      const { _strippedContent } = $page;
      let content = _strippedContent.replace(/\s/g, '');
      $page.wordCount = wordcount(content);
      $page.readingTime = calcReadingTime(content, context.themeConfig.wordPerminute);
    }
  },
  additionalPages() {
    const pages = [{
      path: '/archives/',
      frontmatter: {
        title: 'Archive'
      }
    }];
    return pages;
  }
})