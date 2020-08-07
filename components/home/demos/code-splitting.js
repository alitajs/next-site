import withSlot from './slot';
import IndexFile from './code-splitting/index-file.mdx';
import AboutFile from './code-splitting/cowsay-file.mdx';

const IndexPage = ({ A }) => (
  <div>
    <h1>Hello, this is the homepage</h1>
    <p>I'm only 0.59 KB after gzip.</p>
    <A tab="http://localhost:3000/cowsay">Cowsay</A>
  </div>
);

const AboutPage = ({ A }) => (
  <div>
    <p>This page costs 29.8 KB after gzip!</p>
    <pre>{` _____________________
< I am a big package! >
 ---------------------
       \\   ^__^
        \\  (oo)\_______
           (__)\       )\\/\\
               ||----w |
               ||     ||`}</pre>
    <A tab="http://localhost:3000">Go home</A>
  </div>
);

export default {
  type: ['editor', 'browser'],
  tabs: ['Code', 'Website'],
  editor1: {
    editorTabs: ['pages/index.js', 'pages/cowsay.js'],
    editorMapping: {
      'pages/index.js': IndexFile,
      'pages/cowsay.js': AboutFile
    }
  },
  browser2: {
    browserTabs: ['http://localhost:3000', 'http://localhost:3000/cowsay'],
    browserMapping: {
      'http://localhost:3000': withSlot(IndexPage),
      'http://localhost:3000/cowsay': withSlot(AboutPage)
    }
  },
  note: (
    <>
      <p>
        你声明的每个<code>import</code>都会与每个页面捆绑在一起，这意味着页面从不加载不必要的代码！
      </p>
    </>
  )
};
