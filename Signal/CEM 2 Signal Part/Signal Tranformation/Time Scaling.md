- Time Scaling Operation is the operation that scaling (Compress / Expand) the signal

- #formula of [[Continuous-time Signal]]
	- $x(t) \to x(At)$ where $A$ is scaling factor 
		- If $|A| < 1$ the operation will expand the signal
		- if $|A| >1$ the operation will compress the signal
	
- #example
	- $x(t)$
	  ![[Time Scaling 1.png]]
	- $x(2t)$
	  ![[Time Scaling 2.png]]
	  
	- $x(\frac{t}{2})$ 
	  ![[Time Scaling 3.png]] 
- #warning
  In [[Discrete-time Signal]] we can use this as well but just only for **compress** ($|t| > 1$) , some part of the signal can be remove because we compress the signal $n$ times $\to$ the point on the axis that not a multiple of $n$ will scale to **decimal** $\to$ not discrete $\to$ we will remove it