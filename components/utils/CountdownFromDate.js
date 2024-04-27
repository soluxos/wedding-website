import { useEffect, useState } from 'react';

const CountdownFromDate = ({ inputDate }) => {
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    const calculateElapsedTime = () => {
      const currentDate = new Date();
      // Ensure the inputDate is in a format that's compatible with iOS devices.
      // This could mean using an ISO 8601 format or parsing the date manually.
      const targetDate = new Date(inputDate.replace(/-/g, '/').replace(/T.+/, ''));
      const delta = currentDate - targetDate;

      const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
      const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30; // Approximation
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

    const intervalId = setInterval(calculateElapsedTime, 1000); // Update every second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [inputDate]);

  return <span>{elapsedTime}</span>;
};

export default CountdownFromDate;
