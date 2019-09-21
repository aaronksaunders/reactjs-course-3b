import React from "react";

import {
  Plugins,
  Capacitor,
  CameraSource,
  CameraResultType
} from "@capacitor/core";
const { Camera } = Plugins;

let doShare = () => {
  // this is the complete list of currently supported params you can pass to the plugin (all optional)
  var options = {
    message: "share this", // not supported on some apps (Facebook, Instagram)
    subject: "the subject", // fi. for email
    files: ["", ""], // an array of filenames either locally or remotely
    url: "https://www.website.com/foo/#bar?a=b",
    chooserTitle: "Pick an app", // Android only, you can override the default share sheet title
    appPackageName: "com.apple.social.facebook", // Android only, you can provide id of the App you want to share with
    iPadCoordinates: "0,0,0,0" //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
  };

  var onSuccess = function(result) {
    console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
    console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
  };

  var onError = function(msg) {
    console.log("Sharing failed with message: " + msg);
  };

  window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
};

let takePicture = async () => {
  let isAvailable = true;

  if (!isAvailable) {
    // Have the user upload a file instead
    alert("No Camera Aailable");
  } else {
    // Otherwise, make the call:

    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt
      });
      console.log("image", image);
      // image.base64_data will contain the base64 encoded result as a JPEG, with the data-uri prefix added
      this.imageUrl = image.dataUrl;
      // can be set to the src of an image now

      console.log(image);
    } catch (e) {
      console.log("error", e);
    }
  }
};

export default props => (
  <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
    <h2>Page Two Component</h2>
    <h3>
      Demonstrating Simple Page Navigation And Native Mobile Functionality w/
      <a href="https://capacitor.ionicframework.com/docs/getting-started/">
        Ionic Framwork Capacitor
      </a>
    </h3>
    <p>
      When deployed to mobile phone or simulator we have integrated a{" "}
      <a href="https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin">
        Share Sheet Plugin
      </a>{" "}
      and the{" "}
      <a href="https://github.com/apache/cordova-plugin-camera">
        Camera Plugin
      </a>
    </p>
    <p></p>
    <button onClick={() => props.history.goBack()}>Back</button>
    <button onClick={() => takePicture()}>Camera</button>
    <button onClick={() => doShare()}>Share Button</button>
  </div>
);
