# Overview 

This guide will help you understand how to install the package manager Node. This will ensure you can install, set up, and manage Firebolt or other packages, like Lightening. 

***Note:** Firebolt does not have any dependencies to run but it will require some package manager to install.* 

# Installing Node

> \"**Node.js** is an [open-source](https://en.wikipedia.org/wiki/Open-source_software), [cross-platform](https://en.wikipedia.org/wiki/Cross-platform), [back-end](https://en.wikipedia.org/wiki/Front_end_and_back_end) [JavaScript](https://en.wikipedia.org/wiki/JavaScript) [runtime environment](https://en.wikipedia.org/wiki/Runtime_system) that runs on the [V8 engine](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) and executes JavaScript code outside a [web browser](https://en.wikipedia.org/wiki/Web_browser). Node.js lets developers use JavaScript to write command line tools and for [server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting)---running scripts server-side to produce [dynamic web page](https://en.wikipedia.org/wiki/Dynamic_web_page) content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm, unifying [web-application](https://en.wikipedia.org/wiki/Web_application) development around a single programming language, rather than different languages for server-side and client-side scripts.\"\
> <https://en.wikipedia.org/wiki/Node.js>

## Installing for Windows

It's assumed that you have the ability to download and install software on your machine as well as have access to a command-line interface (CLI) tool such as Windows' command line or PowerShell.

### Step 1: Download Node.js Installer

1. In a web browser, put in the URL <https://nodejs.org/en/download/>. Select the **Windows Installer** button to download the latest default version. The Node.js installer includes the NPM package manager.

![Windows Installer Option](.../images/WindowsInstallerOption.png)

### Step 2: Install Node.js and NPM from the browser

1.  Once the installer finishes downloading, launch it. Go to the location where you have saved the file and double-click it to launch.

2.  The system will ask if you want to run the software -- select **Run**.

3.  You will be welcomed to the Node.js Setup Wizard -- select **Next**.

4.  On the next screen, review the license agreement -- select **Next** if you agree to the terms and install the software.

5.  The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select **Next**.

6.  The install wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting **Next**.

7.  Finally, select the **Install** button to run the installer. When it finishes, select **Finish**.

### Step 3: Verify Installation

1. Open PowerShell or your preferred command-line tool and enter the following:

    ```powershell
    node -v
    ```

2. The system should display the Node.js version installed on your system. You can do the same for NPM:

    ```powershell
    npm -v
    ```
    
    

## Installing for Mac

**Prerequisites**

Node on Mac can be installed directly from Node.js or it can be installed with tools like [Homebrew](https://brew.sh/). For this installation, we're going to keep it as simple as possible and go directly to Node.js. However, you may use a package manager tool such as Homebrew if you prefer.

It's assumed that you have the ability to download and install software on your machine as well as have access to a command-line interface (CLI) tool such as Mac's terminal tool.

### Step 1: 

1. **Download Node.js Installer**: In a web browser, go to <https://nodejs.org/en/download/>. Select the **Mac Installer** button to download the latest default version. The Node.js installer includes the NPM package manager.

### Step 2: 

1.  Once the installer finishes downloading, launch it. Open the location where you have saved the file and double-click it to launch.

2.  You will be introduced to the Node.js Setup Wizard -- select **Continue**.

3.  On the next screen, review the license agreement - select **Agree** if you agree to the terms and install the software.

4.  The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select **Install**.

    - At this point, you can select **Customize** if you'd like to select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting **Install**.

5.  When it finishes, select **Finish**.

### Step 3: Verify Installation: 

1. Open Terminal or your preferred command-line tool and enter the following:

    node -v  

2. The system should display the Node.js version installed on your system. You can do the same for NPM:

    npm -v

## Installing for Linux

Linux has many options - here is our favorite "How-to guide" on installing Node.js for your Linux machine. <https://upstack.co/knowledge/how-to-install-node-js-on-linux>

