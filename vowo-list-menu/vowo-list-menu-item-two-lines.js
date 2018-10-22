import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item-body.js';
import '@polymer/iron-icon/iron-icon.js';
import '../../vowo-font/vowo-md-font.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoListMenuItemTwoLinesElement extends PolymerElement
{
  static get template() {
    return html`
        <style include="vowo-shared-styles-basic vowo-md-font">
            paper-icon-item {
                margin-top: 0.5em;
                --paper-item-icon-width: 0;
                padding-left: 0 !important;
            }

            iron-icon {
                margin-right: 0.8em;
                color: var(--theme-basic-color-grey-dark-middle);
            }

            .title {
                font-size: 1.3em;
                margin: 0;
                color: var(--theme-basic-color-grey-dark-middle);
            }

            .description {
                padding-top: 0;
                font-size: 0.9em;
                min-height: 0;
                white-space: normal !important;
            }

            @media only screen and (max-width: 850px) {
                .title {
                    font-size: 1.0em;
                }
            }
        </style>
        <paper-icon-item>
            <iron-icon class="image" id="icon" icon="[[iconcode]]" style="width: [[iconwidth]]; height: [[iconheight]]"></iron-icon>
            <paper-item-body two-line="">
                <div class="title md-font-title">[[title]]</div>
                <div class="description" secondary="">[[description]]</div>
            </paper-item-body>
        </paper-icon-item>
`;
  }

  static get is()
  {
      return 'vowo-list-menu-item-two-lines';
  }

  static get properties()
  {
      return {
          iconcode: {
              type: String
          },
          title: {
              type: String
          },
          description: {
              type: String
          },
          iconwidth: {
              type: String
          },
          iconheight: {
              type: String
          }
      }
  }

  ready()
  {
      super.ready();
  }
}

window.customElements.define(VowoListMenuItemTwoLinesElement.is, VowoListMenuItemTwoLinesElement);
