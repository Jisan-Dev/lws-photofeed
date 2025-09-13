import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

const PhotoModal = ({ params: { lang, id } }) => {
  return (
    <Modal>
      <PhotoDetails lang={lang} id={id} />
    </Modal>
  );
};

export default PhotoModal;
