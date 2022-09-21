import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // function clickHandler() {}
  // const clickHandler = () => {}
        //첫번째 요소는 현재값 / 두번째 요소는 업데이트 값
  //const [title, setTitle] = useState(props.title);//컴포넌트 함수 안에서 호출되어야 함 

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   //title = 'Updated!';
  //   console.log(title);
  // }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount}원</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
