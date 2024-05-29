'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const ProjectSummary = () => {
    const [seconds, setSeconds] = useState(10);
    const router = useRouter();

    useEffect(() => {
        const countdown = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        const timer = setTimeout(() => {
            router.push('/search');
        }, 10000);

        return () => {
            clearTimeout(timer);
            clearInterval(countdown);
        };
    }, [router]);
    return (
        <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Project Summary</h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                    This is a brief description of the current project. It highlights the key features and technologies used to build it. Sample UI
                    for an NextJS, Tailwind CSS and TypeScript starter project. Base on the course from Code With Antonio with a few modifications.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm">
                    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50">React</div>
                    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50">Tailwind CSS</div>
                    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50">Next.js</div>
                    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50">TypeScript</div>
                </div>
            </div>
            <div className="w-full max-w-2xl">
                <Image
                    alt="Project Preview"
                    className="rounded-xl w-full aspect-[16/9] object-cover"
                    height={450}
                    src="/NextjsTailwindCSSStarter.png"
                    width={800}
                />
            </div>
            <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <ClockIcon className="w-5 h-5" />
                    <span id="countdown">{seconds}</span>
                    seconds until demo{'\n            '}
                </div>
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/search">
                    View Demo
                </Link>
            </div>
        </div>
    );
};

type IconProps = React.SVGProps<SVGSVGElement>;

function ClockIcon(props: IconProps): JSX.Element {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
