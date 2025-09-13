import PhotoList from "@/components/PhotoList";

export default async function Home({ params: { lang } }) {
  const response = await fetch("http://localhost:3000/api/photos");
  const photos = await response.json();

  console.log(photos);
  return <PhotoList photos={photos} />;
}
