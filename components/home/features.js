import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import CompanySlider from './company-slider';

export default function Features() {
  return (
    <Container wide role="region" aria-labelledby="features">
      <Container center padding>
        <SectionHeader
          id="features"
          title="为什么选择 Next.js"
          description="世界领先的公司使用并热爱 Next.js"
        />
        <div className="row">
          <div className="column">
            <h3 className="f3 fw6">预渲染</h3>
            <p>
              既支持静态化又支持服务端渲染的 React 应用从未如此简单。
            </p>
          </div>
          <div className="column">
            <h3 className="f3 fw6">导出静态站点</h3>
            <p>
              不需要学习新的框架。使用一个简单命令就能导出一个静态站点。
            </p>
          </div>
          <div className="column">
            <h3 className="f3 fw6">CSS-in-JS</h3>
            <p>
              虽然 Next.js 集成了 <code>styled-jsx</code>，但是它也适用于你所熟悉和喜爱的任意 CSS-in-JS 解决方案。
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3 className="f3 fw6">零配置</h3>
            <p>
              自动代码分割，基于文件系统的路由，热代码重载和通用渲染。
            </p>
            <Button href="/learn/basics/create-nextjs-app">学习 Next.js</Button>
          </div>
          <div className="column">
            <h3 className="f3 fw6">超高扩展性</h3>
            <p>
              完全可控的 Babel 和 Webpack。可定制的服务器、路由和 Next.js 专用插件。
            </p>
            <Button href="/docs" amp>
              查看完整文档
            </Button>
          </div>
          <div className="column">
            <h3 className="f3 fw6">最佳的上线条件</h3>
            <p>
              针对较小的构建大小、较快的开发编译和其他数十项改进进行了优化。
            </p>
            <Button href="/showcase">查看网站实例</Button>
          </div>
        </div>
        <style jsx>{`
          .row:not(:last-of-type) {
            margin-bottom: 3rem;
          }
          .column {
            text-align: left;
          }
          // CSS only media query for tablet
          @media screen and (max-width: 960px) {
            .row {
              flex-direction: column;
              margin: -1.5rem 0;
            }
            .column {
              width: 100%;
              padding: 1.5rem 0;
              text-align: center;
              max-width: 350px;
            }
          }
        `}</style>
      </Container>
      <CompanySlider />
    </Container>
  );
}
