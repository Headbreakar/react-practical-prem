import React, { useEffect, useState } from "react";

const LocalStorageCRUD = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingInput, setEditingInput] = useState("");

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!input.trim()) return;

    const newItem = { id: Date.now(), name: input.trim() };
    setItems([...items, newItem]);
    setInput("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const startEditing = (id, currentName) => {
    setEditingId(id);
    setEditingInput(currentName);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditingInput("");
  };

  const updateItem = (id) => {
    if (!editingInput.trim()) return;
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: editingInput.trim() } : item
    );
    setItems(updatedItems);
    setEditingId(null);
    setEditingInput("");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Create Read Update Delete</h1>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new item"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addItem} className="btn btn-success">
              Add Item
            </button>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {items.length > 0 ? (
            <ul className="list-group">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {editingId === item.id ? (
                    <>
                      <input
                        type="text"
                        className="form-control me-2"
                        value={editingInput}
                        onChange={(e) => setEditingInput(e.target.value)}
                      />
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => updateItem(item.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={cancelEditing}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <span>{item.name}</span>
                      <div>
                        <button
                          className="btn btn-warning me-2"
                          onClick={() => startEditing(item.id, item.name)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteItem(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">No items yet. Add one above!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocalStorageCRUD;
