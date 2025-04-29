// resources/js/Books/BookEdit.tsx

import React, { useEffect, useState } from 'react';
import { fetchBook, updateBook } from '../../api/services/BookServices';

interface BookEditProps {
    id: number;
}

export default function BookEdit({ id }: BookEditProps) {
    const [form, setForm] = useState({title: '', author: '', category: '', date: '',});

    // fait une requête pour réqupérer un livre spécifique grace à l'id dans notre api 
    useEffect(() => {
        fetchBook(id).then(response => {
            setForm(response.data);
        });
    }, [id]);

    // même fonctionnement que dans createBook
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        await updateBook(id, form);
        alert('Livre mis à jour avec succès');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Titre" className="border p-2 w-full" />
            <input name="author" value={form.author} onChange={handleChange} placeholder="Auteur" className="border p-2 w-full" />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Catégorie" className="border p-2 w-full" />
            <input type="date" name="date" value={form.date} onChange={handleChange} className="border p-2 w-full" />
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Mettre à jour</button>
        </form>
    );
}
