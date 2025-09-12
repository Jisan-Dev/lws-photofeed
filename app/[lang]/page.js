import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return <h1>{dictionary.uploadedOn}</h1>;
}
