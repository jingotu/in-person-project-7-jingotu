import { createContext, useState, useContext, useEffect } from 'react';

const ProjectsContext = createContext();

// Custom hook for using projects
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within ProjectsProvider');
  }
  return context;
};

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects once on mount
  useEffect(() => {
    let isCancelled = false;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('http://localhost:3001/projects');
        if (!response.ok) {
          throw new Error(`HTTP error, status ${response.status}`);
        }
        const data = await response.json();
        if (!isCancelled) {
          setProjects(data);
          setLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchProjects();

    // Cleanup: ignore results that arrive after unmount
    return () => {
      isCancelled = true;
    };
  }, []);

  // TODO: Create addProject function
  // const addProject = async (projectData) => {
  //   try {
  //     // POST request to API
  //     // Update local state on success
  //   } catch (error) {
  //     // Handle error
  //   }
  // };

  // TODO: Create updateProject function
  // const updateProject = async (id, updates) => {
  //   // PUT request to API
  //   // Update local state
  // };

  // TODO: Create deleteProject function
  // const deleteProject = async (id) => {
  //   // DELETE request to API
  //   // Update local state
  // };

  const value = { projects, loading, error };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};