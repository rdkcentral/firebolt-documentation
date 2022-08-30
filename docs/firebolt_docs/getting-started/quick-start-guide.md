---
title: Getting Started
sidebar_position: 1
---

# Getting Started Guide
Getting your app up and running on Firebolt takes just a few simple steps.

Most of your app's code is dealing with your own content and services, and rightfully so! However, there are a few minor APIs that your app will need to call in order to function in a Firebolt-compliant manner. Most of these APIs require just one line of code.

Firebolt has zero dependencies, and leverages industry standard ECMAScript, which is compiled into your app, and packaged up using whatever JavaScript packaging strategy you already use.

In order to get your app up and running on Firebolt, you'll need to:

- Install the Firebolt package via your package manager (i.e. `npm`)
- Import a few Firebolt modules into your code-base
- Call a few simple methods to allow Firebolt and your app to communicate

## Installing Firebolt
Installing Firebolt is simple, because it's a publicly hosted package at npmjs.com:

```
cd <your project directory>
npm install @firebolt-js/sdk
```

Now you're ready to use Firebolt in your project.

## Importing Modules
As mentioned before, Firebolt uses standard ECMAScript imports for all of its modules. This allows you to only import the modules you use.

To get your app using Firebolt modules, just import them.

For example, this will import the Lifecycle and Metrics modules:

```javascript
import { Lifecycle, Metrics } from '@firebolt-js/sdk'
```

## Starting up your app
The first thing your app will want to do is tell Firebolt that it's ready. Firebolt avoids assuming your app is minimally usable, and gives you complete control over when your app is ready to be presented to end users.

When you've rendered enough of your app just call 'ready':

```javascript
Lifecycle.ready()
```

That's it! Now Firebolt knows that it's safe to present your app to end users, and can do so as quickly as possible.

It's recommended to also listen to any Firebolt events _before_ calling ready, to ensure you don't miss any.

See [Lifecycle](/api/Lifecycle/#ready) for more info.

## Reporting Errors
In order to track the quality of both your app and the Firebolt experience, Firebolt needs to know when the user experiences errors in your app. Whenever an error occurs, simply pass the error to the Firebolt Metrics API. For example, to report a 404 network error when loading a required asset:

```javascript
Metrics.error('network', '404', true, 'The requested asset could not be found')
```

The codes and descriptions are completely up to you, the only granularity required is the first parameter, `type`, which can have one of five values:

| Type | Description |
|------|-------------|
|`network` | A network error occurred |
| `media` | A media playback related error occurred |
| `restriction` | A policy restriction occurred, e.g. content not available in the current region, device, etc. |
| `entitlement` | An entitlement restriction occurred, e.g. user attempted to play content they are not entitled to |
| `other` | Any other error |

See [Metrics.error](/api/Metrics/#error) for more info.

## Reporting Content Minutes
In order to track frequency of errors, Firebolt needs to know which spans of time your user is watching content.

To track this, call the `startContent` method before the user starts watching content:

```javascript
Metrics.startContent()
```

See [Metrics.startContent](/api/Metrics/#startcontent) for more info.

Note that no identifiers are required for either method, as Firebolt only tracks the length of engagement, not specifically _what_ the user is watching.

When the user is done watching content, call `stopContent`:

```javascript
Metrics.stopContent()
```

See [Metrics.stopContent](/api/Metrics/#stopcontent) for more info.

## Inspecting Device Capabilities
Since not all devices are created equal, your app likely wants to know which capabilities a given device has.

Firebolt provides a number of convenient getters that you are welcome to use for this purpose, such as 'video resolution' as displayed below:

```javascript
let [width, height] = await Device.videoResolution()
```

See the [Device API](/api/Device/) for the full list of methods you may want to use.
