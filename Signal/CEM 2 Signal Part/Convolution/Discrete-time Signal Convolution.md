- Must be [[LTI System]] (have its #properties )
  
- Assume that we have system we can find the characteristic of that system by input the impulse function ([[Delta function]]) to the system and the result can be called **impulse response or transfer function** 
  
	  $\delta[n] \to [system] \to h[n]$
	 $h[n]$ is a impulse response of the system

- **Why** we use the [[Delta function]] $\delta[n]$ because the #properties of it that said **for any signal / function $x[n]$ can be written as the weighted sum of shifted unite-sample function**
  
	- That mean we can represent any $x[n]$ using sum of ***constant*** $x[k]$ product with impulse function that shifted by $k$ ($\delta[k]$) 
		
		$x[n] = ...+x[-2]\delta[n+2] + x[-1]\delta[n+1] + x[0]\delta[n] + x[1]\delta[n-1] + x[2]\delta[n-2]+...$ 
		
		$x[n] =\sum_{k=-\infty}^{\infty}x[k]\delta[n-k]$
		
- So, if the system is [[Time Invariance]] 
	  $\delta[n-k] = h[n-k]$ 
	  
- And from the #Super-position #properties from [[Linearity]]
  
	   $x[n] = \sum_{k=-\infty}^{\infty}x[k]\delta[n-k] \to y[n]= \sum_{k=-\infty}^{\infty}x[k]h[n-k] = \sum_{k=-\infty}^{\infty}x[n - k]h[k]$
	   
	- Can be represent by this #formula  $y[n] = x[n]*h[n]$ ***(Not a product)***

	- How to find the convolution of $x[n]$ and $h[n]$ with length $N, \; M$ respectively?   
	  
		- We can find the total point of the convolution using this #formula 
		  $Length_{ans} = N + M -1$ 
		
	- **Method 1**
		- Change domain from $n$ to $k$ that mean $x[n] \to x[k], \; h[n] \to h[k]$ 
		  
		- Take the [[Reflection Operation]] to the $h[k] \to h[-k]$
		  
		- From $h[-k] \to (h[0-k])$ has scale $...,-2,-1,0,1,2,...$ that mean we can replace the $0$ with $n$ that mean we change $h[0-k] \to h[n-k]$ so we replace $0$ with $n \to$ scaling with $...,n-2,n-1,n,n+1,n+2$  instead
		  
		![[Convolution Tabular Method Visualize.png]]
		  
		- Use Tabular Method ![[Tabular Method.png]]
		  
	- **Method 2**
		- Take the [[Reflection Operation]] to both $x[n]$ and $h[n]$
		- Do the normal multiplication 
		- Reverse the answer
		![[Convolution Multiplication Method.png]]
		
		- #warning 
			- The start point on axis is not always $0$, we can calculate the point that the convolution signal start using this #formula 
			  
			  $Start_{convolution} = Start_{x[n]} + Start_{h[n]}$ 
	
	- #tips
	  Any signal $x[n]$ convolution with $\delta[n]$ equal to it self
	  
	  $x[n]*\delta[n] = x[n]$ 
	  
	  This because from the convolution function 
		  
	  $x[n]*h[n] = \sum_{k = -\infty}^{\infty}x[k]h[n-k]$ 
	  
	  - From $h[n]$ is [[Delta function]] $\delta[n]$ 
	  
	  $x[n]*h[n] = \sum_{k = -\infty}^{\infty}x[k]\delta[n-k] = x[n] \leftarrow$ #sifting #properties   

	![[Discrete Convolution Example 1.png]]