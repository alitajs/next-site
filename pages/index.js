import { SkipNavContent } from '@reach/skip-nav';

import Page from '../components/page';
import Footer from '../components/footer';
import Notification from '../components/notification';

import Intro from '../components/home/intro';
import Demo from '../components/home/demo';
import Features from '../components/home/features';
import Customers from '../components/home/customers';
import Newsletter from '../components/home/newsletter';
import Learn from '../components/home/learn';
import SocialMeta from '../components/social-meta';
import { ORG_NAME, REANSLATOR_NAME } from '../lib/constants';

export default function Index() {
  return (
    <Page title={`Next.js 中文官网 by ${REANSLATOR_NAME} - 最新最全的 Next.js 中文网`}>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Next.js 中文官网 by ${REANSLATOR_NAME} - 最新最全的 Next.js 中文网`}
        url="https://nextjs-cn.com"
        description={`生产级规模的 React 应用。世界领先的公司使用由${ORG_NAME}创建的 Next.js 来构建静态和动态的网站和网络应用。`}
      />
      <SkipNavContent />
      <Notification href="/blog/next-9-5" title="Next 9.5 已正式发布!" titleMobile="Next 9.5 已正式发布!">
        <b>Next 9.5 已正式发布!</b> — 增加了稳定的增量静态页面生成、自定义根路径、 重定向和重写、支持 Webpack 5 Beta 等新功能!
        <span className="highlight">查看详情 →</span>
      </Notification>
      <Intro />
      <Demo />
      <Features />
      <Customers />
      <Learn />
      <Newsletter />
      <Footer />
    </Page>
  );
}

export const config = {
  amp: 'hybrid'
};
