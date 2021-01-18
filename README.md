# Dashboard selling

In this application you can see your products for sale, you can see the sales by type of product in a graph, you can also see the monthly sales of the sum of all the products in a bar graph, you can also see the sales of the current month in a table, where you can search by product name, also sort by row and finally see your favorite products where you can add a new product to favorites or you can delete one. You can also drag the card to change its position. You can also change the language.

Dashboard selling is create with [React.js](https://es.reactjs.org/), and [Redux](https://redux.js.org/). To simulate requests to an API, was used [JSON Server](https://www.npmjs.com/package/json-server). The list of favorite products is saved in [localstorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).

## Conciderations

You can't create new product.

## Instalation

You will need node and npm installed globally on your machine.

In the project folder use code:

```bash
npm install
```

## Run servers

In the project folder, in a new window console use code:
* For each mounted server you need a new console window

```bash
npx json-server --watch initialState.json
```
```bash
npx json-server --watch initialStateCategorySales.json --port 3002
```
```bash
npx json-server --watch initialStateFav.json --port 3003
```
```bash
npx json-server --watch initialStateSalesNow.json --port 3004
```
```bash
npx json-server --watch initialStateSalesForMonth.json --port 3001
```

## Run app:

In the project folder use code:

```bash
npm run start
```

## To visit app:

In your browser visit the next URL:

```bash
http://localhost:3005/
```

## Test:

You can prove the functionality and amount tests that have.
In the project folder use code:

```bash
npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
