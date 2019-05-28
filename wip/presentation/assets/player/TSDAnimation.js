/*
 * TSDAnimation.js
 * Keynote HTML Player
 *
 * Created by Tungwei Cheng
 * Copyright (c) 2016 Apple Inc. All rights reserved.
 */

// Stuff from TSDAnimation.h

// Common acceleration values.
var KNAnimationActionAcceleration = {
    kSFXActionAccelerationNone: 0,
    kSFXActionAccelerationEaseIn: 1,
    kSFXActionAccelerationEaseOut: 2,
    kSFXActionAccelerationEaseBoth: 3,
    kSFXActionAccelerationCustom: 4
};

//Standard action build effect names.
var KNActionOpacityName = "apple:action-opacity";
var KNActionMotionPathName = "apple:action-motion-path";
var KNActionRotationName = "apple:action-rotation";
var KNActionScaleName = "apple:action-scale";

// Emphasis action build effect names.
var KNActionPopName = "apple:action-pop";
var KNActionPulseName = "apple:action-pulse";
var KNActionBlinkName = "apple:action-blink";
var KNActionFlipName = "apple:action-flip";
var KNActionBounceName = "apple:action-bounce";
var KNActionJiggleName = "apple:action-jiggle";

//Global directions
var KNDirection = {
    kKNDirectionNone: 0,
    kKNDirectionLeftToRight: 11,
    kKNDirectionRightToLeft: 12,
    kKNDirectionTopToBottom: 13,
    kKNDirectionBottomToTop: 14,
    kKNDirectionUpperLeftToBottomRight: 21,
    kKNDirectionUpperRightToBottomLeft: 22,
    kKNDirectionLowerLeftToUpperRight: 23,
    kKNDirectionLowerRightToUpperLeft: 24,
    kKNDirectionClockwise: 31,
    kKNDirectionCounterclockwise: 32,
    kKNDirectionIn: 41,
    kKNDirectionOut: 42,
    kKNDirectionUp: 43,
    kKNDirectionDown: 44,
    kKNDirectionStartToEnd: 51,
    kKNDirectionEndToStart: 52,
    kKNDirectionMiddleToEnds: 53,
    kKNDirectionEndsToMiddle: 54,
    kKNDirectionRandom: 91,
    kKNDirectionAlternating: 92,
    kKNDirectionSimultaneous: 93,
    kKNDirectionBCForward: 111,
    kKNDirectionBCBackward: 112,
    kKNDirectionBCRandom: 113,
    kKNDirectionBCCenter: 114,
    kKNDirectionBCEdges: 115,
    kKNDirectionGravity: 121,
    kKNDirectionNoGravity: 122
};

// end of TSDAnimation.h

// Stuff from TSDAnimation.m
var kKNAnimationStringTypeNone = "None";
var kKNAnimationStringTypeBuildIn = "In";
var kKNAnimationStringTypeBuildOut = "Out";
var kKNAnimationStringTypeTransition = "Transition";
var kKNAnimationStringTypeActionBuild = "Action";

function KNEffectIsActionEffect(effect) {
    if ([KNActionOpacityName, KNActionMotionPathName, KNActionRotationName, KNActionScaleName].indexOf(effect) > -1) {
        return true;
    } else {
        return false;
    }
}

function KNEffectIsEmphasisEffect(effect) {
    if ([KNActionPopName, KNActionPulseName, KNActionBlinkName, KNActionFlipName, KNActionBounceName, KNActionJiggleName].indexOf(effect) > -1) {
        return true;
    } else {
        return false;
    }
}

// end of TSDAnimation.m
