import React, {useState} from "react";

function CategoryFilter({categories, onCategoryButtonClick}) {
  const freshButtonObj = {};
  categories.forEach((obj) => freshButtonObj[obj] = false);

  const [selectedButtonObj, setSelectedButtonObj] = useState(freshButtonObj);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button 
          className={selectedButtonObj[category]? "selected" : ""}
          onClick={e => {
            onCategoryButtonClick(category)
            setSelectedButtonObj((selectedButtonObj) => {
              return {
                ...freshButtonObj,
                [category]: true
              }
            });
          }}
          key={category}
          >{category}
          </button>
        );
      })}
    </div>
  );
}


export default CategoryFilter;
