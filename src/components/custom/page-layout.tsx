import { ReactNode } from 'react';

type Props = {
    id: string;
    children: ReactNode;
};

export default function PageLayout({ children, id }: Props) {
    return (
        <article className='w-full max-w-8xl rounded-lg mx-auto px-4 py-12 lg:py-16' id={id}>
            {children}
        </article>
    );
}