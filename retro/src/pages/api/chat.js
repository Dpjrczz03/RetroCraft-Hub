
import {mongooseConnect} from "../../../lib/mongoose";
import {Chat} from "../../../models/chat";
// import {pusherServer} from "../../../lib/pusher";
import PusherServer from "pusher";

const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.NEXT_PUBLIC_PUSHER_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: "ap2",
    useTLS: true
})


export default async function handle(req, res) {
    const method = req.method;
    await mongooseConnect()
    if (method === 'POST') {
        const {chatid, message, email,time} = req.body;



        function chatHrefConstructor(chatid) {
            const sortedIds = [chatid.split('--')[0], chatid.split('--')[1]].sort()
            return `${sortedIds[0]}--${sortedIds[1]}`
        }

        function toPusherKey(key) {
            return key.replace(/:/g, "__");
        }

        const response = await pusherServer.trigger(toPusherKey(`chat:${chatHrefConstructor(chatid)}`), "chat-event", {
            chatid,
            message,
            email,
            time,
        });

        const chatinfo = await Chat.create({
            chatid, message, email,time
        })


        res.json({message: "completed"});
    }

    if (method === "GET") {
        res.json(await Chat.find());
    }
}





