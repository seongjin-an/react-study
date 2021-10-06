import React, {useEffect, useRef} from "react";
import axios from "axios";

export const Player = () => {
    const videoRef = useRef();
    let stream = {
        "365940bc-ce62-4adf-9212-6779bcb8133e": {
            "name": "hah",
            "channels": {
                "0":{
                    "url":"rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
                    "status":1
                }
            }
        }
    }
    let webrtc, webrtcSendChannel
    useEffect(() => {
        startPlay()
        return () => {
            videoRef.current.destory()
        }
    }, [])
    function startPlay() {
        webrtc = new RTCPeerConnection({
            iceServers: [{
                urls: ["stun:stun.l.google.com:19302"]
            }],
            sdpSemantics: "unified-plan"
        });
        webrtc.onnegotiationneeded = handleNegotiationNeeded;
        webrtc.ontrack = function(event) {
            videoRef.current.srcObject = event.streams[0]
        }
        webrtc.addTransceiver('video', {
            'direction': 'sendrecv'
        });
        webrtcSendChannel = webrtc.createDataChannel('foo');


        webrtcSendChannel.onclose = () => {
            startPlay();
            console.log('sendChannel has closed');
        }
        webrtcSendChannel.onopen = () => {
            console.log('sendChannel has opened');
            webrtcSendChannel.send('ping');
            let webrtcSendChannelInterval;
            webrtcSendChannelInterval = setInterval(() => {
                webrtcSendChannel.send('ping');
            }, 1000)
        }

        webrtcSendChannel.onmessage = e => console.log(e.data);
    }
    async function handleNegotiationNeeded() {
        let uuid = "365940bc-ce62-4adf-9212-6779bcb8133e"
        let channel = "0"
        let url = "http://192.168.229.128:8083/stream/" + uuid + "/channel/" + channel + "/webrtc?uuid=" + uuid + '&channel=' + channel;
        let offer = await webrtc.createOffer();

        await webrtc.setLocalDescription(offer);
        const formData =new FormData()
        formData.set('data', btoa(webrtc.localDescription.sdp))
        await axios.post(url, formData)
            .then(data => {
                console.log('.?.?..why w!')
                try {
                    webrtc.setRemoteDescription(new RTCSessionDescription({
                        type: 'answer',
                        sdp: atob(data.data)
                    }))
                } catch (e) {
                    console.warn(e);
                }
            })
            .catch(error => console.log(error))
    }
    return<div>
        <video ref={videoRef} id="videoPlayer" autoPlay controls muted playsInline/>
    </div>
}