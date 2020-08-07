import Link from 'next/link';
import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import Image from '../image';

export default function Learn() {
  return (
    <Container center padding role="region" aria-labelledby="learn">
      <SectionHeader
        margin="0 0 2rem 0"
        id="learn"
        title="学习 Next.js"
        description="一步步带你学习 Next.js 并获得奖励 ✨."
      />
      <Link href="/learn/basics/create-nextjs-app">
        <a title="开始学习 Next.js">
          <Image
            shadow
            alt="学习页面概述"
            oversize={false}
            margin={60}
            src="/static/images/learn-cn.png"
            width={2242 / 2}
            height={1520 / 2}
          />
        </a>
      </Link>
      <div>
        <Button href="/learn/basics/create-nextjs-app" invert>
          开始学习
        </Button>
      </div>
    </Container>
  );
}
