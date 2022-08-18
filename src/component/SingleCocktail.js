import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchSingleCocktail } from '../Redux/Thunk';
import { BeatLoader } from 'react-spinners';
const SingleCocktail = () => {
  const { id } = useParams();
  const { singlCocktail, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    idDrink,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singlCocktail;
  console.log(isLoading);
  React.useEffect(() => {
    dispatch(fetchSingleCocktail(id));
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
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span> {idDrink}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
