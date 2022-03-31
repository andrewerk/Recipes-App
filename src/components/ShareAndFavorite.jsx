import React, { useState, useEffect } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ShareAndFavorite() {
  const [favorite, setFavorite] = useState(false);
  const [favIcon, setFavIcon] = useState(whiteHeartIcon);

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
    console.log('handleShare');
  };
  return (
    <>
      <input
        type="image"
        src={ shareIcon }
        alt="Share icon"
        onClick={ () => handleShare() }
      />
      <input
        type="image"
        src={ favIcon }
        alt="Favorite Icon"
        onClick={ () => handleFav() }
      />
    </>

  );
}

export default ShareAndFavorite;
