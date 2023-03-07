//import main class "Popup"
import Popup from './Popup.js';

//extends "Popup"
export default class PopupWithFormDefault extends Popup {
  //constructor for the "PopupWithFormDefault" class
  constructor({ selector, submit }) {
    super(selector);
    this._submit = submit;
    this._form = this._popup.querySelector('.form');
    this._submitEvtHandler = this._submitEvtHandler.bind(this);
  }

  //close "PopupWithForm" class popup
  close() {
    super.close();
    this._form.reset();
  }
}
