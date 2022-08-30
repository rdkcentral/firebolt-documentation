# Content Discovery
"Content Discovery" refers to all of the ways that users can discover your app's content on the platform.

The platform is constantly improving the ways that content can be discovered, this includes:

- Search: Aggregated Experience Voice
- Seach: In-app Voice
- Search: Traditional
- Menu: Editorially cultivated
- Menu: Continue Watching
- Menu: Watch Next
- And more...

Integrating your app with the Content Discovery module is an easy way to give your users an experience they’ll want to engage in over and over.

Full Content Discovery integration consists of the following:

| Feature | Description |
| :------- | :----------- |
| [Metadata Integration](#metadata-integration) | Ingesting your content catalog into distributor discovery services so that it can be presented to end users from outside of your app. |
| [Navigation Intents](#navigation-intents) | Responding to platform deep links, both before and after your app is loaded. |
| [Continue Watching](#continue-watching) | Pushing user content progress so that the platforms can show a "Continue Watching" list that deep links back to your app. |
| [Entitlements Push](#entitlements-push) | Pushing any changes to your user's entitlements through a client-side Firebolt API. |
| [Sign-in/out Push](#sign-in-out-push) | Pushing an update whenever the user does a sign-in/out. |

## Metadata Integration
Asset metadata is required to utilize many content discovery features. Asset metadata describes all the relevant, useful, and important information about a media asset. The metadata you provide is used to directly populate the presentation and discovery of your content on the platform.

See [Metadata Integration](./metadata-integration.md) for more info.

## Navigation Intents
In order to enable faster app launches, Firebolt may keep your app loaded even while it's not in use. In order to support "deep links," (ie: opening your app to a specific piece of content that the user selected) your app will need to integrate with the Firebolt Navigation Intents feature. 

This integrates your app with basic content discovery features for both deep links as well as in app search.

See [Deep Linking and Navigation Intents](../discovery/deep-linking.md) for more info.

## Continue Watching
The Continue Watching feature helps to drive traffic back into your app from an aggregated experience. By pushing viewing progress to the continue watching API, your app enables aggregated experiences to create prominent calls-to-action to resume that content, or watch the next piece of content in a grouping (ie: the next episode of a TV season).

Enabling this feature is as simple as calling the `Discovery.watched()` method whenever a user is watching content in your app:

```javascript
import { Discovery } from '@firebolt-js/sdk'

Discovery.watched(entityId, progress)
```

You can also specify if the content should be considered fully watched, which prevents users from being relaunched into the credits of a movie, for example:

```javascript
Discovery.watched(entityId, progress, true)
```

Lastly, you can specify the date/time at which the content was watched, in order to update the Firebolt "Continue Watching" feature with viewings that have occurred on other platforms:

```javascript
Discovery.watched(entityId, progress, true, '1995-12-17T03:24:00')
```

See the [`Discovery.watched()` API](/api/discovery/#watched) documentation for a complete description of the parameters and how to use them.

## Entitlements Push
Entitlements Push allows aggregated experiences to promote your app's content to drive users back into your app.

While your app may simply grant a single entitlement of your entire catalog to all of your users, aggregated experiences generally won't assume so.

By providing a list of entitlements that the current user has, aggregated experiences can be sure to only promote content that won't be gated by a purchase once your app is launched.

To push the current user's entitlements, call `Discovery.entitlements()`:

```javascript
Discovery.entitlements([
                         {
                           "entitlementId": "partner.com/entitlement/123",
                           "startTime": "2021-04-23T18:25:43.511Z",
                           "endTime": "2021-04-23T18:25:43.511Z"
                         },
                         {
                           "entitlementId": "partner.com/entitlement/456",
                           "startTime": "2021-04-23T18:25:43.511Z",
                           "endTime": "2021-04-23T18:25:43.511Z"
                         }
                       ])
    .then(success => {
        console.log(success)
    })
```

## Sign-in/out Push
Sign-in/out Push allows aggregated experiences to know when a user is signed in or out. This might seem like a minor detail, but in order to respect privacy concerns, it's very important that aggregated experiences no longer promote content to a user that is no longer logged in!

Whenever your user signs in or out of the app, just call the corresponding Firebolt API so that aggregated experiences can respect user privacy:

```javascript
Discovery.signIn()
```

or

```javascript
Discovery.signOut()
```

The `signIn` method also supports an array of entitlements, just like `Discovery.entitlements`, as a convenience, so your app can update entitlements whenever your user signs in:

```javascript
Discovery.signIn([
                    {
                    "entitlementId": "partner.com/entitlement/123",
                    "startTime": "2021-04-23T18:25:43.511Z",
                    "endTime": "2021-04-23T18:25:43.511Z"
                    },
                    {
                    "entitlementId": "partner.com/entitlement/456",
                    "startTime": "2021-04-23T18:25:43.511Z",
                    "endTime": "2021-04-23T18:25:43.511Z"
                    }
                ])
    .then(success => {
        console.log(success)
    })
```
