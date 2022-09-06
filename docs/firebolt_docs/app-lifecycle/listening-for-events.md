# Listening for Events 

Events are a common pattern for asynchronous notifications from an SDK.

Firebolt provides three methods for interacting with Firebolt events:

- `listen`
- `once`
- `clear`

## Listening for Events
In order to listen for an event, you need to know which Firebolt module it is part of.

For example, the `foreground` event is part of the Firebolt `Lifecycle` module.

Once you've identified which module, there are two ways to listen:

- listen for **every event** in the module
- listen for a specific event in the module

### Listening for a specific event
To listen to **just the `foreground` event**, you'd use the `listen` method that is part of the `Lifecycle` module:

```javascript
Lifecycle.listen('foreground', () => { })    
```

The first parameter is the name of the event you are listening for. The second parameter is a callback function that the platform will call to inform you that this event has occurred.

Ideally your callback would be more interesting than the example above. Generally the callback will take the event's payload object, which has important context about each instance of an event, and do _something_ with it.

To make this slightly more interesting:

```javascript
Lifecycle.listen('foreground', (value) => {
    if (value.previous === 'inactive') {
        console.log('Our app has transitioned from inactive to foreground!')
    }
})
```

### Listening for all events in a Module
To listen to all events in a module, say the `Lifecycle` module, you'd use the listen method with only one parameter, the callback:

```javascript
Lifecycle.listen((event, value) => {
    console.log(event) // this will be the string representation of the lifecycle state we just entered
    if (value.previous === 'inactive') {
        console.log('Our app has transitioned from inactive to foreground!')
    }
})
```

Note that in this case, your callback method must take two parameters: the name of the event being received and the payload value of the event.

## Listening for an event just once
Sometimes your app only wants to be notified of the *very next instance* of an event.

In this case, use the `once` method, which as the same signature as `listen`:

```javascript
Lifecycle.once('foreground', (value) => {
    if (value.previous === 'inactive') {
        console.log('Our app has transitioned from inactive to foreground!')
    }
})

Lifecycle.once((event, value) => {
    console.log(event) // this will be the string representation of the lifecycle state we just entered
    if (value.previous === 'inactive') {
        console.log('Our app has transitioned from inactive to foreground!')
    }
})
```

Each of those `once` calls results in zero or one calls to your callback, when a matching event occurs. Future events will not be sent to those callbacks. 

## Clearing listeners
Modules that have the `listen` method also have a `clear` method. This allows you to clear out all of the listeners for the entire module, or just a single listener.

### Clearing a single listener
In order to clear a single listener, your app needs to keep track of the listener ID for the initiating `listen` call.

The `listen` method returns a Promise that resolves to an integer for this purpose:

```javascript
// let's log "Hello World!" whenever our app moves into the foreground
const helloListenerId = await Lifecycle.listen('foreground', () => { console.log("Hello World!")})

// but let's stop doing that when our app is unloading
Lifecycle.listen('unloading', () => {
    Lifecycle.clear(helloListenerId)
})
```

### Clearing all listeners in a module
In order to clear all of the listeners added a specific module, simply call `clear()` with no parameters:

```javascript
Lifecycle.clear()
```
