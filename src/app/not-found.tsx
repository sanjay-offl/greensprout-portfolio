import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-display font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-display font-bold text-dark mb-4">Page Not Found</h2>
      <p className="text-light text-lg max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-primary text-white font-display font-semibold px-8 py-3 rounded-full hover:bg-accent transition-colors duration-300 shadow-md shadow-primary/25"
      >
        Back to Home
      </Link>
    </div>
  );
}
