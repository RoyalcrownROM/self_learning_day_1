function getPrimes(number)
{
	if(typeof number != "number")
	{
		return "Invalid input";
	}
	else
	{
		if(number <= 0)
		{
			return "Number must be greater than 0";
		}
		else
		{
			var primes = [];

			for(var i = 1; i <= number; i++)
			{
				itsPrime =true;
				for(var j = 2; j <= number; j++)
				{
					if(i%j == 0 && j != i)
					{
						itsPrime = false;
					}
				}

				if(itsPrime == true)
				{
					primes[primes.length] = i;
				}
			}

			return primes;
		}
	}
}