const weekDays = ['日', '一', '二', '三', '四', '五', '六']
let schedule = {}
let positionHeader = false

const genPositions = (row) => {
  const positions = ['柜台', '业务经理', '厅堂', '休息']
  if (!positionHeader) { // 初次生成岗位标题
    const divPos = document.querySelector('#positions');
    positions.forEach(e => {
      const column = document.createElement('div');
      column.classList.add('column')
      column.textContent = e;
      divPos.appendChild(column)
    })
    positionHeader = true;
  }

  positions.forEach(() => {
    const column = document.createElement('div');
    column.classList.add('column')
    row.appendChild(column);

    const level = document.createElement('div');
    level.classList.add('level', 'input')
    column.appendChild(level);
    
    const levelLeft = document.createElement('div');
    levelLeft.classList.add('level-left')
    const levelRight = document.createElement('div');
    levelRight.classList.add('level-right')
    level.appendChild(levelLeft)
    level.appendChild(levelRight)

    const button = document.createElement('button');
    button.classList.add('button', 'is-small', 'is-success');
    button.textContent = '+';
    levelRight.appendChild(button);
  })
}

const genSchedule = () => {
  const start = new Date(2024, 8, 25);
  const end = new Date(2024, 9, 25);
  const divDates = document.querySelector('#dates');
  divDates.innerHTML = '';
  schedule = {}
  positionHeader = false;
  
  while(start <= end) {
    let current = new Date(start);
    Reflect.set(schedule, Date.parse(current.toDateString()), {})

    let row = document.createElement('div');
    row.classList.add('columns')
    let columnDate = document.createElement('div');
    columnDate.classList.add('column', 'is-2', 'is-align-self-center')

    if (start.getFullYear() != end.getFullYear()) columnDate.textContent += `${current.getFullYear()}年`;
    columnDate.textContent += `
      ${current.getMonth() + 1}月${current.getDate()}日 星期${weekDays[current.getDay()]}
    `;
    row.append(columnDate)
    genPositions(row);
    divDates.append(row)

    start.setDate(start.getDate() + 1);
  }
}

document
  .querySelector('#gSchedule')
  .addEventListener('click', e => {
    genSchedule();
  })
