import './App.css';
import { useState } from 'react'
import deleteKey from './assets/img/delete_key.svg'




function App() {
  let [input, setInput] = useState('');

  const equalTrigger = () => {
    // Если складываем числа с плавающей запятой
    if (input.includes(",")) {
  
      // Преобразуем строку в массив
      input = input.split('')
      for (let i = 0; i < input.length; i++) {
  
        // Меняем запятую на точку
        if (input[i] === ',') {
          input[i] = '.'
        }
      }
  
      setInput(String(eval(input.join('')).toFixed(4)))
    }
    else {
      setInput(
        String(eval(input)).length > 3 &&
        String(eval(input)).includes(".")
        ? String(eval(input).toFixed(4))
        : String(eval(input))
      )
    }
  }

  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, ",", 0, "="].forEach((item) => {
    if (item === '=') {
      calcBtns.push(
        <button
          onClick={() => {equalTrigger()}}
          value="="
          key={item}
        >
          =
        </button>
      )
    } else {
      calcBtns.push(
        <button
          onClick={(e) => {
            setInput(input + e.target.value);
          }}
          value={item}
          key={item}
        >
          {" "}
          {item}
        </button>
      );
    }

  });


  return (
    <div className="Calculator">
      <div className="calculator__wrapper">

        <div className='calculator__result'>
          {/* Вывод результата */}
          {input}
        </div>

        <div className='calculator__buttons-wrapper'>
          <div className='calculator__top-btns flex'>

            {/* Сброс всего */}
            <button onClick={() => setInput("")} value="">
              AC
            </button>

            {/* Инвертирование числа */}
            <button onClick={() => setInput(-input)} value="">
              +/-
            </button>

            {/* Процент от числа */}
            <button onClick={() => setInput(input / 100)} value="%">
              %
            </button>

            {/* Удаление последнего символа */}
            <button onClick={() => setInput(input.substr(0, input.length - 1))} className='delete-btn'>
              <img src={deleteKey}></img>
            </button>

          </div>
          <div className='calculator__digits-wrapper flex'>
            {calcBtns}
          </div>

          <div className='calculator__modifiers-wrapper flex'>

            {/* Деление */}
            <button onClick={(e) => setInput(input + e.target.value)} value="/" className='division-btn'>
              {" "}
              ÷
            </button>

            {/* Умножение */}
            <button onClick={(e) => setInput(input + e.target.value)} value="*">
              {" "}
              Х
            </button>

            {/* Вычитание */}
            <button onClick={(e) => setInput(input + e.target.value)} value="-">
              {" "}
              -{" "}
            </button>

            {/* Сложение */}
            <button onClick={(e) => setInput(input + e.target.value)} value="+">
              +
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
