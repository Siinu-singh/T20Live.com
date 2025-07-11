import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-14rem)]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl md:text-3xl font-light text-muted-foreground mt-4">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-foreground/80">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
