function initFreshChat() {
  window.fcWidget.init({
    token: 'b01ca97a-1971-4850-a1db-818e34811573',
    host: 'https://wchat.freshchat.com',
  });
}
function initialize(i, t) {
  let e;
  i.getElementById(t) ? initFreshChat() : ((e = i.createElement('script')).id = t, e.async = !0, e.src = 'https://wchat.freshchat.com/js/widget.js', e.onload = initFreshChat, i.head.appendChild(e));
}
function initiateCall() {
  initialize(document, 'Freshdesk Messaging-js-sdk');
}
window.addEventListener ? window.addEventListener('load', initiateCall, !1) : window.attachEvent('load', initiateCall, !1);
