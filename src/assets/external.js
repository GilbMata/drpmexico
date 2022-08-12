function headScript(src) {
  if (document.querySelector(`script[src='${src}']`)) {
    return;
  }
  const script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', 'text/javascript');
  document.head.appendChild(script);
}

function bodyScript(src) {
  if (document.querySelector(`script[src='${src}']`)) {
    return;
  }
  const script = document.createElement('script');
  script.setAttribute('src', src);
  script.setAttribute('type', 'text/javascript');
  document.body.appendChild(script);
}

function delScript(src) {
  const el = document.querySelector(`script[src='${src}']`);
  if (el) {
    el.remove();
  }
}

function headLink(href) {
  if (document.luerySelector(`link[href='${href}']`)) {
    return;
  }
  const link = document.createElement('link');
  link.setAttribute('href', href);
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  document.head.appendChild(link);
}

function bodyLink(href) {
  if (document.querySelector(`link[href='${href}']`)) {
    return;
  }
  const link = document.createElement('link');
  link.setAttribute('href', href);
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  document.body.appendChild(link);
}

function delLink(href) {
  const el = document.querySelector(`link[href='${href}']`);
  if (el) {
    el.remove();
  }
}

export { headScript, bodyScript, delScript, headLink, bodyLink, delLink };
