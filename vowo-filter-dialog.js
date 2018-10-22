import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-media-query/iron-media-query.js';
import './vowo-submenu-dialog.js';
import './vowo-submenu-tabs.js';
import '../vowo-checkbox-group/vowo-checkbox-group.js';
import '../vowo-shared-styles/vowo-shared-styles-basic.js';
import '../vowo-slider/vowo-slider.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoFilterDialogElement extends PolymerElement
{
  static get template() {
    return html`
        <style include="iron-flex iron-flex-alignment vowo-shared-styles-basic">
            @media only screen and (min-width: 1024px) {
                vowo-submenu-dialog {
                    --vowo-submenu-dialog: {
                        width: 66.67% !important;
                    }
                }

                .footer {
                    margin-top: 0.5em !important;
                }

                paper-button {
                    font-size: 0.8em !important;
                }
            }

            @media only screen and (max-width: 1024px) {
                paper-button {
                    font-size: 1em !important;
                }
            }

            vowo-submenu-tabs {
                width: 100%;
            }

            .container-sliders {
                @apply --layout-horizontal;
                @apply --layout-wrap;
                @apply --layout-flex;
            }

            .container-slider {
                @apply --layout-flex;
                min-width: 300px;
                margin-right: 10px;
                margin-top: 1em;
                flex: 1 1 300px;
            }

            .container-checkbox-group {
                margin-right: 10px;
                border-top: 1px solid #dbdbdb;
                margin-top: 0.625em;
                @apply --layout-horizontal;
                @apply --layout-wrap;
            }

            vowo-checkbox-group {
                width: 100%;
            }

            .footer {
                height: 100%;
                padding-top: 0.5em;
                font-size: 1em;
            }

            app-toolbar {
                width: 100%;
                background-color: #f4f4f4;
            }

            .mobile {
                @apply --layout-horizontal;
                @apply --layout-center-justified;
            }

            .desktop {
                @apply --layout-horizontal;
                @apply --layout-end-justified;
            }

            paper-button {
                font-size: 0.8em;
            }

            .wrapper-button-search {
                @apply --layout-horizontal;
                @apply --layout-center;
                padding: 12px 7px;
            }

            paper-button.button-search {
                padding-left: 13px;
            }

            paper-button.button-search iron-icon {
                margin-left: 5px;
                color: white;
            }

            paper-button.button-cancel {
                color: #727272;
            }
        </style>
        <iron-media-query query="max-width: 600px" query-matches="{{isMobile}}"></iron-media-query>
        <vowo-submenu-dialog id="filter">
            <div class="vowo-submenu-container" style="height: calc(100% - 80px);width: 100%;margin: 0px;padding: 0px;">
                <vowo-submenu-tabs scrollable="" hideselectionbar="" on-close="closeDialog" height="calc(100% - 80px)">
                    <div id="content" title="{{locale.moreFilter}}" icon="filter-list">
                        <div class="container-sliders">
                            <div id="durationWrapper" class="container-slider">
                                <vowo-slider id="duration" snaps="true" step="1">{{locale.stayLine1}} <strong>{{locale.stayLine2}}</strong> {{locale.stayLine3}}</vowo-slider>
                            </div>
                            <div id="ageWrapper" class="container-slider">
                                <vowo-slider id="age" single-slider="true" step="1" snaps="true" min="[[minage]]" max="[[maxage]]">
                                    {{locale.yourAgeLine1}} <strong>{{locale.yourAgeLine2}}</strong> {{locale.yourAgeLine3}}
                                </vowo-slider>
                            </div>
                        </div>

                        <div class="container-checkbox-group" id="suitableForContainer">
                            <vowo-checkbox-group id="suitableFor" checkboxes="[[suitablefors]]" current="[[suitableforscurrent]]">
                                {{locale.suitableFor}}
                            </vowo-checkbox-group>
                        </div>

                        <div class="container-checkbox-group" id="accommodationtypeContainer">
                            <vowo-checkbox-group id="accommodationtype" checkboxes="[[accommodationtypes]]" current="[[accommodationtypescurrent]]">
                                {{locale.accommodationType}}
                            </vowo-checkbox-group>
                        </div>

                        <div class="container-checkbox-group" id="languageContainer">
                            <vowo-checkbox-group id="language" checkboxes="[[languages]]" current="[[languagescurrent]]">
                                {{locale.projectLanguage}}
                            </vowo-checkbox-group>
                        </div>
                    </div>
                </vowo-submenu-tabs>
            </div>
            <div class="footer" style="background-color: #f4f4f4;">
                <template is="dom-if" if="{{isMobile}}">
                    <div class="layout horizontal center-justified">
                        <paper-button class="vowo-action-button button-search" raised="" on-tap="_handleTap">
                            {{locale.searchPrograms}}
                            <iron-icon icon="search"></iron-icon>
                        </paper-button>
                    </div>
                </template>
                <template is="dom-if" if="{{!isMobile}}">
                    <app-toolbar class="wrapper-button-search desktop">
                        <paper-button class="button-cancel" on-click="closeDialog" style="margin-bottom:2em;">{{locale.cancel}}</paper-button>

                        <paper-button class="vowo-action-button button-search" style="margin-bottom:2em;" raised="" on-tap="_handleTap">
                            {{locale.searchPrograms}}
                            <iron-icon icon="search"></iron-icon>
                        </paper-button>
                    </app-toolbar>
                </template>
            </div>
        </vowo-submenu-dialog>
`;
  }

  static get is()
  {
      return 'vowo-filter-dialog';
  }

  static get properties()
  {
      return {
          data: {
              type: Array
          },
          suitablefors: {
              type: Array
          },
          accommodationtypes: {
              type: Array
          },
          languages: {
              type: Array
          },
          minstay: {
              type: Number
          },
          maxstay: {
              type: Number
          },
          minage: {
              type: Number
          },
          maxage: {
              type: Number
          },
          suitableforscurrent: {
              type: Array
          },
          accommodationtypescurrent: {
              type: Array
          },
          languagescurrent: {
              type: Array
          },
          minstayCurrent: {
              type: Number
          },
          maxstayCurrent: {
              type: Number
          },
          minageCurrent: {
              type: Number
          },
          maxageCurrent: {
              type: Number
          },
          localeJson:{
              type:String
          },
          locale:{
              type:Object
          }
      }
  }

  reset() {
      this.$.suitableFor.uncheckAll();
      this.$.accommodationtype.uncheckAll();
      this.$.language.uncheckAll();

      this.initializeProperties();
      this.update();
  }

  initMoreFilter() {
      var minStayInWeeks = this._daysToWeeks(this.minstay);
      var maxStayInWeeks = this._daysToWeeks(this.maxstay);

      this.$.duration.valueMin = minStayInWeeks;
      this.$.duration.valueMax = maxStayInWeeks;
      this.$.duration.min = minStayInWeeks;
      this.$.duration.max = maxStayInWeeks;

      this.$.age.valueMin = this.maxage;
      this.$.age.valueMax = this.maxage;

      if (!this._isSliderVisible(this.minage, this.maxage)) {
          this.$.ageWrapper.style.display = "none";
      }
      if (!this._isSliderVisible(this.minstay, this.maxstay)) {
          this.$.durationWrapper.style.display = "none";
      }
      if (this.suitablefors.length === 0) {
          this.$.suitableForContainer.style.display = "none";
      }
      if (this.accommodationtypes.length === 0) {
          this.$.accommodationtypeContainer.style.display = "none";
      }
      if (this.languages.length === 0) {
          this.$.languageContainer.style.display = "none";
      }
  }
  ready()
  {
      super.ready();
      this.locale = JSON.parse(this.localeJson);
      this.addlisteners();
      this.initMoreFilter();
      this.initializeProperties();
      this.updateCheckboxes();
  }

  addlisteners()
  {
      this.$.language.addEventListener('currentchanged', this._handleCheckBoxesCurrentChanged.bind(this));
      this.$.accommodationtype.addEventListener('currentchanged', this._handleCheckBoxesCurrentChanged.bind(this));
      this.$.suitableFor.addEventListener('currentchanged', this._handleCheckBoxesCurrentChanged.bind(this));
  }

  closeDialog()
  {
      this.$.filter.closeDialog();
  }

  openDialog()
  {
      this.$.filter.openDialog();
  }

  _handleTap()
  {
      this.update(true);
  }

  update(userTap = false) {
      var minDurationInDays = this.$.duration.valueMin * 7;
      var maxDurationInDays = this.$.duration.valueMax * 7;

      var data = {
          age: this.$.age.valueMax,
          minduration: minDurationInDays,
          maxduration: maxDurationInDays,
          suitablefors: this.$.suitableFor.getCheckboxesOnlyNames(),
          accommodationtypes: this.$.accommodationtype.getCheckboxesOnlyNames(),
          languages: this.$.language.getCheckboxesOnlyNames(),
          userTap: userTap
      };

      // this.fire('updated', data);
      var event = new CustomEvent('updated', {bubbles: true, composed: true, detail: data});
      this.dispatchEvent(event);

      this.closeDialog();
  }

  /**
   * Convert days to weeks
   *
   * @param days
   * @returns {number}
   * @private
   */
  _daysToWeeks(days)
  {
      return Math.floor(days / 7);
  }

  /**
   * Checks if slider should be shown
   *
   * @param min
   * @param max
   * @returns {boolean}
   * @private
   */
  _isSliderVisible(min, max)
  {
      return Number(min) !== Number(max);
  }

  _handleCheckBoxesCurrentChanged(e)
  {
      var current = e.target.current;
      var checkboxes = e.target.get('checkboxes');
      if (checkboxes) {
          for (var i = 0; i < checkboxes.length; i++) {
              var checkbox = e.target.get(['checkboxes', i]);
              var currentIndex = current.map(function (value) {
                  return value.key;
              }).indexOf(checkbox['key']);
              if (currentIndex > -1) {
                  e.target.set('checkboxes.' + i + ".doc_count", current[currentIndex]['doc_count']);
                  e.target.set('checkboxes.' + i + ".disabled", false);
              } else {
                  e.target.set('checkboxes.' + i + ".doc_count", 0);
                  if (!checkbox['checked']) {
                      e.target.set('checkboxes.' + i + ".disabled", true);
                  }
              }
          }
      }
  }

  updateCheckboxes()
  {
      this.$.language.dispatchEvent(new CustomEvent('currentchanged'));
      this.$.accommodationtype.dispatchEvent(new CustomEvent('currentchanged'));
      this.$.suitableFor.dispatchEvent(new CustomEvent('currentchanged'));
  }

  initializeProperties()
  {
      var search = location.search.substring(1);
      if (search) {
          var queryJson = this.getUrlVars(decodeURIComponent(search));
          var minStay = 0;
          var maxStay = this.maxstay;
          for (var i in queryJson) {
              var key = i;
              var value = queryJson[i];
              if (key === 'f[mAge]') {
                  this.$.age.setSingleSliderValue(parseInt(value));
              } else {
                  if (key === 'f[sF]') {
                      this.$.suitableFor.updateCheckboxes(value);
                  } else {
                      if (key === 'f[minD]' && value >= 7) {
                          minStay = parseInt(value) / 7;
                      } else {
                          if (key === 'f[maxD]' && value >= 7) {
                              maxStay = parseInt(value) / 7;
                          } else {
                              if (key === 'f[aT]') {
                                  this.$.accommodationtype.updateCheckboxes(value);
                              } else {
                                  if (key === 'f[lang]') {
                                      this.$.language.updateCheckboxes(value);
                                  }
                              }
                          }
                      }
                  }
              }
          }
          this.$.duration.valueMin = parseInt(minStay);
          this.$.duration.valueMax = parseInt(maxStay);
      }
  }

  getUrlVars(url)
  {
      var hash;
      var myJson = {};
      var hashes = url.split('&');
      for (var i = 0; i < hashes.length; i++) {
          hash = hashes[i].split('=');
          myJson[hash[0]] = hash[1];
      }
      return myJson;
  }
}

window.customElements.define(VowoFilterDialogElement.is, VowoFilterDialogElement);
