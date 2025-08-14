# Reactor for macOS

Reactor 4 Beta Build 4 - 2025-08-14

## Overview

Reactor is a package manager created by the [We Suck Less Community](https://www.steakunderwater.com/wesuckless/viewforum.php?f=32) for Fusion and Resolve. Reactor streamlines the installation of 3rd party content through the use of "Atom" packages that are synced automatically with a Git repository.

## What's New?

The Reactor Package Manager has been revamped as a desktop application that works seamlessly on macOS, Windows, and Linux.

## Reactor Folder

With Reactor Standalone the "Reactor:" PathMap folder is created in your user account's home folder at:

    $HOME/Reactor/

This location is typically:

    /Users/<Your User Account>/Reactor/

## macOS Install

1. Copy "Reactor.App" to your applications folder.

2. Run the following command in the terminal to allow the app to run:

		xattr -dr com.apple.quarantine /Applications/Reactor.app

3. Double click on "Reactor.App" to launch the program.

## Development Todo List

The following features will be completed before the official release ships:

- Add a macOS Code Signing Certificate
- Create Windows/Linux Builds
- Add preference window
    - Add a Reactor custom install path option
