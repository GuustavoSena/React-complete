import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// Componente de modal que indica inputs inválidos
// Utiliza forwardRef para permitir o uso de referências externas
const InvalidInputModal = forwardRef(function InvalidInputModal(props, ref) {
  const dialog = useRef();

  // Uso de useImperativeHandle para definir quais métodos serão expostos
  useImperativeHandle(ref, () => {
    return {
      // Método open() para abrir o dialog
      open() {
        dialog.current.showModal();
      },
    };
  });

  // Renderização do componente utilizando createPortal para renderizar o dialog em um elemento DOM específico
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-4">
        Oops ... looks like you forgot to enter a value.
      </p>
      <p className="text-stone-600 mb-4">
        Please make sure you provide a valid value for every input field.
      </p>
      <form method="dialog" className="mt-4 text-right">
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          Okay
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root") // Elemento DOM onde o dialog será inserido
  );
});

export default InvalidInputModal;
