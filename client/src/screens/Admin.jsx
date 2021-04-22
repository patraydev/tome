import {useState,useEffect } from "react";

function Admin({currentUser, cocktails}) {
const [pending, setPending] = useState(null);

  useEffect(() => {
    const programCocktails = cocktails.filter(cocktail => cocktail.program = currentUser.program);
    const toDo = programCocktails.filter(cocktail => cocktail.pending === true);
    setPending(toDo);
},[cocktails, currentUser]);

  return (
    <div className='pending-main'>
    <h1>Pending Requests</h1>
      <div className='pending-container'>
        {pending && pending.map((cocktail) => (
          <div className='pending-item'>{cocktail.name}</div>
        ))}
    </div>
    </div>
);
};

export default Admin