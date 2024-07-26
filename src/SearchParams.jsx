// SearchParams.js
import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import AdoptedPetContext from "./AdoptedPetContext";
import { useBreedList, useAnimals } from "./useAnimalAndBreedList";
import SearchForm from "./SearchForm";
import fetchSearch from "./fetchSearch";

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [breeds] = useBreedList(animal);
  const ANIMALS = useAnimals()[0];
  // eslint-disable-next-line no-unused-vars
  const [adoptedPet, _] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <SearchForm
        setRequestParams={setRequestParams}
        animal={animal}
        setAnimal={setAnimal}
        breeds={breeds}
        adoptedPet={adoptedPet}
        ANIMALS={ANIMALS}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
