import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/polymer/lib/utils/flattened-nodes-observer.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoSubmenuTabsElement extends PolymerElement
{
  static get template() {
    return html`
        <style>
            iron-pages {
                margin: 0 10px;
            }

            @media screen and (min-width: 600px) {
                iron-pages {
                    margin: 0 60px;
                }
            }

            app-toolbar {
                height: auto !important;
                background: var(--vowo-submenu-tabs-background-color);
                color: var(--vowo-submenu-tabs-color);
            }

            paper-tabs {
                text-transform: uppercase;
                --paper-tabs-selection-bar-color: var(--primary-color);
            }

            paper-tab {
                --paper-tab-ink: var(--primary-color);
            }

            paper-tab iron-icon {
                margin-right: 5px;
                color: var(--primary-color);
            }

            paper-tabs .iron-selected {
                color: var(--primary-color);
            }

            iron-pages::slotted(*) {
                color: var(--theme-basic-color-grey-dark-middle);
                line-height: normal !important;
            }
        </style>
        <app-header-layout fullbleed="" has-scrolling-region="" style="max-height: [[height]];">
            <app-header condenses="" fixed="" shadow="">
                <app-toolbar>
                    <paper-tabs id="paperTabs" selected="{{selected}}" style="width: 100%" no-bar="[[hideselectionbar]]"></paper-tabs>
                    <paper-icon-button class="close-element" icon="close" on-tap="close"></paper-icon-button>
                </app-toolbar>
            </app-header>
            <iron-pages id="ironPages" selected="{{selected}}">
                <slot></slot>
            </iron-pages>
        </app-header-layout>
`;
  }

  static get is()
  {
      return 'vowo-submenu-tabs';
  }

  static get properties()
  {
      return {
          scrollable: {
              type: Boolean,
              value: false
          },
          hideselectionbar: {
              type: Boolean
          },
          selected: {
              type: Number,
              value: 0
          },
          height: {
              type: String
          }
      }
  }

  ready()
  {
      super.ready();
      setTimeout(() => {
          this.selected = 0;

          // switch pages corresponding to selected tap
          let pages = this.$.ironPages;
          let tabs = this.$.paperTabs;
          tabs.addEventListener('iron-select', function () {
              this.selected = tabs.selected;
          }.bind(this));

          // dynamically add elements to papar-tab
          let children = this.shadowRoot
              .querySelector('slot')
              .assignedNodes({flatten: true})
              .filter(n => n.nodeType === Node.ELEMENT_NODE);

          for (let i = 0; i < children.length; i++) {
              let element = document.createElement('paper-tab');
              if (children[i].hasAttribute("icon")) {
                  let icon = document.createElement('iron-icon');
                  icon.setAttribute("icon", children[i].getAttribute("icon"));
                  dom(element).appendChild(icon);
              }
              let titleElem = document.createElement('span');
              titleElem.innerText = children[i].title;
              dom(element).appendChild(titleElem);
              dom(this.$.paperTabs).appendChild(element);
          }

          let screenSize = window.matchMedia("(max-width: 850px)");
          if (this.scrollable && screenSize.matches) {
              this.$.paperTabs.setAttribute("scrollable", "scrollable");
              this.$.paperTabs.setAttribute("fit-container", "fit-container");
          }
      }, 0);
  }

  close()
  {
      document.dispatchEvent(new CustomEvent('close-vowo-dialog', {bubbles: true, composed: true}));
  }

  selectTab(tabNumber)
  {
      this.$.paperTabs.selected = tabNumber;
      this.$.ironPages.selected = tabNumber;
  }
}

window.customElements.define(VowoSubmenuTabsElement.is, VowoSubmenuTabsElement);
