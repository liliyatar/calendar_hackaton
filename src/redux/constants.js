export const currentDate = new Date();
export const daysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const namesOfMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const availableYears = [];

for (let i = 1800; i <= currentDate.getFullYear() + 100; i += 1) {
    availableYears.push(i);
}

export const years = [...availableYears];
