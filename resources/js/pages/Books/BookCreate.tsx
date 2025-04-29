// resources/js/Books/BookCreate.tsx

import React, { useState } from 'react';
import { createBook } from '../../api/services/BookServices';

export default function BookCreate() {
    // les données qu'il y aura dans le formulaire
    const [form, setForm] = useState({ title: '', author: '', category: '',date: '',});

    // l'éllément va accepter les changement fait dans les input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //ca va créer un nouvel objet à partir des données du formulaire 
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        await createBook(form);
        console.log('Livre créé avec succès');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="title" value={form.title} onChange={handleChange} placeholder="Titre" className="border p-2 w-full" />
            <input name="author" value={form.author} onChange={handleChange} placeholder="Auteur" className="border p-2 w-full" />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Catégorie" className="border p-2 w-full" />
            <input type="date" name="date" value={form.date} onChange={handleChange} className="border p-2 w-full" />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Créer</button>
        </form>
    );
}
