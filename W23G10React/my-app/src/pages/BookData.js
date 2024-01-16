import React, { useEffect, useState } from "react";
import axios from "axios";

const BookData = () => {
  const [bookTable, setBooksTable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7132/api/Book/Get");
        console.log("Response data:", response.data);

        const books = response.data.map(book => ({ ...book, id: book.id }));
        console.log("Mapped books:", books);

        setBooksTable(books);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Final state - bookTable:", bookTable);

  return { bookTable, isLoading };
};

export default BookData;
