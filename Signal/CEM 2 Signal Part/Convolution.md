- Convolution is fundamental operation in signal processing and linear systems theory that describes how two signals interact with each other to produce a third signal in **[[ LTI System]]**
  
- #properties and definition of system
	- System is a process / operation that transform input $x(t)$ to output $y(t)$ 
	  
	-  Assume that we input the signal / function $x_{1}(t)$ to the process $h(t)$ that return the signal / function $y_{1}(t)$, In the same way if we take the $x_{2}(t)$ to the process $h(t)$ it will result the $y_{2}(t)$ as well
	  
- To understand this topic we need to understand the **System** first. There are a number of basic #properties of [[Continuous-time Signal]] and [[Discrete-time Signal]] (Classification of System)
  
	- **==[[Linearity]] (Linear / Non-Linear)==**
	- **==[[Time Invariance]] (Time invariance / Time Varying)==**
	- [[Memory]] (With memory / With out Memory)
	- [[Causal]] (Predictable / Not predictable)
	- [[Invertibility]] (Can / Can't calculate inverse)
	- [[Stable]] (Stable / Not stable)
	  
- #properties 
  
	- Commutative #properties 

		- **Discrete:**  $x[n]∗h[n]=h[n]∗x[n]$
		- **Continuous:**  $x(t)∗h(t)=h(t)∗x(t)$
		  
	- Associative #properties 

		- **Discrete:**  $x[n] * (h[n]*g[n]) = (x[n]*h[n])*g[n]$ 
		- **Continuous:**  $x(t) * (h(t)*g(t)) = (x(t) * h(t)) * g(t)$
		  
	- Distributive #properties 

		- **Discrete:**  $x[n] * (h[n] + g[n]) = (x[n]*h[n]) + (x[n]*g[n])$ 
		- **Continuous:**  $x(t) * (h(t) + g(t)) = (x(t) * h(t)) + (x(t) * g(t))$ 

	- Identity #properties 

		- **Discrete:**  $x[n] * \delta[n] = x[n]$
		- **Continuous:**  $x(t) * \delta(t) = x(t)$

	- Convolution with [[Unit step function]] #properties 

		- **Discrete:**  $y[n] = x[n] * u[n] = \sum_{k = -\infty}^{n}x[k]$
		- **Continuous:** $y(t) = x(t) * u(t) = \int_{-\infty}^{t}x(T)dT$ 

  - Type of Convolution
	- [[Discrete-time Signal Convolution]]
	- [[Continuous-time Signal Convolution]]
