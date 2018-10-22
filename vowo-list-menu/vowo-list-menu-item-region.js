import { PolymerElement, html } from '@polymer/polymer';
import '../../vowo-iron-icon/vowo-iron-icon-region.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoListMenuItemRegionElement extends PolymerElement
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
            <vowo-iron-icon-region style="margin-right: 0.8em;" icon="[[icon]]"></vowo-iron-icon-region>
            <slot></slot>
        </paper-item>
`;
  }

  static get is()
  {
      return 'vowo-list-menu-item-region';
  }

  static get properties()
  {
      return {
          icon: {
              type: String
          }
      }
  }
}

window.customElements.define(VowoListMenuItemRegionElement.is, VowoListMenuItemRegionElement);
