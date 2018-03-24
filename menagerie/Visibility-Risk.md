In a nutshell, the difficulty you have in getting the reality of a new situation into your mental model, because the reality is obfuscated from you.


Edit this up:

This is the issue Constantin and I have been bumping up against this week.  On the one hand, Spring Boot gives you enormous power to build applications quickly and easily.  I can build REST interfaces fast, and know they are standards-compliant.  On the other hand, he doesn’t know how it works.  A simple thing to say would be: RTFM.  But, there is a deeper problem.   Software systems, in abstracting away complexity, and human convention, also abstract away visibility of how they run and operate. 

As soon as you create a function, you are doing abstraction.  You are saying:  “I now have this operation. The details, I won’t mention again, but from now on, it’s called F.”  And suddenly, “F” hides.  It is working invisibly.  Things go on in “F” that people don’t necessarily need to understand.   There may be some documentation, or tacit knowledge around what “F” is, and what it does, but it’s not necessarily right.   

In Java, problems like this are handled by having the source code, and being able to dig down, statically, into it and figure out what’s going on.  However, Spring makes lots of use of runtime reflection, which stymies static analysis, and leaves Constantin wondering why he can’t just figure out what’s going on by inspecting it.  The extra power afforded by using runtime reflection is a double-edged sword:  you lose the ability to expand statically and say what the system is doing.  Static Java is insufficiently powerful to express all the kinds of abstractions that programmers want.  This is why runtime reflection exists.  (Lisps have Macros, which offer a similar level of escape-the-box power).

Extensibility

But, the underlying problem is still the one above, of definition vs reference.  So, I spend a lot of time hunting through other people’s code trying to figure out exactly how it works, and whether I can bend it to my will.  Because, this is another problem:

Since the function F is a black box, you can only use it in the way the author intended.  If you and the author have a different view about this, you’re going to be in trouble.  

This is why we end up with change requests, patch requests, feature requests:  we need for the original author to change the meaning of “F” to more suit what we want to use it for.  The advantage of this, is that everyone coalesces around a meaning and purpose for F, and we get reuse occurring.  


What is this notion of visibility, anyway?   I am thinking that what it means is that we could, by auditing the running systems, build something like the Current Operating Model of our business, without any effort whatsoever. 

What would we need, in order to be able to do this?

* We would need to specify processes, and say when they ran, and how.
* Maybe all processes would communicate what they were doing with a standard protocol.
* Inputs and Outputs would need to be known
* When do processes run?
* BPMN  / XPDL are all about describing processes.  But, for me this doesn’t really cut it. 

What would our running software need to tell us for this to happen?

Containment

Organising at higher levels than object.

Part of the problem might be that we don’t really have programming language abstractions that properly include containment.  

Does containment actually exist?  It makes sense to me to say that some software is running inside a JVM on a particular box.  And that the JVM process is contained on that box.  There seems to be a hierarchy of containment here, much like you’d get with geneos.  

Principle Of Locality

Networks and computers break locality. They allow anything to happen anywhere.  But, the human brain (and possibly the universe as a whole) are founded on this principle.  So, abstracting it away means that it becomes an unknowable quantity.  And, lack of observability might follow from this.

Common Taxonomy

This is something you see in the TOM:  the desire to end up with a single way of describing features.  Essentially, we really need a database that explains our software processes.  Building the model of the processes is basically building a database.  But, is there a fixed schema for this, or do you let people figure it out as they go?

schema: could also refer to an XML schema, which obviously, is also a database format.  What happened to XML databases, anyway?

What would this even mean?

Programming languages fail us because they encourage us to build software that is unknowable.  Could we invent a language that fixes this problem?

In the same way as we made Java a language without memory leaks, could we make a language for describing software in a way that makes it eminently knowable?

So far, I have not come across anything that does this.  But that doesn’t mean it’s impossible - just that it hasn’t even been attempted before.





Manifests in other ways:

- people assume invisibility risk on projects/people that don't communicate much
- that can also lead to 

- internal models differ, and they don't recocnile easily.

- 3rd party contractors