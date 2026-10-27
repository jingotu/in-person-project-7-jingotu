import { useState } from 'react';
import { useProjects } from '../context/ProjectsContext';

const initialFormData = {
  title: '',
  description: '',
  category: 'research',
  imageUrl: 'https://placehold.co/600x400?text=New+Project',
  technologies: []
};

const ProjectForm = () => {
  const { addProject } = useProjects();

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.title.trim() === '') {
      setError('Title is required');
      return;
    }

    try {
      setIsSubmitting(true);
      setError('');
      await addProject(formData);
      setFormData(initialFormData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>Add a Project</h3>

      <div className="form-group">
        <label htmlFor="project-title">Title</label>
        <input
          type="text"
          id="project-title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={error ? 'error' : ''}
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          name="description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          disabled={isSubmitting}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="project-category">Category</label>
        <select
          id="project-category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          disabled={isSubmitting}
        >
          <option value="research">Research</option>
          <option value="healthtech">Healthtech</option>
          <option value="simulation">Simulation</option>
        </select>
      </div>

      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Add Project'}
      </button>
    </form>
  );
};

export default ProjectForm;
