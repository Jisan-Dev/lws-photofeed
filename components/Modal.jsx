"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  // const onHide = () => modalRef.current.close();
  const onHide = () => router.back();

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      onKeyDown={(e) => e.key === "Escape" && modalRef.current.close()}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md max-w-[1150px] pb-5 px-5">
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image
          src="/xmark.svg"
          alt="close button"
          width={23}
          height={23}
          className="mb-1 border border-teal-800 rounded-md"
        />
      </span>

      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
