import withSlot from './slot';
import PackageFile from './file-system-routing/package-file.mdx';
import IndexFile from './file-system-routing/index-file.mdx';
import AboutFile from './file-system-routing/about-file.mdx';

const IndexPage = ({ A }) => (
  <div>
    <h1>
      Hello Next.js{' '}
      <span role="img" aria-label="Waving Hand">
        👋
      </span>
    </h1>
    <A tab="http://localhost:3000/about">About</A>
  </div>
);

const AboutPage = ({ A }) => (
  <div>
    <p>This is the about page</p>
    <A tab="http://localhost:3000">Go home</A>
  </div>
);

export default {
  type: ['editor', 'browser'],
  tabs: ['Code', 'Website'],
  editor1: {
    editorTabs: ['pages/index.js', 'pages/about.js', 'package.json'],
    editorMapping: {
      'pages/index.js': IndexFile,
      'pages/about.js': AboutFile,
      'package.json': PackageFile
    }
  },
  browser2: {
    browserTabs: ['http://localhost:3000', 'http://localhost:3000/about'],
    browserMapping: {
      'http://localhost:3000': withSlot(IndexPage),
      'http://localhost:3000/about': withSlot(AboutPage)
    }
  },
  note: (
    <>
      <p>
        Next.js 将在 <code>/pages</code> 目录下的每个文件与文件名匹配的访问路径对应
      </p>
      <p>
        例如，<code>/pages/about.js</code> 对应的访问路径是 <code>site.com/about</code>。
      </p>
    </>
  )
};
