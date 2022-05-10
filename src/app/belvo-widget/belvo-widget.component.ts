import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belvo-widget',
  template: `
     <div class="content" role="main">
        <div id="belvo"></div>
     </div>
   `,
  styleUrls: ['./belvo-widget.component.css']
})
export class BelvoWidgetComponent implements OnInit {
  title = 'widget-angular';
  // implemented method
  ngOnInit(): void {
    loadScript('https://cdn.belvo.io/belvo-widget-1-stable.js');
  }
}

// Insert the following code after AppComponent() class from Step 1.
async function createWidget() {
  // Function to call your server-side to generate the access_token and retrieve the your access token
  function getAccessToken() {
      // Make sure to change /get-access-token to point to your server-side.
      return fetch('http://localhost:3000/api/belvotoken', {
              method: 'GET'
          })
          .then(response => response.json())
          .then((data) => data)
          .catch(error => console.error('Error:', error))
  }


  //const successCallbackFunction = (link, institution) => {
      // Do something with the link and institution,
      // such as associate it with your registered user in your database.
  //}
  //const onExitCallbackFunction = (data) => {
      // Do something with the exit data.
  //}
  //const onEventCallbackFunction = (data) => {
      // Do something with the exit data.
  //}

  const config = {

      // Add your startup configuration here.

     // callback: (link, institution) => successCallbackFunction(link, institution),
      //onExit: (data) => onExitCallbackFunction(),
     // onEvent: (data) => onEventCallbackFunction()
  }
  const { access } = await getAccessToken();
  // @ts-ignore
  window.belvoSDK.createWidget(access, config).build();
}

function loadScript(src: string) {
  let node = document.createElement('script');
  node.src = src;
  node.type = 'text/javascript';
  node.async = true;
  // Assign the callback which will create the Widget
  node.onload = createWidget;
  document.getElementsByTagName('head')[0].appendChild(node);
}
