export interface Article {
  id: string;
  userId: number;
  title: string;
  body: string;
  author: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface PartialArticle {
  id?: string;
  userId?: number;
  title?: string;
  body?: string;
  author?: string;
  content?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
}
