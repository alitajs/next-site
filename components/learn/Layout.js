import Head from 'next/head';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import { RecordsProvider } from '../../lib/learn/records';
import { useIsMobile } from '../media-query';
import NProgress from '../nprogress';
import Page from '../page';
import Footer from '../footer';
import PageContent from '../page-content';
import Container from '../container';
import SocialMeta from '../social-meta';
import FooterFeedback from '../footer-feedback';
import Navigation from './Navigation';
import Lesson from './Lesson';
import Markdown, { H2 } from './Markdown';
import FeedbackContext from '../feedback-context';
import { ORG_NAME } from '../../lib/constants';
import { GITHUB_URL, DOCS_REPO_NAME } from '../../lib/github/constants';

const Layout = ({ meta, children }) => {
  const isMobile = useIsMobile();
  const { pathname } = useRouter();
  // https://github.com/alitajs/next-site-cn/edit/master/pages/learn/basics/api-routes/index.mdx
  const editUrl = `${GITHUB_URL}/${DOCS_REPO_NAME}/edit/master/pages/${pathname}${
    pathname.split('/').length === 4 ? '/index' : ''
  }.mdx`;

  return (
    <FeedbackContext.Provider value={{ label: 'next-learn' }}>
      {meta.stepId && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <Page
        title={`${meta.subtitle ? `${meta.subtitle} - ` : ''}${meta.title} | Learn Next.js`}
        sticky={!isMobile}
      >
        <PageContent>
          <Container wideOnMobile>
            <div className="content">
              <RecordsProvider>
                <div className="navigation-mobile">
                  <Navigation isMobile meta={meta} />
                </div>
                <div className="navigation">
                  <Navigation meta={meta} />
                </div>
                <div className="lesson">
                  <Lesson meta={meta}>
                    {meta.subtitle && <H2>{meta.subtitle}</H2>}
                    <Markdown>{children}</Markdown>
                  </Lesson>
                  <hr />
                  <FooterFeedback learn />
                  <footer>
                    <a href={editUrl} target="_blank" rel="noopener noreferrer">
                      在 GitHub 上编辑这个页面
                    </a>
                  </footer>
                </div>
              </RecordsProvider>
            </div>
            <style jsx>{`
              .content {
                display: flex;
                margin-top: 1rem;
                margin-bottom: 5rem;
              }

              hr {
                border: 0;
                border-top: 1px solid #eaeaea;
                margin: 3rem 0 1.25rem 0;
              }

              .navigation-mobile {
                display: none;
              }

              .navigation {
                padding: 1rem 3rem 0 0;
              }

              .lesson {
                flex: 1;
                width: 100%;
                min-width: 0;
              }

              // CSS only media query for tablet + SSR
              @media screen and (max-width: 960px) {
                .content {
                  display: flex;
                  flex-direction: column;
                  padding: 0 1rem;
                  margin-bottom: 5rem;
                }
                .navigation-mobile {
                  display: block;
                  margin: 0 -1rem;
                }
                .navigation {
                  display: none;
                }
              }
              footer {
                display: flex;
                font-size: 0.875rem;
                justify-content: flex-end;
                border-top: 1px solid #eaeaea;
                padding: 1.25rem 0;
                margin-top: 2rem;
                margin-bottom: 5rem;
              }
            `}</style>
          </Container>
        </PageContent>
        <SocialMeta
          image="/static/twitter-cards/learn-twitter.png"
          title="Learn | Next.js"
          url="https://nextjs-cn.com/learn"
          description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build pre-rendered applications, static websites, and more.`}
        />
        <SkipNavContent />
        <Footer />
        <NProgress />
      </Page>
    </FeedbackContext.Provider>
  );
};

export default Layout;
