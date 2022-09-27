---
title: Device
---

# Device Module
---
Version 0.6.0

## OpenRPC
This document was generated from an OpenRPC JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module.

For the full schema, see the link below.

| Schema |
|--------|
| [device.json](https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/device.json) |


## Table of Contents
 - [Usage](#usage)
 - [Overview](#overview)
 - [Events](#events)
    - [deviceNameChanged](#devicenamechanged)
 - [Methods](#methods)
    - [id](#id)
    - [distributor](#distributor)
    - [platform](#platform)
    - [uid](#uid)
    - [type](#type)
    - [model](#model)
    - [sku](#sku)
    - [make](#make)
    - [version](#version)
    - [hdcp](#hdcp)
    - [hdr](#hdr)
    - [audio](#audio)
    - [screenResolution](#screenresolution)
    - [videoResolution](#videoresolution)
    - [name](#name)
    - [network](#network)
 - [Schemas](#schemas)
    - [Resolution](#resolution)
    - [NetworkType](#networktype)
    - [NetworkState](#networkstate)
    - [AudioProfiles](#audioprofiles)
    - [AudioProfile](#audioprofile)

<span></span>

## Usage
To use the Device module, you can import it into your project from the Firebolt SDK:

```javascript
import { Device } from '@firebolt-js/sdk'
```
## Overview
A module for querying about the device and it's capabilities.

## Events
### deviceNameChanged
Get the human readable name of the device

```typescript
// listen to deviceNameChanged
Device.listen('deviceNameChanged', (data: string) => void): Promise<bigint>

// listen to deviceNameChanged once
Device.once('deviceNameChanged', (data: string) => void): Promise<bigint>

// clear a listener
Device.clear(listenerId?: bigint): void

```
#### Event value

| Type | Description |
| ---- | ----------- |
| `string` | the device friendly-name |


#### Promise Resolution

| Type | Description |
|------|-------------|
| `bigint` | Listener ID to clear() the callback method and stop receiving the event, e.g. `Device.clear(id)` |

#### Examples

##### Getting the device name
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.listen('deviceNameChanged', value => {
  console.log(value)
})
```
Value of `value`

```javascript
"Living Room"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

<h6>Request</h6>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onDeviceNameChanged",
  "params": {}
}
```

<h6>Response</h6>

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Living Room"
}
```

</details>



##### Listen to an event only once
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.listen('deviceNameChanged', (value) => {
  console.log(value)
}).then( (listenerId) => {
  Device.clear(listenerId)
})
```

Alternately, simply call `once()`:

```javascript
Device.once('deviceNameChanged', (value) => {
  console.log(value)
})
```
</details>

##### Clear all listeners for an event
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.clear('deviceNameChanged')
```
</details>

---



## Methods
### id
Get the platform back-office device identifier



To get the property value, use `id()`:

```typescript
function id(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the id |

#### Examples

##### Default Example
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.id()
    .then(id => {
        console.log(id)
    })
```
Value of `value`

```javascript
"123"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.id",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "123"
}
```

</details>








### distributor
Get the distributor ID for this device



To get the property value, use `distributor()`:

```typescript
function distributor(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the distributor ID |

#### Examples

##### Getting the distributor ID
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.distributor()
    .then(distributorId => {
        console.log(distributorId)
    })
```
Value of `value`

```javascript
"Company"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.distributor",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Company"
}
```

</details>








### platform
Get the platform ID for this device



To get the property value, use `platform()`:

```typescript
function platform(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the platform ID |

#### Examples

##### Getting the platform ID
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.platform()
    .then(platformId => {
        console.log(platformId)
    })
```
Value of `value`

```javascript
"WPE"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.platform",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "WPE"
}
```

</details>








### uid
Gets a unique id for the current app & device



To get the property value, use `uid()`:

```typescript
function uid(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | a unique ID |

#### Examples

##### Getting the unique ID
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.uid()
    .then(uniqueId => {
        console.log(uniqueId)
    })
```
Value of `value`

```javascript
"ee6723b8-7ab3-462c-8d93-dbf61227998e"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.uid",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "ee6723b8-7ab3-462c-8d93-dbf61227998e"
}
```

</details>








### type
Get the device type



To get the property value, use `type()`:

```typescript
function type(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the device type |

#### Examples

##### Getting the device type
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.type()
    .then(deviceType => {
        console.log(deviceType)
    })
```
Value of `value`

```javascript
"STB"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.type",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "STB"
}
```

</details>








### model
Get the device model



To get the property value, use `model()`:

```typescript
function model(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the device model |

#### Examples

##### Getting the device model
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.model()
    .then(model => {
        console.log(model)
    })
```
Value of `value`

```javascript
"xi6"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.model",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "xi6"
}
```

</details>








### sku
Get the device sku



To get the property value, use `sku()`:

```typescript
function sku(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the device sku |

#### Examples

##### Getting the device sku
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.sku()
    .then(sku => {
        console.log(sku)
    })
```
Value of `value`

```javascript
"AX061AEI"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.sku",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "AX061AEI"
}
```

</details>








### make
Get the device make



To get the property value, use `make()`:

```typescript
function make(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the device make |

#### Examples

##### Getting the device make
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.make()
    .then(make => {
        console.log(make)
    })
```
Value of `value`

```javascript
"Arris"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.make",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Arris"
}
```

</details>








### version
Get the SDK, OS and other version info



To get the property value, use `version()`:

```typescript
function version(): Promise<object>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| object | the versions |

#### Examples

##### Getting the os and sdk versions
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.version()
    .then(versions => {
        console.log(versions)
    })
```
Value of `value`

```javascript
{
  "sdk": {
    "major": 0,
    "minor": 5,
    "patch": 0,
    "readable": "Firebolt JS SDK v0.5.0"
  },
  "os": {
    "major": 0,
    "minor": 1,
    "patch": 0,
    "readable": "Firebolt OS v0.1.0"
  },
  "debug": ""
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.version",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "sdk": {
      "major": 0,
      "minor": 5,
      "patch": 0,
      "readable": "Firebolt JS SDK v0.5.0"
    },
    "os": {
      "major": 0,
      "minor": 1,
      "patch": 0,
      "readable": "Firebolt OS v0.1.0"
    },
    "debug": ""
  }
}
```

</details>








### hdcp
Get the supported HDCP profiles



To get the property value, use `hdcp()`:

```typescript
function hdcp(): Promise<BooleanMap>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| BooleanMap | the supported HDCP profiles |

#### Examples

##### Getting the supported HDCP profiles
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.hdcp()
    .then(supportedHdcpProfiles => {
        console.log(supportedHdcpProfiles)
    })
```
Value of `value`

```javascript
{
  "hdcp1.4": true,
  "hdcp2.2": true
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.hdcp",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "hdcp1.4": true,
    "hdcp2.2": true
  }
}
```

</details>







To subscribe to the property value, use `hdcp(value => { })`:

```typescript
function hdcp(callback: (supportedHdcpProfiles: BooleanMap) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for hdcp changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Device.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `supportedHdcpProfiles` | [`BooleanMap`](../schemas/types#/definitions/booleanmap) | true | the supported HDCP profiles  |

#### Examples

##### Getting the supported HDCP profiles
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.hdcp(value => {
  console.log(value)
}).then(response => {
  console.log(response)
})
```
Value of `response`

```javascript
{}
```
Value of `value`

```javascript
{
  "hdcp1.4": true,
  "hdcp2.2": true
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onHdcpChanged",
  "params": {
    "listen": true
  }
}
```

###### Response
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
  "result": {
    "hdcp1.4": true,
    "hdcp2.2": true
  }
}
```

</details>




### hdr
Get the supported HDR profiles



To get the property value, use `hdr()`:

```typescript
function hdr(): Promise<BooleanMap>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| BooleanMap | the supported HDR profiles |

#### Examples

##### Getting the supported HDR profiles
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.hdr()
    .then(supportedHdrProfiles => {
        console.log(supportedHdrProfiles)
    })
```
Value of `value`

```javascript
{
  "hdr10": true,
  "hdr10Plus": true,
  "dolbyVision": true,
  "hlg": true
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.hdr",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "hdr10": true,
    "hdr10Plus": true,
    "dolbyVision": true,
    "hlg": true
  }
}
```

</details>







To subscribe to the property value, use `hdr(value => { })`:

```typescript
function hdr(callback: (supportedHdrProfiles: BooleanMap) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for hdr changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Device.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `supportedHdrProfiles` | [`BooleanMap`](../schemas/types#/definitions/booleanmap) | true | the supported HDR profiles  |

#### Examples

##### Getting the supported HDR profiles
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.hdr(value => {
  console.log(value)
}).then(response => {
  console.log(response)
})
```
Value of `response`

```javascript
{}
```
Value of `value`

```javascript
{
  "hdr10": true,
  "hdr10Plus": true,
  "dolbyVision": true,
  "hlg": true
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onHdrChanged",
  "params": {
    "listen": true
  }
}
```

###### Response
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
  "result": {
    "hdr10": true,
    "hdr10Plus": true,
    "dolbyVision": true,
    "hlg": true
  }
}
```

</details>




### audio
Get the supported audio profiles



To get the property value, use `audio()`:

```typescript
function audio(): Promise<AudioProfiles>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| AudioProfiles | the supported audio profiles |

#### Examples

##### Getting the supported audio profiles
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.audio()
    .then(supportedAudioProfiles => {
        console.log(supportedAudioProfiles)
    })
```
Value of `value`

```javascript
{
  "stereo": true,
  "dolbyDigital5.1": true,
  "dolbyDigital5.1+": true,
  "dolbyAtmos": true
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.audio",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "stereo": true,
    "dolbyDigital5.1": true,
    "dolbyDigital5.1+": true,
    "dolbyAtmos": true
  }
}
```

</details>







To subscribe to the property value, use `audio(value => { })`:

```typescript
function audio(callback: (supportedAudioProfiles: AudioProfiles) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for audio changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Device.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `supportedAudioProfiles` | [`AudioProfiles`](#audioprofiles) | true | the supported audio profiles  |

#### Examples

##### Getting the supported audio profiles
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.audio(value => {
  console.log(value)
}).then(response => {
  console.log(response)
})
```
Value of `response`

```javascript
{}
```
Value of `value`

```javascript
{
  "stereo": true,
  "dolbyDigital5.1": true,
  "dolbyDigital5.1+": true,
  "dolbyAtmos": true
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onAudioChanged",
  "params": {
    "listen": true
  }
}
```

###### Response
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
  "result": {
    "stereo": true,
    "dolbyDigital5.1": true,
    "dolbyDigital5.1+": true,
    "dolbyAtmos": true
  }
}
```

</details>




### screenResolution
Get the current screen resolution



To get the property value, use `screenResolution()`:

```typescript
function screenResolution(): Promise<[bigint, bigint]>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| [bigint, bigint] | the resolution |

#### Examples

##### Getting the screen resolution
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.screenResolution()
    .then(screenResolution => {
        console.log(screenResolution)
    })
```
Value of `value`

```javascript
[
  1920,
  1080
]
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.screenResolution",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    1920,
    1080
  ]
}
```

</details>







To subscribe to the property value, use `screenResolution(value => { })`:

```typescript
function screenResolution(callback: (screenResolution: [bigint, bigint]) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for screenResolution changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Device.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `screenResolution` | `[bigint, bigint]` | true | the resolution  |

#### Examples

##### Getting the screen resolution
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.screenResolution(value => {
  console.log(value)
}).then(response => {
  console.log(response)
})
```
Value of `response`

```javascript
{}
```
Value of `value`

```javascript
[
  1920,
  1080
]
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onScreenResolutionChanged",
  "params": {
    "listen": true
  }
}
```

###### Response
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
  "result": [
    1920,
    1080
  ]
}
```

</details>




### videoResolution
Get the current video resolution



To get the property value, use `videoResolution()`:

```typescript
function videoResolution(): Promise<[bigint, bigint]>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| [bigint, bigint] | the resolution |

#### Examples

##### Getting the video resolution
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.videoResolution()
    .then(videoResolution => {
        console.log(videoResolution)
    })
```
Value of `value`

```javascript
[
  1920,
  1080
]
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.videoResolution",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    1920,
    1080
  ]
}
```

</details>







To subscribe to the property value, use `videoResolution(value => { })`:

```typescript
function videoResolution(callback: (videoResolution: [bigint, bigint]) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for videoResolution changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Device.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `videoResolution` | `[bigint, bigint]` | true | the resolution  |

#### Examples

##### Getting the video resolution
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.videoResolution(value => {
  console.log(value)
}).then(response => {
  console.log(response)
})
```
Value of `response`

```javascript
{}
```
Value of `value`

```javascript
[
  1920,
  1080
]
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onVideoResolutionChanged",
  "params": {
    "listen": true
  }
}
```

###### Response
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
  "result": [
    1920,
    1080
  ]
}
```

</details>




### name
The human readable name of the device



To get the property value, use `name()`:

```typescript
function name(): Promise<string>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| string | the device friendly-name |

#### Examples

##### Example value for device name
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.name()
    .then(value => {
        console.log(value)
    })
```
Value of `value`

```javascript
"Living Room"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.name",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "Living Room"
}
```

</details>







To subscribe to the property value, use `name(value => { })`:

```typescript
function name(callback: (value: string) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for name changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Device.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `value` | `string` | true | the device friendly-name  |

#### Examples

##### Example value for device name
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.name(value => {
  console.log(value)
}).then(response => {
  console.log(response)
})
```
Value of `response`

```javascript
{}
```
Value of `value`

```javascript
"Living Room"
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onNameChanged",
  "params": {
    "listen": true
  }
}
```

###### Response
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




### network
Get the current network status and type



To get the property value, use `network()`:

```typescript
function network(): Promise<object>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| object | the status and type |

#### Examples

##### Getting the network info
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Device } from '@firebolt-js/sdk'

Device.network()
    .then(networkInfo => {
        console.log(networkInfo)
    })
```
Value of `value`

```javascript
{
  "state": "connected",
  "type": "wifi"
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.network",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "state": "connected",
    "type": "wifi"
  }
}
```

</details>







To subscribe to the property value, use `network(value => { })`:

```typescript
function network(callback: (networkInfo: object) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for network changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Device.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `networkInfo` | `object` | true | the status and type  |

#### Examples

##### Getting the network info
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Device.network(value => {
  console.log(value)
}).then(response => {
  console.log(response)
})
```
Value of `response`

```javascript
{}
```
Value of `value`

```javascript
{
  "state": "connected",
  "type": "wifi"
}
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "device.onNetworkChanged",
  "params": {
    "listen": true
  }
}
```

###### Response
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
  "result": {
    "state": "connected",
    "type": "wifi"
  }
}
```

</details>






## Schemas

### Resolution

```typescript
type Resolution = [bigint, bigint]
```





---

### NetworkType

```typescript
type NetworkType = 'wifi' | 'ethernet' | 'hybrid'
```



#### Details

The type of network that is currently active

---

### NetworkState

```typescript
type NetworkState = 'connected' | 'disconnected'
```



#### Details

The type of network that is currently active

---

### AudioProfiles

```typescript
type AudioProfiles = {
}
```

See also: 

 - [BooleanMap](../schemas/types#/definitions/booleanmap)
 - [AudioProfile](../schemas/types#/definitions/audioprofile)



---

### AudioProfile

```typescript
type AudioProfile;
```

See also: 

 - [AudioProfile](../schemas/types#/definitions/audioprofile)



---


