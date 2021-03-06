export async function getCharacters(name, page = 1) {
  let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  if (name) {
    url += `&name=${name}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}

export async function getCharactersByName(name) {
  const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
  const response = await fetch(url);
  const charactername = await response.json();
  return charactername.results;
}

// return data.results; Aus dem response.json geben wir nur den Array "results" mit 20 Objekten (Charakteren) wieder

// getCharacterById wird nicht mehr genutzt

// Um einzelne Charaktere aus dem Array zu ziehen und nicht den gesamten Array abzubilden:
// const topCharacters = data.results.slice(1, 6);
// return topCharacters;
