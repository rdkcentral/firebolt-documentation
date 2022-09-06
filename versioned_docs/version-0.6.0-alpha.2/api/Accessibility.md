---
title: Accessibility
---

# Accessibility Module
---
Version 0.6.0

## OpenRPC
This document was generated from an OpenRPC JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module.

For the full schema, see the link below.

| Schema |
|--------|
| [accessibility.json](https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/accessibility.json) |


## Table of Contents
 - [Usage](#usage)
 - [Overview](#overview)
 - [Events](#events)

 - [Methods](#methods)
    - [closedCaptions](#closedcaptions)
    - [closedCaptionsSettings](#closedcaptionssettings)
    - [voiceGuidance](#voiceguidance)
    - [voiceGuidanceSettings](#voiceguidancesettings)
 - [Schemas](#schemas)
    - [ClosedCaptionsStyles](#closedcaptionsstyles)
    - [ClosedCaptionsSettings](#closedcaptionssettings)
    - [VoiceGuidanceSettings](#voiceguidancesettings)

<span></span>

## Usage
To use the Accessibility module, you can import it into your project from the Firebolt SDK:

```javascript
import { Accessibility } from '@firebolt-js/sdk'
```
## Overview
The `Accessibility` module provides access to the user/device settings for closed captioning and voice guidance.

Apps **SHOULD** attempt o respect these settings, rather than manage and persist seprate settings, which would be different per-app.

## Events


## Methods
### closedCaptions
Get the user's preferred closed-captions settings

```typescript
function closedCaptions(): Promise<ClosedCaptionsSettings>
```
#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| [`ClosedCaptionsSettings`](#closedcaptionssettings) | the closed captions settings |


---

#### Examples

##### Getting the closed captions settings
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Accessibility } from '@firebolt-js/sdk'

Accessibility.closedCaptions()
    .then(closedCaptionsSettings => {
        console.log(closedCaptionsSettings)
    })
```
Value of `closedCaptionsSettings`

```javascript
{
  "enabled": true,
  "styles": {
    "fontFamily": "Monospace sans-serif",
    "fontSize": 1,
    "fontColor": "#ffffff",
    "fontEdge": "none",
    "fontEdgeColor": "#7F7F7F",
    "fontOpacity": 100,
    "backgroundColor": "#000000",
    "backgroundOpacity": 100,
    "textAlign": "center",
    "textAlignVertical": "middle"
  }
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
  "method": "accessibility.closedCaptions",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "enabled": true,
    "styles": {
      "fontFamily": "Monospace sans-serif",
      "fontSize": 1,
      "fontColor": "#ffffff",
      "fontEdge": "none",
      "fontEdgeColor": "#7F7F7F",
      "fontOpacity": 100,
      "backgroundColor": "#000000",
      "backgroundOpacity": 100,
      "textAlign": "center",
      "textAlignVertical": "middle"
    }
  }
}
```

</details>




---

### closedCaptionsSettings
Get the user's preferred closed-captions settings



To get the property value, use `closedCaptionsSettings()`:

```typescript
function closedCaptionsSettings(): Promise<ClosedCaptionsSettings>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| ClosedCaptionsSettings | the closed captions settings |

#### Examples

##### Getting the closed captions settings
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Accessibility } from '@firebolt-js/sdk'

Accessibility.closedCaptionsSettings()
    .then(closedCaptionsSettings => {
        console.log(closedCaptionsSettings)
    })
```
Value of `value`

```javascript
{
  "enabled": true,
  "styles": {
    "fontFamily": "Monospace sans-serif",
    "fontSize": 1,
    "fontColor": "#ffffff",
    "fontEdge": "none",
    "fontEdgeColor": "#7F7F7F",
    "fontOpacity": 100,
    "backgroundColor": "#000000",
    "backgroundOpacity": 100,
    "textAlign": "center",
    "textAlignVertical": "middle"
  }
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
  "method": "accessibility.closedCaptionsSettings",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "enabled": true,
    "styles": {
      "fontFamily": "Monospace sans-serif",
      "fontSize": 1,
      "fontColor": "#ffffff",
      "fontEdge": "none",
      "fontEdgeColor": "#7F7F7F",
      "fontOpacity": 100,
      "backgroundColor": "#000000",
      "backgroundOpacity": 100,
      "textAlign": "center",
      "textAlignVertical": "middle"
    }
  }
}
```

</details>







To subscribe to the property value, use `closedCaptionsSettings(value => { })`:

```typescript
function closedCaptionsSettings(callback: (closedCaptionsSettings: ClosedCaptionsSettings) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for closedCaptionsSettings changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Accessibility.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `closedCaptionsSettings` | [`ClosedCaptionsSettings`](#closedcaptionssettings) | true | the closed captions settings  |

#### Examples

##### Getting the closed captions settings
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Accessibility.closedCaptionsSettings(value => {
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
  "enabled": true,
  "styles": {
    "fontFamily": "Monospace sans-serif",
    "fontSize": 1,
    "fontColor": "#ffffff",
    "fontEdge": "none",
    "fontEdgeColor": "#7F7F7F",
    "fontOpacity": 100,
    "backgroundColor": "#000000",
    "backgroundOpacity": 100,
    "textAlign": "center",
    "textAlignVertical": "middle"
  }
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
  "method": "accessibility.onClosedCaptionsSettingsChanged",
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
    "enabled": true,
    "styles": {
      "fontFamily": "Monospace sans-serif",
      "fontSize": 1,
      "fontColor": "#ffffff",
      "fontEdge": "none",
      "fontEdgeColor": "#7F7F7F",
      "fontOpacity": 100,
      "backgroundColor": "#000000",
      "backgroundOpacity": 100,
      "textAlign": "center",
      "textAlignVertical": "middle"
    }
  }
}
```

</details>




### voiceGuidance
Get the user's preferred voice guidance settings

```typescript
function voiceGuidance(): Promise<VoiceGuidanceSettings>
```
#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| [`VoiceGuidanceSettings`](#voiceguidancesettings) | the voice guidance settings |


---

#### Examples

##### Getting the voice guidance settings
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Accessibility } from '@firebolt-js/sdk'

Accessibility.voiceGuidance()
    .then(settings => {
        console.log(settings)
    })
```
Value of `settings`

```javascript
{
  "enabled": true,
  "speed": 5
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
  "method": "accessibility.voiceGuidance",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "enabled": true,
    "speed": 5
  }
}
```

</details>




---

### voiceGuidanceSettings
Get the user's preferred voice guidance settings



To get the property value, use `voiceGuidanceSettings()`:

```typescript
function voiceGuidanceSettings(): Promise<VoiceGuidanceSettings>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| VoiceGuidanceSettings | the voice guidance settings |

#### Examples

##### Getting the voice guidance settings
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { Accessibility } from '@firebolt-js/sdk'

Accessibility.voiceGuidanceSettings()
    .then(settings => {
        console.log(settings)
    })
```
Value of `value`

```javascript
{
  "enabled": true,
  "speed": 5
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
  "method": "accessibility.voiceGuidanceSettings",
  "params": {}
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "enabled": true,
    "speed": 5
  }
}
```

</details>







To subscribe to the property value, use `voiceGuidanceSettings(value => { })`:

```typescript
function voiceGuidanceSettings(callback: (settings: VoiceGuidanceSettings) => any): Promise<boolean>
```

#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `callback` | `function` | Yes | A callback that gets invoked when the value for voiceGuidanceSettings changes |

#### Promise Resolution

| Type | Summary |
| ---- | ------- |
| `listenerId` | The id of the listener that can be used with Accessibility.clear(listenerId) to unsubscribe |

#### Callback Parameters
| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `settings` | [`VoiceGuidanceSettings`](#voiceguidancesettings) | true | the voice guidance settings  |

#### Examples

##### Getting the voice guidance settings
<details>
  <summary><b>JavaScript</b></summary>

```javascript
Accessibility.voiceGuidanceSettings(value => {
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
  "enabled": true,
  "speed": 5
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
  "method": "accessibility.onVoiceGuidanceSettingsChanged",
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
    "enabled": true,
    "speed": 5
  }
}
```

</details>






## Schemas

### ClosedCaptionsStyles

```typescript
type ClosedCaptionsStyles = {
  fontFamily?: string
  fontSize?: number
  fontColor?: string
  fontEdge?: string
  fontEdgeColor?: string
  fontOpacity?: number
  backgroundColor?: string
  backgroundOpacity?: number
  textAlign?: string
  textAlignVertical?: string
}
```



#### Details

The default styles to use when displaying closed-captions

---

### ClosedCaptionsSettings

```typescript
type ClosedCaptionsSettings = {
  enabled: boolean               // Whether or not closed-captions should be enabled by default
  styles: ClosedCaptionsStyles   // The default styles to use when displaying closed-captions
}
```





---

### VoiceGuidanceSettings

```typescript
type VoiceGuidanceSettings = {
  enabled: boolean              // Whether or not voice guidance should be enabled by default
  speed: number                 // The speed at which voice guidance speech will be read back to the user
}
```





---


