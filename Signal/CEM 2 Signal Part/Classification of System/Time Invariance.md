- To describe that the system is depend / vary to time or not

- #properties 
	- To check that the system $x(t)$ is time invariance or not, we can use this #formula 
		- For the [[Continuous-time Signal]]
		  $x(t-t_{0}) = y(t-t_{0}) \iff$ *The system is time invariance
	  
		  - For the [[Discrete-time Signal]]
		    $x[n-n_{0}] = y[n-n_{0}] \iff$ *The system is time invariance
		    
- #example 
  ![[Time Invariance Example2.png]]
- To simplify
	- First, we given $x_2[n] = x_{1}[n - n_{0}]$ then calculate the $y_{2}[n]$ and replace it with its $x_{2}[n]$ term and transform it to $x_{1}[n-n_{0}]$ term
	- Then, calculate the actual result for process the $x_{1}[n-n_{0}] \to y_{1}[n-n_{0}]$ and transform it back to $x_{1}[n-n_{0}]$ term
	- Lastly, compare them **!** 
	  
- Other way that more! easy 
	- Just replace the $n$ to $n - n_{0}$ in system output term and calculate the actual result and compare it **!**







