import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'composant-scott',
  styleUrl: 'scott.css',
  shadow: true
})
export class Scott {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
