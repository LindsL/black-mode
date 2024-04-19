# 🌝🌓🌚 Fonctionnalité de Mode Sombre

Ce script JavaScript permet d'implémenter une fonctionnalité de mode sombre dans votre application web. Lorsque le mode sombre est activé, l'arrière-plan, les couleurs du texte, ainsi que d'autres éléments de l'interface utilisateur sont ajustés pour offrir une expérience visuelle plus confortable dans des conditions de faible luminosité.

## 🖥 Utilisation

1. **Intégration du Script :**
   - Téléchargez le fichier script.js et ajoutez-le dans le dossier racine, au même niveau que votre fichier HTML.
   - Incluez le script JavaScript dans votre page HTML avant la balise `</body>`.
  
```html
       <script src="dark-mode.js"></script>
```
  
   
   - Assurez-vous que les éléments HTML ciblés par le script sont correctement définis dans votre document.
```html
    <input type="checkbox" id="dark-mode" class="input">
        <label for="dark-mode" class="label">
            <div class="circle"></div>
        </label>
```


2. **Activation du Mode Sombre :**
   - Le mode sombre est activé/désactivé à l'aide d'une case à cocher (checkbox).
   - Lorsque le mode sombre est activé, les éléments de l'interface utilisateur sont stylisés pour correspondre au thème sombre.
   
3. **Personnalisation :**
   - Vous pouvez personnaliser les couleurs et les transitions selon les besoins de votre application en modifiant les valeurs dans le script.

## 👍🏽 Exemple d'Utilisation

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mode Sombre</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <input type="checkbox" id="dark-mode" class="input">
      <label for="dark-mode" class="label">
          <div class="circle"></div>
      </label>
    <div class="main-container">
        <h1 class="title">Titre Principal</h1>
        <h2>Sous-Titre</h2>
        <p>Ceci est un paragraphe.</p>
        <p>Voici un autre paragraphe.</p>
    </div>
    <script src="dark-mode.js"></script>
</body>
</html>

``` 

