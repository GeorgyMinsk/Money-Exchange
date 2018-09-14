// PLEASE DON'T change function name
// Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth
// 50¢, 25¢, 10¢, 5¢ and 1¢, respectively.
// They'll be represented by the strings H, Q, D, N and P.

module.exports = function makeExchange(currency) {
    var NumberCoins= {
        H: 0,
        Q : 0,
        D: 0,
         N : 0,
        P: 0,
      }
      if (currency<=0) {
        return {};
      } 
      else
      if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
      }
      else
       if (currency >= 50&&currency<10000 ) {
           NumberCoins.H=Math.floor(currency/50);
              currency=currency-50*NumberCoins.H;
              console.log(currency);
      
           NumberCoins.Q=Math.floor(currency/25);
               currency=currency-25*NumberCoins.Q;  
            NumberCoins.D=Math.floor(currency/10);
               currency=currency-10*NumberCoins.D;         
               NumberCoins.N=Math.floor(currency/5);
               currency=currency - 5*NumberCoins.N;  
            NumberCoins.P=currency%5;
       }
       else
        {
               NumberCoins.Q=Math.floor(currency/25);
                 currency=currency-25*NumberCoins.Q;
               NumberCoins.D=Math.floor(currency/10);
                   currency=currency-10*NumberCoins.D;
                   NumberCoins.N=Math.floor(currency/5);
                   currency=currency - 5*NumberCoins.N;  
                   NumberCoins.P=currency%5;
        }
        for (var index in NumberCoins) {
            if (NumberCoins[index]==0) {
                delete NumberCoins[index];
            }
            
        }
         return NumberCoins ;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}

