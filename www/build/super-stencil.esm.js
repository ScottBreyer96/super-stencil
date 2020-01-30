import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-d58e32b4.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["composant-scott",[[1,"composant-scott"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["super-compo",[[1,"super-compo",{"msg":[1]}]]]], options);
});
