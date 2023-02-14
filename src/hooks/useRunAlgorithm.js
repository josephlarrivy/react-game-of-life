// import React, {useState, useEffect} from "react";

	// A live cell dies if it has fewer than two live neighbors.
	// A live cell with two or three live neighbors lives on to the next generation.
	// A live cell with more than three live neighbors dies.
	// A dead cell will be brought back to live if it has exactly three live neighbors.

const useRunAlgorithm = () => {

	const run = (table) => {
		console.log(table)
		
		const evaluateCell = (i, k) => {
			let sumOfLiveNeighbors = 0;
			if (table[i - 1][k - 1] == 1) {
				sumOfLiveNeighbors++;
			}
			if (table[i - 1][k] == 1) {
				sumOfLiveNeighbors++;
			}
			if (table[i - 1][k + 1] == 1) {
				sumOfLiveNeighbors++;
			}
			if (table[i][k - 1] == 1) {
				sumOfLiveNeighbors++
			}
			if (table[i][k + 1] == 1) {
				sumOfLiveNeighbors++
			}
			if (table[i + 1][k - 1] == 1) {
				sumOfLiveNeighbors++;
			}
			if (table[i + 1][k] == 1) {
				sumOfLiveNeighbors++;
			}
			if (table[i + 1][k + 1] == 1) {
				sumOfLiveNeighbors++;
			}
			return sumOfLiveNeighbors;
		}

		// const loopTable = (table) => {
		// 	for (let i=1; i<table.length-1; i++) {
		// 		for (let k = 1; k < table[0].length-1; k++) {
		// 			let value = table[i][k]
		// 			let sumOfLiveNeighbors = evaluateCell(i, k);
		// 			// console.log(value, i, k, sumOfLiveNeighbors)

		// 			if (value == 1 && sumOfLiveNeighbors < 2) {
		// 				table[i][k] = 0;
		// 				// return table;
		// 			} else if (value == 1 && sumOfLiveNeighbors == 2 ) {
		// 				table[i][k] = 1;
		// 				// return table;
		// 			} else if (value == 1 && sumOfLiveNeighbors == 3) {
		// 				table[i][k] = 1;
		// 				// return table;
		// 			} else if (value == 1 && sumOfLiveNeighbors > 3) {
		// 				table[i][k] = 0;
		// 				// return table;
		// 			} else if (value == 0 && sumOfLiveNeighbors == 3) {
		// 				table[i][k] = 1;
		// 				// return table;
		// 			}
		// 		}
		// 	}
		// }
		// return loopTable(table)




		const loopTable = (table) => {
			for (let i=1; i<table.length-1; i++) {
				for (let k = 1; k < table[0].length-1; k++) {
					let value = table[i][k]
					let sumOfLiveNeighbors = evaluateCell(i, k);

					if (value == 1 && sumOfLiveNeighbors < 2) {
						table[i][k] = 0;
						console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
						// return table;
					} else if (value == 1 && sumOfLiveNeighbors == 2 ) {
						table[i][k] = 1;
						console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
						// return table;
					} else if (value == 1 && sumOfLiveNeighbors == 3) {
						table[i][k] = 1;
						console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
						// return table;
					} else if (value == 1 && sumOfLiveNeighbors > 3) {
						table[i][k] = 0;
						console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
						// return table;
					} else if (value == 0 && sumOfLiveNeighbors < 3) {
						table[i][k] = 0;
						console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
						// return table;
					} else if (value == 0 && sumOfLiveNeighbors == 3) {
						table[i][k] = 1;
						console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
						// return table;
					} else if (value == 0 && sumOfLiveNeighbors > 3) {
						table[i][k] = 0;
						console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
						// return table;
					}

					// if (value == 1) {
					// 	table[i][k] = 1;
					// 	let sum = evaluateCell(i,k)
					// 	console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
					// 	// return table;
					// // } else if (value == 1) {
					// 	// table[i][k] = 1;
					// 	// return table;
					// // } else if (value == 1) {
					// 	// table[i][k] = 1;
					// 	// return table;
					// // } else if (value == 1) {
					// 	// table[i][k] = 0;
					// 	// return table;
					// } else if (value == 0) {
					// 	table[i][k] = 0;
					// 	let sum = evaluateCell(i, k)
					// 	console.log('value', value, 'i', i, 'k', k, 'sum', sumOfLiveNeighbors)
					// }
				}
			}
			return table
		}
		return loopTable(table)
	}
	return [run]
}

export default useRunAlgorithm;