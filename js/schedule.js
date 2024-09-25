const weekDays = ['日', '一', '二', '三', '四', '五', '六']
document
  .querySelector('#gSchedule')
  .addEventListener('click', e => {
    const start = new Date(2024, 8, 25);
    const end = new Date(2024, 9, 25);
    const divDates = document.querySelector('#dates');
    
    while(start <= end) {
      let current = new Date(start);
      let row = document.createElement('div');
      if (start.getFullYear() != end.getFullYear()) row.textContent += `${current.getFullYear()}年`;
      row.textContent += `${current.getMonth() + 1}月${current.getDate()}日 星期${weekDays[current.getDay()]}`;
      console.log(current)
      divDates.append(row)
      start.setDate(start.getDate() + 1);
    }
  })
