import PhotoDetails from "@/components/PhotoDetails";

const PhotoDetailsPage = ({ params: { lang, id } }) => <PhotoDetails id={id} lang={lang} />;

export default PhotoDetailsPage;
