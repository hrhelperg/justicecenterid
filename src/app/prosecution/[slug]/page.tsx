import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('prosecution');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('prosecution', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="prosecution" params={params} />;
}
