---
title: Metrics
---

# Metrics Module
---
Version 0.6.0-alpha.1

## OpenRPC
This document was generated from an OpenRPC JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module.

For the full schema, see the link below.

| Schema |
|--------|
| [metrics.json](https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/metrics.json) |


## Table of Contents
 - [Usage](#usage)
 - [Overview](#overview)
 - [Events](#events)

 - [Methods](#methods)
    - [ready](#ready)
    - [signIn](#signin)
    - [signOut](#signout)
    - [startContent](#startcontent)
    - [stopContent](#stopcontent)
    - [page](#page)
    - [action](#action)
    - [error](#error)
    - [mediaLoadStart](#medialoadstart)
    - [mediaPlay](#mediaplay)
    - [mediaPlaying](#mediaplaying)
    - [mediaPause](#mediapause)
    - [mediaWaiting](#mediawaiting)
    - [mediaProgress](#mediaprogress)
    - [mediaSeeking](#mediaseeking)
    - [mediaSeeked](#mediaseeked)
    - [mediaRateChange](#mediaratechange)
    - [mediaRenditionChange](#mediarenditionchange)
    - [mediaEnded](#mediaended)
 - [Schemas](#schemas)
    - [MediaPosition](#mediaposition)
    - [ErrorType](#errortype)

<span></span>

## Usage
To use the Metrics module, you can import it into your project from the Firebolt SDK:

```javascript
import { Metrics } from '@firebolt-js/sdk'
```
## Overview
Methods for sending metrics

## Events


## Methods
### ready
Inform the platform that your app is minimally usable. This method is called automatically by `Lifecycle.ready()`




#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send ready metric
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.ready",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### signIn
Log a sign in event, called by Discovery.signIn().




#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send signIn metric
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.signIn",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>

##### Send signIn metric with entitlements
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.signIn",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### signOut
Log a sign out event, called by Discovery.signOut().




#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send signOut metric
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.signOut",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### startContent
Inform the platform that your user has started content.

```typescript
function startContent(entityId?: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | false | Optional entity ID of the content.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send startContent metric
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.startContent(null)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.startContent",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>

##### Send startContent metric w/ entity
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.startContent("abc")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.startContent",
  "params": {
    "entityId": "abc"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### stopContent
Inform the platform that your user has stopped content.

```typescript
function stopContent(entityId?: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | false | Optional entity ID of the content.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send stopContent metric
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.stopContent(null)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.stopContent",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>

##### Send stopContent metric w/ entity
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.stopContent("abc")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.stopContent",
  "params": {
    "entityId": "abc"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### page
Inform the platform that your user has navigated to a page or view.

```typescript
function page(pageId: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `pageId` | `string` | true | Page ID of the content.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send page metric
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.page(null)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.page",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>

##### Send startContent metric w/ entity
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.page("home")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.page",
  "params": {
    "pageId": "home"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### action
Inform the platform of something not covered by other Metrics APIs.

```typescript
function action(category: 'user' | 'app', type: string, parameters?: FlatMap): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `category` | `'user' | 'app'` | true | The category of action being logged. Must be 'user' for user-initated actions or 'app' for all other actions  |
| `type` | `string` | true | A short, indexible identifier for the action, e.g. 'SignIn Prompt Displayed' <br/>maxLength: 256
maxLength: 256 |
| `parameters` | [`FlatMap`](../schemas/types#/definitions/flatmap) | false |   |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send page metric
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.action(null, null, null)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.action",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>

##### Send startContent metric w/ entity
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.action(null, null, null)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.action",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### error
Inform the platform of an error that has occured in your app.

```typescript
function error(type: ErrorType, code: string, description: string, visible: boolean, parameters?: FlatMap): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `type` | [`ErrorType`](#errortype) | true | The type of error  |
| `code` | `string` | true | an app-specific error code  |
| `description` | `string` | true | A short description of the error  |
| `visible` | `boolean` | true | Whether or not this error was visible to the user.  |
| `parameters` | [`FlatMap`](../schemas/types#/definitions/flatmap) | false | Optional additional parameters to be logged with the error  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send error metric
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.error("media", "MEDIA-STALLED", "playback stalled", true, null)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.error",
  "params": {
    "type": "media",
    "code": "MEDIA-STALLED",
    "description": "playback stalled",
    "visible": true
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaLoadStart
Called when setting the URL of a media asset to play, in order to infer load time.

```typescript
function mediaLoadStart(entityId: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send loadstart metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaLoadStart("345")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaLoadStart",
  "params": {
    "entityId": "345"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaPlay
Called when media playback should start due to autoplay, user-initiated play, or unpausing.

```typescript
function mediaPlay(entityId: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send play metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaPlay("345")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaPlay",
  "params": {
    "entityId": "345"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaPlaying
Called when media playback actually starts due to autoplay, user-initiated play, unpausing, or recovering from a buffering interuption.

```typescript
function mediaPlaying(entityId: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send playing metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaPlaying("345")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaPlaying",
  "params": {
    "entityId": "345"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaPause
Called when media playback will pause due to an intentional pause operation.

```typescript
function mediaPause(entityId: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send pause metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaPause("345")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaPause",
  "params": {
    "entityId": "345"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaWaiting
Called when media playback will halt due to a network, buffer, or other unintentional constraint.

```typescript
function mediaWaiting(entityId: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send waiting metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaWaiting("345")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaWaiting",
  "params": {
    "entityId": "345"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaProgress
Called every 60 seconds as media playback progresses.

```typescript
function mediaProgress(entityId: string, progress: MediaPosition): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |
| `progress` | [`MediaPosition`](#mediaposition) | true | Progress of playback, as a decimal percentage (0-0.999) for content with a known duration, or an integer number of seconds (0-86400) for content with an unknown duration. <br/>See OpenRPC Schema for `oneOf` and `anyOf` details |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send progress metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaProgress("345", 0.75)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaProgress",
  "params": {
    "entityId": "345",
    "progress": 0.75
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaSeeking
Called when a seek is initiated during media playback.

```typescript
function mediaSeeking(entityId: string, target: MediaPosition): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |
| `target` | [`MediaPosition`](#mediaposition) | true | Target destination of the seek, as a decimal percentage (0-0.999) for content with a known duration, or an integer number of seconds (0-86400) for content with an unknown duration. <br/>See OpenRPC Schema for `oneOf` and `anyOf` details |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send seeking metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaSeeking("345", 0.5)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaSeeking",
  "params": {
    "entityId": "345",
    "target": 0.5
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaSeeked
Called when a seek is completed during media playback.

```typescript
function mediaSeeked(entityId: string, position: MediaPosition): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |
| `position` | [`MediaPosition`](#mediaposition) | true | Resulting position of the seek operation, as a decimal percentage (0-0.999) for content with a known duration, or an integer number of seconds (0-86400) for content with an unknown duration. <br/>See OpenRPC Schema for `oneOf` and `anyOf` details |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send seeked metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaSeeked("345", 0.51)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaSeeked",
  "params": {
    "entityId": "345",
    "position": 0.51
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaRateChange
Called when the playback rate of media is changed.

```typescript
function mediaRateChange(entityId: string, rate: number): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |
| `rate` | `number` | true | The new playback rate.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send ratechange metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaRateChange("345", 2)
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaRateChange",
  "params": {
    "entityId": "345",
    "rate": 2
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaRenditionChange
Called when the playback rendition (e.g. bitrate, dimensions, profile, etc) is changed.

```typescript
function mediaRenditionChange(entityId: string, bitrate: number, width: number, height: number, profile?: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |
| `bitrate` | `number` | true | The new bitrate in kbps.  |
| `width` | `number` | true | The new resolution width.  |
| `height` | `number` | true | The new resolution height.  |
| `profile` | `string` | false | A description of the new profile, e.g. 'HDR' etc.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send renditionchange metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaRenditionChange("345", 5000, 1920, 1080, "HDR+")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaRenditionChange",
  "params": {
    "entityId": "345",
    "bitrate": 5000,
    "width": 1920,
    "height": 1080,
    "profile": "HDR+"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---

### mediaEnded
Called when playback has stopped because the end of the media was reached.

```typescript
function mediaEnded(entityId: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `entityId` | `string` | true | The entityId of the media.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` |  |


---

#### Examples

##### Send ended metric.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Metrics } from '@firebolt-js/sdk'

Metrics.mediaEnded("345")
    .then(success => {
        console.log(success)
    })
```
Value of `success`

```javascript
true
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "metrics.mediaEnded",
  "params": {
    "entityId": "345"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": true
}
```

</details>




---



## Schemas

### MediaPosition

```typescript
type MediaPosition = void | number | bigint
```



#### Details

Represents a position inside playback content, as a decimal percentage (0-0.999) for content with a known duration, or an integer number of seconds (0-86400) for content with an unknown duration.

---

### ErrorType

```typescript
type ErrorType = 'network' | 'media' | 'restriction' | 'entitlement' | 'other'
```





---


