import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('corrections');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('corrections', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="corrections" params={params} />;
}
