import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Book } from "@/types/book";

export const getBooks = async (): Promise<Book[]> => {
  const querySnapshot = await getDocs(collection(db, "books"));
  const booksArray: Book[] = [];

  querySnapshot.forEach((doc) => {
    booksArray.push({ id: doc.id, ...doc.data() } as Book);
  });

  return booksArray;
};
