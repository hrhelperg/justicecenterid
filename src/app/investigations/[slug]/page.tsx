import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('investigations');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('investigations', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="investigations" params={params} />;
}
