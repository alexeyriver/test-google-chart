let seeder = [
  {
    name: "Atlas Shrugged",
    price: 20,
    about: "Something about this great book",
    metrics: {
      conversions: [
        [new Date(2021, 0, 10), 5.7],
        [new Date(2021, 0, 20), 6.7],
        [new Date(2021, 0, 30), 8.7],
        [new Date(2021, 1, 01), 9.7],
      ],
      sessions: [
        [new Date(2021, 0, 10), 32],
        [new Date(2021, 0, 20), 52],
        [new Date(2021, 0, 30), 40],
        [new Date(2021, 1, 01), 30],
      ],
      coupons: [[new Date(2021, 0, 10), "#coupon", new Date(2021, 0, 10)]],
      target: [[new Date(2021, 1, 01), "target value"]],
      target2: [[new Date(2021, 0, 30), "second target value"]],
    },
  },
  { name: "MP3 - player", price: 80, about: "Hello from 2007", metrics: {} },
];
