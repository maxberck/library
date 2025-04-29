import api from "../axios";

// chemin fait grace à route:list
export const fetchBooks = () => api.get('/books');
export const fetchBook = (id: number) => api.get(`/books/${id}`);
export const createBook = (data: any) => api.post(`/books`,data); // data en deuxième argument de axios.post contient les données a envoyé
export const updateBook = (id: number, data: any) => api.put(`/books/${id}`,data); 
export const deleteBook = (id: number) => api.delete(`/books/${id}`); 

