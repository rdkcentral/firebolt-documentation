# Metadata Integration
Asset metadata describes all the relevant, useful, and important information about a media asset. The metadata you provide is used to directly populate the presentation and discovery of your content on the platform. The metadata is also used to determine numerous criteria including (but not limited to):

* When an asset is available
* Which of your users can view your asset
* Whether the asset requires a subscription
* The rating of the asset
* The audio and video details of the asset
* The title and description of the asset
* The studio, actors, and crew involved

## Use cases
Metadata allows people to discover your content easier whether they are inside your app or outside of your app. Metadata integration also gives your users the ability to use the platform's [Voice Commands](../discovery/voice-commands.md) feature which can allow your app to reach a wider demographic and deliver content faster to your users.

For example, you may have a video called 'Dino Dance' on your app but you have a user outside of your app that wants to watch it. Your user can use the global search or say, "Watch Dino Dance" using the voice remote, and the platform will search your submitted metadata for a match. Since the metadata exists for the content, your app will launch and go to the 'Dino Dance' video.

## How to implement
All asset metadata must be provided in the [GMRSS Format](./open-gmrss-format.md) for the platform to receive real-time calls to the metadata (preferred) or pull GMRSS feeds at scheduled intervals. You are responsible for adding and removing content from the feed so that the information provided is up to date. Any new content on your app should be added to the feed 48 hours before going live to ensure your users are able to locate it. For a list of GMRSS fields and specifications, visit the [Open GMRSS Format](./open-gmrss-format.md) documentation.
