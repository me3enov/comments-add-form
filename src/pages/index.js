import uuid from 'uuid/v4';
import './main.global.sass';
import { Section } from '../components/Section';
import { Comment } from '../components/Comment';
import { PopupWithForm } from '../components/PopupWithForm';
import { FormCommentsAdd } from '../components/FormCommentsAdd';
import { formatDate } from '../untils/formatDate';
import { setLike, removeLike } from '../untils/liked';
import { FormValidator } from '../components/FormValidator';
import { PopupWithConfirm } from '../components/PopupWithConfirm';

const user = {
  id: uuid()
};

let userDataResult = {};
const userDataDefault = {
  name: 'Guest',
  date: new Date()
};

const buttonEditProfile = document.querySelector('.comments-add-form__user-button');
const headerTitle = document.querySelector('.header__title');
const footerCopyright = document.querySelector('.footer__copyright');

const getAllComments = () => Array.from(document.querySelectorAll('.comments__item'));
const setCommentsCounts = () =>
  getAllComments().length < 2
    ? getAllComments().length === 0
      ? 'Comments'
      : `${getAllComments().length} Comment`
    : `${getAllComments().length} Comments`;
const getUserData = () =>
  Object.keys(userDataResult).length === 0 ? userDataDefault : userDataResult;
footerCopyright.textContent = `${new Date().getFullYear()} Artem Mezenov`;

//if click to bin
function handleBinClick(comment) {
  popupConfirm.open(comment);
}

//all comments init
const comments = new Section(
  {
    renderer: (item) => {
      //create comment
      const comment = createComment(item);
      //add comment to the page
      comments.addItem(comment, 'append');
    }
  },
  '.comments__list'
);

//create new comment
const createComment = (commentData) => {
  const comment = new Comment(commentData, user.id, formatDate, {
    handleBinClick,
    handleLikeClick: (commentData) => {
      const isLiked = comment.isLiked()
        ? removeLike(commentData, user.id)
        : setLike(commentData, user.id);
      comment.setLikes(isLiked);
    }
  });
  return comment.generateComment();
};

//add post form submit
function addComment(commentData, form) {
  const comment = createComment(commentData);
  comments.addItem(comment, 'prepend');
  headerTitle.textContent = setCommentsCounts();
  form.reset();
  commentsAddForm.clearValidation();
}

//remove comment submit
function removeComment(commentToRemove) {
  commentToRemove.removeComment();
  popupConfirm.close();
  headerTitle.textContent = setCommentsCounts();
}

//edit profile form submit auth
function editProfile(data) {
  popupEditUser.close();
  formCommentsAdd.setUserInfo(data);
  userDataResult = data;
}

//popupEdit init
const popupEditUser = new PopupWithForm({
  selector: '.popup_auth',
  submit: editProfile
});
popupEditUser.setEventListeners();

//popupRemove init
const popupConfirm = new PopupWithConfirm({
  selector: '.popup_remove',
  submit: removeComment
});
popupConfirm.setEventListeners();

//form add comments init
const formCommentsAdd = new FormCommentsAdd({
  selector: '.comments-add-form__form',
  submit: addComment,
  getUserData,
  ownerId: user.id,
  uuid
});
formCommentsAdd.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  popupEditUser.open();
  formEditProfile.clearValidation();
});

//ENABLE FORMS VALIDATION START
//enable validation comments add form
const commentsAddForm = new FormValidator({
  selector: '.comments-add-form__form'
});
commentsAddForm.enableValidation();

//enable validation edit profile form
const formEditProfile = new FormValidator({
  selector: '.form_auth'
});
formEditProfile.enableValidation();

//ENABLE FORMS VALIDATION END
// FUNCTION END
