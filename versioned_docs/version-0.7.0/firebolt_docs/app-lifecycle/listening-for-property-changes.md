# Listening for Property changes

With Firebolt® you can get and listen for property changes on the device. This includes both the hardware and system properties such as audio, current accessibility settings, and all the mutable properties of a device.

Each Firebolt® property comes with the following abilities:

-   Get the property at a specific time.

-   Listen for when that property changes, such as when a user changes their device name from \"Living Room TV\" to \"Bedroom TV\".

This is useful in instances where you want to:

-   Retrieve a specific device setting

-   You can retrieve the current state of a property. For instance, using the Accessibility module you can get back the user's closed captions settings.

-   Checking device property states

-   You can check the current state of a property. For instance, using [the Device module](/api/device/) you retrieve how the device is connected to the internet or if it's connected at all.

-   Receiving property state updates when they change

-   You can listen for when a property changes such as when a user changes a device setting or adjusts their profile.

## Listening for a Property to Change

You can receive property state updates when a change occurs in a specific property. To create a property listener for a specific property and have it do something or return something is the same syntax across each Firebolt® module. To listen for a property, change the syntax to:

```javascript
<Module>.<property>( value => {
  // this code gets the new value when it changes
})
```

### Listening for a change in the device's network connectivity status 

If you wanted your app to receive a notification that the network value changed on the device, (e.g., react to when a user is no longer connected to the internet) it would look like this:

```javascript
Device.network( value => {
  console.log(value)
})
```

In the above example, the new value is printed to a console log.

If you were to run the above, it would look something like this:

```javascript
{
  {
    "state":"connected",
    "type":"WIFI"
}
```

To see the current list of return values for the network method based on the device go to [Device.network](/api/device/#network)

## Related Information

-   Dependencies

    -   Firebolt® 0.6.0 and Higher
