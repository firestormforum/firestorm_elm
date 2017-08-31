require("./css/app.scss");
const logoPath = require("./logo.svg");
const Elm = require("./Main.elm");

const root = document.getElementById("root");

const app = Elm.Main.embed(root, logoPath);

const setPostTarget = el => {
  let posts = document.querySelectorAll(".post-item");
  posts.forEach(post => post.classList.remove("-target"));
  el.classList.add("-target");
};

const scrollToPost = postId => {
  let elementId = `post-${postId}`;
  let el = document.getElementById(elementId);
  if (el) {
    setPostTarget(el);
    let alignWithTop = true;
    el.scrollIntoView(alignWithTop);
  }
};

const outboundPortHandlers = {
  SetTitle: title => {
    document.title = title;
  },
  SetBodyClass: klass => {
    let body = document.getElementsByTagName("body")[0];
    body.className = `layout-app ${klass}`;
  },
  ScrollToPost: postId => {
    // We'll scroll to it immediately, and then we'll try to do it in a second
    scrollToPost(postId);
    // We have to wait for the view to render...this is non-deterministic,
    // sorry!
    setTimeout(() => scrollToPost(postId), 1000);
  }
};

const handleOutboundPort = evt => {
  outboundPortHandlers[evt.type](evt.payload);
};

app.ports.outbound.subscribe(handleOutboundPort);
