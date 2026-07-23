import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('justice');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('justice', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="justice" params={params} />;
}
