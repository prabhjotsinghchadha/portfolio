import { memo, PropsWithChildren } from 'react';

// This component is deprecated - metadata should now be handled in app/layout.tsx and app/page.tsx
interface PageProps extends PropsWithChildren {
  title?: string;
  description?: string;
  [key: string]: any;
}

const Page = memo(({ children }: PageProps) => {
  // We're ignoring title, description and other props now that we use App Router metadata
  return <>{children}</>;
});

Page.displayName = 'Page';
export default Page;
