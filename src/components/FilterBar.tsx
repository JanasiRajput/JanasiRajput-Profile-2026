
interface FilterBarProps {
  categories: string[];
  statuses: string[];
  activeCategory: string;
  activeStatus: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
  isTechMode: boolean;
}

export default function FilterBar({ 
  categories, statuses, activeCategory, activeStatus, onCategoryChange, onStatusChange, isTechMode 
}: FilterBarProps) {
  
  const buttonStyle = (isActive: boolean) => ({
    padding: '0.5rem 1rem',
    background: isActive ? (isTechMode ? 'rgba(0, 243, 255, 0.1)' : 'var(--primary-pink)') : 'transparent',
    color: isActive ? (isTechMode ? 'var(--primary-cyan)' : 'white') : 'var(--text-muted)',
    border: `1px solid ${isActive ? (isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)') : 'var(--glass-border)'}`,
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: isTechMode ? 'normal' : (isActive ? '600' : '400'),
    transition: 'all 0.2s ease',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
      
      {/* Category Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <span className={isTechMode ? "tech-font" : ""} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {isTechMode ? '> CATEGORY_FILTER:' : 'Category:'}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            className={isTechMode ? "tech-font" : ""} 
            style={buttonStyle(activeCategory === 'All')} 
            onClick={() => onCategoryChange('All')}
          >
            All
          </button>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={isTechMode ? "tech-font" : ""} 
              style={buttonStyle(activeCategory === cat)} 
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <span className={isTechMode ? "tech-font" : ""} style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {isTechMode ? '> STATUS_FILTER:' : 'Status:'}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            className={isTechMode ? "tech-font" : ""} 
            style={buttonStyle(activeStatus === 'All')} 
            onClick={() => onStatusChange('All')}
          >
            All
          </button>
          {statuses.map(stat => (
            <button 
              key={stat} 
              className={isTechMode ? "tech-font" : ""} 
              style={buttonStyle(activeStatus === stat)} 
              onClick={() => onStatusChange(stat)}
            >
              {stat}
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}
