# Sign In & Sign Up
There are two ways to sign-in or sign-up for an app including "2nd screen sign-in" (which is the preferred method) and the "on-screen keyboard". 

## 2nd screen sign-in (preferred)
We encourage you to use this method since it is the preferred method of sign-in among your users. This method displays a code, instructing the user to go to another device's web browser and enter the code displayed. After entering the code, the user is signed into your app on their tv. Since this requires your private systems to generate and verify credentials, we do not have an API solution for this method.

## On-screen Keyboard w/ Email Prefill
 We've made the sign-in/sign-up process significantly faster for your users by implementing an Email Prefill feature, which allows your users to pick one of their saved emails from their device rather than manually typing it in. Users will have this prefill option if they provide an email when they set up their TV. Otherwise, they will have to use the on-screen keyboard.
 
 

See [Email Prefill](./email-prefill.md) for more info.

You can then use the `Keyboard.password()` API to prompt for the users password in a way that doesn't display on screen.

See the [Keyboard API](/api/keyboard) for more info.
