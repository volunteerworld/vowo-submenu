import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-item/paper-item.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoListMenuItemElement extends PolymerElement
{
  static get template() {
    return html`
        <style>
            paper-item {
                color: var(--secondary-text-color);
                min-height: 0;
                margin-top: 0.5em;
                margin-bottom: 0.5em;
                margin-left: 0.5em;
            }

            paper-item::slotted(.arrow-right) {
                padding: 0 5px;
                width: 10px;
                fill: rgba(0, 0, 0, .54);
                cursor: pointer;
            }
        </style>

        <paper-item>
            <slot></slot>
        </paper-item>
`;
  }

  static get is()
  {
      return 'vowo-list-menu-item';
  }
}

window.customElements.define(VowoListMenuItemElement.is, VowoListMenuItemElement);
