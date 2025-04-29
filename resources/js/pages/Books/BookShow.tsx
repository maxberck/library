// resources/js/Books/BookShow.tsx

import React, { useEffect, useState } from 'react';
import { fetchBook } from '../../api/services/BookServices';

interface BookShowProps {
    id: number;
}

export default function BookShow({ id }: BookShowProps) {
    const [book, setBook] = useState<any>(null);
    // va récupérer un livre spécifique dans notre avec grâce à une requête id
    useEffect(() => {
        fetchBook(id).then(response => {
            setBook(response.data);
        });
    }, [id]);

    if (!book) return <div>attends tqt ca arrive </div>;

    return (
        <div className="border p-4 rounded">
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p><strong>Auteur:</strong> {book.author}</p>
            <p><strong>Catégorie:</strong> {book.category}</p>
            <p><strong>Date de publication:</strong> {book.date}</p>
        </div>
    );
}
