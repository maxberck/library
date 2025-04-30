import React, { useEffect, useState } from 'react';
import { fetchBooks, deleteBook } from '../../api/services/BookServices';

interface Book {
    id: number;
    title: string;
    author: string;
    category: string;
    date: string;
}

interface BookListProps {
    onSelect: (id: number) => void;
}

export default function BookList({ onSelect }: BookListProps) {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        fetchBooks().then(response => {
            setBooks(response.data);
        });
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteBook(id);
            setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression du livre :', error);
        }
    };

    return (
        <div>
            <ul className="space-y-2">
                {books.map(book => (
                    <li key={book.id} className="p-4 border rounded flex justify-between items-center hover:bg-gray-100 transition">
                        <div onClick={() => onSelect(book.id)} className="cursor-pointer">
                            <strong>{book.title}</strong> par {book.author}
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); // évite de déclencher le onSelect
                                handleDelete(book.id);  }} className="ml-4 px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded">
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
