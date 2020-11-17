# INSTRUCTIONS POUR INSTALLER ET EXECUTER L'APPLICATION

L'application JS a besoin de tourner sur un serveur http pour pouvoir gérer les imports de modules etc

#### A installer :
* Node 14.15.1
* Les dépendances pour faire tourner le serveur, à savoir **connect** et **serve-static**. Exécuter la commmande `npm connect serve-static` dans un terminal depuis la racine du projet

#### Pour exécuter l'application :
* Lancer le serveur http qui se chargera de servir la ressource **index.html** : `node server.js`

# EXPLICATIONS SUR LE DESIGN DE L'APPLICATION

Chaque personne a un fichier html et un fichier js (script d3) propre et l'index est un accueil qui permet de rediriger vers les pages de chacun (visualisations)
Les scripts js qui se trouvent dans "/modules" représentent le code des fonctions qui peuvent servir à tout le monde (il suffit d'importer les fonctions dont vous avez besoin dans votre sript)