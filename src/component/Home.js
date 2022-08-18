import React from 'react';
import CocktailList from './CocktailList';
import SearchForm from './SearchForm';
export default function Home() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
}
