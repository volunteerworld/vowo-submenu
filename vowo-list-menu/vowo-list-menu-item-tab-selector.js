import '../../vowo-iron-icon/vowo-iron-icon-region.js';
import '../../vowo-iron-icon/vowo-iron-icon-sub-region.js';
import './vowo-list-menu-item.js';
import { PolymerElement, html } from '@polymer/polymer';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoListMenuItemTabSelectorElement extends PolymerElement
{
  static get template() {
    return html`
        <vowo-list-menu-item on-click="selectTab" style="cursor: pointer;">
            <template is="dom-if" if="[[_isRegion]]">
                <vowo-iron-icon-region style="margin-right: 0.8em;" icon="[[_icon]]"></vowo-iron-icon-region>
            </template>
            <template is="dom-if" if="{{_isSubRegion}}">
                <vowo-iron-icon-sub-region style="margin-right: 0.8em;" icon="[[_icon]]"></vowo-iron-icon-sub-region>
            </template>
            <slot></slot>
        </vowo-list-menu-item>
`;
  }

  static get is()
  {
      return 'vowo-list-menu-item-tab-selector';
  }

  static get properties()
  {
      return {
          icon: {
              type: String,
              value: ''
          },
          container: {
              type: String
          },
          tab: {
              type: Number
          },
          _isRegion:{
              type: String,
              value: false
          },
          _isSubRegion:{
              type:String,
              value: false
          },
          _icon:{
              type: String
          }
      }
  }
  ready(){
      super.ready();
      if(this.icon != ''){
          var splitted = this.icon.split(":");
          if(splitted[0] == "region"){
              this._isRegion = true;
              this._icon = splitted[1];
          }
          if(splitted[0] == "subregion"){
              this._isSubRegion = true;
              this._icon = splitted[1];
          }
      }
  }
  selectTab()
  {
      document.querySelector(this.container).selectTab(this.tab);
  }
}

window.customElements.define(VowoListMenuItemTabSelectorElement.is, VowoListMenuItemTabSelectorElement);
