# Getting Started with Create React App

Online Philips Hue Bridge username generator to use the local Philips Hue API.

If you want to, you can use the online version at https://hue-username-generator.vercel.app. It also works offline and no data is sent to any server. Because the app has to use HTTPS requests to the bridge (HTTP doesn't work, you can't send an http request from an https website) the browser has to recognize the bridge's self-signed certificate as valid in order to be able to send requests. To do this, open your bridge's website as an https website (https://YOUR_IP) and follow the instructions so that you can access the page.