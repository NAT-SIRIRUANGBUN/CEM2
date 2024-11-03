- Must be [[LTI System]] (have its #properties )

- This like the [[Discrete-time Signal Convolution]] but just change the **discrete time -> continuous time** 
  
- From the [[Time Invariance]] #properties of the [[LTI System]] that mean if we input the signal $x(t-t_{0})$ to the system it will result the $y(t-t_{0})$ as well as the [[Delta function]] -> if we input the signal $\delta(t-t_{0})$ it must be result the $h(t-t_{0})$  impulse response function

- And from the #Super-position #properties  of the [[Linearity]] #properties of the [[LTI System]] we know that any constant of the $x_{k}(t), k=0,1,2,...$ are the set of input of linear system with the corresponding output $y_{k}(t), k=0,1,2,...$ then the response / result $x(t) = \sum_{k}^{}a_{k}x_{k}(t) \to y(t) = \sum_{k}^{}a_{k}y_{k}(t)$  
  
- $x(t)$ can be represent by a #sifting #properties of [[Delta function]] ($x(t)$ can be from by many #sampling  of many point $k$ on its signal product with $\delta(t-k)$)

- It will result the $x(t) = \int_{-\infty}^{\infty}x(T)\delta(t-T)dT -> y(t) = \int_{-\infty}^{\infty}x(T)h(t-T)dT$

- Same as [[Discrete-time Signal Convolution]], we can use the $y(t) = x(t) * h(t)$ #formula for Continuous-time Signal Convolution 
  
	  $y(t) = x(t) * h(t) = \int_{-\infty}^{\infty}x(T)h(t-T)dT = \int_{-\infty}^{\infty}x(t-T)h(T)dT$

	![[Continuous Convolution Example 1.png]]
	
- #tips 
	- To solve the convolution between 2 signal that both have $e^{x}$ we can use this #formula 
	  $e^{-at}u(t) * e^{-bt}u(t) = \frac{1}{a-b}(e^{-bt} - e^{-at} u(t))$ 

## How to Calculate the convolution between 2 signal

- Assume that we have 2 function / signal $a(t), \; b(t)$ we just notate it to be $x(t)$ and $h(t)$ 
  
- We will use $x(t)$ as constant and $h(t)$ as a ***Slider*** 
  
-  #example $x(t) = rect(\frac{t}{2a})$ and $h(t) = rect(\frac{t}{2a})$ 

	- From $x(t) * h(t) = \int_{-\infty}^{\infty}x(T)h(t-T)dT$ 

	- Consider $x(t)$ and $h(t-T)$ 
	  ![[Continuous Convolution Example 2.jpeg]]
	- Why $h(t-T)$ look like this
		- Because $h(t-T)$ is $h(-(T-t))$ -> shifted by $t$ and apply [[Reflection Operation]] 

	- Next, we should consider **How many integral / convolution equation we should have** by slide $h(t-T)$ through $x(t)$ by located position in the signal using term of $t$ 
	  ![[Continuous Convolution Example 3.jpeg]]
	- From the image we can see that at $t < -2a$ the value of $x(t)h(t-T)$ is $0$ because there is no overlapping area on $x(t) and h(t-T)$

	- When we continue sliding the $h(t-T)$ until $-2a \leq t \leq 0$  there is overlapping area on two signal start from $-a$ to $t + a$  -> $\int_{-a}^{t+a}x(T)h(t-T)dT$ 

	- When we slide $h(t-T)$ pass the point $t = 0$ it start the new section of overlapping start from $t-a$ to $a$ and this happen until $t = 2a$ -> $\int_{t-a}^{a}x(T)h(t-T)dT$ 

	- When we slide pass point $t = 2a$ there is no overlapping area anymore

	- From the following statement we can conclude that the result of $x(t) * h(t) = y(t)$ 
	  
	  $y(t) = \begin{cases} 0, & t < -2a, \\ \int_{-a}^{t+a}x(T)h(t-T)dT, & -2a \leq t \leq 0\\ \int_{t-a}^{a}x(T)h(t-T)dT, & 0 \leq t < 2a \\ 0, & t \geq 2a \end{cases}$ 
	  
	- We can simplify $y(t) = \begin{cases} 2a - t, & |t| < 2a, \\ 0, & otherwise \end{cases}$
	  
	  ![[Continuous Convolution Example 4.png]]