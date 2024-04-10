import { useEffect, useState } from 'react';

const CountdownFromDate = ({ inputDate }) => {
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    const calculateElapsedTime = () => {
      const currentDate = new Date();
      const delta = currentDate - new Date(inputDate);

      const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365;
      const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30;
      const millisecondsPerDay = 1000 * 60 * 60 * 24;

      const years = Math.floor(delta / millisecondsPerYear);
      const months = Math.floor((delta % millisecondsPerYear) / millisecondsPerMonth);
      const days = Math.floor((delta % millisecondsPerMonth) / millisecondsPerDay);

      let result = '';
      if (years > 0) {
        result += `${years} ${years > 1 ? 'years' : 'year'}, `;
      }
      if (months > 0) {
        result += `${months} ${months > 1 ? 'months' : 'month'}, `;
      }
      if (days > 0) {
        result += `and ${days} ${days > 1 ? 'days' : 'day'}`;
      }
      if (!result) {
        result = 'today';
      }

      setElapsedTime(`${result} ago`);
    };

    calculateElapsedTime();
  }, [inputDate]);

  return <span>{elapsedTime}</span>;
};

export default CountdownFromDate;
