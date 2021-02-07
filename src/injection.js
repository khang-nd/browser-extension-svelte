import browser from "webextension-polyfill";

const key = "background";
browser.storage.local.get(key).then((data) => {
  document.body.style = `background: url(${data[key]})`;
});
