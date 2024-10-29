- Signal can be divided to 2 type using how we calculate the energy / power of the signal

- ==Energy Signal==
	- **The average power of this signal is 0**
	- We can calculate the #energy of the signal by using this #formula 
		- **Energy for specific range** (most use for -L -> L)

			- **For** **[[Continuous-time Signal]]**
			
				  $E_{a\to b} = \int_{a}^{b} |x(t)|^2 \,dt$
			  
				  $E_{2L} = \int_{-L}^{L} |x(t)|^2 \,dt$ 
	
			- **For** **[[Discrete-time Signal]]**
				  
				  $E_{a \to b} = \sum_{n=a}^{b} |x[n]|^2$
				  
		- **Total Energy**
			 - **For** **[[Continuous-time Signal]]
			   
				   $E_{total} =\lim_{L \to \infty} (\int_{-L}^{L} |x(t)|^2 \,dt)$ 
				   
			- **For** **[[Discrete-time Signal]]**
			  
				  $E_{total} =\lim_{L \to \infty} (\sum_{n = -L}^{L} |x[n]|^2 \,dt)$ 
		  
- ==Power Signal== 
	- The total energy of the signal is $\infty$ 
	- We can calculate the #average-power of the signal by using this #formula  
	
		- $P_{2L} = lim_{L \to \infty} (\frac{1}{2L} \int_{-L}^{L} |x(t)|^2 \,dt)$ 

		- $P = \frac{1}{b - a} \sum_{n = a}^{b} |x[n]|^2 \,dt$