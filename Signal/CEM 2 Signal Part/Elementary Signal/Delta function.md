Can be called Unit impulse function / Dirac delta function 
  ![[Delta function.png]]
- For [[Continuous-time Signal]]
	- #properties 
	  
	- $\delta (0) \to \infty$ 
		  
		- $\delta (t) = 0, \; t \neq 0$  
		  
		- $\int_{-\infty}^{\infty} \delta(t)dt = 1$ 
		  
		- $\delta (t)$ is even signal $\to$ $\delta (t) = \delta(-t)$ 
		  
		#not-understand 
	
		![[Unit Impulse Prop1.png]]
		![[Unit Impulse Prop2.png]]
	- If we integrate delta function from $-\infty \to \infty$ it will result the [[Unit Step function]] that change its value at $t$ 
	  
	- If we integrate / sum the sampling properties at $t_{0}$ (answer is $x(t_{0})\delta(t - t_{0}$) $\to x(t_{0})$ scale with $x(t_{0}$) in **[[Continuous-time Signal]]** function) with range $t_{1}, \; t_{2}$ that $t_{1} \leq t_{0} \leq t_{2}$ that will result the **single value**  of** $x(t)$ on $t_{0}$ that mean $x(t_{0})$ 
	  
	  to simplify if we sampling the signal $x(t)$ it will result the *size and time* of the $x(t)$ with time $t_{0}$ but when we integrate it or sifting it $\to$ result in just only the *size* with no *time* 
	  
	  This #properties  work as well for [[Discrete-time Signal]] just replace the integral to sum
	  
	- For the scaling #properties for [[Discrete-time Signal]] it has the concern just like the [[Time Scaling]] Transformation  if the shifting factor ($\frac{b}{a}$) is not integer $\to$ it isn't in discrete domain
	  
- For [[Discrete-time Signal]]
  
	- #properties 
	  
	- $\delta [n] = \begin{cases} 1, & n = 0 \\ 0, & n \neq 0 \end{cases}$
	  
	- Can be represent sum of 2 [[Unit step function]]
		- $\delta [n] = u[n] - u[n - 1]$ 
		  
	- $\sum_{k = -\infty}^{n} \delta[k] = \begin{cases} 0, & n < 0 \\ 1, & n \geq 0 \end{cases}$   

	- $x[n]\delta[n-k] = x[k]\delta[n-k] \to$ #sampling #properties   
	  
		- Why this works ?
		  Because $x[n]\delta[n-k]$ is the entire signal $x[n]$ multiply with signal that one spike 1 at point $k$
		  It's mean we require just 1 point on $x[n]$ to multiply with 1 on $\delta[n-k]$ at point $k$ -> $x[k]$ 
		  
		 In addition, we pick specific range $[l_{1},l_{2}]$ that contain $k$ in their length and multiply with $\delta[n-k]$ it's will result the same answer -> $x[k]\delta[n-k]$ 
	

	- $x[n] = \sum_{k=-\infty}^{\infty}x[k]\delta[n-k] \to$ #sifting #properties  