import Head from 'next/head';
import { TWITTER_USER_NAME } from '../lib/constants';

const SocialMeta = ({ title, description, image, url, keywords }) => (
  <Head>
    <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
    <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="og:image" content={`https://nextjs-cn.com${image}`} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
);

export default SocialMeta;
