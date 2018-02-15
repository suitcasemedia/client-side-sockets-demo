const wsUri = "ws://echo.websocket.org/"
export const websocket = new WebSocket(wsUri)



export const testWebSocket = () =>
{
 // const websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

const onOpen = (evt) =>
{
  writeToScreen("CONNECTED");
  doSend("WebSocket rocks");
}

const  onClose = (evt) =>
{
  writeToScreen("DISCONNECTED");
}

const  onMessage = (evt) =>
{
  writeToScreen('RESPONSE: '+  evt.data);
  websocket.close();
}

const  onError = (evt) =>
{
  writeToScreen('ERROR: ' + evt.data);
}

const doSend = (message) =>
{
  writeToScreen("SENT: " + message);
  websocket.send(message);
}

const  writeToScreen = (message) =>
{
  console.log(message)
}