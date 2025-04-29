import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../../api/services/BookServices';

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

// ici je mets le onSelect en props car on a besoin qu'il soit pris par l'id quand on api sur le livre dans Welcome.tsx
export default function BookList({ onSelect }: BookListProps) {
    const [books, setBooks] = useState<Book[]>([]);

    // commande qui va aller chercher l'api
    useEffect(() => {
        fetchBooks().then(response => {
            setBooks(response.data);
        });
    }, []);

    return (
        <div>
            <ul className="space-y-2">
                {books.map(book => (
                    <li key={book.id} onClick={() => onSelect(book.id)} className="p-4 border rounded cursor-pointer hover:bg-gray-100 transition">
                        <strong>{book.title}</strong> par {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}
