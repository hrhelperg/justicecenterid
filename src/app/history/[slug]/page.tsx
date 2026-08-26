import {
  HistoryPage,
  historyMetadata,
  historyStaticParams,
  type HistoryRouteParams,
} from '@/components/pages/HistoryPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return historyStaticParams();
}

export function generateMetadata({ params }: HistoryRouteParams) {
  return historyMetadata(params);
}

export default function Page({ params }: HistoryRouteParams) {
  return <HistoryPage params={params} />;
}
