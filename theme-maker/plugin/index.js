module.exports = (options = {}, context) => ({
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
    } else if ($page.path === '/') {
      return $page.pageType = 'home';
    }
    if ($page.pid === 'post') {
      const { _strippedContent } = $page;
      _strippedContent = _strippedContent.replace(/\s/g, '');
      console.log(11)
    }
  }
})