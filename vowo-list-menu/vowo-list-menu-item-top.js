import { PolymerElement, html } from '@polymer/polymer';
import './vowo-list-menu-item.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoListMenuItemTopElement extends PolymerElement
{
  static get template() {
    return html`
        <style>
            paper-item {
                min-height: 0;
                border-bottom: solid thin #aaa;
                padding-bottom: 0.2em;
                margin-bottom: 0.5em;
                padding-left: 0;
                padding-right: 0;
            }

            paper-item ::slotted(.heading) {
                color: var(--secondary-text-color) !important;
                font-size: 1.3em !important;
                font-weight: 500 !important;
                line-height: 28px;
                text-transform: uppercase;
            }

            paper-item ::slotted(.icon-item) {
                margin-right: 0.4em;
            }

            paper-item ::slotted(.icon-right) {
                margin-left: 0.4em;
            }

            paper-item ::slotted(.icon-hot) {
                fill: var(--danger-color);
            }

            paper-item ::slotted(.icon-star) {
                fill: var(--star-color);
            }

        </style>

        <paper-item>
            <slot></slot>
        </paper-item>
`;
  }

  static get is()
  {
      return 'vowo-list-menu-item-top';
  }
}

window.customElements.define(VowoListMenuItemTopElement.is, VowoListMenuItemTopElement);
