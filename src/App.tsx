import React from 'react';
import type { Edzesnaplo_interface } from './interfaces/Edzesnaplo.interface';
import { useState, useEffect } from 'react';

export const App = function () {
  const [edzesnaplok, setEdzesnaplok] = useState<Edzesnaplo_interface[]>([]);

  useEffect(() => {
    
    console.log('test');
    const Readdata = async () => {

      const response = await fetch('http://localhost:3000/workouts');
      const data = await response.json();
      setEdzesnaplok(data);
      console.log(edzesnaplok);
      console.log(data);
    };
    Readdata();
  }, []);

  return (
    <div>
      {edzesnaplok.map(edzesnaplo => (
        <div key={edzesnaplo.id}>
          <h3>{edzesnaplo.name}</h3>
          <p>Duration: {edzesnaplo.duration} minutes</p>
          <p>Date: {new Date(edzesnaplo.date).toLocaleDateString()}</p>
          <p>Completed: {edzesnaplo.completed ? 'Yes' : 'No'}</p>
          <p>Category: {edzesnaplo.category}</p>
          <p>Calories: {edzesnaplo.calories}</p>
        </div>
      ))}
    </div>
  );
};