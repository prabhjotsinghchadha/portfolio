import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-8 bg-neutral-900 text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <Link 
        href="/"
        className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
      >
        Go Home
      </Link>
    </div>
  );
}