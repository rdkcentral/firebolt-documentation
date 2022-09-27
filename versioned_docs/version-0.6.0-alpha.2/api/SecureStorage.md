---
title: SecureStorage
---

# SecureStorage Module
---
Version 0.6.0

## OpenRPC
This document was generated from an OpenRPC JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module.

For the full schema, see the link below.

| Schema |
|--------|
| [securestorage.json](https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/securestorage.json) |


## Table of Contents
 - [Usage](#usage)
 - [Overview](#overview)
 - [Events](#events)

 - [Methods](#methods)
    - [get](#get)
    - [set](#set)
    - [remove](#remove)
 - [Schemas](#schemas)
    - [StorageScope](#storagescope)

<span></span>

## Usage
To use the SecureStorage module, you can import it into your project from the Firebolt SDK:

```javascript
import { SecureStorage } from '@firebolt-js/sdk'
```
## Overview
A module for storing and retrieving secure data owned by the app.

## Events


## Methods
### get
Get stored value by key.

```typescript
function get(scope: StorageScope, key: string): Promise<string>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `scope` | [`StorageScope`](#storagescope) | true | The scope of the key/value.  |
| `key` | `string` | true | Key to get.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `string` | The retrieved value, if found. |


---

#### Examples

##### Successfully retrieve a refresh token with key 'authRefreshToken'
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { SecureStorage } from '@firebolt-js/sdk'

SecureStorage.get("household", "authRefreshToken")
    .then(value => {
        console.log(value)
    })
```
Value of `value`

```javascript
"VGhpcyBub3QgYSByZWFsIHRva2VuLgo="
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "securestorage.get",
  "params": {
    "scope": "household",
    "key": "authRefreshToken"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "VGhpcyBub3QgYSByZWFsIHRva2VuLgo="
}
```

</details>

##### Attempt to retrieve a a key with no value set.
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { SecureStorage } from '@firebolt-js/sdk'

SecureStorage.get("household", "authRefreshToken")
    .then(value => {
        console.log(value)
    })
```
Value of `value`

```javascript
null
```

</details>
<details>
  <summary><b>JSON-RPC</b></summary>

###### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "securestorage.get",
  "params": {
    "scope": "household",
    "key": "authRefreshToken"
  }
}
```

###### Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": null
}
```

</details>




---

### set
Set or update a secure data value.

```typescript
function set(scope: StorageScope, key: string, value: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `scope` | [`StorageScope`](#storagescope) | true | The scope of the data key.  |
| `key` | `string` | true | Key to set.  |
| `value` | `string` | true | Value to set.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` | whether the call was successful or not |


---

#### Examples

##### Set a refresh token with name 'authRefreshToken'
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { SecureStorage } from '@firebolt-js/sdk'

SecureStorage.set("household", "authRefreshToken", "VGhpcyBub3QgYSByZWFsIHRva2VuLgo=")
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
  "method": "securestorage.set",
  "params": {
    "scope": "household",
    "key": "authRefreshToken",
    "value": "VGhpcyBub3QgYSByZWFsIHRva2VuLgo="
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

### remove
Remove a secure data value.

```typescript
function remove(scope: StorageScope, key: string): Promise<boolean>
```
#### Parameters

| Param                  | Type                 | Required                 | Summary                 |
| ---------------------- | -------------------- | ------------------------ | ----------------------- |
| `scope` | [`StorageScope`](#storagescope) | true | The scope of the data key.  |
| `key` | `string` | true | Key to remove.  |

#### Promise Resolution

| Type | Description |
| ---- | ----------- |
| `boolean` | whether the call was successful or not |


---

#### Examples

##### Remove the value with key 'authRefreshToken'
<details>
  <summary><b>JavaScript</b></summary>

```javascript
import { SecureStorage } from '@firebolt-js/sdk'

SecureStorage.remove("household", "authRefreshToken")
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
  "method": "securestorage.remove",
  "params": {
    "scope": "household",
    "key": "authRefreshToken"
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

### StorageScope

```typescript
type StorageScope = 'household'
```



#### Details

The scope of the data.

---


