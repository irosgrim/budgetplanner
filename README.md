# Donut chart ReactJs component

Easy to customize, just provide an array of objects.
example:
`# Donut chart ReactJs component

Easy to customize, just provide an array of objects as props.
example:

```javascript
<Donutchart chartfrom={donutChart} />;

const donutChart = {
	budget: 10000, //percentage of each item will be based on this number if set and if it's greater than the total of items
	baseColor: '#dadada', //this is the base circle
	thickness: '5', // circle thickness
	holeColor: 'transparent', //the hole is transparent but it can be any color ex #ffffff
	items: [
		{
			label: 'Wolves', //label of the item
			sectionColor: 'green', //color of the sections
			amount: 666, //value of the section
			startFrom: 25 //first item should always have a startFrom value > 0, next items will have a startFrom 0
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

`

## Available Scripts

### `npm start`

### `npm test`

### `npm run build`

```

```
