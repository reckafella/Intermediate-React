const fetchAnimals = async () => {
  const apiResponse = await fetch(`https://pets-v2.dev-apis.com/animals`);

  if (!apiResponse.ok) {
    throw new Error(`fetch animals not ok`);
  }
  return apiResponse.json();
};

export default fetchAnimals;
