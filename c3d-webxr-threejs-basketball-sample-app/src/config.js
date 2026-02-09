import * as THREE from "three";

export const CONFIG = {
    hoop: {
        height: 2.85,
        distance: -2.6,
        rimRadius: 0.3,
        rimThickness: 0.02,
        scoreRadius: 0.27,
        net: {
            strands: 16,
            segments: 4,
            segmentLength: 0.1,
            thickness: 0.003,
            inwardCurve: 0.15,
        },
    },
    ball: {
        radius: 0.12,
        color: 0xff8c00,
        count: 12,
    },
    physics: {
        gravity: -4.5,
        ground: { bounce: 0.6, friction: 0.9 },
        rim: { bounce: 0.25, friction: 0.4 },
        backboard: { bounce: 0.8 },
        rack: { bounce: 0.3 },
    },
    rack: {
        rows: 3,
        cols: 4,
        position: new THREE.Vector3(0.95, 0, 0.25),
        shelfHeights: [0.38, 0.68, 0.98],
        snap: {
            radius: 0.12,
            strength: 7.0,
            damping: 0.55,
            maxSpeed: 0.8,
        },
    },
    controller: {
        grabDistance: 0.33,
        throwMultiplier: 1.5,
        minThrowVelocity: 1.0,
        ballOffset: new THREE.Vector3(0, 0, -0.15),
    },
};

export const SCORE_REGION = {
    radius: CONFIG.hoop.scoreRadius,
    height: 0.06,
    topOffset: 0.015,
};

export const BALL_RADIUS = CONFIG.ball.radius;
export const RACK_BOUNCE = CONFIG.physics.rack.bounce;

export const RACK_CONFIG = {
    rows: CONFIG.rack.rows,
    columns: CONFIG.rack.cols ?? 4,
    length: 1.35,
    depth: 0.5,
    tubeRadius: 0.02,
    shelfHeights: CONFIG.rack.shelfHeights,
    ballSpacing: CONFIG.ball.radius * 2 + 0.05,
};

export const SNAP_CONFIG = {
    captureRadius: 0.18,
    verticalTolerance: 0.08,
    strength: CONFIG.rack.snap.strength,
    damping: CONFIG.rack.snap.damping,
    maxSpeed: CONFIG.rack.snap.maxSpeed,
};