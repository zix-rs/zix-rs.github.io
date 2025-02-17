
import { LitElement, html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import highlight from "../../syntax-highlighter";
import bash from '../../bash.css.js'

@customElement('code-block')
export class CodeBlock extends LitElement {
    static styles = bash

    @property({ type: String }) lang = 'bash';
    private rawCode = '';

    firstUpdated() {
        this.updateCodeFromSlot();
    }

    updateCodeFromSlot() {
        const slot = this.shadowRoot?.querySelector("slot");
        if (slot) {
          const assignedNodes = slot.assignedNodes();
          this.rawCode = assignedNodes.map((node) => node.textContent?.trim()).join("\n");
          this.requestUpdate();
        }
      }

    coloredCode() {
        return `${highlight(this.lang, this.rawCode)}`
    }

    render() {
        return html`
            <pre>
                ${unsafeHTML(this.coloredCode())}
            </pre>
            <slot hidden></slot>
        `
    }
}
