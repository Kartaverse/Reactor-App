# Reactor for macOS

Reactor 4 Beta Build 14 - 2025-08-25  

## Overview

Reactor is a package manager created by the [We Suck Less Community](https://www.steakunderwater.com/wesuckless/viewforum.php?f=32) for Fusion and Resolve. Reactor streamlines the installation of 3rd party content through the use of "Atom" packages that are synced automatically with a Git repository.

The Reactor Package Manager has been revamped as a desktop application that works seamlessly on macOS, Windows, and Linux.

## Reactor Folder

With Reactor Standalone the "Reactor:" PathMap folder is created in your user account's home folder at:

    $HOME/Reactor/

This location is typically:

    /Users/<Your User Account>/Reactor/

## macOS Install

1. Copy "Reactor.App" to your applications folder.

2. Run the following command in the terminal to allow the app to run:

```bash
xattr -dr com.apple.quarantine /Applications/Reactor.app
```

3. Double click on "Reactor.App" to launch the program.

## What's New?

### 2025-08-17 Beta 8 Adds Legacy Reactor Side-grading

A pre-existing (Legacy) Reactor install can be migrated using the new "File -> Tools -> Import Legacy Reactor Atoms" menu entry.

A dialog asks you "Do you want to import atom packages from a previous Reactor installation?"

You can choose "Import Resolve Free/Studio Atoms",  "Import Fusion Studio Atoms", or "Cancel".

The legacy atom packages that are found in the "Reactor:/Deploy/Atoms/" folder from your previous Reactor setup are then added to the Reactor Standalone download queue. In a few moments that content will be re-downloaded and ready for use.

### 2025-08-18 Beta 9 Adds Clickable Deploy File Links

In the atom description area, you can now click on any of the deploy files listed, and the weblink will take you directly to the resource on GitLab so you can inspect the content before downloading and installing it. If you want to navigate from the GitLab page, back to the original atom description content, just click on the atom package's row entry in the atom list area.

### 2025-08-19 Beta 10 USB and Bluetooth Gamepad Support

The Reactor Standalone GUI can now be controlled by USB and Bluetooth Gamepad devices like a [Sony DualSense Wireless Controller](https://www.playstation.com/en-us/support/hardware/ps5-button-functions/) or a [Kinesis JoyStick Controller](https://kinesis-ergo.com/shop/jsb-3-pedal/). This makes it super fast to blaze through the atom package listings and install/remove items.

### 2025-08-25 Beta 14 Reactor Custom Install Location Support

The "File -> Settings..." menu item can be used to change the Reactor downloaded content installation location using the "Reactor Install PathMap" control. You can select one of the preset options like "Home", "Resolve Prefs", "Fusion Prefs", or "Custom".

Selecting the "Home" option means the content will be saved in a Reactor folder added to your user account home folder which is typically known as "$HOME".

Selecting the "Custom" option means Reactor will be saved in the Reactor folder that you define. Make sure to have "Reactor" as part of the final folder path you enter if you want this same folder to be compatible with the classic version of Reactor.lua.

The "Mark Atoms as New for ___ Days" option in the settings allows you to control if recently added atom packages will be shown in the atoms list view with the green colored text, and be visible in the "New" view mode.

## HID Input devices

The Reactor Standalone GUI can now be controlled by USB and Bluetooth Gamepad devices like a [Sony DualSense Wireless Controller](https://www.playstation.com/en-us/support/hardware/ps5-button-functions/) or a [Kinesis JoyStick Controller](https://kinesis-ergo.com/shop/jsb-3-pedal/). This makes it super fast to blaze through the atom package listings and install/remove items.

The HID input device support is activated using the "File > Settings..." menu item. In the "Reactor Preferences" window turn on the checkbox next to the option labelled "USB and Bluetooth Gamepad Support". 

Note: If you enable the "USB and Bluetooth Gamepad Support" option you will be asked by the macOS "Privacy and Security > Input Monitoring" preference pane if you would like to allow the Reactor Standalone application to monitor input. You can opt to have this "Privacy and Security" setting disabled if you wish. If the "USB and Bluetooth Gamepad Support" checkbox is not active in Reactor you will not be asked this question by macOS.

### Kinesis JoyStick Controller Button Mappings:

- Left Foot Pedal = Previous Atom Package
- Centre Foot Pedal = Install/Remove Atom Package
- Right Foot Pedal = Next Atom Package

### Sony DualSense Wireless Controller Button Mappings:

- Directional Up/Down Buttons = Next/Previous Atom Package
- Left Joystick Y-Axis = Next/Previous Atom Package (With analog velocity on scrolling)
- Right Joystick Y-Axis = Scroll Atom Description Webpage View
- Cross Button = Install/Remove Atom Package
- Circle Button = Refresh Atom List
- Square Button = Cancel Atom Package Download
- Square Button = Show Reactor About Window
- R1/R2 Buttons = Next/Previous Repository Popup
- L1/L2 Buttons = Next/Previous Category List

## Development Todo List

The following features will be completed before the official release ships:

- Add a macOS Code Signing Certificate
- Create Windows/Linux Builds

## Reactor Standalone Preferences

The Reactor Standalone preferences are stored in a JSON document.

On macOS the JSON file can be found at:

    $HOME/Library/Application Support/Reactor/Reactor.json

The Reactor.json file is formatted like:

```
{
    "MainWindow": {
        "Top": 107,
        "Left": 395,
        "Width": 1130,
        "Height": 654
    },
    "GamepadSupport": 0,
    "NewForDays": 30,
    "MarkAsNew": true,
    "ReactorInstallPathMap": "/Users/vfx/Reactor/",
    "Repos": {
        "_Core": {
            "Name": "Reactor",
            "Protocol": "GitLab",
            "LocalFile": "Reactor.json",
            "BaseURL": "https://gitlab.com/WeSuckLess/Reactor/-/blob/master/Atoms/",
            "URL": "https://gitlab.com/WeSuckLess/Reactor/-/raw/master/JSON/Reactor.json?ref_type=heads",
            "ZIPFilePrefix": "Reactor-master-Atoms-"
        }
    }
}
```

If you want to change the location where atom packages are sourced from, you can modify the "Repos / _Core" attributes in the JSON file. Here is an example where Vonk Ultra repo atoms are accessed in Reactor Standalone:

```
{
    "MainWindow": {
        "Top": 107,
        "Left": 395,
        "Width": 1130,
        "Height": 654
    },
    "GamepadSupport": 0,
    "NewForDays": 30,
    "MarkAsNew": true,
    "ReactorInstallPathMap": "/Users/vfx/Reactor/",
    "Repos": {
        "_Core": {
            "Name": "Reactor",
            "Protocol": "GitLab",
            "LocalFile": "Reactor.json",
            "BaseURL": "https://gitlab.com/AndrewHazelden/Vonk/-/blob/master/Atoms/",
            "URL": "https://gitlab.com/AndrewHazelden/Vonk/-/raw/master/JSON/Reactor.json?ref_type=heads",
            "ZIPFilePrefix": "Vonk-master-Atoms-"
        }
    }
}
```

## Reactor URL Link Format

The new Reactor standalone application registers itself system-wide as a custom URL handler for clickable URLs that are formatted as "Reactor:/<AtomID>". This makes installing atom packages a breeze. Simply clicking a Chrome/Firefox/Safari webpage or forum link can automatically launch the Reactor.app program and bring you right to the desired atom package's description.

### Sample Reactor Weblinks

BBCode:

```
[url=Reactor:/com.PieterVanHoute.KAK]Install the KAK Atom Package[/url]
[url=Reactor:/com.wesuckless.KickAssShaderZ]Install the KickAss ShaderZ Atom Package[/url]
[url=Reactor:/com.KomKomDoorn.krokodoveFu19]Install the KKD Atom Package[/url]
```

HTML:

```
<a href="Reactor:/com.PieterVanHoute.KAK">Install the KAK Atom Package</a>
<a href="Reactor:/com.wesuckless.KickAssShaderZ">Install the KickAss ShaderZ Atom Package</a>
<a href="Reactor:/com.KomKomDoorn.krokodoveFu19">Install the KKD Atom Package</a>
```

Markdown:

```
[Install the KAK Atom Package](Reactor:/com.PieterVanHoute.KAK)
[Install the KickAss ShaderZ Atom Package](Reactor:/com.wesuckless.KickAssShaderZ)
[Install the KKD Atom Package](Reactor:/com.KomKomDoorn.krokodoveFu19)
```

## Reactor Usage TIPS

### Atom Selection Options

Multi-selections are possible in the Atoms list by clicking on a row then holding down the SHIFT modifier key. Pressing the "Install" button will then install the actively selected nodes. You can also press the Select All hotkey (Command + A on macOS) to select all of the atoms in the current atom category.

### Updating Atoms

There is a new "Update All Atoms" button that makes it effortless to update the already installed atoms you have on your system. This cuts down on how many clicks are required to do a common task.

### Manage your Donations

There is a "Donate" view option that can be selected from the popup menu at the top-left of the user interface. This shows the atom packages you have installed that ask you to consider making a donation. The Atom description field lists the suggested donation amount and donation URL.

