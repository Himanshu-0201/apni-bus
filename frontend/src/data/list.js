

const date = new Date();

const day = date.getDate();
const year = date.getFullYear();
const month = date.getMonth();


export const list = [
    {
        id: 1,
        departureTime: new Date(year, month,day, 11,20),
        dropTime: new Date(year, month,day, 12, 50),
        departureStation: "Kota",
        destination: "Baran",
        fair : "20"
    },
    {
        id: 2,
        departureTime: new Date(year, month,day, 21,0),
        dropTime: new Date(year, month,day, 22, 10),
        departureStation: "Kota",
        destination: "Jhalawar",
        fair : "70"
    },
    {
        id: 3,
        departureTime: new Date(year, month,day, 23,20),
        dropTime: new Date(year, month,day, 23, 50),
        departureStation: "Kota",
        destination: "Anta",
        fair : "50"
    }
];


export const recentDepaStation = [
    {
        id : 1,
        name : "Kota"
    },
    {
        id : 2,
        name : "Baran"
    },
    {
        id : 3,
        name : "Antana"
    }
];

