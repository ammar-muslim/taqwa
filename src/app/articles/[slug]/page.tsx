import { Metadata } from 'next';
import ArticleContent from "./components/ArticleContent";
import { getData } from "./server";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getData(params.slug);
  return {
    title: article.title,
    description: article.content.substring(0, 160),
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getData(params.slug);
  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleContent article={article} />;
}
