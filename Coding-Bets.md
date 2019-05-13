![Under Construction](images/state/uc.png)

# Coding Bets

When you start an assignment or a piece of development, how sure are you that it will pay off?  Often when we do some work on a software project, we're asked "How Long Will It Take?"  This is essentially trying to establish what the _Stakes of the bet are_.   However, it's also worth considering _What the [Pay Off]() will be_.    

For example:

## Refactoring: The Technical Debt Bet

_Making our codebase easier to reason about is worth the outlay of time_

Technical Debt is excess complexity in your code.  The bet here is that you can trade some time on the schedule to move to a place of lower complexity risk.  It looks like this:

Stake:  Schedule Risk  
PayOff: Reduced Complexity Risk (making us more agile in the future)

To reduce technical debt there usually has to be some simplifying realisation:

"We don't need this extra parameter to this function"
"Class A and Class B are actually different implementations of the same functionality"
"We can encapsulate more behaviour by introducing the command pattern".

When it goes right, the codebase is easier to think about.  When it goes wrong, either the complexity risk improvement is less than you hoped, or it takes longer to achieve, or the complexity returns in some other way, or it just doesn't work at all, and you're back to where you started from with the loss of time.

"Project speed is a function of codebase complexity and available talent". 

## Spike Solutions: The New Technology Bet

_A New Technology is a better fit for our problem than the one we're currently using_.

Quite often, someone will suggest using a new technology to either replace a poorly-performing existing technology, homegrown solution or gap in the functionality.  But will the new technology fit?  The answer is to try to "prove" the bet as quickly as possible using a "Spike Solution".

Stake:  Schedule Risk, Complexity Risk
PayOff: Reduced Feature Fit Risk

"Let's replace all our uses of java.util.Date with DateTime, as it's less buggy".
"Let's use ElasticSearch for searching instead of SQL Statements"
"Let's use JSON here instead of XML".

This can go right in the following ways:

 - The spike solution demonstrates that the technology will fit for all of the use cases needed.
 - The spike solution demonstrates that the technology is definitely not a good fit, for clear reasons that weren't apparent before starting. 
 
But it can go wrong in the following ways:

 - The developer can't get the spike solution working in the given time.  Does this prove that the technology is no good, or too complex, or that the developer needed more time, or that they're not skilled enough?
 - The developer gets the spike solution working for a specific use case, which is taken as success.  However, it later proves problematic in production, or in fitting to other use-cases.
 
Reduce the stakes by:

 - Tackling the hardest use-case first
 - Skipping writing tests: if it doesn't work out, they're waste.

 
## New Feature Bets

_This new feature may be exactly what our users are looking for_

Sometimes it's impossible to know exactly how the user base will feel about a new feature without building it.  So, build the feature, and test it with a trial population.

Stake: Schedule Risk, Complexity Risk, Conceptual Integrity Risk 
PayOff: Feature Fit Risk

"We need to provide an export-to-Excel function, as our competitors have one"
"Users need to be able to customize the workflow, otherwise they'll go elsewhere"
"We need a global search because people spend too much time menu-diving"

Outcomes:

 - If done correctly, the users welcome the change with open arms.  The bigger the bet, the more delight the users may experience.  This might create new possibilities for marketing.
 - Sometimes, the bet is obvious, low-hanging fruit, and the users are pleased but ultimately it was a necessary, expected change.
 - Sometimes, the feature doesn't make much impact.  It's used often enough to not be removed, but adds Complexity Risk to the codebase.
 - Sometimes, you build the feature _almost right_, and no-one notices that it could've been a lot better.
 - Sometimes, the feature is a diversion from the main purpose of the project, and a waste of time.  

Reduce the stakes by:
 
 - Asking the users first.
 - Building mock-ups.
 - Listening to feedback

## MVP: The New Market Bet

_Building a Minimum Viable Product proves you can, but also proves the market_

The idea of a Minimum Viable Product is to make a bet that a market exists for a certain product, _and that there's money to be made from it_. 

Stake:  Funding Risk
Payoff:  Market Risk

"People will use the search engine and we can monetize it with advertising".
"People will buy pet food online"
"Bots are the future: let's write one for the insurance business"

Reduce the stakes by:

- Failing fast.  Implement the riskiest functionality first.
- Doing things that don't scale.  You can prove the market by doing a lot of processes manually.
- Relying on Dependencies:  for everything that isn't completely unique.

## Conclusion

This was just a few examples, but this idea is _generally_ applicable.  Look at the next piece of code you're about to write:

 - What are the stakes?
 - What is the Pay Off?
 - Is the bet worth it?  Sometimes, the stakes and the payoff are _a given_, but the bet still isn't worth the time.
 
How can you maximize the stakes while minimizing pay-off?  

Are you making a long bet, or lots of small short bets?  (Split work up, then do the riskiest part first)


