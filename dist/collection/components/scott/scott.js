import { Host, h } from "@stencil/core";
export class Scott {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "composant-scott"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["scott.css"]
    }; }
    static get styleUrls() { return {
        "$": ["scott.css"]
    }; }
}
