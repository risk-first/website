


### 2. A Quick Story

Here is an example from earlier in the year about how I managed to _completely nail_ an estimate, and yet, still miss a deadline.  I had a large body of code in Java (some 300 classes), and I wanted to get it running inside a browser (I won't go into why).   Now, there are a number of ways to solve this problem - various VMs run inside the browser for example - but I decided that, since I was interested in learning Kotlin, what I would do would be to get IntelliJ IDEA to convert the Java code into Kotlin for me.  Kotlin can be compiled into Javascript and run in the browser.  I could go class-by-class, and since I had a large body of unit tests that I could keep working, I knew it would be ok.  

After converting ten classes in a day, I thought - this is likely to take about 30 work-days to do.  And, sure enough, after about 28 days, I was done.  It didn't really matter that I started with the easy classes first, because I got better at resolving the issues in the conversion process as I went along.  

The only problem was, having got there, I realised I needed a load of _other stuff_ to get things working in the browser too.  So that took about another 10 days.  Within the narrow definition of the work "converting everything to Kotlin" I hit the estimate, but the wider task of "getting it to run in the browser" I was late.  

Arguably, the failure here was that I didn't set the success criteria properly at the start.