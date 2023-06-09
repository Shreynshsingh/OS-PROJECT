<script>

// Javascript implementation of
// worst - Fit algorithm

// Method to allocate memory to
// blocks as per worst fit
// algorithm
function worstFit(blockSize, m,
				processSize, n)
{
	
	// Stores block id of the block allocated
	// to a process
	let allocation = new Array(n);
	
	// Initially no block is assigned
	// to any process
	for(let i = 0; i < allocation.length; i++)
		allocation[i] = -1;
	
	// Pick each process and find suitable blocks
	// according to its size ad assign to it
	for(let i = 0; i < n; i++)
	{
		
		// Find the best fit block
		// for current process
		let wstIdx = -1;
		for(let j = 0; j < m; j++)
		{
			if (blockSize[j] >= processSize[i])
			{
				if (wstIdx == -1)
					wstIdx = j;
				else if (blockSize[wstIdx] <
						blockSize[j])
					wstIdx = j;
			}
		}
	
		// If we could find a block for
		// current process
		if (wstIdx != -1)
		{
			
			// Allocate block j to p[i] process
			allocation[i] = wstIdx;
	
			// Reduce available memory in this block.
			blockSize[wstIdx] -= processSize[i];
		}
	}
	
	document.write("<br>Process No." +
				"Process Size" +
				"Block no.<br>");
	for(let i = 0; i < n; i++)
	{
		document.write(" " + (i + 1) +
					"	" +
					"	" +
					processSize[i] +
					"	");
		if (allocation[i] != -1)
			document.write(allocation[i] + 1);
		else
			document.write("Not Allocated");
			
		document.write("<br>");
	}
}

// Driver code
let blockSize = [ 100, 500, 200, 300, 600 ];
let processSize = [ 212, 417, 112, 426 ];
let m = blockSize.length;
let n = processSize.length;

worstFit(blockSize, m, processSize, n);

// This code is contributed by rag2127

</script>
