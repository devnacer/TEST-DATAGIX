<?php
// URL distante à laquelle vous souhaitez accéder
$remote_url = $_GET['url'];

// Créer une nouvelle ressource cURL
$ch = curl_init();

// Configuration de l'URL et d'autres options
curl_setopt($ch, CURLOPT_URL, $remote_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Exécution de la requête, récupération du contenu de la réponse
$response = curl_exec($ch);

// Fermeture de la session cURL
curl_close($ch);

// Retourner la réponse
echo $response;
?>
