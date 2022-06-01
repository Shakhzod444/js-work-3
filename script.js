let name = prompt('Как вас зовут ?').trim()
name = name.toLowerCase()

if (name === 'alex') {
   let code = +prompt('Номер счета ?')

   if (code === 7777)  {
      let money = alert('Ваш баланс  ' + 10000 + '$')
      money === 10000
      let cash = prompt('Сколько обналичить ?')

      if (cash <= 10000)
      
      {
         alert('Все отлично ')
         alert('Вы сняли ' + cash +' $ ')
         alert('Осталось средств ' + ( 10000 - cash) + '$')

      }else {
         alert('Недостаочно средств'  )
         } 
   }else {
      alert('Пользователь не найден, покидос ')
   }
   
}else {
   alert('Пользователь не найден, досвидули ')
}




let nameTwo = prompt('Как вас зовут?').trim()
name = name.toLowerCase()

if(nameTwo[0] === 'a') {
   let age = prompt('сколько вам лет ?')

   if(age >=20 && age <=40  ) {
      let moneyClub = prompt('Сколько у вас на кармане денег ?')

      if(moneyClub >100 )  {
         let people = prompt('Вас сколько ?')

         if(people <=5) { 
            alert('Добро пожаловать !')
         } else {
            alert('Вас много !')
         }
      } else {
            alert('У вас мало денег ! ')
         }
   }  else {
      alert(' Ваш возраст не подходит ! ')
    }
}else {
   alert('Ваше имя не подходит ! ')
} 