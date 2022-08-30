# Email Prefill
Your users have the ability to save email addresses to their account on the platform. The Email Prefill feature enables your app to request an email address from the user without requiring them to type it out using a remote.

While the UI may differ between distributors, the basic flow is that your app asks for the API to present email addresses to the user, then the user selects an email address, and then the API sends the selection back to the app to be used as demonstrated below:

![Call Flow](..../images/email-prefill-callflow.png)


## Use cases
Entering email addresses manually using an on-screen keyboard takes a lot of time and can be a frustrating process for many users. With Email Prefill, your users can sign in or register with ease and start enjoying your app almost instantly.

## How to implement

When using the Email Prefill, your user may be prompted to allow your app access to their email address to sign-in or sign-up with your app. This prompt may also allow your user to select an email address from a dropdown or some other interface of saved emails. Once your user makes a selection, your user's selection will return the email address to your app so you can populate the email field for them.

When using the Email Prefill, your app must display the selected email to the user and require the user to confirm that they want to use that email to sign in/ sign up.

Your user may also choose to manually enter their email address which may be the case if they have not saved the desired address to their account.
  
You can integrate with the Email Prefill API as follows:

```javascript
import { Keyboard } from '@firebolt-js/sdk'

Keyboard.email('signUp').then( emailAddress => {
    // at this point your app has access to the email address the user selected
    console.log('The user entered the following email address: ' + emailAddress)
}).catch( error => {
    // The user canceled, or an error occurred, fall back to some other plan, e.g. dismiss the sign up UI
    console.error('The user decided not to provide an email address')
})
```

See the [Keyboard API](/api/keyboard#email) for more info.