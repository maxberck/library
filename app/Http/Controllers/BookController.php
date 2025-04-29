<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();
        return response()->json($books, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:200',
            'author' => 'required|string|max:80',
            'category' => 'required|string|max:60',
            'date' => 'required|date',
        ]);

        $book = Book::create($validated);

        return response()->json($book, 201); // 200 est un statue envoyé en cas de réussite de création
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $book = Book::find($id);
        return response()->json($book, 200); 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $book = Book::find($id);
        // oublie de mettre des max: 
        $validate = $request->validate([

            'title' => 'required|string|max:200',
            'author' => 'required|string|max:80',
            'category'=> 'required|string|max:60',
            'date' => 'required|date'

        ]);

        $book->update($validate);
        return response()->json($book, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $delete = Book::find($id);
        $delete->delete();
        return response()->json($delete, 204); // 204 est un statue envoyé en cas de reussite de suppression
    }
}
