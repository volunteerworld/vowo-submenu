import { PolymerElement, html } from '@polymer/polymer';
import '../../vowo-iron-icon/vowo-iron-icon-country.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoListMenuItemCountryElement extends PolymerElement
{
  static get template() {
    return html`
        <style>
            paper-item {
                min-height: 0;
                margin-top: 0.5em;
                margin-bottom: 0.5em;
                margin-left: 0.5em;

                color: var(--secondary-text-color);
            }
        </style>

        <paper-item>
            <vowo-iron-icon-country style="margin-right: 0.8em;" code="[[code]]"></vowo-iron-icon-country>
            <slot></slot>
        </paper-item>
`;
  }

  static get is()
  {
      return 'vowo-list-menu-item-country';
  }

  static get properties()
  {
      return {
          code: {
              type: String
          }
      }
  }
}

window.customElements.define(VowoListMenuItemCountryElement.is, VowoListMenuItemCountryElement);
