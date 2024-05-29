import Link from 'next/link';

import { Actions } from '@/components/actions';
import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';

export const Header = () => {
    return (
        <header className="h-16 border-b">
            <nav className="flex justify-between max-w-screen-xl mx-auto h-full items-center px-6">
                <Link href="/">
                    <Logo />
                </Link>
                <Navigation />
                <Actions />
            </nav>
        </header>
    );
};
