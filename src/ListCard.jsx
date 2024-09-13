import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useNavigate } from 'react-router-dom';

<image
  class='my-svg-alternate'
  width='96'
  height='96'
  src='ppngfallback.png'
/>;

const ListCard = (props) => {
  console.log(props);
  const [completed, setCompleted] = useState(props.completed);
  const { title, time, id, handleDelete } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className='todo-item'>
        <input
          className='checked'
          type='checkbox'
          defaultChecked={completed}
          onClick={(completed) => setCompleted(!completed)}
        />
        {!handleDelete ? null : (
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => handleDelete(id)}
            className='svg'
          />
        )}

        <p className={!props.completed ? 'error' : null}>
          {time === undefined ? 'no time' : time}
        </p>
        <h4 style={{ cursor: 'pointer' }} onClick={handleDelete? () => navigate('/' + id) : null}>
          {title}
        </h4>
      </div>
      {!handleDelete ? (
        <Link className='link' to={'/'}>
          Home
        </Link>
      ) :null}
    </>
  );
};

export default ListCard;
