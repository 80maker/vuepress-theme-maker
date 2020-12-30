<template>
  <div class="theme-main__inner post">
    <article
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header v-if="$frontmatter.cover" :style="headerStyle" class="article__header--hasCover">
        <div class="article__header-con">
          <PostMeta
            class="post-meta--hasCover"
            :cates="$frontmatter.category || $frontmatter.categories"
            :author="$frontmatter.author"
            :date="$frontmatter.date"
            :location="$frontmatter.location"
          />
          <hr class="article-hr"/>
          <h1 class="post-title" itemprop="name headline">
            {{ $frontmatter.title }}
          </h1>
        </div>
      </header>
      <header v-else :style="headerStyle" class="article__header">
        <h1 class="post-title" itemprop="name headline">
            {{ $frontmatter.title }}
          </h1>
          <PostMeta
            :cates="$frontmatter.category || $frontmatter.categories"
            :author="$frontmatter.author"
            :date="$frontmatter.date"
            :location="$frontmatter.location"
          />
      </header>
      <div class="article-con">
        <Content itemprop="articleBody" />
        <div class="article-copyright">
          <ul>
            <li class="article-copyright__item">
              <strong class="article-copyright__title">Copyright<span>:</span></strong>
              <p class="article-copyright__text">自由转载-非商用-禁止演绎-保持署名（<a href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">CC
                  BY-NC-ND 4.0</a>）</p>
            </li>
            <li class="article-copyright__item">
              <strong class="article-copyright__title">Link<span>:</span></strong>
              <p class="article-copyright__text"><a :href="pageLink"
                  title="使用 Canvas 绘制 ⌚">{{pageLink}}</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="article-footer">
        <PostTag v-for="tag in $frontmatter.tags" :key="tag" :tag="tag" />
        <hr />
        <Comment />
        <!-- <Toc /> -->
      </div>
    </article>
  </div>
</template>

<script>
import PostTag from '@theme/components/PostTag.vue'
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
export default {
  components: {
    PostTag,
    Toc,
    PostMeta,
    Comment
  },
  data() {
    return {
      pageLink: ''
    }
  },
  computed: {
    headerStyle() {
      if (!this.$frontmatter.cover) return;
      return {
        'background-image': `url(${this.$frontmatter.cover})`, 
        'background-color': this.$frontmatter.coverBgColor
      }
    }
  },
  mounted() {
    this.pageLink = `${window.location.href}`;
  }
}
</script>

<style lang="stylus">
.post
  background #ffffff
  border-radius: 6px;
.vuepress-blog-theme-content
  font-size 16px
  letter-spacing 0px
  font-family PT Serif, Serif
  color $textColor
  position relative
  .post-title
    padding-top 0
.article__header
  .post-title
    padding: 4.3rem 2.15rem 2.15rem;
    margin 0
  .post-meta
    padding: 0px 2.15rem;
    line-height: 3;
    background-color: var(--inside-accent-color-01);
.article__header--hasCover
  padding-top: 37%;
  background-position: 50% center;
  background-size: cover;
  color: rgb(255, 255, 255);
.article__header-con
  padding: 2.5rem 2.15rem 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));

.article-copyright
  display: block;
  margin: 2rem 0;
  padding: 1rem 1.5rem;
  background-color: var(--inside-accent-color-005);
  border-left: 3px solid var(--inside-accent-color);
  border-radius: 3px;
  word-break: break-word;
  line-height: 1.8;
  ul
    margin 0
  &__item
    display flex
    line-height 1.8
    align-items center
    span
      margin: 0 .6em 0 .2em;
    p
      margin 0
.article-con
  padding: 0.80625rem 2.15rem 2.15rem;
@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0
  .post-title
    margin-top 0
</style>