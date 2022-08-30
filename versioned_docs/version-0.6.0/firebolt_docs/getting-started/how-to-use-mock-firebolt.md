# Welcome

In this practical guide, you'll learn how to set up and use Mock Firebolt. 

Mock Firebolt is an app test tool that allows you to write a Firebolt® app to test the app's behavior. For instance, it will enable testing of unexpected error responses from Firebolt® across any code branch. This means you can test mock responses from devices normally unavailable to test. It allows complete control of your app's responses from the Firebolt SDK, and you can change these responses at any time to anything (*that's valid per the Firebolt API  definitions*).

For example, this might be used:

-   by a developer with only an STB to get Firebolt® to answer as if it is a TV (or vice versa).

-   to test variations of accessibility settings, advertising settings, etc.

-   to send and test events in your app to ensure your code handles events correctly. 

-   to test how the app responds to errors from the Firebolt® SDK.

-   to test slow responses from the Firebolt® SDK.

-   to test deep links (`navigateTo`) within the app.

Note: The standard Firebolt® SDK has a set of static mock responses built-in, but it is not controllable or extensible.

Since the Firebolt® SDK does not validate parameters on method calls, you can also use Mock Firebolt to validate that your invocations of Firebolt® methods are correct.

## Prerequisites

This ***Mock Firebolt*** guide is designed with the following assumptions:

-   You have some experience with the basics of programming (building apps, working with APIs, etc.) and have some experience working with the JavaScript programming language. This guide does not explain the JavaScript language.

-   You understand the basics of app file structures and concepts like repositories.

-   You understand how Git repos work and how to clone repositories.

-   You understand how to use the command-line interface (CLI) and common CLI tools.

-   You understand JavaScript run-time tools like Node and NPM.

-   You understand how to install and use JavaScript packages on your local machine.

## What you'll need

-   A computer running Windows or Linux, or a Mac running macOS.
-   Ensure you have a package manager like Node available on your machine. To learn more, check out our [Prerequisites guide](./prerequisites.md)
-   Internet access or an alternative way of loading the latest Firebolt® SDK and Lighting™ JavaScript framework onto your computer.

## What you'll learn

-   How to install Mock Firebolt on your local machine.
-   How to connect your app to Mock Firebolt.

## What you'll do

-   Clone the Mock Firebolt Repo.
-   Get the Mock Firebolt server up and running locally on your machine.
-   Connect your app to Mock Firebolt.
-   Adjust how Mock Firebolt responds to your app's Firebolt® calls and test how your app responds to those responses.

# Important dependency note

Mock Firebolt requires that your client app import 0.6.0-alpha.1 or later of the Firebolt® SDK.

If you use an older SDK version (e.g., 0.5.3), no traffic will make it from the SDK to the Mock Firebolt.

# SDK support

Mock Firebolt supports these Firebolt® SDKs: **core**, **manage**, **discovery**.

By default, only the core SDK is enabled, meaning if you try to make calls to methods in the other SDKs, MFOS will display an error.

This default mode is appropriate for app developers developing third-party content apps that don't need (nor get) the permissions necessary to use the other SDKs.

For developers building \"operator apps\" / \"search and discover apps\" which need one or more of these SDKs, when running the Mock Firebolt server, you can pass flags like `--manage` and/or `--discovery` to enable the specific SDK(s) desired[^1].

# Getting Started - Get the Mock Firebolt on your machine

### Step 1 - Clone the Git repository

1.  Set your directory where you want to clone the repositories you'll need. You can name the local folder whatever you'd like.

2.  Clone the Mock Firebolt repository from Github: <https://github.com/rdkcentral/mock-firebolt>

    1.  Clone it via GitHub desktop

![clone github repo](./images/clone-github-repo.jpg)

1.  Clone these two repositories using the same method.

    1.  `git clone https://github.com/rdkcentral/firebolt-openrpc.git`

    2.  `git clone https://github.com/rdkcentral/firebolt-core-sdk.git`

2.  Use your CLI to change your directory to Mock Firebolt OS (MFOS) using the command `cd [filepath]\mock-firebolt-os`.

The file structure should place the Firebolt® Mock repo alongside the Firebolt® Core SDK and Firebolt® Open RPC repos.

### Step 2 - Start the Mock Firebolt server

1.  Use the CLI command `cd server` to start the Mock Firebolt server (if you're running locally).

        cd server

2.  Run the one-time install command(s) to clean, create, and build a sub-directory.

        npm install
        npm run clean
    
    * This command will build the Core Firebolt® SDK:
    
        ```powershell
        npm run build:core
        ```
    
    * This command will build the source code within your project:
      
        ```powershell
        npm run build:mf
        ```

### Step 3 - Run the server

1. In your CLI, open a new window/tab respectively. Run the command

   ```
   cd [filepath]\mock-firebolt
   npm run dev
   ```



### Step 4 - Connect Mock Firebolt to your app 

Mock Firebolt is a server that runs on your computer. The app needs to talk to Mock Firebolt to start getting responses. The requests that the app makes go to Mock Firebolt and Mock Firebolt will answer those requests like the SDK would without configuration. 

To connect Mock Firebolt to your app, you'll need to do the following:

1. Import the [Activate Mock Firebolt script](https://github.com/rdkcentral/firebolt-hello-world/blob/main/pt3-firebolt_hello_world-mock/scripts/activateMockFirebolt.js) into your app. This script must execute before the Firebolt® SDK does, so you'll want to import the script into your `index.html` file. This prevents the script from being bundled if you're using a bundler such as Webpack. 
2. When you run your app, you'll need to include `mf=true` in your query string.

You can view the [Using Mock Firebolt Within Apps](https://github.com/rdkcentral/mock-firebolt/blob/main/docs/UsageWithinApps.md) documentation for further information on how this works. If you have any troubles getting Mock Firebolt to work on your app, you can check out the [Hello World](https://github.com/comcast/firebolt-hello-world/) example.


### Step 5 - Use Mock Firebolt with your app 

Now that your Mock Firebolt session is up and running and connected to your app, you can use the Mock Firebolt commands. This is a useful way to simulate app responses by providing "Mock Overrides." 

These responses will only affect your app if your app is built to react to the response. For example, let's say you built your app to have a blue background when the device is a TV, but a red background when the device is a set-top box. If you use `node cli.mjs --method device.type --result "TV"`, then you are telling Firebolt that the device is a TV, so when you refresh your app, it should show a blue background. If your app does not specify differences between devices, then you will not see any changes. 

Anytime you execute a command successfully, your CLI terminal will show `status: SUCCESS`. 

#### Examples

**Use Mock Firebolt to simulate a set-top box:**

```
node cli.mjs --method device.type --result "STB" 
```

Now when your app calls `Device.type`, the response will be `STB`.

**Simulate a Smart TV:**

```
node cli.mjs --method device.type --result "TV" 
```

Now when your app calls `Device.type`, the response will be `TV`.

**Simulate a user who prefers Spanish**:

```
node cli.mjs --method localization.language --result "es" 
```

Now when your app calls `Localization.language`, the response will be `ES`.

**Simulate a user who prefers French**:

```
node cli.mjs --method localization.language --result "fr" 
```

Now when your app calls `Localization.language`, the response will be `FR`.

**Simulate Closed Captions being on:**

Create a file called `accessibilityClosedCaptionsOn.json` containing:

```json
"methods": {
    "accessibility.closedCaptionsSettings": {
      "result": {
        "enabled": true,
        "styles": {
          "fontFamily": "Monospace sans-serif",
          "fontSize": 1,
          "fontColor": "#ffffff",
          "fontEdge": "none",
          "fontEdgeColor": "#7F7F7F",
          "fontOpacity": 100,
          "backgroundColor": "#000000",
          "backgroundOpacity": 100,
          "textAlign": "center",
          "textAlignVertical": "middle"
        }
      }
    }
  }
}
```

Then execute the following command:

```
node cli.mjs --upload /path/to/accessibilityClosedCaptionsOn.json
```

Now, when your app calls `Accessibility.closedCaptionsSettings`, the response will be:

```json
        "enabled": true,
        "styles": {
          "fontFamily": "Monospace sans-serif",
          "fontSize": 1,
          "fontColor": "#ffffff",
          "fontEdge": "none",
          "fontEdgeColor": "#7F7F7F",
          "fontOpacity": 100,
          "backgroundColor": "#000000",
          "backgroundOpacity": 100,
          "textAlign": "center",
          "textAlignVertical": "middle"
        }
      }
```

**Simulate Voice Guidance being off:**

Create a file called `accessibilityVoiceGuidanceOff.json` containing:

```json
{
  "methods": {
    "accessibility.voiceGuidanceSettings": {
      "result": {
        "enabled": false,
        "speed": 5
      }
    }
  }
}
```

Then execute the following command:

```
node cli.mjs --upload /path/to/accessibilityVoiceGuidanceOff.json
```

Now, when your app calls `Accessibility.voiceGuidanceSettings`, the response will be:

```json
{
        "enabled": false,
        "speed": 5
      }
```

**Simulate a 1920x1080 screen resolution:**

Create a file called `screenResolution1920by1080.json` containing:

```json
{
  "methods": {
    "device.screenResolution": {
      "result": [ 1920, 1080 ]
    }
  }
}
```

Then execute the following command:

```
node cli.mjs --upload /path/to/screenResolution1920by1080.json
```

Now, when your app calls `Device.screenResolution`, the response will be `1920, 1080`.

### Testing Events

#### Example: Testing your app's reaction to Accessibility setting changes 

**Simulate a user turning closed captioning on**:

Create a file called `closedCaptioningOn.event.json` containing:

```json
{
  "method": "accessibility.onClosedCaptionsSettingsChanged",
  "result": {
    "enabled": true,
    "styles": {
      "fontFamily": "Monospace sans-serif",
      "fontSize": 1,
      "fontColor": "#ffffff",
      "fontEdge": "none",
      "fontEdgeColor": "#7F7F7F",
      "fontOpacity": 100,
      "backgroundColor": "#000000",
      "backgroundOpacity": 100,
      "textAlign": "center",
      "textAlignVertical": "middle"
    }
  }
}
```

Then execute the following command:

```
node cli.mjs --upload /path/to/closedCaptioningOn.event.json
```

Now, when your app calls `Accessibility.onClosedCaptionsSettingsChanged`, the response will be:

```json
{
    "enabled": true,
    "styles": {
      "fontFamily": "Monospace sans-serif",
      "fontSize": 1,
      "fontColor": "#ffffff",
      "fontEdge": "none",
      "fontEdgeColor": "#7F7F7F",
      "fontOpacity": 100,
      "backgroundColor": "#000000",
      "backgroundOpacity": 100,
      "textAlign": "center",
      "textAlignVertical": "middle"
    }
```

# Commands for Mock Firebolt

To see a list of commands in your terminal window, use the following: 

```powershell
node cli.mjs --help
```

| Command                                                      | Intent                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| node cli.mjs --help                                          | Use this to pull up the how to use info                      |
| node cli.mjs --user <userId>                                 | Target the given user; Overrides the .mf.config.json file, if present. See below |
| node cli.mjs --port 3333                                     | If running Mock Firebolt on a non-standard port. See below   |
| node cli.mjs --quiet                                         | Don't emit command summary text; helpful for exporting state. See below |
| node cli.mjs --health                                        | Performs health check on Mock Firebolt                       |
| node cli.mjs --state                                         | Asks Mock Firebolt to dump its state; handy for debugging    |
| node cli.mjs --revert                                        | Go back to the way things were when server started (w.r.t. state) |
| node cli.mjs --latency 0                                     | Set min and max latency values to given value                |
| node cli.mjs --latency 50 --latency  100                     | Set min and max latency values to given values; min 1st, max 2nd |
| node cli.mjs --method device.type  --latency 3000            | Set min and max latency values to given value for given method |
| node cli.mjs --method device.type  --latency 2500 --latency 3500 | Set min and max latency values to given values for given method; min 1st,  max 2nd |
| node cli.mjs --mode default                                  | Set mode to DEFAULT; mock overrides used first, OpenRPC examples second |
| node cli.mjs --mode box                                      | Set mode to BOX; Only OpenRPC examples used/returned. Overrides unused |
| node cli.mjs --method account.id --result  "'111'"           | Set result for given method the next time it is called       |
| node cli.mjs --method device.id --errCode  -32888 --errMsg "Sad day for you" | Set error code & msg for method                              |
| node cli.mjs --upload  ../examples/slow.json                 | Use this to upload information to the your App.              |
| node cli.mjs --event  ../examples/device-onDeviceNameChanged1.event.json | Send events (methods, result keys expected)                  |
| node cli.mjs --sequence  ../examples/events1.sequence.json   | Send a timed sequence of events.                             |

Note: You can also use commands that look like: `./mf.sh  --help`

# Conclusion 

Congratulations, you set up Mock Firebolt to test your app!

You now know how to:

1.  Clone the Mock Firebolt repo
2.  Set it up and connect Mock Firebolt to your app
3.  Specify how various Firebolt methods should respond when called, and see how your app reacts.

To continue learning more about Firebolt®, check out our [API](https://developer.comcast.com/firebolt/core/sdk/latest/api/) docs and our [Quickstart](https://developer.comcast.com/firebolt/core/sdk/latest/docs/quick-start-guide/) guide.

[^1]: When running on an actual device, your app will only have the permissions it has been given.
