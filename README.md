# Meet AJAX

> Base exercise to discover AJAX with jQuery.

* * *

**meet-ajax** is an educational project.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instructions will be in french. Sorry.

* * *

Ces fichiers servent de base d'exercice pour le cours de découverte de AJAX avec jQuery.

* * *

## Fonctionnement

### Avec MAMP/WAMP

Cloner le repo quelque part et assurez-vous que le dossier `app` soit accessible via MAMP/WAMP.

### Avec docker

* `docker build -t hepl-mmi/meet-ajax .`
* `docker run -p 80:80 -v $PWD/app:/var/www/html hepl-mmi/meet-ajax` (aliased to `npm start`).

* * *

Les styles de l'exercice sont générés _via_ [bootstrap](http://getbootstrap.com), et les avatars sont générés _via_ l'API de [Adorable](http://adorable.io/).
