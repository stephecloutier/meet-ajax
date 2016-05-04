# Meet AJAX

> Base exercise to discover AJAX with jQuery.

* * *

**meet-ajax** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte de AJAX avec jQuery.

* * *

## Consignes

Nous avons ici un petit script PHP qui va lire le contenu d'un fichier **json** nommé `buddies.json`, et nous servir une page html contenant une liste graphique des données comprises dans ce fichier json, ainsi qu'un formulaire permettant d'encoder de nouvelles données, et un bouton pour supprimer les données.

Le script est fonctionnel en l'état, mais chaque ajout de données implique un rechargement de la page pour laisser PHP travailler.

Nous allons utiliser AJAX (avec jQuery), pour effectuer ces opération sans avoir à recharger la page à chaque fois. Nous en profiterons pour ajouter un petit contrôle de formulaire, pour éviter d'envoyer des données erronées ou incomplètes au serveur.

## Fonctionnement

### Avec MAMP/WAMP

Cloner le repo quelque part et assurez-vous que le dossier `app` soit accessible via MAMP/WAMP.

### Avec docker

* `docker run -p 80:80 -v $PWD/app:/var/www/html leny/simplephp` (aliased to `npm start`).

* * *

Les styles de l'exercice sont générés _via_ [bootstrap](http://getbootstrap.com), et les avatars sont générés _via_ l'API de [Adorable](http://adorable.io/).
