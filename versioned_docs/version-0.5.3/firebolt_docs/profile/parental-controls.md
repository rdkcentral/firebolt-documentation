# Parental Controls

Parental controls are the settings that enable your users to block specific actions from being taken without first verifying that they are approved to do so. For example, this allows an account owner to lock content such as specific ratings, titles, channels, and even entire apps. Another core function of parental controls is the ability to lock purchases made on the device.
Implementing parental controls within your app will create a sense of security for those sharing devices with children, roommates, or guests. Parents want to know their children are not in danger of watching mature content or making dozens of unauthorized in-app purchases. In addition to saving your users and your support team from dealing with unnecessary cancellations and refunds, parental controls create a safe, secure, and family-friendly experience which many households consider a modern-day requirement.

It's important that your app provides the ability only to allow authorized users to make purchases or watch mature content..

## Use Cases
There are two parental controls use cases that your app **must** provide:

- [Content Ratings Approval](#content-ratings-approval)
- [Purchase Approval](#purchase-approval)

Each of these features is offered by the platform as an easy one-line API integration. Your app may also implement these features from scratch if you have the infrastructure to do so. Your app may mix and match its own approval features with the platform-provided features as needed to ensure that both types of approvals are available.

Your app **must** also ensure that a profile can't access content through a deep link. Deep-linking offers the user navigation that allows them to navigate an item and start playback immediately; your app should check what content rating privileges/purchasing privileges the user has available less you create a backdoor for precocious kids. See [Deep Linking](../discovery/deep-linking.md) for more info.

## Content Ratings Approval
See either the [Platform-provided](platform-provided-content-ratings-approval) or [App-provided](app-provided-content-ratings-approval) solutions below.

### Platform-provided Content Ratings Approval
Integrating with the platform's Content Ratings Approval feature requires calling the [Profile.approveContentRating() API](/api/profile/#approvecontentrating).

Before initiating mature content, your app **must** ensure that the current user has approval to view it.

To do this, simply call the `Profile.approveContentRating()` method:

```javascript
import { Profile } from '@firebolt-js/sdk'
Profile.approveContentRating()
    .then(allow => {
        if (allow) {
            // the user successfully passed the approval challenge
            // and can now view whatever content they're trying to access
        }
        else {
            // the user did not successfully pass the challenge
            // and should not be allowed to view the selected content
        }
    }).catch(error => {
        // something went wrong, for example a timeout on the challenge UX
        // the user MUST NOT be allowed access in this case
    })
```

When called, the platform will present a UX to challenge the current user, for example a prompt for a secret PIN. The platform may also decide to cache a successful challenge for a short amount of time, and skip the UX. In either case, your app's call will resolve to a `boolean` dictating whether or not the challenge was passed.

### App-provided Content Ratings Approval
If your app does not provide a way for your users to prevent access to mature content, then the entire app itself will be gated by the platform's aggregated content and app discovery UX. To avoid this, consider using the [Platform-provided Content Ratings Approval](platform-provided-content-ratings-approval) feature.

See [App-provided Approval Considerations](#app-provided-approval-considerations), for additional details on implementing your own purchase approval feature.


## Purchase Approval
The news is rife with horror stories where parents find that their bills are astronomical because unauthorized users, usually their children, have been allowed to make purchases without restrictions. 

It's important that your app implement a method where only authorized users are allowed to make purchases.

See either the [Platform-provided](platform-provided-purchase-approval) or [App-provided](app-provided-purchase-approval) solutions below.

### Platform-provided Purchase Approval
Integrating with the platform's Purchase Approval feature requires calling the [Profile.approvePurchase() API](/api/profile/#approvepurchase).

Before initiating any sort of financial transaction, your app **must** ensure that the current user has approval to purchase.

To do this, simply call the `Profile.approveContentRating()` method:

```javascript
import { Profile } from '@firebolt-js/sdk'

Profile.approvePurchase()
    .then(allow => {
        if (allow) {
            // the user successfully passed the approval challenge
            // and can now purchase whatever content they're trying to access
        }
        else {
            // the user did not successfully pass the challenge
            // and should not be allowed to purchase the selected content
        }
    }).catch(error => {
        // something went wrong, for example a timeout on the challenge UX
        // the user MUST NOT be allowed access in this case
    })
```

When called, the platform will present a UX to challenge the current user, for example a prompt for a secret PIN. The platform may also decide to cache a successful challenge for a short amount of time, and skip the UX. In either case, your app's call will resolve to a `boolean` dictating whether or not the challenge was passed.

### App-provided Purchase Approval
If your app does not provide a way for your users to prevent unapproved purchases, then the entire app itself will be gated by the platform's aggregated content and app discovery UX. To avoid this, consider using the [Platform-provided Purchase Approval](platform-provided-purchase-approval) feature.

What constitutes a user who has purchasing authority can be flexible. When your app creates a profile, it can be for guests, roommates, or whatever your app dreams up.

See [App-provided Approval Considerations](#app-provided-approval-considerations), for additional details on implementing your own purchase approval feature.

## App-provided Approval Considerations
In order to provide approval features with your own infrastructure, your app will likely need to provide a profile management feature and establish, in some way, profile settings that indicate what a user can do. The way your app does this is up to you. It may be that a parent sets up a pin access code that's associated to their profile; it may be that the parent creates a "Kids Profile," in which your app then knows it has certain restrictions. The back-end method will be the same. 

One thing to consider is how these approvals "flow" through your app. If, for example, your app uses a pin to verify if a user can access content, then your app should consider how long that pin (or whatever process your app uses) is valid. 

For instance, if a parent logs in and starts to watch a mature program and gets bored and then goes to another piece of adult content, your app needs to decide if it re-accesses their eligibility or flow between content freely. In addition, if that parent steps away, maybe they go to bed or run an errand, then your app should also consider how a user should re-access their eligibility for making purchases and what content they can view. 