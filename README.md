# Reactor App Development Repo

## Overview

Reactor is a package manager created by the [We Suck Less Community](https://www.steakunderwater.com/wesuckless/viewforum.php?f=32) for Fusion/Resolve, Houdini, and LightWave. Reactor streamlines the installation of 3rd party content through the use of "Atom" packages that are synced automatically with a Git repository.

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
