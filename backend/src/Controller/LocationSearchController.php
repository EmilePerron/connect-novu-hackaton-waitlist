<?php

namespace App\Controller;

use SKAgarwal\GoogleApi\PlacesApi;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LocationSearchController extends AbstractController
{
    #[Route('/location/search', name: 'location_search')]
    public function search(Request $request, PlacesApi $placesApi): JsonResponse
    {
        $query = $request->query->getAlnum("query");
        $userLocation = $request->query->getAlnum("location");
        $response = $placesApi->textSearch($query, ["location" => $userLocation]);

        $results = array_map(fn (array $location) => [
            'name' => $location['name'],
            'rating' => $location['rating'] ?? null,
            'address' => $location['formatted_address'],
            'id' => $location['place_id'],
        ], $response['results']->toArray() ?? []);

        return $this->json($results);
    }
}
