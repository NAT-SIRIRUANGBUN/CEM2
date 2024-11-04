- Continuous Tine Fourier Transform is a **Decomposition** of any [[Periodic Signal]] $x(t)$ into sum of many [[Sinusoidal wave]] function or [[Complex Exponential Signal]] with different $frequency$ $k$ function product with constant $a_{k}$ with this **Fourier Series Representation** #formula 
  
	  $x(t) = \sum_{k=-\infty}^{\infty} a_{k} e^{jkw_{0}t}$

- Before we reach that point, we **have to** know more about the relation between [[LTI System]] and [[Complex Exponential Signal]]
  
- As we know from the [[Convolution]] $y(t) = \int_{-\infty}^{\infty}h(T)x(t-T)dT$ but what will happen if we assign $x(t) = e^{st}$ 
  $y(t) = \int_{-\infty}^{\infty}h(T)x(t-T)dT = y(t) = \int_{-\infty}^{\infty}h(T)e^{s(t-T)}dT$ at this point we interest only $T$ not $t$

 - So, we can move the $e^{st}$ before the integral
   $y(t) = \int_{-\infty}^{\infty}h(T)e^{s(t-T)}dT = \int_{-\infty}^{\infty}h(T)e^{st}e^{-sT}dT = e^{st}\int_{-\infty}^{\infty}h(T)e^{-sT}dT = e^{st}H(s)$ 

- As you see when we apply [[Convolution]] from any function in [[LTI System]] to the [[Complex Exponential Signal]] it will result the same [[Complex Exponential Signal]] product with **complex constant** $H(s) = int_{-\infty}^{\infty}h(T)e^{-sT}dT$

- we called $e^{st}$ as ***eigen function*** of the system and $H(s)$ as the ***eigen value*** of the system
***** 

- In a linear system , a signal can be decomposed in terms of eigenfunctions.
  Let $x(t)$ correspond to the linear combination of three complex exponentials
  
  -> $x(t) = a_{1}e^{s_{1}t} + a_{2}e^{s_{2}t} + a_{3}e^{s_{3}t}$
  
  When we apply convolution $x(t) * h(t)$ for any $h(t)$ it will result
  
  -> $y(t) = a_{1}H(s_{1})e^{s_{1}t} + a_{2}H(s_{2})e^{s_{2}t} + a_{3}H(s_{3})e^{s_{3}t}$
*****

- ![[A man who make us suffer!.png]]
  **Jean Baptiste Joseph Fourier** said that "Periodic signal could be represented by a sum of sinusoids signal"

### Fourier Series Representation

- From the #properties of  [[Periodic Signal]], a signal is periodic of, for some positive non-zero value $T$ that make $x(t) = x(t+nT), \; n=1,2,....$ 
  
  $\to$ $T$ is the fundamental period 
  $\to$ we can calculate the fundamental radian frequency $w_{0}$ using this #formula 
	  $w_{0} = \frac{2\pi}{T}$ and $w_{0} = 2\pi f_{0}$ 
  
- Two signal can be called **harmonically related** $\iff$ their fundamental radian frequency must be multiple of each other
  
  $\phi_{k}(t) = e^{jkw_{0}t} = e^{jk(\frac{2\pi}{T})t}, \;k=\pm1, \pm2, \pm3..$ <- Harmonically related complex exponential


- Back to the **Fourier Series Representation** #formula 
  
	  $x(t) = \sum_{k=-\infty}^{\infty} a_{k} e^{jkw_{0}t} = \sum_{k=-\infty}^{\infty} a_{k} e^{jk(\frac{2\pi}{T})t}$
	  
	- $a_{k}$ can be called **Fourier series coefficient**
		- In term $k = 0 \to a_{0}$ is constant because $e^{0} = 1$ 
		- For $k = \pm 1\to$ ==***fundamental components***== / first harmonic components  
		- For $k = \pm 2$ -> half period / twice frequency / second harmonic components
		- For $k = \pm N$ -> $Nth$ harmonic components

- Before we go to the next step, let's see the properties of **conjugate**
	- conjugate of $a + b$ is $a - b$ can notate as $(a+b)^*$    
	- as well as on the complex number system 
	  from $z = a + bj\to z^* = a - bj$ 
	
 - Let's move back to the $x(t)^*$
	 - From $x(t) = \sum_{k=-\infty}^{\infty} a_{k} e^{jkw_{0}t}$
	   
	 - Consider $x(t)^*= \sum_{k = -\infty}^{\infty}a^*_{k} e^{-jkw_{0}t}$ 
	   
	 - But on the Real number base $x(t)^* = x(t)$ 
	   
	 - So, $x(t)= \sum_{k = -\infty}^{\infty}a^*_{k} e^{-jkw_{0}t}$ 

	- we replace $k$ with $-k$ #not-understand 
		  $x(t)= \sum_{k = -\infty}^{\infty}a^*_{-k} e^{jkw_{0}t} = \sum_{k=-\infty}^{\infty} a_{k} e^{jkw_{0}t}$ 

	- So, $a_k = a_{-k}^*$ and $a_{-k} = a_k^*$   
