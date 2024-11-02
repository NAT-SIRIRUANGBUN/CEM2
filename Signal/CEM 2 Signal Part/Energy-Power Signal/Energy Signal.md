**The average power of this signal is 0**
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