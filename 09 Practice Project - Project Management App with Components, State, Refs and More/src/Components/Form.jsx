import { useRef } from "react";
import InvalidInputModal from "./InvalidInputModal";

export default function Form({ onCancel, onSave }) {
  // Referências para os inputs do formulário
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const dialog = useRef();

  // Função para validar os inputs do formulário
  const isValidInput = () => {
    return (
      titleRef.current.value &&
      descriptionRef.current.value &&
      dueDateRef.current.value
    );
  };

  return (
    <>
      <InvalidInputModal ref={dialog} />
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                if (isValidInput()) {
                  onSave(
                    titleRef.current.value,
                    descriptionRef.current.value,
                    dueDateRef.current.value
                  );
                } else {
                  dialog.current.open();
                }
              }}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              Title
            </label>
            <input
              ref={titleRef}
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              type="text"
            />
          </p>
          <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              Description
            </label>
            <textarea
              ref={descriptionRef}
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              type="text"
            ></textarea>
          </p>
          <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
              Due Date
            </label>
            <input
              ref={dueDateRef}
              className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              type="date"
            />
          </p>
        </div>
      </div>
    </>
  );
}
