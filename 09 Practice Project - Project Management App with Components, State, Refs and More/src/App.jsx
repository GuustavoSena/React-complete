import { useState, useRef } from "react";

import Aside from "./Components/Aside";
import Form from "./Components/Form";
import NoProject from "./Components/NoProject";
import ProjectDetail from "./Components/ProjectDetail";

function App() {
  // Estado para gerenciar a visualização atual ('noProject', 'form', 'projectDetail')
  const [view, setView] = useState("noProject");

  // Estado para gerenciar a lista de projetos
  const [projectsList, setProjectsList] = useState([]);

  // Estado para gerenciar o índice do projeto selecionado
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(-1); // Índice do projeto selecionado

  // Função para mudar a visualização com base na string passada
  function changeView(goingView) {
    switch (goingView) {
      case "noProject":
      case "form":
      case "projectDetail":
        setView(goingView);
        break;
      default:
        setView("noProject");
    }
  }

  // Função para salvar um novo projeto
  function handleSave(title, description, dueDate) {
    setProjectsList((prevProjectsList) => [
      ...prevProjectsList,
      { id: Date.now(), title, description, dueDate },
    ]);
    setView("noProject");
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Aside
          projectDetailView={() => changeView("projectDetail")}
          projectsList={projectsList}
          onAddProject={() => changeView("form")}
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
          view={view}
        ></Aside>
        {view === "noProject" ? (
          <NoProject onCreateNewProject={() => changeView("form")} />
        ) : view === "form" ? (
          <Form onSave={handleSave} onCancel={() => changeView("noProject")} />
        ) : (
          <ProjectDetail
            project={projectsList[selectedProjectIndex]}
            setProjectsList={setProjectsList}
            setView={setView}
          />
        )}
      </main>
    </>
  );
}

export default App;
