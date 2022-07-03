# Getting Started with Create React App

Online Philips Hue Bridge username generator to use the local Philips Hue API.

If you want to, you can use the online version at https://hue-username-generator.vercel.app. It also works offline and no data is sent to any server. It doesn't work with Firefox because Firefox blocks all requests to the local bridge ip. In my tests, it worked with Chromium-based browsers (e.g. Chrome or Edge). However, after the first request is sent, the page is classified as "Not Secure". But only as long as you stay on the page, when you open it again, everything is back to normal.