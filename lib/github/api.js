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
    // if (res.ok) {
      // const data = await res.json();
      const tag = 'canary';

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
