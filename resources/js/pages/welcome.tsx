import { useState } from 'react';
import BookList from '../pages/Books/BookList';
import BookCreate from '../pages/Books/BookCreate';
import BookEdit from '../pages/Books/BookEdit';
import BookShow from '../pages/Books/Bookshow';

export default function Welcome() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <div className="p-6 space-y-10 bg-white text-black">
            <h1 className="text-3xl font-bold mb-6">Gestion de Livres</h1>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Liste des Livres</h2>
                {/* onselect mis en props justement pour gérer le maps de tous les livres  */}
                <BookList onSelect={(id) => setSelectedId(id)} />
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Créer un Livre</h2>
                <BookCreate />
            </section>

            {/* s'active quand on clique sur un livre grace au selectedId */}
            {selectedId && (
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Modifier le Livre {selectedId}</h2>
                    <BookEdit id={selectedId} />
                </div>
            )}

            {selectedId && (
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Voir le Livre {selectedId}</h2>
                    <BookShow id={selectedId} />
                </div>
            )}
        </div>
    );
}
