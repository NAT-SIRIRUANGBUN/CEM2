- Given $x_{1}(t)$ and $x_{2}(t)$ to be a signal / function, $h(t)$ is transfer process and $y_{1}(t), \; y_{2}(t)$ is the result from input $x_{1}(t)$ and $x_{2}(t)$ to the $h(t)$ respectively 

- Assume that $x_{3}(t) = x_{1}(t) + x_{2}(t)$
  
- #properties The system is linear if:
	- The result of input $x_{3}(t)$ to the $h(t)\to y_{3}(t)$  must be $y_{1}(t) + y_{2}(t)$
	- The result that if we put any **complex** constant (scaling) $x_{n}(t) \to ax_{n}(t)$ into $h(t)$ must result the function that scaling by that constant $\to ay_{n}(t)$ 
	  
	- To sum up, we can easily show that the process / system is linear or not using this #formula 
	  
	  $ax_{1}(t) + bx_{2}(t) = ay_{1}(t) + by_{2}(t) \iff$ *the process $h(t)$ is linear*  
	  
	  This #formula work on both [[Discrete-time Signal]] and [[Continuous-time Signal]] 
	  
	    $ax_{1}[n] + bx_{2}[n] = ay_{1}[n] + by_{2}[n] \iff$ *the process $h(t)$ is linear*  

- If $x_{k}[n], k=0,1,2,...$ are the set of input of linear system with the corresponding output $y_{k}[n], k=0,1,2,...$ then the response / result of these input can calculate by this #formula called #Super-position #properties that work on both 
  [[Discrete-time Signal]] and [[Continuous-time Signal]] 
	  $x[n] = \sum_{k}^{}a_{k}x_{k}[n] \to y[n] = \sum_{k}^{}a_{k}y_{k}[n]$  
	
- #example 
  ![[Linearity Example1.png]]
