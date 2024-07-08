import { useState, useRef } from "react";

export default function ProjectDetail({ project, setProjectsList, setView }) {
  // Estado para gerenciar a lista de tarefas
  const [tasksList, setTasksList] = useState([]);
  const task = useRef(); // Referência ao input de tarefa

  // Função para adicionar uma nova tarefa
  function onAddTask() {
    const taskValue = task.current.value;
    if (taskValue !== "") {
      setTasksList((prev) => [taskValue, ...prev]);
      task.current.value = ""; // Limpa o input após adicionar a tarefa
    }
  }

  // Função para remover uma tarefa pelo índice
  function onClearTask(index) {
    setTasksList((prev) => prev.filter((_, i) => i !== index));
  }

  // Função para remover o projeto atual
  function onClearProject() {
    setProjectsList((prev) => prev.filter((p) => p.id !== project.id));
    setView("noProject");
  }

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onClearProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center gap-4">
          <input
            ref={task}
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
          <button
            onClick={onAddTask}
            className="text-stone-700 hover:text-stone-950"
          >
            Add Task
          </button>
        </div>
        {tasksList.length === 0 ? (
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet.
          </p>
        ) : (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasksList.map((task, index) => (
              <li key={index} className="flex justify-between my-4">
                <span>{task}</span>
                <button
                  onClick={() => onClearTask(index)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
