// src/app/articles/[slug]/server.ts
import { Metadata } from "next";
import { db } from "@/utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Article } from "@/types/article";

export interface ServerArticle extends Article {
  id: string;
  slug: string;
}

// Get article by slug
export async function getData(slug: string): Promise<ServerArticle | null> {
  const articleRef = collection(db, "articles");
  const q = query(articleRef, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return null;

  const doc = querySnapshot.docs[0];
  const data = doc.data() as Article;

  return {
    ...data,
    id: doc.id,
    slug: data.slug,
  };
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getData(params.slug);

  if (!article) {
    return {
      title: "مقال غير موجود",
      description: "هذا المقال غير متوفر حالياً.",
    };
  }

  return {
    title: article.title,
    description: article.content.substring(0, 160), // تأكد أن التايب فيه `content`
  };
}
