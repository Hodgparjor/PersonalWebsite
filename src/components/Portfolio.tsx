import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set(['all']));
  
  const categoryTags = ['work', 'personal', 'education'];
  const techTags = ['React', 'TypeScript', 'Node.js']; // Add your tech tags here

  const handleTagClick = (tag: string) => {
    if (tag === 'all') {
      setSelectedTags(new Set(['all']));
    } else {
      const newTags = new Set<string>();
      newTags.add(tag);
      setSelectedTags(newTags);
    }
  };

  const isTagActive = (tag: string) => selectedTags.has(tag);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => handleTagClick('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              isTagActive('all') ? 'bg-accent text-white' : 'bg-primary-light dark:bg-primary-dark'
            }`}
          >
            Show All
          </button>
          {categoryTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                isTagActive(tag) ? 'bg-accent text-white' : 'bg-primary-light dark:bg-primary-dark'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
          {techTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                isTagActive(tag) ? 'bg-accent text-white' : 'bg-primary-light dark:bg-primary-dark'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Filter your projects based on selectedTags here */}
        </div>
      </div>
    </div>
  );
}
