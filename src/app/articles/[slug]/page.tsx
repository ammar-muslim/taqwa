// src/app/articles/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';
import { getData } from './server';
import ArticleContent from './components/ArticleContent';
import styles from './Article.module.css';

export const dynamic = 'force-dynamic';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};


// src/types/article.ts
export interface Article {
  title: string;
  slug: string;
  content: string;
  author?: string;
  createdAt?: string;
}

export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getData(resolvedParams.slug);

  return {
    title: article?.title || 'مقال غير موجود',
    description: article?.content?.substring(0, 160) || 'لا يوجد وصف',
    openGraph: {
      title: article?.title || 'مقال غير موجود',
      description: article?.content?.substring(0, 160) || 'لا يوجد وصف',
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = await getData(resolvedParams.slug);

  if (!article) {
    return <div>المقال غير موجود</div>;
  }

  return (
    <div className={styles.container}>
      <ArticleContent article={article} />
    </div>
  );
}
