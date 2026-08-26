import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('public-safety');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('public-safety', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="public-safety" params={params} />;
}
