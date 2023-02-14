// import React, {useState, useEffect} from "react";

const table = [
	[2, 2, 2, 2, 2],
	[2, 0, 0, 0, 2],
	[2, 0, 1, 0, 2],
	[2, 0, 0, 0, 2],
	[2, 0, 0, 0, 2],
	[2, 2, 2, 0, 2]
]


const useRunAlgorithm = (table) => {

	const run = (table) => {

		const evaluateCell = (value, i, k) => {
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



		for (let i=1; i<table.length-1; i++) {
			for (let k = 1; k < table[0].length-1; k++) {
				let value = table[i][k]
				let sumOfLiveNeighbors = evaluateCell(value, i, k);
				console.log('value:', value, 'i:', i, 'k:', k);
				console.log('sumOfLiveNeighbors:', sumOfLiveNeighbors)
				console.log(' ')
			}
		}



	// A live cell dies if it has fewer than two live neighbors.

	// A live cell with two or three live neighbors lives on to the next generation.

	// A live cell with more than three live neighbors dies.

	// A dead cell will be brought back to live if it has exactly three live neighbors.

	}

	run(table)
}


useRunAlgorithm(table)

// export default useRunAlgorithm;