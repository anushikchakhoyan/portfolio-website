import { Post } from "@/lib/types";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const BlogPostCard: FC<{ post: Post }> = ({ post }) => {
    const t = useTranslations("Blog");

    return (
        <a
            href={post.url}
            target="_blank"
            className="overflow-hidden transform transition group hover:scale-105 block">
            <p className="text-gray-500 dark:text-gray-400 text-md">
                {post.date}
            </p>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 py-2">
                {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                {post.excerpt}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
                {post.reading} {t('readingTime')}
            </p>
        </a>
    )
};