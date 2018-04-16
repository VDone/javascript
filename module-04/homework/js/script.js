  // Есть массив logins с логинами пользователей.
  // const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
  
  // Написать функцию, addLogin(login) которая:
  //   1) Получает новый логин как аргумент
    
  //   2) Проверить валидность логина используя вспомогательную функцию checkLoginValidity(login), которая проверяет количество символов логина и возвращает true если логин подходит под условие длины от 4-х до 16-ти включительно, и false если не подходит.
  
  //   3) Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'.
  
  //   4) Если логин валиден, проверить уникальность логина с помощью функции checkIfLoginExists(login), которая проверяет наличие логина в массиве logins, возвращая false если такого логина в массиве еще нет, и true если есть.
       
  //    5) Если checkIfLoginExists вернет false, добавить новый логин в logins. Если checkIfLoginExists вернет true, тогда addLogin не добавляет логин в массив и возвращает строку 'Такой логин уже используется!'.
  const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
  function addLogin(login) {
    login = prompt('Введите логин. Логин должен быть от 4 до 16 символов')
    function checkLoginValidity() {
      if (login.length >= 4 && login.length <= 16) {
        function checkIfLoginExists() {
          for (let i = 0; i < logins.length; i++) {
            if (!logins.includes(login)){
              logins.push(login);
              alert('Ваш логин уникален. Спасибо за регистрацию!');
              return;
            } else {
              alert('Такой логин уже используется! Нажмите F5 и повторите попытку.');
              return;
            }
          }
        }
      } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return; 
      } checkIfLoginExists();
    } checkLoginValidity(); 
  }
  addLogin();
  console.log(logins);
  