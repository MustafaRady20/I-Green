import {useTranslations} from 'next-intl';
// import PageLayout from './layouts/page-layout';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <main className="max-w-full bg-[#F7F2E7] font-Sono  lg:bg-background md:w-full min-w-screen overflow-hidden h-full ">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">{t('title')}</h1>
        <p className="text-center">{t('description')}</p>
      </div>
    </main>
  );
}