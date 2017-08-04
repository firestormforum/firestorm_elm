require("./css/app.scss");
const logoPath = require("./logo.svg");
const Elm = require("./Main.elm");

const root = document.getElementById("root");

const app = Elm.Main.embed(root, logoPath);

const outboundPortHandlers = {
  SetTitle: title => {
    document.title = title;
  },
  SetBodyClass: klass => {
    let body = document.getElementsByTagName("body")[0];
    body.className = `layout-app ${klass}`;
  }
};

const handleOutboundPort = evt => {
  outboundPortHandlers[evt.type](evt.payload);
};

app.ports.outbound.subscribe(handleOutboundPort);
