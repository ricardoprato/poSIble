export const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/lang/spa");
  const json = await res.json();
  return json;
};
