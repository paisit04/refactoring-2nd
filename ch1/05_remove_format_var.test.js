const plays = require('./plays.json');
const invoices = require('./invoices.json');
const {statement, amountFor} = require('./05_remove_format_var');

test('Default Statement', () => {
  const result = statement(invoices[0], plays);
  expect(result).toMatch(`Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00 
You earned 47 credits`);
});

test('amountFor tragedy', () => {
  const perf = invoices[0].performances[0];
  const result = amountFor(perf, plays[perf.playID]);
  expect(result).toBe(65000);
});

test('amountFor comedy', () => {
  const perf = invoices[0].performances[1];
  const result = amountFor(perf, plays[perf.playID]);
  expect(result).toBe(58000);
});
