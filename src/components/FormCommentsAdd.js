export class FormCommentsAdd {
  //constructor for the "FormCommentsAdd" class
  constructor({ selector, submit, getUserData, ownerId, uuid }) {
    this._formSelector = selector;
    this._form = document.querySelector(this._formSelector);
    this._submit = submit;

    this._submitEvtHandler = this._submitEvtHandler.bind(this);
    this._submitOnEnter = this._submitOnEnter.bind(this);

    this._buttonSubmit = this._form.querySelector('.button__submit');
    this._userNameElement = this._form.querySelector('.comments-add-form__user-name');
    this._userAvatarElement = this._form.querySelector('.comments-add-form__user-avatar');
    this._textarea = document.querySelector('.comments-add-form__textarea');
    this._textarea.oninput = () => {
      this._autoGrow();
    };
    this._getUserData = getUserData;
    this._ownerId = ownerId;
    this._uuid = uuid;
  }

  //if submit evt handler
  _submitEvtHandler(evt) {
    evt.preventDefault();
    this._textarea.style.height = '40px';
    this._submit(this._getValues(), this._form);
  }

  //if press 'enter'
  _submitOnEnter(evt) {
    if (evt.key === 'Enter' && !evt.shiftKey) {
      if (this._buttonSubmit.disabled === false) {
        const newEvent = new Event('submit', this._submitEvtHandler);
        evt.target.form.dispatchEvent(newEvent);
      }
      evt.preventDefault();
    }
  }

  //auto grow
  _autoGrow() {
    this._textarea.style.height = '40px';
    this._textarea.style.height = this._textarea.scrollHeight + 'px';
  }

  //set user info
  setUserInfo(userInfo) {
    this._userNameElement.textContent = userInfo.name;
    if (userInfo.link !== '')
      this._userAvatarElement.style.backgroundImage = `url(${userInfo.link})`;
  }

  //get values
  _getValues() {
    const inputsList = Array.from(this._form.querySelectorAll('.comments-add-form__input'));
    const data = {};
    const userData = this._getUserData();
    inputsList.forEach((input) => {
      data[input.name] = input.value;
    });
    data.owner = {
      id: this._ownerId
    };
    data.id = this._uuid();
    data.likes = [];
    data.name = userData.name;
    data.date = userData.date;
    data.link = userData.link;

    return data;
  }

  //set event listeners "FormCommentsAdd" class popup
  setEventListeners() {
    this._form.addEventListener('submit', this._submitEvtHandler);
    this._textarea.addEventListener('keydown', this._submitOnEnter);
  }
}
