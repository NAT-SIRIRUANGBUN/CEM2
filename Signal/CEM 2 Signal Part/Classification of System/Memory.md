- #properties 
	- The system is memoryless (without memory) if its output for each value of the independent variable at a given time is dependent only on the input at the same time $\to$ that mean if the input is given time $t$ the process must use / take only $t$ not the scale or sum of $t$
	  
	  This work on both [[Discrete-time Signal]] and [[Continuous-time Signal]]
	  
	- **All memoryless system is [[Causal]] system**
	
- #example 
	- $y[t] = 15+x[t]$ is memoryless
	- $y[t] = (2x[t])^2$ is memoryless
	- $y[t] = x[t-1]$ ==is a system with memory==
	- $y[t] = x[t+1]$ ==is a system with memory (although it's require an advanced / future time)==
	- $y[t] = x[\frac{t}{2}] + x[t]$  ==is a system with memory==

