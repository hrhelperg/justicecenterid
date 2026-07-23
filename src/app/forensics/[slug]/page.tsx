import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('forensics');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('forensics', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="forensics" params={params} />;
}
