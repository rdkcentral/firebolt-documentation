---
title: Closed Captions
---
# Closed Captions (CC)

With accessibility settings, it’s important that your app follows your user’s device settings. When an app starts up it should grab your user’s current device accessibility settings and adapt to system accessibility changes that your user makes.

As a note, we cannot not render the captions for your app. Your app will need to be in sync with your user's expectations.


## Reading device settings
In order to access your user's current closed captions settings, your app can call the `Accessibility.closedCaptions()` method from the [Accessibility](/api/accessibility/) API:

```javascript
import { Accessibility } from '@firebolt-js/sdk'

const ccSettings = await Accessibility.closedCaptions()

if (ccSettings.enabled) {
  // the user has captions enabled
}
```

Additionally, your app should respect your user's current closed-captions styles, which they may have set as their personal preference for readability. Continuing from the previous example, you can access the `styles` property:


```javascript
console.log(ccSettings.styles)
```

See the [ClosedCaptionsStyles](/api/accessibility/#closedcaptionsstyles) API for more info on styling properties.

## Adapting to real-time changes
While your app is running, or even while your app is playing content, your user may change the closed captions settings on their device. Your app should promptly respond to this change by listening to all `closedCaptionsSettingsChanged` events:

```javascript
import { Accessibility } from '@firebolt-js/sdk'

Accessibility.listen(`closedCaptionsSettingsChanged`), ccSettings => {
  // ccSettings is the same structure returned from `closedCaptions()`
  if (ccSettings.enabled) {
    // update your app's CC styles
    console.log(ccSettings.styles)
  }
  else {
    // turn off your app's CC rendering
  }
})
```


## Example ClosedCaptionsSettings value

```javascript
{
    enabled: true,
    styles: {
      fontFamily: 'Monospace sans-serif',
      fontSize: 1,
      fontColor: '#ffffff',
      fontEdge: 'none',
      fontEdgeColor: '#7F7F7F',
      fontOpacity: 100,
      backgroundColor: '#000000',
      backgroundOpacity: 100,
      textAlign: 'center',
      textAlignVertical: 'middle',
    }
}
```

For more information about this API, visit the [Accessibility](/api/accessibility/) API documentation.
