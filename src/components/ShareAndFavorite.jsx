import React, { useState, useEffect, useContext } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import RecipesContext from '../context/RecipesContext';

function ShareAndFavorite() {
  const [favorite, setFavorite] = useState(false);
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);
  const [copyAlert, setCopyAlert] = useState(false);
  const { clipboard } = useContext(RecipesContext);

  useEffect(() => {
    if (favorite) {
      setFavIcon(blackHeartIcon);
    } else setFavIcon(whiteHeartIcon);
  }, [favorite]);

  const handleFav = () => {
    setFavorite(!favorite);
  };

  const handleShare = () => {
    // pegar o link da receita e copiar pro clipboard
    const copyLink = `http://localhost:3000${clipboard}`;
    navigator.clipboard.writeText(copyLink);
    setCopyAlert(true);
  };
  return (
    <>
      <input
        type="image"
        src={ shareIcon }
        alt="Share icon"
        onClick={ () => handleShare() }
        data-testid="share-btn"
      />
      <input
        type="image"
        src={ favIcon }
        alt="Favorite Icon"
        onClick={ () => handleFav() }
        data-testid="favorite-btn"
      />
      {copyAlert && <p>Link copied!</p>}
    </>

  );
}

export default ShareAndFavorite;
