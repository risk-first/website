


## Managing Lock-In Risk

Let's look at two ways in which we can manage [Lock-In Risk](/tags/Lock-In-Risk): _bridges_ and _standards_.

### Ecosystem Bridges

![Lock-In Risk is mitigated when a bridge is built between ecosystems](/img/generated/risks/boundary/Boundary-Risk3.svg)

Sometimes, technology comes along that allows us to cross boundaries, like a _bridge_ or a _road_.  This has the effect of making it easy to to go from one self-contained ecosystem to another.  Going back to WordPress, a simple example might be the [Analytics Dashboard](https://en-gb.wordpress.org/plugins/google-analytics-dashboard-for-wp/) which provides [Google Analytics](https://en.wikipedia.org/wiki/Google_Marketing_Platform) functionality inside WordPress.  

I find, a lot of code I write is of this nature:  trying to write the _glue code_ to join together two different _ecosystems_.  

As shown in the above diagram, mitigating [Lock-In Risk](/tags/Lock-In-Risk) involves taking on complexity.  The more [Protocol Complexity](/tags/Protocol-Risk) there is on either side of the two ecosystems, the more [complex](/tags/Complexity-Risk) the bridge will necessarily be.  The below table shows some examples of this.

|Protocol Risk From A         |Protocol Risk From B        |Resulting Bridge Complexity  |Example                                                  |
|-----------------------------|----------------------------|-----------------------------|---------------------------------------------------------|
|Low                          |Low                         |Simple                       |Changing from one date format to another.                |
|High                         |Low                         |Moderate                     |Status Dashboard.                                        |
|High                         |High                        |Complex                      |Object-Relational Mapping (ORM) Tools.                   |

<!--latex \pagebreak -->

From examining the [Protocol Risk](/tags/Protocol-Risk) at each end of the bridge you are creating, you can get a rough idea of how complex the endeavour will be:

 - If it's low-risk at both ends, you're probably going to be able to knock it out easily.  Like translating a date, or converting one file format to another.
 - Where one of the protocols is _evolving_, you're definitely going to need to keep releasing new versions.   The functionality of a `Calculator` app on my phone remains the same, but new versions have to be released as the phone APIs change, screens change resolution and so on.

### Standards

Standards mitigate [Lock-In Risk](/tags/Lock-In-Risk) in one of two ways:

1.  **Abstract over the ecosystems.**  Provide a _standard_ protocol (a _lingua franca_) which can be converted down into the protocol of any of a number of competing ecosystems.

 - The [C](https://en.wikipedia.org/wiki/C_(programming_language)) programming language provided a way to get the same programs compiled against different CPU instruction sets, therefore providing some _portability_ to code.  

 - [Java](https://en.wikipedia.org/wiki/Java_(programming_language)) took what C did and went one step further, providing interoperability at the library level. Java code could run anywhere where Java was installed. 

2.  **Force adoption.** All of the ecosystems start using the standard for fear of being left out in the cold.  Sometimes, a standards body is involved, but other times a "de facto" standard emerges that everyone adopts.

 - [ASCII](https://en.wikipedia.org/wiki/ASCII): fixed the different-character-sets [Lock-In Risk](/tags/Lock-In-Risk) by being a standard that others could adopt.  Before everyone agreed on ASCII, copying data from one computer system to another was a massive pain, and would involve some kind of translation.  [Unicode](https://en.wikipedia.org/wiki/Unicode) continues this work. 

 - [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol).  As we saw in [Communication Risk](/tags/Protocol-Risk), the Internet Protocol (IP) is the _lingua franca_ of the modern Internet.  However, at one period of time, there were many competing standards.  IP was the ecosystem that "won", and was subsequently standardised by the [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force).  This is actually an example of _both_ approaches:  as we saw in [Communication Risk](/tags/Communication-Risk), Internet Protocol is also an abstraction over lower-level protocols.
 
## Lock-In Risk Cycle

![Lock-In Risk Decreases With Bridges and Standards](/img/generated/risks/boundary/cycle.svg) 

[Lock-In Risk](/tags/Lock-In-Risk) seems to progress in cycles.  As a piece of technology becomes more mature, there are more standards and bridges, and [Lock-In Risk](/tags/Lock-In-Risk) is lower.  Once [Lock-In Risk](/tags/Lock-In-Risk) is low and a particular approach is proven, there will be innovation upon this, giving rise to new opportunities for [Lock-In Risk](/tags/Lock-In-Risk) (see the diagram above).  Here are some examples:

 - **Processor Chips.**  By providing features (instructions) on their processors that other vendors didn't have, manufacturers made their processors more attractive to system integrators.  However, since the instructions were different on different chips, this created [Lock-In Risk](/tags/Lock-In-Risk) for the integrators.  Intel and Microsoft were able to use this fact to build a big ecosystem around Windows running on Intel chips (so called, WinTel).  The Intel instruction set is nowadays a _de-facto_ standard for PCs.

 - **Browsers.** In the late 1990s, faced with the emergence of the nascent World Wide Web, and the [Netscape Navigator](https://en.wikipedia.org/wiki/Netscape_Navigator) browser, [Microsoft](https://en.wikipedia.org/wiki/Microsoft) adopted a strategy known as [Embrace and Extend](https://en.wikipedia.org/wiki/Embrace_and_extend).  The idea of this was to subvert the HTML standard to their own ends by _embracing_ the standard and creating their own browser Internet Explorer and then _extending_ it with as much functionality as possible, which would then _not work_ in Netscape Navigator.  They then embarked on a campaign to try and get everyone to "upgrade" to Internet Explorer.   In this way, they hoped to "own" the Internet, or at least, the software of the browser, which they saw as analogous to being the "operating system" of the Internet, and therefore a threat to their own operating system, [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows).

 - **Mobile Operating Systems.** We currently have just two main _mobile_ ecosystems (although there used to be many more):  [Apple's iOS](https://en.wikipedia.org/wiki/IOS) and [Google's Android](https://en.wikipedia.org/wiki/Android_(operating_system)), which are both _very_ different and complex ecosystems with large, complex boundaries.  They are both innovating as fast as possible to keep users happy with their features.  Bridging tools like [Xamarin](https://en.wikipedia.org/wiki/Xamarin) exist which allow you to build applications sharing code over both platforms.

 - **Cloud Computing.** [Amazon Web Services (AWS)](https://en.wikipedia.org/wiki/Amazon_Web_Services) are competing with [Microsoft Azure](https://en.wikipedia.org/wiki/Microsoft_Azure) and [Google Cloud Platform](https://en.wikipedia.org/wiki/Google_Cloud_Platform) over building tools for [Platform as a Service (PaaS)](https://en.wikipedia.org/wiki/Platform_as_a_service) (running software in the cloud).  They are both racing to build new functionality, but it's hard to move from one vendor to another as there is no standardisation on the tools.
 