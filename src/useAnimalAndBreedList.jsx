import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import fetchAnimals from "./fetchAnimals";

export function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}

export function useAnimals() {
  const results = useQuery(["animals"], fetchAnimals);
  console.log(results);
  console.log(results?.data);
  console.log(results?.data?.animals);

  return [results?.data?.animals ?? [], results.status];
}
