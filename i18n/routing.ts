import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configurati

  // 

import { AppConfig } from '@/components/utils/AppConfig';

export const routing = defineRouting({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

export const { usePathname, useRouter,Link, redirect } = createNavigation(routing);
