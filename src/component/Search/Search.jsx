import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState("");
  const foodItems = [
    "Pizza",
    "Burger",
    "Pasta",
    "Salad",
    "Sushi",
    "Tacos",
    "Sandwich",
    "Ice Cream",
    "Steak",
    "Fries",  ];

  const filteredItems = foodItems.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search food..."
        className="border p-4  w-300 rounded-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="mt-4">
        {filteredItems.length ? (
          filteredItems.map((item, index) => (
            <div key={index} className="p-2 bg-white-100 mt-2 rounded">{item}</div>
          ))
        ) : (
          <p>No food found</p>
        )}
      </div>
    </div>
  );
}
