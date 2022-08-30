---
title: Accessibility Overview
---
# Accessibility Overview

Accessibility means building apps that can be enjoyed by everyone, regardless of abilities. Incorporating an inclusive approach can include considering color choices during design, integrating Voice Guidance capabilities, or ensuring videos include closed captions. It's also important to remember that you're building a global app.

According to the World Health Organization, [2.2 billion](https://www.who.int/health-topics/blindness-and-vision-loss#tab=tab_1) people have a near or distance vision impairment. It comes as no surprise that these people still love watching and enjoying content. [A survey commissioned by Comcast](https://www.afb.org/research-and-initiatives/statistics/adults) (US) in 2017 showed a whopping 96% of users who are blind or have low vision regularly watch TV, with 81% watching more than an hour per day. However, 65% also reported encountering problems with looking up what's on TV. In the UK, a [2022 survey](https://bighack.org/video-on-demand-streaming-and-accessibility-the-big-hack-survey-feedback/) showed that four out of every five disabled viewers experienced issues. An alarming but important takeaway from these studies is that disabled people feel "forgotten" and "excluded" by the video streaming revolution.

That's where you come in. As a developer, you have the opportunity to create a pleasant and meaningful experience for all of your users.


## User Accessibility Preferences
Your app can pull the devices' accessibility settings from your users using the [Accessibility](../getting-started/quick-start-guide.md) API's. This will allow your app to stay in sync with your users' accessibility preferences so they do not have to configure it themselves within your app.

## Universal Design

Universal design (also known as “inclusive design”) refers to creating a product that’s accessible to all demographics with a wide range of disabilities, abilities, and various characteristics. Apps built to cater to the average user can lead to frustrating experiences and exclude many potential users. The concept of universal design goes beyond the bare minimum legal requirement and becomes an inclusive experience for all your users to enjoy.

To learn more about how to utilize the practice of universal design, visit:
[https://universaldesign.com/what-is-ud/](https://universaldesign.com/what-is-ud/")

## Closed Captions
Closed Captioning shows the audio portion of a video program – including dialogue, narration, and sound effects – as text on your users' TV screens. Our platform has enhanced closed captioning controls built right in for those who are deaf or hard of hearing. Your users can customize their captions by font size, style, color, contrast, and more for greater readability.
Your app may be legally required to support closed captioning. As a general rule, most content that has previously aired on television with captions must be closed captioned in your app. However, while it may not be legally required for some content, we recommend that all your video content is closed captioned to create a better & more inclusive experience for your users. For a full list of closed caption legal requirements, visit
 [FCC (USA)](https://www.fcc.gov/consumers/guides/captioning-internet-video-programming") & [OFCOM (UK)](https://www.ofcom.org.uk/__data/assets/pdf_file/0025/212776/provision-of-tv-access-services-guidelines.pdf")

 Learn more about how to implement this feature in our [Closed Captions](./closed-captions.md) documentation.


## Voice Guidance
Consumers are accustomed to having their devices speak to them. Our platform has a Voice Guidance feature that allows your users with visual disabilities the freedom to independently explore thousands of TV shows and movies. It "speaks" what's on the screen and includes details such as navigational elements and program descriptions to help your users decide what to watch. It is important that you provide properly labeled elements for your navigation guidance experience.

Enabling Voice Guidance is straightforward. HTML5 apps will work with Voice Guidance when proper markup structure and labeling conventions are followed. With Lightning apps, enabling the "Announcer" mixin will voice out strings found along your app's focus path.

There are two common methods used for Voice Guidance;
* [WebSpeech](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) which has a wide range of customization with a lower accessibility standard than Aria.
* [Aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) which is a much more direct reading with a higher accessibility standard than Webspeech.

Learn more about how to implement this feature in our [Voice Guidance](./voice-commands.md) documentation.

## Audio Description
Audio description refers to audio-narrated descriptions of key visual elements of programming inserted within natural pauses in dialogue. Audio description makes television programs, feature films and other media accessible to people who are blind or have low vision or a visual disability, creating a richer, more independent experience. For example, audio description describes key visual elements such as actions, facial expressions, costumes or scene changes in a program that a viewer who is blind or has low vision or a visual disability would otherwise miss.

## Voice Commands
The voice remote provides a new level of independence to customers who have limited mobility or dexterity, or have a visual disability. By using simple voice commands, customers can change channels, search for shows, enable closed captioning and more. The voice remote also includes a back-lit keypad making it easier to see the buttons in the dark.

Learn more about how to implement this feature in our [Voice Commands](../discovery/voice-commands.md) documentation.

## Color Contrast
Your user's television screens render color differently than their other screens such as computers and mobile devices. Because of this, we've outlined some simple tips:

* Stay away from pure black (#000) and pure white (#fff).
* Use high contrasting colors to make actionable areas bolder and text readable.
* Check your app experience on multiple TV types/manufacturers to ensure the results are consistent.

Many users may have visual disabilities which can remove distinction from colors with the same contrast or make reading difficult. To prevent this frustrating experience from happening to your users, make sure that your colors align with WCAG AAA compliance for large text accessibility standards. You can check your color contrasts here:
[https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/")
