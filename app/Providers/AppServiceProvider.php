<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Enregistre les services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Effectue les configurations après le démarrage de l'application.
     *
     * @return void
     */
    public function boot()
    {
        // Enregistrer les routes API
        $this->mapApiRoutes();

        // Enregistrer les routes Web
        $this->mapWebRoutes();
    }

    /**
     * Définir les routes API pour l'application.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace('App\\Http\\Controllers') // S'assurer que le namespace est correct
            ->group(base_path('routes/api.php')); // Charger api.php
    }

    /**
     * Définir les routes Web pour l'application.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->namespace('App\\Http\\Controllers') // S'assurer que le namespace est correct
            ->group(base_path('routes/web.php')); // Charger web.php
    }
}
