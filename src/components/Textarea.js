export class Textarea {
  //constructor for the "Textarea" class
  constructor({ selector }) {
    this._textareaSelector = selector;
    this._textarea = document.querySelector(this._textareaSelector);
    this._textarea.oninput = () => {
      this._autoGrow();
    };
  }

  //auto grow
  _autoGrow() {
    this._textarea.style.height = '40px';
    this._textarea.style.height = this._textarea.scrollHeight + 'px';
  }
}
