import style from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from 'Redux/contactSlice';
import {TiTimes} from "react-icons/ti";
function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={style.item}>
      {name} :  <span >{number}</span>
      <button
        type="button"
        className={style.button}
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
       <TiTimes size='20px'/>
        
      </button>
    </li>
  );
}

export default ContactItem; 