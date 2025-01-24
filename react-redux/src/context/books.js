import { createContext, useState, useCallback } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {

    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback (async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data)
    }, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        setBooks([...books, response.data])
    }

    const editBook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const updateBook = books.map((book) =>
            book.id === id ? { ...book, ...response.data } : book);
        setBooks(updateBook);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const deleteBook = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(deleteBook);
    }

    const valueToShare = {
        books: books,
        deleteBookById: deleteBookById,
        editBook: editBook,
        createBook: createBook,
        fetchBooks: fetchBooks
    }
    return <BooksContext.Provider value={valueToShare}>
        {children}</BooksContext.Provider>
}
export { Provider };
export default BooksContext;