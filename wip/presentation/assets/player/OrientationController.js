/*
 * OrientationController.js
 * Keynote HTML Player
 * 
 * Responsibility: Tungwei Cheng
 * Copyright (c) 2009-2013 Apple Inc. All rights reserved.
 */

var kOrientationChangedEvent = "OrientationController:OrientationChangedEvent";

var OrientationController = Class.create({
    initialize: function() {
        if (gDevice == kDeviceMobile) {
            Event.observe(window, "orientationchange", this.handleDeviceOrientationChangeEvent.bind(this));
            this.handleDeviceOrientationChangeEvent();
        }

        this.orientation = kOrientationUnknown;
    },

    handleDeviceOrientationChangeEvent: function(event) {
        var orientationInDegrees = window.orientation;
        var newOrientation = kOrientationUnknown;

        if ((orientationInDegrees === 0) || (orientationInDegrees === 180)) {
            newOrientation = kOrientationPortrait;
        } else {
            newOrientation = kOrientationLandscape;
        }
        this.changeOrientation(newOrientation);
    },

    changeOrientation: function(newOrientation) {
        this.orientation = newOrientation;

        document.fire(kOrientationChangedEvent, {
            orientation: this.orientation
        });
    }
});
