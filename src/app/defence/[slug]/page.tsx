import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('defence');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('defence', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="defence" params={params} />;
}
