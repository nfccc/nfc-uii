// 'use client';
// import React, { Suspense, useEffect, useState } from 'react';
// import { Skeleton } from '@/components/ui/skeleton';
// import { useSearchParams, useRouter } from 'next/navigation';

// const LoadingContent = () => {
//   const [loading, setLoading] = useState(true);
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const appId = '63970'; // Replace with your actual app ID
//   const redirectUri = encodeURIComponent('https://ktrades.vercel.app/Home');
//   const authUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&redirect_uri=${redirectUri}`;

//   useEffect(() => {
//     const tokenProcessed = localStorage.getItem('tokenProcessed');
//     if (tokenProcessed) {
//       setLoading(false);
//       return;
//     }

//     const hasToken1 = searchParams.get('token1');

//     if (!hasToken1) {
//       const timer = setTimeout(() => {
//         router.push(authUrl);
//       }, 2000);

//       return () => clearTimeout(timer);
//     } else {
//       localStorage.setItem('tokenProcessed', 'true');
//       setLoading(false);
//     }
//   }, [searchParams, router, authUrl]);

//   if (loading) {
//     return (
//       <div className="flex flex-col space-y-3 min-h-screen">
//         <Skeleton className="h-[125px] w-[250px] rounded-xl mx-auto mt-20" />
//         <div className="space-y-2 mx-auto">
//           <Skeleton className="h-4 w-[250px]" />
//           <Skeleton className="h-4 w-[200px]" />
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

// const LoadingWrapper = ({ children }) => {
//   return (
//     <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Skeleton className="h-[125px] w-[250px]" /></div>}>
//       <LoadingContent />
//       {children}
//     </Suspense>
//   );
// };

// export default LoadingWrapper;
'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams, useRouter } from 'next/navigation';

const LoadingContent = () => {
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  

  useEffect(() => {
    const tokenProcessed = localStorage.getItem('tokenProcessed');
    if (tokenProcessed) {
      setLoading(false);
      return;
    }

    
    const timer = setTimeout(() => {
      router.push('/Dashboard');
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 min-h-screen">
        <Skeleton className="h-[125px] w-[250px] rounded-xl mx-auto mt-20" />
        <div className="space-y-2 mx-auto">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return null;
};

const LoadingWrapper = ({ children }) => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Skeleton className="h-[125px] w-[250px]" /></div>}>
      <LoadingContent />
      {children}
    </Suspense>
  );
};

export default LoadingWrapper;
