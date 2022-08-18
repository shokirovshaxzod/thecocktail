import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktail } from '../Redux/Thunk';
import Cocktail from './Cocktail';
import { BeatLoader } from 'react-spinners';

const CocktailList = () => {
  const dispatch = useDispatch();
  const { cocktailList, isLoading } = useSelector((state) => state);
  React.useEffect(() => {
    dispatch(fetchCocktail());
  }, []);
  if (isLoading) {
    return (
      <section className="section cocktail-section">
        <span className="section-title">
          Loading
          <BeatLoader className="loading" size={8} />
        </span>
      </section>
    );
  }
  if (cocktailList.length < 1) {
    return (
      <section className="section">
        <h2 className="section-title">None cocktail</h2>
      </section>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktail</h2>
      <div className="cocktails-center">
        {cocktailList.map((obj) => (
          <Cocktail key={obj.idDrink} {...obj} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
