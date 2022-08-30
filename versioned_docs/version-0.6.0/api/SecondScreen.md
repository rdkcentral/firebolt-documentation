---
title: SecondScreen
---

# SecondScreen Module
---
Version 0.6.0

## Overview
 Methods for communicating with second screen devices

## OpenRPC
Firebolt APIs are maintained in the [rdkcentral/firebolt-core-sdk](https://github.com/rdkcentral/firebolt-core-sdk) GitHub repository.

You can see this API in the [secondscreen.json](https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/secondscreen.json) OpenRPC JSON-Schema document. 

## Table of Contents
 - [Overview](#overview)
 - [OpenRPC](#openrpc)
 - [Usage](#usage)
 - [Methods](#methods)
    - [device](#device)
    - [friendlyName](#friendlyname)
    - [listen](#listen)
    - [once](#once)
    - [protocols](#protocols)
- [Events](#events)
    - [closeRequest](#closerequest)
    - [launchRequest](#launchrequest)
- [Schemas](#schemas)
<span></span>

## Usage
To use the SecondScreen module, you can import it into your project from the Firebolt SDK:

```javascript
import { SecondScreen } from '@firebolt-js/sdk'
```
## Methods
### device
Get the broadcasted id for the device

```typescript
function device(type?: string): Promise<string>
```
Parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `type` | `string` | false | The type of second screen protocol, e.g. "dial"  |

Promise resolution:

| Type | Description |
| ---- | ----------- |
| `string` | the device id |


**Examples**

Default Example

JavaScript:

```javascript
import { SecondScreen } from '@firebolt-js/sdk'

SecondScreen.device(null)
    .then(deviceId => {
        console.log(deviceId)
    })
```
Value of `deviceId`:

```javascript
"device-id"
```

<details>
  <summary>JSON-RPC:</summary>

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "secondscreen.device",
  "params": {}
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "device-id"
}
```

</details>



---

### friendlyName
Get the broadcasted friendly name for the device



To get the value, call the method with no parameters:

```typescript
function friendlyName(): Promise<string>
```

Promise resolution:

| Type | Description |
| ---- | ----------- |
| `string` | the device friendly-name |


**Examples**

Default Example

JavaScript:

```javascript
import { SecondScreen } from '@firebolt-js/sdk'

SecondScreen.friendlyName(null)
    .then(friendlyName => {
        console.log(friendlyName)
    })
```
Value of `friendlyName`:

```javascript
"Living Room"
```

<details>
  <summary>JSON-RPC:</summary>

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "secondscreen.friendlyName",
  "params": {}
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Living Room"
}
```

</details>







To subscribe to notifications when the value changes, pass a function as the only parameter:

```typescript
function friendlyName(subscriber: (friendlyName: string) => void): Promise<boolean>
```

Parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `subscriber` | `Function` | Yes | A callback that gets invoked when the value for friendlyName changes |

Promise resolution:

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with SecondScreen.clear(listenerId) to unsubscribe |

Callback parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `friendlyName` | `string` | Yes | the device friendly-name  |

**Examples**

Default Example


JavaScript:

```javascript
import { SecondScreen } from '@firebolt-js/sdk'

SecondScreen.friendlyName(friendlyName => {
  // property value was changed
  console.log(friendlyName)
}).then(listenerId => {
  // you can clear this listener w/ SecondScreen.clear(listenerId)
})
```

value of `friendlyName`:

```javascript
"Living Room"
```

<details>
  <summary>JSON-RPC:</summary>

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "secondscreen.onFriendlyNameChanged",
  "params": {
    "listen": true
  }
}
```

Response:
```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    "listening": "true"
  }
}
```

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Living Room"
}
```

</details>



---


### listen
Listen for events from this module.

To listen to a specific event pass the event name as the first parameter:

```typescript
SecondScreen.listen(event: string, (data: any) => void): Promise<bigint>
```

Parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `event` | `string` | Yes | The event to listen for, see [Events](#events). |
| *callback* | `function` | Yes | A function that will be invoked when the event occurs. |

Promise resolution:

| Type | Description |
|------|-------------|
| `bigint` | Listener ID to clear the callback method and stop receiving the event, e.g. `SecondScreen.clear(id)` |

Callback parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `data` | `any` | Yes | The event data, which depends on which event is firing, see [Events](#events). |

To listen to all events from this module  pass only a callback, without specifying an event name:

```typescript
SecondScreen.listen((event: string, data: any) => void): Promise<bigint>
```

Parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| *callback* | `function` | Yes | A function that will be invoked when the event occurs. The event data depends on which event is firing, see [Events](#events). |


Callback parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `event` | `string` | Yes | The event that has occured listen for, see [Events](#events). |
| `data` | `any` | Yes | The event data, which depends on which event is firing, see [Events](#events). |


Promise resolution:

| Type | Description |
|------|-------------|
| `bigint` | Listener ID to clear the callback method and stop receiving the event, e.g. `SecondScreen.clear(id)` |

See [Listening for events](../../docs/listening-for-events/) for more information and examples.

---

### once
Listen for only one occurance of an event from this module. The callback will be cleared after one event.

To listen to a specific event pass the event name as the first parameter:

```typescript
SecondScreen.once(event: string, (data: any) => void): Promise<bigint>
```

Parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `event` | `string` | Yes | The event to listen for, see [Events](#events). |
| *callback* | `function` | Yes | A function that will be invoked when the event occurs. |

Promise resolution:

| Type | Description |
|------|-------------|
| `bigint` | Listener ID to clear the callback method and stop receiving the event, e.g. `SecondScreen.clear(id)` |

Callback parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `data` | `any` | Yes | The event data, which depends on which event is firing, see [Events](#events). |

To listen to all events from this module  pass only a callback, without specifying an event name:

```typescript
SecondScreen.once((event: string, data: any) => void): Promise<bigint>
```

Parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| *callback* | `function` | Yes | A function that will be invoked when the event occurs. The event data depends on which event is firing, see [Events](#events). |


Callback parameters:

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `event` | `string` | Yes | The event that has occured listen for, see [Events](#events). |
| `data` | `any` | Yes | The event data, which depends on which event is firing, see [Events](#events). |


Promise resolution:

| Type | Description |
|------|-------------|
| `bigint` | Listener ID to clear the callback method and stop receiving the event, e.g. `SecondScreen.clear(id)` |

See [Listening for events](../../docs/listening-for-events/) for more information and examples.

---

### protocols
Get the supported second screen discovery protocols

```typescript
function protocols(): Promise<BooleanMap>
```
Promise resolution:

| Type | Description |
| ---- | ----------- |
| [`BooleanMap`](../schemas/types#/definitions/booleanmap) | the supported protocols |


**Examples**

Default Example

JavaScript:

```javascript
import { SecondScreen } from '@firebolt-js/sdk'

SecondScreen.protocols()
    .then(protocols => {
        console.log(protocols)
    })
```
Value of `protocols`:

```javascript
{
  "dial1.7": true
}
```

<details>
  <summary>JSON-RPC:</summary>

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "secondscreen.protocols",
  "params": {}
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "dial1.7": true
  }
}
```

</details>



---



## Events

### closeRequest
Listen to the closeRequest event

See also: [listen()](#listen), [once()](#listen), [clear()](#listen).
Event value:

| Type | Description |
| ---- | ----------- |
| [`SecondScreenEvent`](../schemas/secondscreen#/definitions/secondscreenevent) | An a message notification from a second screen device |


**Examples**

Default Example:

JavaScript:

```javascript
import { SecondScreen } from '@firebolt-js/sdk'

SecondScreen.listen('closeRequest', closeRequestEvent => {
  console.log(closeRequestEvent)
})
```
Value of `closeRequestEvent`

```javascript
{
  "type": "dial",
  "version": "1.7"
}
```

<details>
  <summary>JSON-RPC:</summary>

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "secondscreen.onCloseRequest",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "type": "dial",
    "version": "1.7"
  }
}
```

</details>



---

### launchRequest
Listen to the launchRequest event

See also: [listen()](#listen), [once()](#listen), [clear()](#listen).
Event value:

| Type | Description |
| ---- | ----------- |
| [`SecondScreenEvent`](../schemas/secondscreen#/definitions/secondscreenevent) | An a message notification from a second screen device |


**Examples**

Default Example:

JavaScript:

```javascript
import { SecondScreen } from '@firebolt-js/sdk'

SecondScreen.listen('launchRequest', launchRequestEvent => {
  console.log(launchRequestEvent)
})
```
Value of `launchRequestEvent`

```javascript
{
  "type": "dial",
  "version": "1.7",
  "data": "{\"code\":\"AQDPQZiQcb3KQ7gY7yy5tHTMbbkGHR9Zjp-KL53H3eKBZIeAt7O9UKYPu6B21l2UZVmIqkFXDXBmXvK4g2e3EgZtjMNmKPsTltgnRl95DImtOXjSpWtTjSaOkW4w1kZKUTwLKdwVWTzBVH8ERHorvLU6vCGOVHxXt65LNwdl5HKRweShVC1V9QsyvRnQS61ov0UclmrH_xZML2Bt-Q-rZFjey5MjwupIb4x4f53XUJMhjHpDHoIUKrjpdPDQvK2a\",\"friendlyName\":\"Operator_TX061AEI\",\"UDN\":\"608fef11-2800-482a-962b-23a6690c93c1\"}"
}
```

<details>
  <summary>JSON-RPC:</summary>

Request:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "secondscreen.onLaunchRequest",
  "params": {
    "listen": true
  }
}
```

Response:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "type": "dial",
    "version": "1.7",
    "data": "{\"code\":\"AQDPQZiQcb3KQ7gY7yy5tHTMbbkGHR9Zjp-KL53H3eKBZIeAt7O9UKYPu6B21l2UZVmIqkFXDXBmXvK4g2e3EgZtjMNmKPsTltgnRl95DImtOXjSpWtTjSaOkW4w1kZKUTwLKdwVWTzBVH8ERHorvLU6vCGOVHxXt65LNwdl5HKRweShVC1V9QsyvRnQS61ov0UclmrH_xZML2Bt-Q-rZFjey5MjwupIb4x4f53XUJMhjHpDHoIUKrjpdPDQvK2a\",\"friendlyName\":\"Operator_TX061AEI\",\"UDN\":\"608fef11-2800-482a-962b-23a6690c93c1\"}"
  }
}
```

</details>



---



### Additional events
The following events are documented as part of a related set of method APIs.

For more information, follow the links under the "Documentation" column.

| JavaScript | RPC | Payload | Documentation |
|-------|---------|----------|-------------|
| friendlyNameChanged | onFriendlyNameChanged | string | [friendlyName](#friendlyname) |


