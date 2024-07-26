async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const apiResponse = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`
  );

  if (!apiResponse.ok) {
    throw new Error(
      `Pet search not ok Animal: ${animal}, Breed: ${breed}, Location: ${location}`
    );
  }

  return apiResponse.json();
}

export default fetchSearch;
