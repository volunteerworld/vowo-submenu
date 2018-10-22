/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/iron-icon/iron-icon.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoSubmenuTriggersElement extends PolymerElement
{
  static get template() {
    return html`
        <style>
            :host {
                min-height: 45px !important;
                padding: 22px 0;
                background-color: rgba(0, 0, 0, 0.85);
            }

            @media screen and (max-width: 639px) {
                :host {
                    padding: 2px 0;
                }
            }

            @media screen and (max-width: 850px) {
                paper-item {
                    margin: 1em;
                }
            }

            @media screen and (min-width: 850px) {
                paper-item {
                    width: 25em;
                }
            }

            paper-item {
                cursor: pointer;
                height: 3em;
                color: white;
                min-height: 0 !important;
                border: solid thin;
            }

            paper-item-body {
                font-size: 1.2em;
                text-align: center;
            }

            iron-icon {
                color: white;
                padding-left: 5px;
            }
        </style>
        <div class="flex" style="flex: 5;"></div>

        <paper-item class="layout horizontal center" on-click="openSubMenuDestinations">
            <iron-icon icon="polymer:location-on"></iron-icon>
            <paper-item-body>
                <slot name="destinationLabel"></slot>
            </paper-item-body>
        </paper-item>

        <div class="flex" style="flex: 0.5;"></div>

        <paper-item class="layout horizontal center" on-click="openSubMenuAnimalsWildlife">
            <iron-icon icon="polymer:favorite"></iron-icon>
            <paper-item-body>
                <slot name="projectFocusLabel"></slot>
            </paper-item-body>
        </paper-item>

        <div class="flex" style="flex: 5;"></div>
`;
  }

  static get is()
  {
      return 'vowo-submenu-triggers';
  }

  openSubMenuDestinations()
  {
      subMenuDestinations.openDialog();
  }

  openSubMenuAnimalsWildlife()
  {
      subMenuAnimalsWildlife.openDialog();
  }
}

window.customElements.define(VowoSubmenuTriggersElement.is, VowoSubmenuTriggersElement);
