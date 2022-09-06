---
title: Voice Guidance
---

# Voice Guidance
With accessibility settings, it’s important that your app follows your user’s device settings. When an app starts up it should grab your user’s current device accessibility settings and adapt to system accessibility changes that your user makes.

## Reading device settings
In order to access your user's voice guidance settings, your app can call the `Accessibility.voiceGuidance()` method from the [Accessibility](/api/accessibility/) API:

```javascript 
import { Accessibility } from '@firebolt-js/sdk'

const vgSettings = await Accessibility.voiceGuidance()

if (vgSettings.enabled) {
  // the user has voice guidance enabled
}
``` 

Additionally, your app should respect your user's current voice guidance speed preference. The voice guidance speed determines how quickly or slowly the voice reads the on-screen elements. Continuing from the previous example, you can access the `speed` property:


```javascript
console.log(vgSettings.speed)
```

See the [Voice Guidance](/api/accessibility/#voiceguidance) API for more info on voice guidance properties.

## Adapting to real-time changes
While your app is running, or even while your app is playing content, your user may change the voice guidance settings on their device. Your app should promptly respond to this change by listening to all `voiceGuidanceSettingsChanged` events:

```javascript
import { Accessibility } from '@firebolt-js/sdk'

Accessibility.listen(`voiceGuidanceSettingsChanged`, vgSettings => {
  // vgSettings is the same structure returned from `voiceGuidance()`
  if (vgSettings.enabled) {
    // update your app's voice guidance speed
    console.log(vgSettings.speed)
  }
  else {
    // turn off your app's voice guidance
  }
})
```
