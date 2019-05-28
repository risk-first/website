
### Title Card

HI,

My name is Rob Moffat.  I work just down the road from here at Deutsche Bank where I am a Java and Javascript software developer.   I am building the Deutsche Bank Symphony practice.  If you don't know, Symphony is a messaging platform that a lot of the banks use for secure, encrypted chat.  The chances are that some of you are probably familiar with that in your jobs.

That's my day job.  But I'mnot actually here to talk about that, although we might come back to it later in the examples. Instead I want to talk to you about risk in software development.

### "THE BASIC PROBLEM OF SOFTWARE DEVELOPMENT IS RISK"

Ok, I know a lot of you work in banking, and are probably already about to leave.  I'm not going to mention anything to do with banking risk _at all_.  We're going to be looking today at things like debugging, coding, scoping work, pleasing our stakeholders and keeping our jobs.  

The quote above is actually the first sentence from a fairly famous book on Software Development.  It's the chapter title.  Does anyone know which one?

## XP: Extreme Programming Explained By Kent Beck

Ok, who's heard of this book?  (hands) Anyone read it? (hands) Who's heard of Kent Beck?  (hands).  Does anyone actually practice XP in their jobs?   

## Picture of Pair Programmers

A lot of developers grew to hate XP.  Some people love it.  It was my first introduction to Agile techniques.  

## Lean (Poppendeick) + Scrum ()

These approaches are more popular nowadays.  Who uses scrum at work? (hands)  Anyone use Kanban? (hands)  Does anyone still use "Waterfall"?  

Don't worry, this is a safe space?

## Picture of a house being constructed

Sometimes, waterfall is the right way to go!  We'll dive into that in more detail in a minute, but it feels like collectively, as an industry, or a practice, software development has been on a path of discovery, going something like this:

## Waterfall -> XP -> Scrum -> Agile -> Kanban

This makes sense to me that this would happen.  In the agile manifesto it actually says:

## "We are uncovering better ways of developing software by doing it and helping others do it."

Let's get back to Kent Beck.

### "It's all about Risk"

It seems weird that Kent started his book with this statement, but what people really remember about XP is just Pair Programming, Unit Tests and eating pizza.

I think he was actually on to something really powerful right then and he didn't develop it further.

The reason is, he had these other fish to fry:  he'd developed XP which, to him and many other people, was demonstrably better than the way we had been doing it.  

And so his book was just a catalog of all these "better" techniques, and how they could be used together.   Some better than others.  I mean, he didn't _invent_ unit testing as a practice, but he did a lot of promote it, and was one of the original authors of JUnit.  

### JUnit

I actually can't imagine coding now without building tests as I go, and having tools to at least understand my coverage..  It just seems so helpful now to have this.

---

When I was at school, in an economics class, we were like 17 or 18, one of the guys just asks:

"What's the point of all this?  Surely the markets are just people buying and selling stuff?  They don't know about demand curves and price elasticity and all of these things!"

My economics teacher had to take quite a lot of shit actually.  We were young and political and pretty annoying teenagers.  But he gave a great answer:

"When footballers are playing a match of football, they have an understanding of how the ball works and the tactics.  But they don't need to be good physicists.  Nevertheless, physical rules underpin the game they play."

### Fun Economics Image

Now, that might be overselling Economics, "the dismal science", as a discipline.  But in this talk I'm going to try and persuade you that something similar is true in software development.

### Risk tools, techniques, diagram (with examples underneath)

That is, methodologies like scrum, XP, waterfall are collections of practices meant to manage risk.  
Risk is the underlying "physics" that we're dealing with.  

So in the rest of this talk, I am going to try and make that case in two ways, and then we can try to apply that principle in a number of different ways and see where it gets us.

You could argue, like a footballer might, that understanding that lower level isn't going to make a jot of difference to how you do the higher level stuff.  How do you run a good retro?  How do you do estimating?  How do you code a feature?  

Actually though, I think not only that it _does_.  But that we're already doing this stuff anyway, we just don't talk about it.

### "It's all about Risk"

So, in order to convince you of this statement, I'm first going to try and convince you of some more general statements;

### Risk is all about Risk

My son Charlie and I love to play risk.  This is actually the board from the last time we played.  He is X and I am Y.   If you understand the game risk, you'll know that basically, it's a regressive game, mainly.  The person winning has the most land, and they get the most troops.  

The only nod at progressive game play (that is, trying to even everyone out) is that attacking is harder than defending.  

In this game, I won on the next turn, because I could see Charlie's position was over-extended, and I had a bunch of cards and you get lots of troops for continents.  

Now, Charlie is 12.  He plays a good game of chess, but I can beat him at most other things if I want to.   Now, we can get into whether or not, as a parent, you should do that another time.  I like playing games with my kids and I feel it's good for them, so I tend to let them win about half the time.  Apart from Chess, where I have to fight for my life.  

Why did I know I was going to win?  Basically, I have an _internal model_ of Risk that's better than his.   I could see the danger areas.  For example, I knew that by holding thailand down here, I would prevent him from owning asia, which gives him 7 extra troops each go.  And, by defending Japan I can stop him marching into the US.

But I'm taking risks too: Africa is a huge open back-door, and Charlie could have taken south america and beaten me.

### Internal Model

So, to win at risk, I was managing a balance of risks.  And those risks are the ones I know about, in my "Internal Model".   

It's possible that there are things that I'm not seeing, that a better Risk player would.  The reason I beat Charlie is I am 44 and my internal model is hugely better developed than his.  

And, I've played more risk.

### Roulette Wheel

Roulette is another game that's all about risk.  Generally, most people have the same internal model of this game:  If I put a chip down on number 12, I will get back 36 if it comes up.. but there are 37 slots on the wheel.  

So, I'm going to lose.

### Roulette Guy

But this guy (tbd) made a ton of money in the 1950's out of Roulette because he had a better mental model.  He sent stooges to casinos to record the results of each spin of the wheel.  And he found that some wheels were damaged, and so certain numbers came up more often than others.

All he had to do was bet on those numbers to win.

And all he had to do to get this "improved" internal model, was to go out and experiment in the real world, and record some observations.  He had to do what I call "Meeting Reality".  

### Meeting Reality (feedback loops, list of, diagram)

So, we all know feedback loops are important right.

When you play the game or learn about the wheels, you "Meet Reality", your Internal Model improves.  This is the general process whereby experience gives you a better understanding of the risks.  Does that apply to coding?  I would argue it does.  Going back to Charlie, we were doing some revision for his Computer Science exam the other day, and he had to understand HTML.  

He wrote a webpage that looked like this, to start with:

### Webpage

Now, for most of us... this just hurts our eyes.   We can see all of the problems right off.  I have no idea what a browser would do with this.   Browsers are very lenient so maybe some of it would work.

But the reason this sets off alarm bells for us, is that we have really well developed Interal Models of Computers, HTML and the rest.  Whereas this is Charlie's first webpage.

### Risk First Website / Book

Now people ask me about how I got into all this.  I've now built a website and published a book and actually, I didn't mean to do either of those things.  My journey started with a few notes in my journal which went like this:

### 10 June 2016: Developing To Minimize Risk

"As developers we should be considering what the risk landscape will look like after the first release... 

The concept of Minimum Viable Product is basically saying that Lack of Access is a bigger problem than Lack of Functionality ...  

a startup that goes well for the first month, gains huge traction and then has a massive data breach, or storage failure is not going to last.  But a Minimum Viable Product might not necessarily need off-site backups and encrypted data.  "

---

So, I was talking here about the concept of "Minimum Viable Product", and the idea is that you want to show something to the world, and do the least amount of work to get there. 

But, when you put work in the public domain, and get people using it, you're suddenly opened up to lots of risks because of that... so maybe what we're really doing is trying 

Incidentally, I learnt about keeping a journal from a book by Gerald Weinberg.  It was really good advice.  

So, I started expanding on this idea and it just got bigger and bigger.   

### Risk Landscapes (map.. x marks the spot, dragons, etc)

It's very easy with Agile to just consider "the next most important thing".  And, that's really what I'm alluding to with the above journal entry.  You can build your MVP, but you really need to consider what could happen if things go wrong.  

What if you're hacked, and lose all your data?

What if the servers go down, and the users can't log in for an afternoon?  

How do these things affect your reputation?  You might end up dead in the water if you piss off all those early adopters.  Maybe.   

It depends.

So the idea of the "Risk Landscape" is, we have an idea of the direction we want to go, and our Internal Models help us figure out where that might be, but we don't exactly know how it'll play out when we get there

There might be dragons.

### Waterfall:  Risks it cares about (from OSFNO)

So let's look again at waterfall.  This used to be the approach people used to get software done.   

Because Waterfall methodologies are borrowed from the construction industry, they manage the risks that you would care about in a construction project, specifically, minimising the risk of rework, and the risk of costs spiralling during the physical phase of the project. 

For example, pouring concrete is significantly easier than digging it out again after it sets.

Construction projects are often done by tender which means that the supplier will bid for the job of completing the project, and deliver it to a fixed price. 

This is a risk-management strategy for the client: they are transferring the risk of construction difficulties to the supplier, and avoiding the Agency Risk that the supplier will “pad” the project and take longer to implement it than necessary, charging them more in the process. 

In order for this to work, both sides need to have a fairly close understanding of what will be delivered, and this is why a specification is created.

### wikipedia - criticisms

“1. Clients may not know exactly what their requirements are before they see working software and so change their requirements, leading to redesign, redevelopment, and re-testing, and increased costs.”

“2. Designers may not be aware of future difficulties when designing a new software product or feature. “ - Waterfall Model, Wikipedia

So, a lot of the time, (but not always) waterfall was managing the _wrong risks_.  And this is why we got Agile.

### XP - risks diagram

This is the set of risks from XP, and the practices it espouses to manage them.  (go through it)

### Scrum - risks diagram

.. tbd

### DIFFERENT METHODOLOGIES FOR DIFFERENT RISKS









I am _still_ figuring this stuff out.   What I am presenting to you today isn't _done_.  I have a lot of stuff still to work out in this field.  If anyone wants to help me do that, maybe apply what we're talking about here to their area of software, that would be really intresting.


### Evolution 

There's a reason this risk-centric model works on board games, development methodologies and the roulette table, and it's basically because it's how evolution works too.

Over millions and millions of years, we evolve to find positions on the risk landscape that can support our life.  That might mean for us, minimizing dependency risks:  we need food and water and air and sunlight, and those things are common.  Evolution forces us to address big risks and deal with them, otherwise we leave the gene pool.

### Nassim Taleb Quote: ``We've survived 200,000 years as humans.  Don't you think there's a reason why we survived? We're good at risk management.''


 