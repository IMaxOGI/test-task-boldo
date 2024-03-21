'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HomePage } from '@/pagesLayer/home';
import { routeLinks } from '@/shared/consts/routes';

const MainPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(routeLinks.home);
  }, [router]);

  return <HomePage />;
};

export default MainPage;
