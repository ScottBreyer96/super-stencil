/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface ComposantScott {}
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface SuperCompo {
    'msg': string;
  }
}

declare global {


  interface HTMLComposantScottElement extends Components.ComposantScott, HTMLStencilElement {}
  var HTMLComposantScottElement: {
    prototype: HTMLComposantScottElement;
    new (): HTMLComposantScottElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLSuperCompoElement extends Components.SuperCompo, HTMLStencilElement {}
  var HTMLSuperCompoElement: {
    prototype: HTMLSuperCompoElement;
    new (): HTMLSuperCompoElement;
  };
  interface HTMLElementTagNameMap {
    'composant-scott': HTMLComposantScottElement;
    'my-component': HTMLMyComponentElement;
    'super-compo': HTMLSuperCompoElement;
  }
}

declare namespace LocalJSX {
  interface ComposantScott {}
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface SuperCompo {
    'msg'?: string;
  }

  interface IntrinsicElements {
    'composant-scott': ComposantScott;
    'my-component': MyComponent;
    'super-compo': SuperCompo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'composant-scott': LocalJSX.ComposantScott & JSXBase.HTMLAttributes<HTMLComposantScottElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'super-compo': LocalJSX.SuperCompo & JSXBase.HTMLAttributes<HTMLSuperCompoElement>;
    }
  }
}

