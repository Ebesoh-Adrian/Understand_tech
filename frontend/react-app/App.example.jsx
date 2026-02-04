// React App - Basic Setup Example
// frontend/react-app/src/App.jsx

import React, { useState, useEffect } from 'react';
import TermsList from './components/TermsList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import './styles/App.css';

function App() {
  const [terms, setTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTerms();
  }, []);

  const fetchTerms = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/terms`);
      const data = await response.json();
      setTerms(data.results || data);
      setFilteredTerms(data.results || data);
    } catch (error) {
      console.error('Error fetching terms:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterTerms(query, selectedCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterTerms(searchQuery, category);
  };

  const filterTerms = (query, category) => {
    let filtered = terms;

    if (category !== 'all') {
      filtered = filtered.filter(term => term.category === category);
    }

    if (query) {
      filtered = filtered.filter(term =>
        term.name.toLowerCase().includes(query.toLowerCase()) ||
        term.definition.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredTerms(filtered);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Understanding_tech</h1>
        <p>Learn Every Technical Term You Need</p>
      </header>

      <div className="app-controls">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <main className="app-main">
        {loading ? (
          <div className="loading">Loading terms...</div>
        ) : (
          <TermsList terms={filteredTerms} />
        )}
      </main>
    </div>
  );
}

export default App;
