// [slug]/page.tsx
import { Metadata } from 'next';
import { getData } from "./server";
import ArticleContent from "./components/ArticleContent";
import styles from "./Article.module.css";

export const dynamic = "force-dynamic"; // <-- هذا لحل المشكلة إذا لم تستخدم generateStaticParams

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getData(params.slug);
  return {
    title: article.title,
    description: article.content.substring(0, 160),
  };
}

export default async function ArticlePage({
  params
}: {
  params: { slug: string };
}) {
  const article = await getData(params.slug);
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className={styles.container}>
      <ArticleContent article={article} />
    </div>
  );
}
