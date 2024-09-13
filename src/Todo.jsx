import { Children, useEffect, useState } from 'react';
import ListCard from './ListCard';
import axios from 'axios';
import { toast } from 'react-toastify';

const Todo = () => {
  const [title, setTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );
        setList(response.data.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    toast('deleted successfully', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast('cannot be empty !!!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    let idr;
    if (list.length === 0) idr = 1;
    else idr = list[list.length - 1].id + 1;
    const newItem = {
      id: idr,
      title: title,
      completed: false,
      time: new Date().toISOString().slice(0, 10),
    };
    setList([...list, newItem]);
    setTitle('');
    toast('added successfully', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
        onCopy={()=>toast('copied successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })}
        onPaste={()=>toast('pasted successfully', {
          position: 'top-right',  
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })}

          onChange={(e) => setTitle(e.target.value)}
          className='input'
          type='text'
          value={title}
          placeholder='Add a new task'
        />
        <button className='btn' type='submit'>
          Add
        </button>
      </form>
      <div className='todo'>
        {list.map((item) => (
          <ListCard
            key={item.id}
            id={item.id}
            completed={item.completed}
            time={item.time}
            title={item.title}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
