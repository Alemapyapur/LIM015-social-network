export const sharingCommet = () => {
//   const time = new Date(data.timePost.toDate());
  const sectionComment = document.createElement('section');
  const template = `

        `;

  sectionComment.innerHTML = template;
  sectionComment.setAttribute('class', 'contenedor-comment');

  return sectionComment;
};
