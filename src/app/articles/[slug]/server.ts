import { Metadata } from "next";
import { db } from "@/utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
  author: string;
  content: string;
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
