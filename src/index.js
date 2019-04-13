import * as AbsintheSocket from "@absinthe/socket";
import notifierFind from "@absinthe/socket/dist/notifier/find";
import { Socket as PhoenixSocket } from "phoenix";


let absintheSocket = AbsintheSocket.create(
    new PhoenixSocket("ws://localhost:4000/socket")
)

let notifiers = []


function onStart(data) {
    console.log(">>> Start", JSON.stringify(data))
}

function onAbort(data) {
    console.log(">>> Abort", JSON.stringify(data))
}

function onCancel(data) {
    console.log(">>> Cancel", JSON.stringify(data))
}

function onError(data) {
    console.log(">>> Error", JSON.stringify(data))
}

function onResult(app) {
    return res => {
        console.log(">>> Result", JSON.stringify(res))
        app.ports.gotSubscriptionData.send(res)
    }
}

import('./Main.elm')
    .then(({ Elm }) => {
        let node = document.querySelector('main');
        const app = Elm.Main.init({ node: node });

        app.ports.createSubscriptions.subscribe(function (operations) {
            console.log("createSubscriptions called with", operations)
            absintheSocket = notifiers.reduce(
                (socket, notifier) => {
                    const disposableNotifier =
                        notifierFind(
                            socket.notifiers,
                            "request",
                            notifier.request
                        )
                    if (disposableNotifier) {
                        return AbsintheSocket.cancel(
                            socket,
                            disposableNotifier
                        )
                    } else {
                        return socket
                    }
                },
                absintheSocket
            )

            notifiers = operations.map(operation => AbsintheSocket.send(absintheSocket, {
                operation,
                variables: {}
            }))

            absintheSocket = notifiers.reduce((socket, notifier) =>
                AbsintheSocket.observe(socket, notifier, {
                    onAbort,
                    onError,
                    onCancel,
                    onStart,
                    onResult: onResult(app)
                }), absintheSocket)
        });


    });
