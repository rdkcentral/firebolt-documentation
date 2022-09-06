---
title: Types
---
# Types Schema
---
Version 0.6.0


## JSON-Schema
This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module.

For the full schema, see the link below.

| Schema |
|--------|
| [types.json](https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/types.json) |

## Table of Contents
 
 - Schemas
    - [SemanticVersion](#semanticversion)
    - [AudioProfile](#audioprofile)
    - [BooleanMap](#booleanmap)
    - [FlatMap](#flatmap)
    - [LocalizedString](#localizedstring)
    - [ListenResponse](#listenresponse)

## Schemas

### SemanticVersion

```typescript
type SemanticVersion = {
  major: bigint
  minor: bigint
  patch: bigint
  readable: string
}
```




<details>
  <summary><b>Examples</b></summary>

```json
```

</details>

---

### AudioProfile

```typescript
type AudioProfile = 'stereo' | 'dolbyDigital5.1' | 'dolbyDigital7.1' | 'dolbyDigital5.1+' | 'dolbyDigital7.1+' | 'dolbyAtmos'
```




<details>
  <summary><b>Examples</b></summary>

```json
```

</details>

---

### BooleanMap

```typescript
type BooleanMap = {
}
```




<details>
  <summary><b>Examples</b></summary>

```json
```

</details>

---

### FlatMap

```typescript
type FlatMap = {
}
```




<details>
  <summary><b>Examples</b></summary>

```json
```

</details>

---

### LocalizedString

```typescript
type LocalizedString = string | object
```




<details>
  <summary><b>Examples</b></summary>

```json
"A simple string, with no language code"

{
  "en": "This is english",
  "es": "esto es español"
}
```

</details>

#### Details

Localized string supports either a simple `string` or a Map<string, string> of language codes to strings. When using a simple `string`, the current preferred langauge from `Localization.langauge()` is assumed.

---

### ListenResponse

```typescript
type ListenResponse = {
  event: string
  listening: boolean
}
```




<details>
  <summary><b>Examples</b></summary>

```json
```

</details>

---


