## Help Wanted!

Risk-First is turning out to be a big undertaking, and any help would be gratefully appreciated.  

## Seen Something Wrong?

The basic route to feedback is simply to [Open An Issue](https://github.com/risk-first/website/issues) and explain what needs to be done.  We'd be very grateful to hear your ideas.

### A Note On Editing Symbols

At the top of each page, there's an image in to show what kind state the page is in.  

![Under Construction](https://riskfirst.org/images/state/uc.png)

Means this is probably a placeholder page, and needs fleshing out.  If you have ideas, please submit them in an issue|

![Draft](https://riskfirst.org/images/state/draft.png)

Most of the text is correct, but there are likely to be place-holders.   Open issues if there are glaring omissions/inaccuracies.

In this state if:
 - It's written
 - It's proofed on the wiki
 - It's proofed in the PDF
 - All images are present
 
![For Review](https://riskfirst.org/images/state/for-review.png)
 
Get involved!  Please help by reviewing the page and letting us know what you think!  

If there is no status banner, the page is published:

- Has been reviewed by 3rd party for grammatical or spelling errors
- Has been up for public readership for some time

i.e. Ready for consumption, enjoy!

## Want To Write Something?

- If you "Star" the project in github you will receive an invite to [Join the Risk-First Organisation](https://github.com/risk-first).
- Alternatively, fork the repo and issue a pull request in the usual way.
- Feel free to raise issues on the project to ask for corrections / improvements.

## Forking / Wiki Updates

Both this main repo (`risk-first/website`) and it's wiki (`risk-first/website.wiki`) are identical.  The reason for this is to allow the main github workflow to operate (forking / pull requests).

In order to merge pull requests:

1. Perform the pull request through the normal github UI.
2. Pull the changes to the local repo
3. Ensure that the origin for the wiki is added to the local repo:

```
git remote set-url --add --push origin git@github.com:risk-first/website.wiki.git
```

4. `git push` to push to both the `risk-first/website` and `risk-first/website.wiki` repos.

## Credit

If you submit an issue, an edit, an article, whatever, you will be credited by name in the publications derived from this project.  
