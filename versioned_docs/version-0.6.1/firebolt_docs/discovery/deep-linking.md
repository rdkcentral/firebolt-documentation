# Deep Linking

Deep linking is how the platform can inform your app of a user's intention to view a specific, indexed piece of content beyond just your home screen.

In Firebolt, a deep link is expressed as a `NavigationIntent` object, which has all of the details your app needs to identify and navigate to the appropriate content. NavigationIntents are passed to your app via the `navigateTo` event, which allows your app to receive deep links without the platform forcing it to reload. This creates a much faster and seamless experience.

Integrating with Navigation Intents is required in order to fully support [Content Discovery](./content-discovery.md).

## Why use Navigation Intents

Navigation Intents are designed to inform your app of the user's intent to navigate somewhere in your app. There are several reasons why the platform would need to pass this information to your app:

- The user launches your app via a voice command with a specific program
- The user initiates a search for content w/ in your app, e.g. "Show me comedies in 'Example App'"
- The user selects an editorially promoted tile for your content in an aggregated experience
- The user selects a tile for your content in an aggregated search
- The user selects an advertisement for your content from somewhere outside of your app

Navigation Intents also enable us to notify you of any platform-initiated user navigation requests such as voice searches for specific pages, content, genres, or content within your app. 

Simply put, Navigation Intents connect the user's intentions on the platform to your app's desired destination.

## How to use Navigation Intents
In order to respond to Navigation Intents, your app must listen to the Discovery module's `navigateTo` event. This allows the platform to pre-load your app before the user requests it, and then let you know the user's requested content much more quickly when they do. 

You can listen for Navigation Intents with the `Discovery.listen` API, for example:

```javascript
Discovery.listen('navigateTo', (intent) => {
    // use intent.action to determine what kind of intent this is
    console.log(intent.action)

    // use intent.data, if present, to get more context, e.g. intent.data.entityId if applicable
    console.dir(intent.data)
})
```

See also:

 - [Listening for Events](./listening-for-events.md)
 - [the `Discovery` module](/api/discovery/)
 
For more info.

## Types of Navigation Intents
The following sections describe each specific type of NavigationIntent.

### Home Intent

The Home Intent tells your app to simply return to the home page. This may be sent because the user did something in the aggregated experience that would make them reasonably expect your app to be reset.

For example:

- User launches your app
- User exits via the home key
- User turns off their device, putting it in sleep mode
- User turns on their device later and relaunches your app

If your app was still in the `inactive` state (See [Lifecycle Management](./lifecycle-management.md) then the platform might reset it to the home page in order to create the experience of the TV having been restarted.

An example Home Intent object:
```json
{
    "action": "home",
    "context": {
        "source": "voice"
    }
}
```

### Entity Intent

The Entity Intent tells your app that the user intends to see full details of a program or entity in your app.

This should be used to bring up the details view for an entity, and not go directly to a playback experience (see [Playback Intent](#playback-intent) below).

This is the most common type of Navigation Intent, as it's all about your apps content. The reasons for sending this intent are simple: The user has made it clear they intend to view a specific program or entity in your app.

The platform may derive this intention from a voice command the user issues, or infer the intention from the user selecting a tile representing content in your app. Either way, the platform will hand the intent off to your app in the form of an Entity Intent, for example:

```json
{
    "action": "entity",
    "data": {
        "entityId": "xyz"
    },
    "context": {
        "source": "voice"
    }
}
```

The `entityId` field inside the `data` object will be an entity identifier from ***your catalog identifiers**. These were provided to us via one of the integration paths described in [Content Discovery](./content-discovery.md), which is a prerequisite for functional deep links that contain Entity Intents.

The `entityId` field is required on all Entity Intents. Other optional fields include:

| Field | Type | Description |
| ----- | ---- | ----------- |
| `programType` | String | What type of program, e.g. "movie", "season", "episode", etc. |
| `seriesId` | String | Identifier of the TV Series for this entity, if applicable. |
| `seasonId` | String | Identifier of the TV Series season of this entity, if applicable. |
| `assetId` | String | An additional disambiguation identifier if your app requires one. |
| `appContentData` | String | Any additional parameters your app's metadata may have provided |

### Playback Intent

The Playback Intent tells your app that the user intends to start playback of a program or entity in your app.

This should be used to immediately bring up your app's player with the entity's (or the best playable child entity's) stream beginning to load.

This is used in situations where the user would reasonable expect playback, rather than details. The most common example of this is if the user selected content from your app via a "Play Now" tile inside of an aggregated experience.


```json
{
    "action": "playback",
    "data": {
        "entityId": "xyz"
    },
    "context": {
        "source": "voice"
    }
}
```

The fields available inside the Playback Intent are the same as for the [Entity Intent](#entity-intent).

### Search Intent

The Search Intent tells your app that the user intends to see search results for some term or phrase in your app.

This should be used to bring up your app's search experience.

The reasons for sending this intent are simple: The user asked to see content from a genre or related to search term in your app, e.g. "Show me comedies in 'Example App,'" for example:

```json
{
    "action": "search",
    "data": {
        "query": "comedies"
    },
    "context": {
        "source": "voice"
    }
}
```

Note that the platform extracts the query from the voice command, and only sends the query. This is to ensure consistent results regardless of whether the intent came from voice, or somewhere else, e.g. an editorial deep link to your app.

The `query` field inside the `data` object is required and will always be there.

### Section Intent

The Section Intent tells your app that the user intends to see some other section of your site, not represented by your content catalog, e.g. a Settings page or an Upgrade page.

This should be used to bring up the page specified by the Section Intent.

This intent would be sent based on an agreement between you and each platform distributor. For example you might have agreed to place a free signup tile on an aggregated experience, and the distributor would use this intent to deep link to the sign up with the appropriate business rules.

```json
{
    "action": "section",
    "data": {
        "sectionName": "free-signup-for-example-distributor"
    },
    "context": {
        "source": "voice"
    }
}
```

The `sectionName` field inside the `data` object is required and will always be there. The value of this field is based on values supplied during [Metadata Integration](./metadata-integration.md).
