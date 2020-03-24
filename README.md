# Reading Practice Quiz Automation

Completes a McGraw-Hill Connect reading practice quiz in a few seconds via JavaScript in the browser console

![alt text](https://github.com/treatmesubj/McGHC_Practice_Automation/blob/master/Screenshot%20(5).png)

While taking a usual reading practice quiz for one of my textbooks on McGraw-Hill Connect, I wondered how the quiz functioned,
so I took a look at some of the site's files. The HTML was pretty perplexing because it was a big jumble of iframes
and nearly identical elements with no IDs. Also, there's just a big empty canvas on top of everything. There's a bunch
of weird event handling and bubbling, maybe because of all the weird ARIA widget-type stuff going on. There's lots and lots
of JavaScript files but they're all terribly obfuscated. I perused the files for words like 'answer' and 'correct' and I came
across a string: 'Magic Correct'. Deep in the HTML of an iframe document nested in another iframe document nested in
the top-layer HTML body was a hidden button element with an aria-label attribute: 'Magic Correct'. This button had some event listening
and sure enough, when "clicked" with a JS DOM command, the quiz progressed to the next question.

It seemed like the HTML wasn’t changing question-to-question, other than the invisible paragraphs in the canvas and the aria-label
attributes of the questions, so I figured I could write a simple script to click on the ‘Magic Correct’ button for each question. 
I figured the CSS Selector would be sort of tricky because all the elements were so ambiguous, but I learned that you can’t even
CSS Select into elements in an iframe anyways. So then, I had to learn how to use JS to select the first iframe by CSS and go into 
its content document body and select the next iframe by CSS within it, and then select the button by CSS within the nested iframe. 
```
document.querySelector('iframe').contentDocument.body.querySelector(div[style*='position'][style*='display: block'] iframe").contentDocument.body.querySelector("[aria-label='Magic Correct']").click();
```
Then, once I had the element, I looked up how to loop and sleep in JS and implemented a little function to click the ‘Magic Correct’ 
button after waiting a second or so on every question until there were no more questions left.

This was a pretty fun project, which helped me develop some more CSS/HTML skills and learn a little more JavaScript, which I don’t usually 
use very much. The script really isn’t that useful, as you could just spend your time reading the questions and guessing until you 
completed them by hand, but it is sort of cool. I'm not entirely sure what the consequences of using this script are...
