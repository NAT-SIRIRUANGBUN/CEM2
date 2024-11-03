- Must be [[LTI System]] (have its #properties )

- This like the [[Discrete-time Signal Convolution]] but just change the **discrete time -> continuous time** 
  
- From the [[Time Invariance]] #properties of the [[LTI System]] that mean if we input the signal $x(t-t_{0})$ to the system it will result the $y(t-t_{0})$ as well as the [[Delta function]] -> if we input the signal $\delta(t-t_{0})$ it must be result the $h(t-t_{0})$  impulse response function

- And from the #Super-position #properties  of the [[Linearity]] #properties of the [[LTI System]] we know that any constant of the $x_{k}(t), k=0,1,2,...$ are the set of input of linear system with the corresponding output $y_{k}(t), k=0,1,2,...$ then the response / result $x(t) = \sum_{k}^{}a_{k}x_{k}(t) \to y(t) = \sum_{k}^{}a_{k}y_{k}(t)$  
  
- $x(t)$ can be represent by a #sifting #properties of [[Delta function]] ($x(t)$ can be from by many #sampling  of many point $k$ on its signal product with $\delta(t-k)$)

- It will result the $x(t) = \int_{-\infty}^{\infty}x(T)\delta(t-T)dT -> y(t) = \int_{-\infty}^{\infty}x(T)h(t-T)dT$

- Same as [[Discrete-time Signal Convolution]], we can use the $y(t) = x(t) * h(t)$ #formula for Continuous-time Signal Convolution 
  
	  $y(t) = x(t) * h(t) = \int_{-\infty}^{\infty}x(T)h(t-T)dT = \int_{-\infty}^{\infty}x(t-T)h(T)dT$

	![[Continuous Convolution Example1.png]]
	
- #tips 
	- To solve the convolution between 2 signal that both have $e^{x}$ we can use this #formula 
	  $e^{-at}u(t) * e^{-bt}u(t) = \frac{1}{a-b}(e^{-bt} - e^{-at} u(t))$ 