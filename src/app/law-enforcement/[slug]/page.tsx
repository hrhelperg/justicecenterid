import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('law-enforcement');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('law-enforcement', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="law-enforcement" params={params} />;
}
