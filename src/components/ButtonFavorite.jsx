import React, { useState, useEffect } from 'react';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ButtonFavorite() {
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

  return (
    <input
      type="image"
      src={ favIcon }
      alt="Favorite Icon"
      onClick={ () => handleFav() }
      data-testid="favorite-btn"
    />

  );
}

export default ButtonFavorite;
