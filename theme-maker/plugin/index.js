module.exports = (options = {}, context) => ({
  extendPageData($page) {
    $page.hostname = context.themeConfig.hostname;
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
    } else if ($page.path === '/') {
      return $page.pageType = 'home';
    }
    if ($page.pid === 'post') {
      const { _strippedContent } = $page;
      let content = _strippedContent.replace(/\s/g, '');
      $page.wordCount = content.length;
      $page.readingTime = Math.round($page.wordCount / context.themeConfig.wordPerminute || 300); // 分钟
    }
  }
})