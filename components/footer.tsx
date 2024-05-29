import Link from 'next/link';

export const PageFooter = () => {
    return (
        <footer className="bg-gray-100 p-6 md:p-12 dark:bg-gray-800 mx-auto">
            <div className="container max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <MountainIcon className="h-6 w-6" />
                        <span className="text-lg font-semibold">Acme Inc</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                        With over a decade of experience in web development and IT solutions, I bring expertise in front-end and back-end
                        technologies. Specializing in Mainframe systems, I excel in COBOL, AS400, and DB2 alongside modern frameworks like React and
                        NextJS.
                    </p>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-lg font-semibold">Quick Links</h4>
                    <ul className="grid gap-1">
                        <li>
                            <Link
                                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="https://www.linkedin.com/in/marcoalvaradot/"
                                target="_blank">
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="https://github.com/7pixel-cl"
                                target="_blank">
                                GitHub
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="https://agenciacl.tech"
                                target="_blank">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="mailto:marco.alvarado.t@gmail.com"
                                target="_blank">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-lg font-semibold">Contact Us</h4>
                    <div className="grid gap-1 text-gray-500 dark:text-gray-400">
                        <div>
                            <MapPinIcon className="w-4 h-4 inline-block mr-2" />
                            Villarrica, Chile
                        </div>
                        <div>
                            <PhoneIcon className="w-4 h-4 inline-block mr-2" />+ (56) 9 94558464
                        </div>
                        <div>
                            <MailIcon className="w-4 h-4 inline-block mr-2" />
                            marco.alvarado.t@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

type IconProps = React.SVGProps<SVGSVGElement>;

function MailIcon(props: IconProps): JSX.Element {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function MapPinIcon(props: IconProps): JSX.Element {
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
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function MountainIcon(props: IconProps): JSX.Element {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

function PhoneIcon(props: IconProps): JSX.Element {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
