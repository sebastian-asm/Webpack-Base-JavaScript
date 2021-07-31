const API = process.env.API;

const getData = async () => {
  const id = Math.floor(Math.random() * 671);
  const urlApi = `${API}/${id}`;

  try {
    const resp = await fetch(urlApi);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log('Fetch error', error);
  }
};

export default getData;
