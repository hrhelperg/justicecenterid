import {
  GuidePage,
  guideMetadata,
  guideStaticParams,
  type GuideRouteParams,
} from '@/components/pages/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams('courts');
}

export function generateMetadata({ params }: GuideRouteParams) {
  return guideMetadata('courts', params);
}

export default function Page({ params }: GuideRouteParams) {
  return <GuidePage section="courts" params={params} />;
}
