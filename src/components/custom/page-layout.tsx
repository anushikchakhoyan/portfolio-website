import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
    id?: string;
    children: ReactNode;
    className?: string;
};

export default function PageLayout({ children, id, className }: Props) {
    return (
        <article id={id} className={clsx("w-full max-w-8xl rounded-lg mx-auto px-4 py-12 lg:py-16", className)} >
            {children}
        </article>
    );
}