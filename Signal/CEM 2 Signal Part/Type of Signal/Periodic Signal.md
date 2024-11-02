- #properties 
	- Periodic -> appearing or occurring at intervals.
	- For [[Continuous-time Signal]]
		- $x(t) = x(t + nT) | \; \forall n\ \in\ \mathbb{I} \iff x(t)$ *is periodic
		- $T$ is period of the signal
	- For [[Discrete-time Signal]]
		- $x[n] = x[n + N] | \; \exists N \in \mathbb{I}^{+}, \; \forall n\ \in\ \mathbb{I} \iff x[n]$ *is periodic
		- In case of [[Sinusoidal wave]] $w_{0}$ must be multiple of $\pi \to f$ is just integer $\to$ we can find integer $N$ $\to$ Periodic Signal
	
- #example 
	- **[[Sinusoidal wave]]**
	- **[[Complex exponential signal]]**

- #properties 
	- Sum of 2 or more periodic don't always periodic
		- We can check that sum of 2 periodic [[Continuous-time Signal]] is periodic or not from this #formula
		  
			 $from \; x(t) = x(t + kT_{x})$ 
			 $from \; y(t) = y(t + lT_{y})$
			 
			 sum of $a$ of $x$ and $b$ of $y$ called $z(t)$ 
			 
			 $z(t) = ax(t) + by(t)$ 
			 $z(t) = ax(t + kT_{x}) + by(t + lT_{y})$ 
			 
			 *Assume that $z$ is periodic signal with period  $T$
			 $ax(t + T_{z}) + by(t + T_{z}) = ax(t + kT_{x}) + by(t + lT_{y})$
			 
			 So, $T_{z} = kT_{x} = lT_{y} \; that \; mean \; \frac{l}{k} = \frac{T_{x}}{T_{y}}$   
			 $\therefore z$ is periodic $\iff$ we can find at least one pair of $l, \; k \in \mathbb{I}$    
			 
		- For [[Discrete-time Signal]] 
			  ![[Periodic Discrete Time.png]]