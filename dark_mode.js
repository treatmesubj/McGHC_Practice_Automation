var iframe = document.querySelector("div[style*='block'] iframe");
iframe.contentDocument.body.querySelector("div[role='banner']").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
iframe.contentDocument.body.querySelector("div[role='banner'] + div").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
iframe.contentDocument.body.querySelector("div[role='complementary']").style.backgroundColor = "rgba(0, 0, 0, 0.61)";
