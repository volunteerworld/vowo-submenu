import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-listbox/paper-listbox.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoListMenuElement extends PolymerElement
{
  static get template() {
    return html`
        <style>
            paper-listbox ::slotted(*) {
                color: var(--secondary-text-color);
            }
        </style>

        <paper-listbox>
            <slot></slot>
        </paper-listbox>
`;
  }

  static get is()
  {
      return 'vowo-list-menu';
  }

  ready() {
      super.ready();

      setTimeout(function() {
          const children = this.shadowRoot
              .querySelector('slot')
              .assignedNodes({flatten: true})
              .filter(n => n.nodeType === Node.ELEMENT_NODE);

          for(let i=0; i<children.length; i++) {
              // exlude tab-selector --> dialog should not close on tab-selector click
              if('vowo-list-menu-item-tab-selector' !== children[i].tagName.toLowerCase()) {
                  children[i].addEventListener('click', this._closeDialog.bind(this));
              }
          }
      }.bind(this), 0);
  }

  _closeDialog() {
      document.dispatchEvent(new CustomEvent('close-vowo-dialog', {bubbles: true, composed: true}));
  }
}

window.customElements.define(VowoListMenuElement.is, VowoListMenuElement);
