const process_txt = document.querySelector(".process");
const success_txt = document.querySelector(".success");
const bar = document.querySelector(".bar");
const needle = document.querySelector(".needle");
const amount = document.querySelector(".amount");
const date = document.querySelector(".date");
const time = document.querySelector(".time");

const placeholderData = {
  day1: {
    date: `2023/01/01`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day2: {
    date: `2023/01/02`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day3: {
    date: `2023/01/03`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day4: {
    date: `2023/01/04`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day5: {
    date: `2023/01/05`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day6: {
    date: `2023/01/06`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day7: {
    date: `2023/01/07`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day8: {
    date: `2023/01/08`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day9: {
    date: `2023/01/09`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
  day10: {
    date: `2023/01/10`,
    time: `12:50:00`,
    amount: Math.floor(Math.random() * 1000),
  },
};

const json = JSON.stringify(placeholderData);
console.log(json);

const data = JSON.parse(json);
const entries = Object.entries(data);

let counter = 0;

const program = (data) => {
  const interval = setInterval(() => {
    const currentDay = data[counter][1];
    amount.textContent = `${currentDay.amount}µm`;
    date.textContent = `${currentDay.date}`;
    time.textContent = `${currentDay.time}`;
    const rotation = (currentDay.amount / 10) * 1.8 - 90;
    bar.style.transform = `rotate(${rotation}deg)`;
    needle.style.transform = `rotate(${rotation}deg)`;
    counter++;

    if (counter === data.length) clearInterval(interval);
  }, 1000);
};

program(entries);
