# super-stencil
Premier stencil fonctionnel 




Stencil (work)

https://blog.logrocket.com/building-reusable-web-components-with-stencil-js/
https://forum.ionicframework.com/t/using-bootstrap-with-stencil-component/156128/4.       Utile mais il n y a pas tout 
https://codyburleson.com/copy-assets-from-node-modules-in-stencil-js.    Voir ce que c est….
https://material.io/components/buttons/#.    Bibli material 

Creer ; npm init stencil 
Run : npm start serve
Ajouter composant : nom run générateur 
=> ensuite modifier manuellement le nom du composant


Ajouter type jest : npm i @types/jest
Installer bootstrap : nam i bootstrap —save
Installer popper : npm install popper.js --save
Installer jQuery : nom i jQuery —save


Installer sass plugin : npm install @stencil/sass --save-dev

Installer material.io: 
npm i material-components-web
npm install @material/data-table


Stencil.config.ts 

Modifier pour pouvoir avoir les styles bootstrap et Material partout 

import { sass } from '@stencil/sass';
￼

unComposant.tsx

Importer les styles nécessaires : 

￼



Ajouter le composant dans un autre projet : 


Copier le dit dans le public 
Index.html : 

    <script src="./dist/projet-component.js"></script>
    <le-component></le-component>

