---
title: Localization
---
  
# Localization & Geo-Fencing
Your app can receive device location information to better serve your users by utilizing the localization API. Localization information provides the device location and the primary language within a region, which will help you create proper geofencing and language localization.

## Geo-Fencing
Geofencing allows you to distribute your content based on the location of a person's device. For example, you may own distribution rights to content in a specific territory such as 'North America.' Implementing a geofence allows your users within North America to view the content, but the geofence blocks everyone outside of North America from viewing it.

The platform will provide your app with the device location information so it can display the correct content. However, for the sake of your users' privacy, the exact location of devices is not provided (i.e.: street address). Using the device location enables you to properly create and implement your content restrictions and preferences based on the device location.

The following APIs may be available to your app for targeting the users location:

- `Localization.countryCode`
- `Localization.postalCode`
- `Localization.locality`
- `Localization.latlon`

See the [Localization API](/api/localization/) for more information.

## Language Localization
The user's language preferences are different from where they are located.

In order to facilitate your app's UI language localization, the following APIs can be used:

- `Localization.language`
- `Localization.locale`

See [Localization API](/api/localization/) for more information on these APIs.

Your apps need to provide all user-facing strings in the user's preferred language, as specified by one of these two APIs.

The `locale` is more specific because it is the full BCP-47 code which takes into account local dialects. The `language` is the more general ISO 639 2 language code.

## Additional Uses
Within your app, a user might be interested in what is trending locally. In general, someone who lives in Mexico is likely to have different viewing preferences than someone living in England. Utilizing the localization methods, you could curate content that's regionally tailored and make it available to users in your specified location.
