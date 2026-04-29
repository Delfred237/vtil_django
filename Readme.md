# Etapes d'initialisation d'un projet Django

1- Creer un dossier et l'ouvrir avec Vs Code

2- Creer un environnement virtuel

* Sur Linux

```py
python3 -m venv nom_env
```

* Sur Windows

```py
python -m venv nom_env
```

3- Activer l'environnement virtuel

* Sur linux

```py
source nom_env/bin/activate
```

* Sur Windows

```py
nom_env\scripts\activate
```

4- Creer un fichier requirements.txt
saisir les dependances:

- django

5- Installer les dependances du fichier requirements.txt

```py
pip install -r requirements.txt
```

6- Creer le projet Django

```py
django-admin startproject nom_projet .
```

7- Creer un composant du projet

```py
python3 manage.py startapp nom_composant
```

8- Demarrer le serveur

```py
python3 manage.py runserver
```