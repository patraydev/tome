import axios from 'axios';
import { config } from "../services";
import { useEffect, useState } from "react";

import './CockForm.css'; 

function CockForm(props) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [ingredients, setIngredients] = useState(["", "", ""]);
  const [bottom, setBottom] = useState("");
  const [rinse, setRinse] = useState("");
  const [glass, setGlass] = useState("");
  const [ice, setIce] = useState("");
  const [garnish, setGarnish] = useState("");
  const [method, setMethod] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (ingredients.length === 0) {
      setIngredients(["","",""]);
    }
  }, [ingredients]);

  const modifyIngredient = (e, i) => {
    setIngredients((currIngredients) =>
      currIngredients.map((ing, index) => (index === i ? e.target.value : ing))
    );
  };

  const removeIngredient = (i) => {
    setIngredients((currIngredients) =>
      currIngredients.filter((ing, index) => index !== i)
    );
  };

  useEffect(() => {
    if (props.record) {
      setName(props.record.name);
      setAuthor(props.record.author);
      setIngredients(props.record.ingredients);
      setBottom(props.record.bottom);
      setRinse(props.record.rinse);
      setGlass(props.record.glass);
      setIce(props.record.ice);
      setGarnish(props.record.garnish);
      setMethod(props.record.method);
      setDescription(props.record.description);
    }
  }, [props.record]);


  const clearInputs = () => {
    setName('');
    setAuthor('');
    setIngredients(['', '', '']);
    setBottom('');
    setRinse('');
    setGlass('');
    setIce('');
    setGarnish('');
    setMethod('');
    setDescription('');
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      const obj = {
        name,
        author,
        ingredients,
        bottom,
        rinse,
        glass,
        ice,
        garnish,
        method,
        description,
      };
      const fields = { JSONstring: JSON.stringify(obj) };

      if (!props.editMode) {
        //write new cocktail & disappear dropped lines
        try {
          await axios.post(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Beautiful`, { fields }, config)
            .then(clearInputs());
        } catch (error) {
          console.log(error);
        }
        props.setLast(obj);
        props.setToggle((tog) => !tog);
        props.dragged.forEach((el) => el.style.display = 'none');
        props.setDragged([]);


      } else {
        try {
          //edit existing
          const target = props.beautifulDict.find(el => el[0].name === props.record.name)
          
          await axios.put(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Beautiful/${target[1].id}`, {fields}, config)
            .then(clearInputs());
        } catch (error) {
          console.log(error);
        }
        props.setToggle((tog) => !tog)
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const droppedItem = event.dataTransfer.getData("content");
    event.target.value = droppedItem;
    const newEvent = new Event('input', { bubbles: true });
    event.target.dispatchEvent(newEvent);
}


  return (
    <div className='form-container' onDragOver={handleDragOver} onDrop={ handleDrop}>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onInput={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
      <label>Author:</label>
      <input
        type="text"
        value={author}
        onInput={(e) => setAuthor(e.target.value)}
          />
        </div>
      {/* Soleil's code for ingredients map! Thanks~ */}
      {ingredients.map((ing, index) => (
        <div key={index} className='form-row'>
          <label>Ingredient {index + 1}: </label>
          <input
            type="text"
            value={ing}
            onInput={(e) => modifyIngredient(e, index)}
          />
          <button type='button' onClick={() => removeIngredient(index)}>-</button>
        </div>
      ))}
          <div className='form-row'>
      <button type="button" onClick={() => setIngredients((curr) => [...curr, ""])}>
              add ingredient
      </button>
        </div>
        <div className='form-row'>
      <label>Bottom:</label>
      <input
        type="text"
        value={bottom}
        onInput={(e) => setBottom(e.target.value)}
          />
          </div>
      <div className='form-row'>
      <label>Rinse:</label>
      <input
        type="text"
        value={rinse}
        onInput={(e) => setRinse(e.target.value)}
          />
          </div>
          <div className='form-row'>
      <label>Glass:</label>
      <input
        type="text"
        value={glass}
        onInput={(e) => setGlass(e.target.value)}
            />
            </div>
          <div className='form-row'>
      <label>Ice:</label>
            <input type="text" value={ice} onInput={(e) => setIce(e.target.value)} />
            </div>
          <div className='form-row'>
      <label>Garnish:</label>
      <input
        type="text"
        value={garnish}
        onInput={(e) => setGarnish(e.target.value)}
            />
            </div>
          <div className='form-row'>
      <label>Method:</label>
      <textarea
        type="textarea"
        value={method}
        onInput={(e) => setMethod(e.target.value)}
            />
        </div>
        <div className='form-row'>
      <label>Description:</label>
      <textarea
            type="textarea"
        value={description}
        onInput={(e) => setDescription(e.target.value)}
            />
            </div>
          <div className='form-row'>
          <button type="submit">{props.editMode ? 'edit' : 'write'}</button>
            </div>
      </form>
      </div>
  );
}
export default CockForm;
