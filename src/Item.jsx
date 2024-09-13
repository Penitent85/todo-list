import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListCard from './ListCard';

const Item = ( ) => {
 
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

 

  return (
    <div className='container'>
      <div className='form'>
        <div className='todo'>
          <ListCard
              
            completed={item.completed}
            time={item.time}
            title={item.title}
             
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
