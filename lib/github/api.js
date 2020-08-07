import path from 'path';
import { readFile, writeFile } from '../fs-utils';
import { GITHUB_API_URL, NEXT_REPO_NAME } from './constants';

const USE_CACHE = process.env.USE_CACHE === 'true';
const TAG_CACHE_PATH = path.resolve('.github-latest-tag');

export async function getLatestTag() {
  let cachedTag;

  if (USE_CACHE) {
    try {
      cachedTag = await readFile(TAG_CACHE_PATH, 'utf8');
    } catch (error) {
      // A cached file is not required
    }
  }

  if (!cachedTag) {
    // TODO: 手动更新版本
    // const res = await fetch(`${GITHUB_API_URL}/repos/${NEXT_REPO_NAME}/releases/latest`);
    const data = {
      url: 'https://api.github.com/repos/vercel/next.js/releases/29099175',
      assets_url: 'https://api.github.com/repos/vercel/next.js/releases/29099175/assets',
      upload_url:
        'https://uploads.github.com/repos/vercel/next.js/releases/29099175/assets{?name,label}',
      html_url: 'https://github.com/vercel/next.js/releases/tag/v9.5.1',
      id: 29099175,
      node_id: 'MDc6UmVsZWFzZTI5MDk5MTc1',
      tag_name: 'v9.5.1',
      target_commitish: 'canary',
      name: 'v9.5.1',
      draft: false,
      author: {
        login: 'Timer',
        id: 616428,
        node_id: 'MDQ6VXNlcjYxNjQyOA==',
        avatar_url: 'https://avatars1.githubusercontent.com/u/616428?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Timer',
        html_url: 'https://github.com/Timer',
        followers_url: 'https://api.github.com/users/Timer/followers',
        following_url: 'https://api.github.com/users/Timer/following{/other_user}',
        gists_url: 'https://api.github.com/users/Timer/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Timer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Timer/subscriptions',
        organizations_url: 'https://api.github.com/users/Timer/orgs',
        repos_url: 'https://api.github.com/users/Timer/repos',
        events_url: 'https://api.github.com/users/Timer/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Timer/received_events',
        type: 'User',
        site_admin: false
      },
      prerelease: false,
      created_at: '2020-07-30T03:11:51Z',
      published_at: '2020-07-30T03:34:04Z',
      assets: [],
      tarball_url: 'https://api.github.com/repos/vercel/next.js/tarball/v9.5.1',
      zipball_url: 'https://api.github.com/repos/vercel/next.js/zipball/v9.5.1',
      body:
        "### Core Changes\r\n\r\n- upgrade @ampproject/toolbox-optimizer to 2.5.14: #15463\r\n- Combine sendPayload and sendHTML: #15475\r\n- Add polyfill for process and Buffer in webpack 5: #15499\r\n- improves baseUrl resolution in typescript monorepos: #13542\r\n- Ignore history state not created by next.js: #15379\r\n- Fix: UnhandledPromiseRejectionWarning when unknown flag provided for cli commands : #15422\r\n- Font optimizations: #14746\r\n- Next.js prefetching should use requestIdleCallback: #14580\r\n- Make Links rendered in the error overlay clickable [ 14017 ]: #14055\r\n- Make sure link can render without router: #15604\r\n- Add better typing for redirect: #15603\r\n- Update header replacing to be more relaxed: #15592\r\n- Normalize missing optional value on Vercel: #15593\r\n- Don't use assetprefix on getServerSideProps and getStaticProps: #15634\r\n- Test webpack 5 beta: #15645\r\n- Fix: space issue in error overlay and add tests: #15617\r\n- Fix error overlay hotlinking: #15658\r\n\r\n### Documentation Changes\r\n\r\n- Update `gssp-export` Error: #15529\r\n- fix typo in custom-webpack-config docs: #15533\r\n- [Docs] Update links that should point to Vercel repos: #15547\r\n- [Docs] Performance time is in milliseconds: #15544\r\n- Update multi-zone example link from relative to absolute: #15618\r\n- Add note about statusCode config for redirects: #15615\r\n- Add CSS Modules examples to docs: #15601\r\n- Added docs for Incremental Static Regeneration: #15663\r\n\r\n### Example Changes\r\n\r\n- [update] 'yo' to 'you': #15545\r\n- Update Apollo example for 9.5: #15546\r\n- Update revalidate examples for 9.5: #15551\r\n- De-experimentalize redirects for rosetta example: #15554\r\n- Update Electron, Typescript example: #15524\r\n- remove broken server example: #15653\r\n\r\n### Misc Changes\r\n\r\n- Add release hook to format the changelog by labels: #14592\r\n- Update release.js and release package to avoid github rate limit: #15575\r\n- Update stats-config for new polyfills location: #15584\r\n- fix typo in `eslint-plugin-next` code comments: #15583\r\n- Stabilize error-is-clickable test: #15606\r\n- Fix webdriver error handling: #15491\r\n- retry installs on macos: #15641\r\n- Remove console log from release script: #15652\r\n\r\n### Credits\r\n\r\nHuge thanks to @sebastianbenz, @Timer, @cvan, @devknoll, @ywppp, @lfades, @httpsOmkar, @jeantil, @Janpot, @darshkpatel, @prateekbh, @eKhattak, @rafaelalmeidatk, @timneutkens, @laiso, @rovansteen, @yokinist, and @scefali for helping!"
    };
    // if (res.ok) {
      // const data = await res.json();
      const tag = data.tag_name;

      if (USE_CACHE) {
        try {
          await writeFile(TAG_CACHE_PATH, tag, 'utf8');
        } catch (error) {
          // A cached file is not required
        }
      }

      cachedTag = tag;
    // }
  }

  return cachedTag;
}
