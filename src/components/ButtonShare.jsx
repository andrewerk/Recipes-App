// import React, { useState, useContext } from 'react';
// import shareIcon from '../images/shareIcon.svg';
// import RecipesContext from '../context/RecipesContext';

// function ButtonShare() {
//   const [copyAlert, setCopyAlert] = useState(false);
//   const { clipboard } = useContext(RecipesContext);

//   const handleShare = () => {
//     // pegar o link da receita e copiar pro clipboard
//     const copyLink = `http://localhost:3000${clipboard}`;
//     navigator.clipboard.writeText(copyLink);
//     setCopyAlert(true);
//   };
//   return (
//     <>
//       <input
//         type="image"
//         src={ shareIcon }
//         alt="Share icon"
//         onClick={ () => handleShare() }
//         data-testid="share-btn"
//       />
//       {copyAlert && <p>Link copied!</p>}
//     </>

//   );
// }

// export default ButtonShare;
