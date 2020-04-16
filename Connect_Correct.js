var questions_left;
questions_left = 2;

function auto_correct() {
  var iframe = document.querySelector('iframe');
  var magic_correct = iframe.contentWindow.document.body.querySelector('[aria-label="Magic Correct"]')
  if (magic_correct === null) {
    var nested_iframe = iframe.contentDocument.body.querySelector("div[style*='position'][style*='display: block'] iframe");
    var magic_correct = nested_iframe.contentDocument.body.querySelector("[aria-label='Magic Correct']");
    var questions_left_elem = nested_iframe.contentDocument.body.querySelector("[aria-label*='items left']");
    questions_left = parseInt(questions_left_elem.getAttribute('aria-label').split(" ")[2]);
    console.log(questions_left)
    magic_correct.click()
  } else {
    var questions_left_elem = iframe.contentDocument.body.querySelector("[aria-label*='items left']");
    questions_left = parseInt(questions_left_elem.getAttribute('aria-label').split(" ")[2]);
    console.log(questions_left)
    magic_correct.click()
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
	while  (questions_left > 1) {
		auto_correct()
		await sleep(((Math.random() + 1)*1000))
	}
}

loop()

