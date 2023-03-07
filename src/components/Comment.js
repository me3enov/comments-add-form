export class Comment {
    //constructor for the "Comment" class
    constructor(item, currentUserId, formatDate, {handleBinClick, handleLikeClick}) {
        //comment id
        this.id = item.id;

        //current user id
        this._currentUserId = currentUserId;

        //data for the init comment
        this.item = item;
        this._ownerId = this.item.owner.id;
        this._name = item.name;
        this._date = item.date === undefined || item.date === ''
            ? new Date()
            : new Date(item.date);
        this._link = item?.link;
        this._text = item.text;

        //functions for the comment
        this._handleLikeClick = handleLikeClick;
        this._handleBinClick = handleBinClick;
        this._formatDate = formatDate;

        //config for "Comment" class
        this._templateSelector = '#comment-template';
        this._commentSelector = '.comments__item';
        this._avatarSelector = '.comments__user-avatar';
        this._nameSelector = '.comments__user-name';
        this._dateSelector = '.comments__user-date';
        this._textSelector = '.comments__text';
        this._binBtnSelector = '.comments__icon_remove';
        this._likeBtnSelector = '.comments__icon_like';
        this._likesCountSelector = '.comments__like-count';
        this._likedClass = 'comments__icon_liked';
    }

    //get template comment from page
    _getTemplate() {
        const commentElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector(this._commentSelector)
            .cloneNode(true);
        return commentElement;
    }

    //upper first letter
    _toUpperCase(text) {
        return text.slice(0, 1).toUpperCase() + text.slice(1);;
    }

    //remove element
    _removeElement(element) {
        element.remove();
        element = null;
    }

    //add liked class
    _addLikedClass() {
        this._likeBtnElement.classList.add(this._likedClass);
    }

    //remove liked class
    _removeLikedClass() {
        this._likeBtnElement.classList.remove(this._likedClass);
    }

    //compare id comment
    _checkId() {
        if (this._ownerId !== this._currentUserId) {
            this._removeElement(this._binBtnElement);
        }
    }

    //set event listeners the "Comment" class
    _setEventListeners() {
        this._likeBtnElement.addEventListener('click', () => this._handleLikeClick(this.item));
        this._binBtnElement.addEventListener('click', () => this._handleBinClick(this));
    }

    //check is liked comment
    isLiked() {
        return this._isLiked;
    }

    //set likes count
    setLikes(commentData) {
        this._likeCountElement.textContent = commentData.likes.length;
        this._isLiked = commentData.likes.filter((id) => {return id === this._currentUserId}).length > 0;
        this._isLiked ? this._addLikedClass() : this._removeLikedClass();
    }

    //generate comment
    generateComment() {
        //get template comment
        this._element = this._getTemplate();
        this._avatarElement = this._element.querySelector(this._avatarSelector);
        this._nameElement = this._element.querySelector(this._nameSelector);
        this._dateElement = this._element.querySelector(this._dateSelector);
        this._textElement = this._element.querySelector(this._textSelector);
        this._likeBtnElement = this._element.querySelector(this._likeBtnSelector);
        this._binBtnElement = this._element.querySelector(this._binBtnSelector);
        this._likeCountElement = this._element.querySelector(this._likesCountSelector);
        //set variables comment
        this._nameElement.textContent = this._toUpperCase(this._name);
        this._dateElement.textContent = this._formatDate(this._date);
        this._textElement.textContent = this._text;
        if (this._link !== undefined && this._link !== '') this._avatarElement.style.backgroundImage = `url(${this._link})`;
        //set event listeners comment
        this.setLikes(this.item)
        this._checkId();
        this._setEventListeners();

        return this._element;
    }

    //remove comment
    removeComment() {
        this._removeElement(this._element);
    }
}
