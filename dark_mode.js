var iframe = document.querySelector('iframe');
var nested_iframe = iframe.contentDocument.body.querySelector("div[style*='position'][style*='display: block'] iframe");
nested_iframe.contentDocument.body.querySelector("div[role='banner']").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
nested_iframe.contentDocument.body.querySelector("div[role='banner'] + div").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
nested_iframe.contentDocument.body.querySelector("div[role='complementary']").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
