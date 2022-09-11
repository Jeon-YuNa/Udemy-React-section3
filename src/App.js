import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "퍼스널컬러",
      amount: '60,000',
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "캠핑장 숯불&모닥불", amount: '35,000', date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "캠핑장 숙박비",
      amount: '90,000',
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "차 렌트비",
      amount: '100,000',
      date: new Date(2021, 5, 12),
    },
  ];

// return React.createElement(
//   'div',
//   {},
//   React.createElement('h2', {}, "Let's get started!"),
//   React.createElement(Expenses, {items: expenses})
// ); 리엑트가 뒤에서 처리하는 코드
// import React from 'react'; = 예전에는 JSX코드를 갖고있는 모든파일에 임포트 해야했지만 지금은 없어도 구동되도록 함

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
