# Donut chart ReactJs component

Easy to customize, just provide an array of objects as props.

## Example:

```javascript
<Donutchart chartfrom={donutChart} />;
/*
budget: 1000 - 100% is set by the budget amount. If budget is 0 or smaller than the total of the items, the 100% will be proportionally divided to the items based on their amount.

baseColor: '#dadada' - base circle color
thickness: '5' - donut thickness
holeColor: 'transparent' - the hole is transparent or it can be any hex color

items: [] - the array that holds data for the chart
  - label - item label
  - sectionColor - color of the item
  - amount - amount of the item
  - startFrom - the first item needs to start from a number > 0. All the other items can be 0.
  
*/
const donutChart = {
	budget: 10000,
	baseColor: '#dadada',
	thickness: '5',
	holeColor: 'transparent',
	items: [
		{
			label: 'Wolves',
			sectionColor: 'green',
			amount: 666,
			startFrom: 25
		},
		{
			label: 'Cats',
			sectionColor: 'red',
			amount: 127,
			startFrom: 0
		},
		{
			label: 'Hamsters',
			sectionColor: '#345abc',
			amount: 892,
			startFrom: 0
		},
		{
			label: 'Deers',
			sectionColor: 'pink',
			amount: 892,
			startFrom: 0
		}
	]
};
```

## Available Scripts

### `npm start`

### `npm test`

### `npm run build`

```

```
