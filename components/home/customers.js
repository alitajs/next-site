import Container from '../container';
import Button from '../button';
import SectionHeader from '../section-header';
import CaseStudiesSlider from '../case-studies/slider';
import ShowcasePreview from './showcase-preview';

export default function Customers() {
  return (
    <Container gray wide overflow center padding role="region" aria-labelledby="customers">
      <div className="case-studies-box">
        <CaseStudiesSlider />
        <style jsx>{`
          .case-studies-box {
            position: relative;
            margin-top: -8.5rem;
            margin-bottom: 4rem;
          }
        `}</style>
      </div>
      <SectionHeader
        anchor="showcases"
        id="customers"
        title="谁在使用 Next.js"
        description="我们非常荣幸能有这些天才的创意是基于 Next.js 构建的"
      />
      <ShowcasePreview />
      <Button href="/showcase" invert>
        查看网站实例
      </Button>
    </Container>
  );
}
