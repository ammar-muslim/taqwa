import { Metadata } from "next";
import { db } from "@/utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import { Article } from "@/types/article";

// Use the imported Article type instead of defining a new interface
export interface ServerArticle extends Article {
  id: string;
  slug: string;
}

export async function generateMetadata({ 
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getData(params.slug);
  return {
    title: article.title,
    description: article.body.substring(0, 160),
  };
}

export async function getData(slug: string) {
  const articleRef = collection(db, "articles");
  const q = query(articleRef, where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  const article = querySnapshot.docs[0]?.data();
  return article as Article;
}
