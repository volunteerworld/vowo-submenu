import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js';
/** Change NEON Animations and rewrite the Element:  https://www.npmjs.com/package/@polymer/neon-animation */
import '../../bower_components/neon-animation/neon-animations.js';
import '../../bower_components/neon-animation/web-animations.js';
import '../../bower_components/neon-animation/animations/fade-in-animation.js';
import '../../bower_components/neon-animation/animations/fade-out-animation.js';
/**
 * @polymer
 * @extends HTMLElement
 */
class VowoSubmenuDialogElement extends PolymerElement
{
  static get template() {
    return html`
        <style>
            paper-dialog {
                position: fixed;
                top: 64px;
                left: 0;
                height: 100%;
                margin: 0;
                padding: 0;
                max-width: none;
                width: 100%;
                @apply --vowo-submenu-dialog;
            }
        </style>
        <paper-dialog id="dialog" entry-animation="fade-in-animation" exit-animation="fade-out-animation" no-cancel-on-outside-click="" no-cancel-on-esc-key="">
            <slot></slot>
        </paper-dialog>
`;
  }

  static get is()
  {
      return 'vowo-submenu-dialog';
  }

  static get properties()
  {
      return {
          opened: {
              type: Boolean,
              value: false
          }
      }
  }

  ready()
  {
      super.ready();
      document.addEventListener('close-vowo-dialog', this.closeDialog.bind(this));
  }

  closeDialog()
  {
      //document.querySelector("#vowo-site-content").style.overflowY = "scroll";

      // reset running youtube videos on submenu dialog
      let videos = this.querySelectorAll("vowo-youtube");
      for (let i = 0; i < videos.length; i++) {
          videos[i].resetVideo();
      }

      this.$.dialog.close();
      this.opened = false;
  }

  openDialog()
  {
      // close all other open vowo-submenu-dialogs before opening one
      this._closeOtherDialogs();

      if (!this.opened) {
          //document.querySelector("#vowo-site-content").style.overflow = "hidden";
          this.$.dialog.open();
          this.opened = true;
      }
  }

  _closeOtherDialogs()
  {
      const subMenus = document.querySelectorAll('vowo-submenu-dialog');
      for (let i = 0; i < subMenus.length; i++) {
          if (subMenus[i].opened) {
              subMenus[i].closeDialog();
          }
      }
  }
}

window.customElements.define(VowoSubmenuDialogElement.is, VowoSubmenuDialogElement);
