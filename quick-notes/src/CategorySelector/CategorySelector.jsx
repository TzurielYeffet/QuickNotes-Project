import "./CategorySelector.css"

 export const CATEGORIES = {
        personal: {
          label: "Personal",
          color: "#E3F2FD", 
          borderColor: "#2196F3",
          textColor: "#1565C0", 
        },
        work: {
          label: "Work",
          color: "#F3E5F5", 
          borderColor: "#9C27B0", 
          textColor: "#7B1FA2", 
        },
        study: {
          label: "Study",
          color: "#E8F5E8", 
          borderColor: "#4CAF50", 
          textColor: "#2E7D32", 
        },
        ideas: {
          label: "Ideas",
          color: "#FFF3E0", 
          borderColor: "#FF9800", 
          textColor: "#E65100",
        },
        shopping: {
          label: "Shopping",
          color: "#FCE4EC", 
          borderColor: "#E91E63", 
          textColor: "#C2185B",
        },
        travel: {
          label: "Travel",
          color: "#E0F2F1", 
          borderColor: "#009688", 
          textColor: "#00695C", 
            },
        health: {
          label: "Health",
          color: "#FFEBEE", 
          borderColor: "#F44336", 
          textColor: "#C62828", 
        },
        finance: {
          label: "Finance",
          color: "#F1F8E9",
          borderColor: "#8BC34A",
          textColor: "#558B2F",
        },
      };
export function CategorySelector  ({ selectedCategory, onCategoryChange, showLabel = true }) {
    
    
  return (
    <div className="category-selector">
      {showLabel && (
        <label className="category-label">
            Category
        </label>
      )}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="category-select"
      >
        {Object.entries(CATEGORIES).map(([key, category]) => (
          <option key={key} value={key}>
            {category.label}
          </option>
        ))}
      </select>
      
      {/* Category Preview */}
      <div 
        className="category-preview"
        style={{
          backgroundColor: CATEGORIES[selectedCategory].color,
          borderColor: CATEGORIES[selectedCategory].borderColor,
          color: CATEGORIES[selectedCategory].textColor
        }}
      >
        {CATEGORIES[selectedCategory].label}
      </div>
    </div>
  );
};