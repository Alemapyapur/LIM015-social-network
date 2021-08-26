import { sharePost, deleteLikeDb, addLikeDb } from '../firebase/data-base.js';
import { currentUser } from '../firebase/autenticacion.js';

export const addPost = (e) => {
  e.preventDefault();
  const post = document.getElementById('textPost').value;
  const privacy = document.getElementById('choosePrivacy').value;
  const user = currentUser();
  const Photo = currentUser().photoURL;

  if (post !== '') {
    sharePost(post, user.email, user.displayName, user.uid, privacy, Photo)
      .then(() => {
        document.getElementById('textPost').value = '';
        console.log('se agrego el post');
      }).catch((error) => {
        console.log('Su post no se pudo agregar', error);
      });
  } else {
    alert('Ingrese su post');
  }
};

// likes
export const deleteLikePost = (idPost) => {
  deleteLikeDb(currentUser().uid, idPost)
    .then(() => {
    });
};

export const addLike = (idPost) => {
  addLikeDb(currentUser().uid, idPost, currentUser().email)
    .then(() => {
    });
};
