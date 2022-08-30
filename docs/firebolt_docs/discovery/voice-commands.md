# Voice Commands
Voice commands allow your users to press a button and speak to their remotes and go directly to an experience they want to find. Our platform includes built-in voice functions which enable your users to launch apps and control media playback. Additionally, there are a wide range of other voice commands that give more flexibility to your users. These require a level of integration if you wish to take advantage of their benefits.

## Use cases
The voice remote provides a new level of independence to your users. This benefits all users, and is especially valuable to those which have limited mobility, dexterity, or a visual disability. By using simple voice commands, customers can change channels, search for shows, enable closed captioning and more.

**Launching the App with voice**

As the world of smart devices grows, allowing your user to open your App with their voice provides an easy way for them to begin engaging with your content. It also offers an option for those who don't have immediate or direct access to their device - maybe they're dealing with a gaggle of kids at a birthday, or they're unable to handle the device physically due to an injury. Whatever the reason providing another option offers needed flexibility in how users get to your content.

**Start playing a title within your app**

Allowing your user to start playing a title with their voice removes a layer of navigation, streamlining the experience. It also improves overall accessibility. For example, someone who is visually impaired or a child learning to read can say, "Watch Pup Patrol on `<Your App Name>`" and begin their experience with ease.

**Control Media Playback with voice**

Controlling media playback using voice adds an additional flexibility to your app allowing users who may be pre-disposed or unable to reach the device an easy way to stop, pause, play, rewind, and fast forward the content.

**Go to series/movie page within your app**

Another example is an over-worked couple desiring an in-home date night. By including voice capabilities, the couple can simply say "Go to Love Island on `<Your App Name>`" and skip numerous navigational steps. This allows them to get home, press a single button, say a command, and then start watching instantly. Integrating voice commands allow you to reach a larger demographic and serve users faster and more efficiently than before.

**Search for `<search query>` within your app**

Adding a search voice command is a great way to allow users to take advantage of your content catalog. It adds a layer of accessibility and delight. A fun example might be saying “Comedies on `<Your App Name>`” and providing a list of all comedy-related content.

**Go to a specific navigation page within your app**

Another useful reason to use voice is to make it easy to navigate the pages of your app. "`<Your App Name>` settings" or “`<Your App Name>` my account” as an example. It provides a valuable depth to what the user can do using the voice functionality. It isn't just for playing movies; it's for so much more.

| Voice Feature                                    | Voice Command Example                                        |
| ------------------------------------------------ | ------------------------------------------------------------ |
| Launch App                                       | "Launch `<Your App Name>`"                                   |
| Control media playback                           | “Pause” “Play” “Rewind” "Fast forward"                       |
| Go to series/movie page within your app          | “Go to `<series>`” “Show me `<movie>`”                       |
| Start playing a title within your app            | “Play `<movie>`" “Play the pilot episode of `<series>`”      |
| Search for `<search query>` within your app      | “Comedies on `<Your App Name>`” “Drake on `<Your App Name>`” |
| Go to a specific navigation page within your app | “`<Your App Name>` settings”                                 |

## How to implement
Voice commands will is presented to your app via three different platform features.

- Lifecycle management
- Responding to remote keys
- Deep linking

To see how each platform feature enables which functionality can be seen in the table below.

| Voice Feature                                    | Platform Feature                                             |
| ------------------------------------------------ | ------------------------------------------------------------ |
| Launch App                                       | [Lifecycle Management](../app-lifecycle/lifecycle-management.md) |
| Control media playback                           | Respond to Remote Keys |
| Go to series/movie page within your app          | [Deep Linking](../discovery/deep-linking.md)                 |
| Start playing a title within your app            | [Deep Linking](../discovery/deep-linking.md)                 |
| Search for `<search query>` within your app      | [Deep Linking](../discovery/deep-linking.md)                 |
| Go to a specific navigation page within your app | [Deep Linking](../discovery/deep-linking.md)                 |

The platform will map these various types of Voice Commands to existing platform APIs to make integration more seamless, e.g. media playback Voice Commands are mapped to the corresponding remote key press values.

Your app will need to have a working [Metadata Integration](../metadata/metadata-integration.md) in order for many Voice Commands to work.
