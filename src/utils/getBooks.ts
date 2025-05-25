import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getBooks = async () => {
  const querySnapshot = await getDocs(collection(db, "books"));
  const booksArray: any[] = [];

  querySnapshot.forEach((doc) => {
    booksArray.push({ id: doc.id, ...doc.data() });
  });

  return booksArray;
};
