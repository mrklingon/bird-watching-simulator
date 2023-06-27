namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const Bird = SpriteKind.create()
    export const Eagle = SpriteKind.create()
    export const Robin = SpriteKind.create()
    export const Jay = SpriteKind.create()
    export const Meadowlark = SpriteKind.create()
    export const Blackbird = SpriteKind.create()
    export const Flycatcher = SpriteKind.create()
    export const Oriole = SpriteKind.create()
    export const Cardinal = SpriteKind.create()
    export const Woodpecker = SpriteKind.create()
    export const Mallard = SpriteKind.create()
    export const Leaves = SpriteKind.create()
    export const Cattails = SpriteKind.create()
    export const Grass = SpriteKind.create()
    export const Water = SpriteKind.create()
    export const Wood = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Woodpecker, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 2 . . . 
                        . . . f 1 f f . . 
                        . a a 1 a 1 1 . . 
                        . . . f 1 1 f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . a . a f f . 
                        . . a . a . f f f 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . 2 2 . . . . 
                        . . f f 1 f . . . 
                        . . 1 1 a 1 a a . 
                        . . f 1 1 f . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . f f a . a . . . 
                        f f f . a . a . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 2 . . . 
                        . . . f 1 f f . . 
                        . a a 1 a 1 1 . . 
                        . . . f 1 1 f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . a . a f f . 
                        . . a . a . f f f 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Mallard, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Flycatcher, assets.tile`myTile5`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . 1 1 1 . 
                        . . . . 1 1 f 1 a 
                        . . . 1 1 1 1 1 . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . 1 1 1 1 . . . 
                        a a 1 . c . c . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Meadowlark, assets.tile`myTile1`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . d d d . . . . 
                        b b d f d . . . . 
                        . . 5 d d d . . . 
                        . . . 5 d e d . . 
                        . . . f d d d . . 
                        . . . 5 e d d . . 
                        . . . 5 5 d d . . 
                        . . . 5 5 d e . . 
                        . . . . d d 1 d . 
                        . . . c . c d 1 d 
                        . . c . c . . d 1 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . d d d . . 
                        . . . . d f d b b 
                        . . . d d d 5 . . 
                        . . d e d 5 . . . 
                        . . d d d f . . . 
                        . . d d e 5 . . . 
                        . . d d 5 5 . . . 
                        . . e d 5 5 . . . 
                        . d 1 d d . . . . 
                        d 1 d c . c . . . 
                        1 d . . c . c . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . d d d . . . . 
                        b b d f d . . . . 
                        . . 5 d d d . . . 
                        . . . 5 d e d . . 
                        . . . f d d d . . 
                        . . . 5 e d d . . 
                        . . . 5 5 d d . . 
                        . . . 5 5 d e . . 
                        . . . . d d 1 d . 
                        . . . c . c d 1 d 
                        . . c . c . . d 1 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Flycatcher, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . 1 1 1 . 
                        . . . . 1 1 f 1 a 
                        . . . 1 1 1 1 1 . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . 1 1 1 1 . . . 
                        a a 1 . c . c . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Robin, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(25)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(25)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Jay, assets.tile`myTile5`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . . f f f f . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . c 9 c 8 . 
                        . . . c . c . 8 8 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . f f f f . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . 8 c 9 c . . . . 
                        8 8 . c . c . . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . . f f f f . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . c 9 c 8 . 
                        . . . c . c . 8 8 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Oriole, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Cardinal, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(15)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(15)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Cardinal, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Northern Cardinal Sightings", blockSettings.readNumber("Northern Cardinal Sightings") + 1)
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Oriole, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Baltimore Oriole Sightings", blockSettings.readNumber("Baltimore Oriole Sightings") + 1)
    }
})
scene.onOverlapTile(SpriteKind.Woodpecker, assets.tile`myTile`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 2 . . . 
                        . . . f 1 f f . . 
                        . a a 1 a 1 1 . . 
                        . . . f 1 1 f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f 1 f . . 
                        . . a . 1 f f . . 
                        . . . a f f f . . 
                        . . a . f f f . . 
                        . . . a f f f . . 
                        . . . . . f f . . 
                        . . . . f f . . . 
                        . . . . f . . . . 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . 2 2 . . . . 
                        . . f f 1 f . . . 
                        . . 1 1 a 1 a a . 
                        . . f 1 1 f . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f 1 f . . . . 
                        . . f f 1 . a . . 
                        . . f f f a . . . 
                        . . f f f . a . . 
                        . . f f f a . . . 
                        . . f f . . . . . 
                        . . . f f . . . . 
                        . . . . f . . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 2 . . . 
                        . . . f 1 f f . . 
                        . a a 1 a 1 1 . . 
                        . . . f 1 1 f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f 1 f . . 
                        . . a . 1 f f . . 
                        . . . a f f f . . 
                        . . a . f f f . . 
                        . . . a f f f . . 
                        . . . . . f f . . 
                        . . . . f f . . . 
                        . . . . f . . . . 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Mallard, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(20)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Water)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(15)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Woodpecker, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(15)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Wood)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(10)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Meadowlark, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Western Meadowlark Sightings", blockSettings.readNumber("Western Meadowlark Sightings") + 1)
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Eagle, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(50)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Blackbird, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(20)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Cattails)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(10)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(spriteutils.isDestroyed(mySprite2))) {
        mySprite2.setImage(img`
            .........................
            .........................
            ........bbb..............
            ...bbbbbfffbbbbbbbbbbb...
            ..bbbbbbfffbbbbbbbbbbbb..
            ..bbbbbbbbbbbbbbbbbbbbb..
            ..bbbfffffffffffffffbbb..
            ..bbbf.............fbbb..
            ..bbbf......f......fbbb..
            ..bbbf.....fff.....fbbb..
            ..bbbf....f...f....fbbb..
            ..bbbf....f...f....fbbb..
            ..bbbf.....fff.....fbbb..
            ..bbbf......f......fbbb..
            ..bbbf.............fbbb..
            ..bbbfffffffffffffffbbb..
            ..bbbbbbbbbbbbbbbbbbbbb..
            ..bbbbbbbbbbbbbbbbbbbbb..
            ...bbbbbbbbbbbbbbbbbbb...
            .........................
            .........................
            `)
    }
})
scene.onOverlapTile(SpriteKind.Oriole, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f f . . 
                        . . . f f f f . . 
                        . . . . 4 f f . . 
                        . . . . f 4 f . . 
                        . . . . 1 f f . . 
                        . . . . f f f . . 
                        . . . . 4 f f . . 
                        . . . . 4 4 f . . 
                        . . . . 4 4 f f . 
                        . . . c . c . f f 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . f f a f a . . 
                        . . f f f f . . . 
                        . . f f 4 . . . . 
                        . . f 4 f . . . . 
                        . . f f 1 . . . . 
                        . . f f f . . . . 
                        . . f f 4 . . . . 
                        . . f 4 4 . . . . 
                        . f f 4 4 . . . . 
                        f f . c . c . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f f . . 
                        . . . f f f f . . 
                        . . . . 4 f f . . 
                        . . . . f 4 f . . 
                        . . . . 1 f f . . 
                        . . . . f f f . . 
                        . . . . 4 f f . . 
                        . . . . 4 4 f . . 
                        . . . . 4 4 f f . 
                        . . . c . c . f f 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Blackbird, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Red-winged Blackbird Sightings", blockSettings.readNumber("Red-winged Blackbird Sightings") + 1)
    }
})
scene.onOverlapTile(SpriteKind.Cardinal, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 4 2 a 2 2 . . 
                        . . . 2 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 2 . 
                        . . . c . c . 2 2 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 2 2 a 2 4 . . 
                        . . 2 2 2 2 . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . 2 2 2 2 . . . . 
                        2 2 . c . c . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 4 2 a 2 2 . . 
                        . . . 2 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 2 . 
                        . . . c . c . 2 2 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Mallard, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Mallard Sightings", blockSettings.readNumber("Mallard Sightings") + 1)
    }
})
scene.onOverlapTile(SpriteKind.Jay, assets.tile`myTile1`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . . f f f f . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . c 9 c 8 . 
                        . . . c . c . 8 8 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . f f f f . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . 8 c 9 c . . . . 
                        8 8 . c . c . . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . . f f f f . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . c 9 c 8 . 
                        . . . c . c . 8 8 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Blackbird, assets.tile`myTile2`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f . . . 
                        . . . f f f f . . 
                        . . . . f f f . . 
                        . . . . f 2 f . . 
                        . . . . f 5 2 . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f f . 
                        . . . a . a f f f 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . . f a f a . . 
                        . . f f f f . . . 
                        . . f f f . . . . 
                        . . f 2 f . . . . 
                        . . 2 5 f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . f f f f . . . . 
                        f f f a . a . . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f . . . 
                        . . . f f f f . . 
                        . . . . f f f . . 
                        . . . . f 2 f . . 
                        . . . . f 5 2 . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f f . 
                        . . . a . a f f f 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Jay, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Steller's Jay Sightings", blockSettings.readNumber("Steller's Jay Sightings") + 1)
    }
})
scene.onOverlapTile(SpriteKind.Jay, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Woodpecker, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Pileated Woodpecker Sightings", blockSettings.readNumber("Pileated Woodpecker Sightings") + 1)
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Jay, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(25)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(10)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Flycatcher, assets.tile`myTile2`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . 1 1 1 . 
                        . . . . 1 1 f 1 a 
                        . . . 1 1 1 1 1 . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . 1 1 1 1 . . . 
                        a a 1 . c . c . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Robin, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("American Robin Sightings", blockSettings.readNumber("American Robin Sightings") + 1)
    }
})
function make_settings () {
    if (!(blockSettings.exists("Total Sightings"))) {
        blockSettings.writeNumber("Total Sightings", 0)
    }
    if (!(blockSettings.exists("Bald Eagle Sightings"))) {
        blockSettings.writeNumber("Bald Eagle Sightings", 0)
    }
    if (!(blockSettings.exists("American Robin Sightings"))) {
        blockSettings.writeNumber("American Robin Sightings", 0)
    }
    if (!(blockSettings.exists("Steller's Jay Sightings"))) {
        blockSettings.writeNumber("Steller's Jay Sightings", 0)
    }
    if (!(blockSettings.exists("Western Meadowlark Sightings"))) {
        blockSettings.writeNumber("Western Meadowlark Sightings", 0)
    }
    if (!(blockSettings.exists("Red-winged Blackbird Sightings"))) {
        blockSettings.writeNumber("Red-winged Blackbird Sightings", 0)
    }
    if (!(blockSettings.exists("Scissor-tailed Flycatcher Sightings"))) {
        blockSettings.writeNumber("Scissor-tailed Flycatcher Sightings", 0)
    }
    if (!(blockSettings.exists("Baltimore Oriole Sightings"))) {
        blockSettings.writeNumber("Baltimore Oriole Sightings", 0)
    }
    if (!(blockSettings.exists("Northern Cardinal Sightings"))) {
        blockSettings.writeNumber("Northern Cardinal Sightings", 0)
    }
    if (!(blockSettings.exists("Pileated Woodpecker Sightings"))) {
        blockSettings.writeNumber("Pileated Woodpecker Sightings", 0)
    }
    if (!(blockSettings.exists("Mallard Sightings"))) {
        blockSettings.writeNumber("Mallard Sightings", 0)
    }
}
scene.onOverlapTile(SpriteKind.Meadowlark, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . d d d . . . . 
                        b b d f d . . . . 
                        . . 5 d d d . . . 
                        . . . 5 d e d . . 
                        . . . f d d d . . 
                        . . . 5 e d d . . 
                        . . . 5 5 d d . . 
                        . . . 5 5 d e . . 
                        . . . . d d 1 d . 
                        . . . c . c d 1 d 
                        . . c . c . . d 1 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . d d d . . 
                        . . . . d f d b b 
                        . . . d d d 5 . . 
                        . . d e d 5 . . . 
                        . . d d d f . . . 
                        . . d d e 5 . . . 
                        . . d d 5 5 . . . 
                        . . e d 5 5 . . . 
                        . d 1 d d . . . . 
                        d 1 d c . c . . . 
                        1 d . . c . c . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . d d d . . . . 
                        b b d f d . . . . 
                        . . 5 d d d . . . 
                        . . . 5 d e d . . 
                        . . . f d d d . . 
                        . . . 5 e d d . . 
                        . . . 5 5 d d . . 
                        . . . 5 5 d e . . 
                        . . . . d d 1 d . 
                        . . . c . c d 1 d 
                        . . c . c . . d 1 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Robin, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Eagle, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . 1 1 1 . . . 
                        . 4 4 1 f 1 1 . . 
                        . . . 1 1 1 1 . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f 1 . 
                        . . . 4 . 4 . 1 1 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . 1 1 1 . . . 
                        . . 1 1 f 1 4 4 . 
                        . . 1 1 1 1 . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . 1 f f f . . . . 
                        1 1 . 4 . 4 . . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . 1 1 1 . . . 
                        . . 1 1 f 1 4 4 . 
                        . . 1 1 1 1 . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . 1 f f f . . . . 
                        1 1 . 4 . 4 . . . 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Flycatcher, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Scissor-tailed Flycatcher Sightings", blockSettings.readNumber("Scissor-tailed Flycatcher Sightings") + 1)
    }
})
scene.onOverlapTile(SpriteKind.Eagle, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (!(spriteutils.isDestroyed(mySprite2))) {
        mySprite2.setImage(img`
            .........................
            .........................
            ....ccc.bbb..............
            ...bbbbbfffbbbbbbbbbbb...
            ..bbbbbbfffbbbbbbbbbbbb..
            ..bbbbbbbbbbbbbbbbbbbbb..
            ..bbbfffffffffffffffbbb..
            ..bbbf.............fbbb..
            ..bbbf......f......fbbb..
            ..bbbf.....fff.....fbbb..
            ..bbbf....f...f....fbbb..
            ..bbbf....f...f....fbbb..
            ..bbbf.....fff.....fbbb..
            ..bbbf......f......fbbb..
            ..bbbf.............fbbb..
            ..bbbfffffffffffffffbbb..
            ..bbbbbbbbbbbbbbbbbbbbb..
            ..bbbbbbbbbbbbbbbbbbbbb..
            ...bbbbbbbbbbbbbbbbbbb...
            .........................
            .........................
            `)
    }
})
scene.onOverlapTile(SpriteKind.Mallard, assets.tile`myTile1`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . 7 7 7 . . . . 
                        5 5 7 a 7 . . . . 
                        . . 7 7 7 . . . . 
                        . . e e e e e e e 
                        . . e e e e e d d 
                        . . e d d d d d . 
                        . . . . 4 . 4 . . 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 7 7 7 . . 
                        . . . . 7 a 7 5 5 
                        . . . . 7 7 7 . . 
                        e e e e e e e . . 
                        d d e e e e e . . 
                        . d d d d d e . . 
                        . . 4 . 4 . . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . 7 7 7 . . . . 
                        5 5 7 a 7 . . . . 
                        . . 7 7 7 . . . . 
                        . . e e e e e e e 
                        . . e e e e e d d 
                        . . e d d d d d . 
                        . . . . 4 . 4 . . 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Camera, SpriteKind.Eagle, function (sprite, otherSprite) {
    if (controller.A.isPressed() && !(sprites.readDataBoolean(otherSprite, "Spotted"))) {
        sprites.setDataBoolean(otherSprite, "Spotted", true)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        blockSettings.writeNumber("Total Sightings", blockSettings.readNumber("Total Sightings") + 1)
        blockSettings.writeNumber("Bald Eagle Sightings", blockSettings.readNumber("Bald Eagle Sightings") + 1)
    }
})
scene.onOverlapTile(SpriteKind.Flycatcher, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Blackbird, assets.tile`myTile3`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f . . . 
                        . . . f f f f . . 
                        . . . . f f f . . 
                        . . . . f 2 f . . 
                        . . . . f 5 2 . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f f . 
                        . . . a . a f f f 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . . f a f a . . 
                        . . f f f f . . . 
                        . . f f f . . . . 
                        . . f 2 f . . . . 
                        . . 2 5 f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . f f f f . . . . 
                        f f f a . a . . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f . . . 
                        . . . f f f f . . 
                        . . . . f f f . . 
                        . . . . f 2 f . . 
                        . . . . f 5 2 . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f f . 
                        . . . a . a f f f 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selection == 1) {
        selection += 2
        mySprite.setImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        mySprite.y += 40
        mySprite.x = 80
    } else if (selection == 2) {
        selection += -1
        mySprite.setImage(img`
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        mySprite.y += -20
        mySprite.x = 80.5
    } else if (selection == 3) {
        selection += -1
        mySprite.setImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        mySprite.y += -20
        mySprite.x = 80
    }
})
scene.onOverlapTile(SpriteKind.Mallard, assets.tile`myTile4`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . 7 7 7 . . . . 
                        5 5 7 a 7 . . . . 
                        . . 7 7 7 . . . . 
                        . . e e e e e e e 
                        . . e e e e e d d 
                        . . e d d d d d . 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 7 7 7 . . 
                        . . . . 7 a 7 5 5 
                        . . . . 7 7 7 . . 
                        e e e e e e e . . 
                        d d e e e e e . . 
                        . d d d d d e . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . 7 7 7 . . . . 
                        5 5 7 a 7 . . . . 
                        . . 7 7 7 . . . . 
                        . . e e e e e e e 
                        . . e e e e e d d 
                        . . e d d d d d . 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Cardinal, assets.tile`myTile1`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 4 2 a 2 2 . . 
                        . . . 2 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 2 . 
                        . . . c . c . 2 2 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 2 2 a 2 4 . . 
                        . . 2 2 2 2 . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . 2 2 2 2 . . . . 
                        2 2 . c . c . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 4 2 a 2 2 . . 
                        . . . 2 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 2 . 
                        . . . c . c . 2 2 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Blackbird, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Jay, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . . f f f f . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . c 9 c 8 . 
                        . . . c . c . 8 8 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . f f f f . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . . 8 8 8 . . . . 
                        . 8 c 9 c . . . . 
                        8 8 . c . c . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . f . . . . 
                        . . . f f f . . . 
                        . . f f a f f . . 
                        . . . f f f f . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . 8 8 8 . . 
                        . . . . c 9 c 8 . 
                        . . . c . c . 8 8 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Flycatcher, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(10)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(10)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(10)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Cattails)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Mallard, assets.tile`myTile5`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . 7 7 7 . . . . 
                        5 5 7 a 7 . . . . 
                        . . 7 7 7 . . . . 
                        . . e e e e e e e 
                        . . e e e e e d d 
                        . . e d d d d d . 
                        . . . . 4 . 4 . . 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 7 7 7 . . 
                        . . . . 7 a 7 5 5 
                        . . . . 7 7 7 . . 
                        e e e e e e e . . 
                        d d e e e e e . . 
                        . d d d d d e . . 
                        . . 4 . 4 . . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . 7 7 7 . . . . 
                        5 5 7 a 7 . . . . 
                        . . 7 7 7 . . . . 
                        . . e e e e e e e 
                        . . e e e e e d d 
                        . . e d d d d d . 
                        . . . . 4 . 4 . . 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Flycatcher, assets.tile`myTile3`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . 1 1 1 . 
                        . . . . 1 1 f 1 a 
                        . . . 1 1 1 1 1 . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . 1 1 1 1 . . . 
                        a a 1 . c . c . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (birdWatching) {
        if (game.ask("End bird", "watching session?")) {
            game.reset()
        }
    }
})
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Meadowlark, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(20)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else if (Math.percentChance(10)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Robin, assets.tile`myTile1`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . c c c c . . . 
                        . 4 c f 1 c c . . 
                        . . . c c c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 1 1 c c . 
                        . . . 4 . 4 . c c 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . c c c c . . 
                        . . c c 1 f c 4 . 
                        . . c c c c . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . c c 1 1 . . . . 
                        c c . 4 . 4 . . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . c c c c . . . 
                        . 4 c f 1 c c . . 
                        . . . c c c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 1 1 c c . 
                        . . . 4 . 4 . c c 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Cardinal, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
function locations () {
    for (let index = 0; index < 5; index++) {
        declutter.load("Leaves", sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Leaves))
        tiles.placeOnRandomTile(declutter.get("Leaves"), assets.tile`myTile0`)
        declutter.load("Cattails", sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Cattails))
        tiles.placeOnRandomTile(declutter.get("Cattails"), assets.tile`myTile2`)
        declutter.load("Grass", sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Grass))
        tiles.placeOnRandomTile(declutter.get("Grass"), assets.tile`myTile5`)
    }
    for (let index = 0; index < 3; index++) {
        declutter.load("Water", sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Water))
        tiles.placeOnRandomTile(declutter.get("Water"), assets.tile`myTile4`)
        declutter.load("Wood", sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Wood))
        tiles.placeOnRandomTile(declutter.get("Wood"), assets.tile`myTile`)
    }
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Oriole, randint(5000, 15000), function (sprite) {
    if (!(spriteutils.isDestroyed(sprite)) && Math.percentChance(25)) {
        if (!(sprites.readDataBoolean(sprite, "Perching")) && !(sprites.readDataBoolean(sprite, "Landing"))) {
            if (Math.percentChance(25)) {
                spriteutils.setVelocityAtAngle(sprite, spriteutils.angleFrom(sprite, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                sprites.setDataBoolean(sprite, "Landing", true)
            } else {
                sprite.setVelocity(sprite.vx * -1, sprite.vy)
            }
        } else if (sprites.readDataBoolean(sprite, "Perching")) {
            sprite.setVelocity(list._pickRandom(), randint(-5, -25))
            sprites.setDataBoolean(sprite, "Perching", false)
        }
    }
})
scene.onOverlapTile(SpriteKind.Meadowlark, assets.tile`myTile5`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . d d d . . . . 
                        b b d f d . . . . 
                        . . 5 d d d . . . 
                        . . . 5 d e d . . 
                        . . . f d d d . . 
                        . . . 5 e d d . . 
                        . . . 5 5 d d . . 
                        . . . 5 5 d e . . 
                        . . . . d d 1 d . 
                        . . . c . c d 1 d 
                        . . c . c . . d 1 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . d d d . . 
                        . . . . d f d b b 
                        . . . d d d 5 . . 
                        . . d e d 5 . . . 
                        . . d d d f . . . 
                        . . d d e 5 . . . 
                        . . d d 5 5 . . . 
                        . . e d 5 5 . . . 
                        . d 1 d d . . . . 
                        d 1 d c . c . . . 
                        1 d . . c . c . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . d d d . . . . 
                        b b d f d . . . . 
                        . . 5 d d d . . . 
                        . . . 5 d e d . . 
                        . . . f d d d . . 
                        . . . 5 e d d . . 
                        . . . 5 5 d d . . 
                        . . . 5 5 d e . . 
                        . . . . d d 1 d . 
                        . . . c . c d 1 d 
                        . . c . c . . d 1 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Flycatcher, assets.tile`myTile1`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . 1 1 1 . 
                        . . . . 1 1 f 1 a 
                        . . . 1 1 1 1 1 . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . 1 1 1 1 . . . 
                        a a 1 . c . c . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . 1 1 1 . . . . . 
                        a 1 f 1 1 . . . . 
                        . 1 1 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 . . . 
                        . . . 1 1 1 1 . . 
                        . . c . c . 1 a a 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Cardinal, assets.tile`myTile5`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 4 2 a 2 2 . . 
                        . . . 2 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 2 . 
                        . . . c . c . 2 2 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 2 2 a 2 4 . . 
                        . . 2 2 2 2 . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . . 2 2 2 . . . . 
                        . 2 2 2 2 . . . . 
                        2 2 . c . c . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . 2 . . . . 
                        . . . 2 2 2 . . . 
                        . . 4 2 a 2 2 . . 
                        . . . 2 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 . . 
                        . . . . 2 2 2 2 . 
                        . . . c . c . 2 2 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Meadowlark, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (selection == 1) {
        selection += 1
        mySprite.setImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dd........................................................dd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        mySprite.y += 20
        mySprite.x = 80
    } else if (selection == 2) {
        selection += 1
        mySprite.setImage(img`
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dd............................................................................dd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        mySprite.y += 20
        mySprite.x = 80
    } else if (selection == 3) {
        selection = 1
        mySprite.setImage(img`
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            dd...................................................................................................dd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            `)
        mySprite.y += -40
        mySprite.x = 80.5
    }
})
scene.onOverlapTile(SpriteKind.Robin, assets.tile`myTile5`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile5`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . c c c c . . . 
                        . 4 c f 1 c c . . 
                        . . . c c c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 1 1 c c . 
                        . . . 4 . 4 . c c 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . c c c c . . 
                        . . c c 1 f c 4 . 
                        . . c c c c . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . c c 1 1 . . . . 
                        c c . 4 . 4 . . . 
                        `)
                } else {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . c c c c . . . 
                        . 4 c f 1 c c . . 
                        . . . c c c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 1 1 c c . 
                        . . . 4 . 4 . c c 
                        `)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Blackbird, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f . . . 
                        . . . f f f f . . 
                        . . . . f f f . . 
                        . . . . f 2 f . . 
                        . . . . f 5 2 . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f f . 
                        . . . a . a f f f 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . . f a f a . . 
                        . . f f f f . . . 
                        . . f f f . . . . 
                        . . f 2 f . . . . 
                        . . 2 5 f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . . f f f . . . . 
                        . f f f f . . . . 
                        f f f a . a . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . f f f . . . 
                        . . a f a f . . . 
                        . . . f f f f . . 
                        . . . . f f f . . 
                        . . . . f 2 f . . 
                        . . . . f 5 2 . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f . . 
                        . . . . f f f f . 
                        . . . a . a f f f 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
scene.onOverlapTile(SpriteKind.Woodpecker, assets.tile`transparency8`, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Robin, assets.tile`myTile0`, function (sprite, location) {
    if (sprites.readDataBoolean(sprite, "Landing")) {
        timer.after(50, function () {
            if (sprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
                if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingLeft))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . c c c c . . . 
                        . 4 c f 1 c c . . 
                        . . . c c c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 1 1 c c . 
                        . . . 4 . 4 . c c 
                        `)
                } else if (characterAnimations.matchesRule(sprite, characterAnimations.rule(Predicate.MovingRight))) {
                    sprite.setVelocity(0, 0)
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . c c c c . . 
                        . . c c 1 f c 4 . 
                        . . c c c c . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . . c c 4 . . . . 
                        . c c 1 1 . . . . 
                        c c . 4 . 4 . . . 
                        `)
                } else {
                    sprite.setImage(img`
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . . . . . . . . 
                        . . c c c c . . . 
                        . 4 c f 1 c c . . 
                        . . . c c c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 4 c c . . 
                        . . . . 1 1 c c . 
                        . . . 4 . 4 . c c 
                        `)
                    sprite.setVelocity(0, 0)
                }
                sprites.setDataBoolean(sprite, "Landing", false)
                sprites.setDataBoolean(sprite, "Perching", true)
            }
        })
    }
})
let myBird: Sprite = null
let textSprite4: TextSprite = null
let myMenu: miniMenu.MenuSprite = null
let birdWatching = false
let mySprite2: Sprite = null
let list: number[] = []
let selection = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    eeeeeeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeddeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeddeeeeeeeeeeedeeeeeeeeeeeeeeeeeeedbeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeddeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeedbeeeeeeeeeebdbeeeeeeeeeebdeeeeeeeeeeeeeeeeeebdbeeeeeeeeeeeeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeebdeeeeeddeeeeedeeeeeeeeeeeeeeeeeeeebdeeeeeeeeeeeddeeeeeeeeeeebdeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeddeeeeeeeeeedbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeddeeeeddeeeeeddbeeeeeeeeeeeeeeeeeeedbeeeeeeeeeebdbeeeeeeeeeeeddeeeeeeeeeeeeeeeeebdbeeeeeeeeeeeeeeedbeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeebdbeeebdbeeeeebbeeeeeeeeeeeeeeeeeeebdeeeeeeeeeeeddeeeeebeeeeeedbeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeebdeeeeeeeeeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeddeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeedbeeeeeeeeeebdbeeeeddeeeeebdeeeeeeeeeeeeeeeebbddddbeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeedbeebdbeeeeeeeeeeeeedeeeeeeeeeeeeeedbeeeeeeeeeebdeeeeeddeeeeedbeeeeeeebbeeeeeddddddbbeeeebddeeeeeedbeeeeeeeeeeeeeeeebeeeeeeeeeeeebdbeeeeeeeeeeeeeeeeeeeeeeee
    eeebdbbbddeeeeeeeeeeeeeddeeebbeeeeebbbbdeeeeeeeeeeeddeeeebdbeeeebdeeeeeebdddbeeeeeeeddeeeeeedddddeeeebdeeeeeeeeeeeeeeeebdeeeeeeeeeeebddddeeeeeeeeeeeeeeeeeeeeeee
    eeeddddddddbeeeeebeeeeedbebdddeeebdddddbeeeeeeeeeebdbeeeeddbeeeeddeeeeebddebdeeeeeebdbeeeeebdbebdeeeeddeeedbeeeeeedeeeeddeeeeeeeeeebdbebddeeeeeeeeeeeeeeeeeeeeee
    eebdbbeeeeddbeeeedbeeebdeddbeeeebddbebdbeeeeeeeeeebdeeeebddeeeebdbeeeeeddeebdeeeeeeddeeeeeeddeeddeeeedbebdddeeeeebdeeebdeeebbeeeeeedbeebddeeeeeeeeeeeeeeeeeeeeee
    eeddeeeeeeeddeeebdbeeeddddeeeeeeddeeeddeeeeeeeeeeebdeeeedddeeeeddeeeeeddeeeddeeeeebdbeeeeebdeeebeeeebdebddddeeeeeddeeeddebdddeeeeeddeeeddbeeeeeeeeeeeeeeeeeeeeee
    eedbeeeeeeebdbeeddeeebdddeeeeeeddeeeddbeeeeeeeeeeeddeeebddbeeebdeeeeebdbeebddeeeeeddeeeeeeddeeeeeeeebdbddeddeeeeedbeeedbbddedbeeeedbeebddeeeeeeeeeeeeeeeeeeeeeee
    ebdeeeeeeeebdeeedbeeebddeeeeeeedbeebddbeeeeeeeeeeedbeeedddbeebdbeeeeebdeebdddeeeeedbeeeeebdbeeeebeeebdddeedbeeeebdeeebdbddeedeeeeedbebddbeeeeeeeeeeeeeeeeeeeeeee
    eddeeeeeeeeddeebdeeeeddbeeeeeebdeebdbdbeeeeeeeeeeedbeebdddeeeddeeeeeedbebdbddeeeebdeeeeeebdeeeebdeeebddeeedeeeeedbeeebdddeeedbbbeeddddbdeeeeeeeeeeeeeeeeeeeeeeee
    bdbeeeeeeeedbeebdeeeeddeeeeeeebdeddbedeeeeeeeeeeeedbeeddddeeddbeeeeeedbbdbebddbeebdeeeeeebdeebddeeeebdbeeedbddebdeeeedddeeeebddeeeebbebdeeeeeeeeeeeeeeeeeeeeeeee
    bdeeeeeeeeddeeebbeeeeddeeeeeeebdddeeedeeeeeeeeeeeedbebdbddeddbeeeeeeedddbeeebbeeeddbeeeeeeddddbeeeeebdeeeedddeeebeeeebbeeeeeebeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeee
    ebbeeeeebddeeeeeeeeeeeeeeeeeeeebbeeeebeeeeeeeeeeeeddddbeddddbeeeeeeeeeeeeeeeeeeeeddbeeeeeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbeeeeeeeeeeeeeeeeeeeeeeee
    eebdbbbdddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebddbeebddbeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdeeeeeeeeeeeeeeeeeeeeeeeee
    eeebddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeebdeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222eeedeeedbeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222eebdbddeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222ff2222222eeebddbeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff2222ff22222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffff222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeebddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeebdddbbbdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeedddbeeeedbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeebdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222ff2222222222222eeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeedddeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222f2222222222222eeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeddbeeeeebdbeedbeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdeeeeeeeeeeeeeeeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222f22222222222222eeeeeeeeeeeeeeeeeeeeeeeee
    eeeeddbeeeeeeddeebddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222ff2222222222222eeeeeeeeeeeeeeeeeeeeeeeee
    eeeddbeeeeeeebeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbeeeeeeeeeeeeeeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222ff2222222222222eeeeeeeeeeeeeeeeeeeeeeee
    eeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeebbdddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222ff22222222222222eeeeeeeeeeeeeeeeeeeeeee
    eebdbeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeedbeeeeeeeeeeeeebdddddbbbeeeebbeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeee222222222ff2222f222f2222eeeeeeeeeeeeeeeeeeeeeee
    eebdeeeeeeeeeeeeeeeeebdeeeeeeeeeeeeeeedbeeeddeebdbeeeeedddeeeeeeeebdbeeeeeeddddeeeeedbeebbeeeeeeeeeeeeeeeeeeeeeeee222222222ff222f222f22222eeeeeeeeeeeeeeeeeeeeee
    eeedbeeeeeeeeeeeebeeeddeeebeeeeeeeeeebdbeebdbeebdeeeeeddbdbeeeeeeeddeeeeeeddbbdbeeebdebdddbeeeeeeeeeeeeeeeeeeeeeee2222222222fff2ff22ff22222eeeeeeeeeeeeeeeeeeeee
    eeebdbeeeeeeeeeebdeeedbeedddeeeeeeeeeddeeeddeeedbeeeeddeedbeeeeeebdbeeeeeddeeedbeeedbbddbeeeeeeeeeeeeeeeeeeeeeeeeee22222222222ffff222ff22222eeeeeeeeeeeeeeeeeeee
    eeeebdbeeeeeeeeeddeebdebddddeeddbeeebdbeebdbeeedbeeebdeeeddeeeeeeddeeeeeddbeeedbeebdddbeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222222ffff2f22222eeeeeeeeeeeeeeeeeeee
    eeeeeeddbeeeeeebdbeeddbddeddbddddeeebdeebddeeebdeeeedbeeddbeeeeeedbeeeeeddeeebdeeedddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222ffffffff2eeeeeeeeeeeeeeeeeeee
    eeeeeeebdbeeeeebdeeeddddeedddbebdeeeddeedddeeeddeeeddeebddeeeeeebdeeeeebdbeeedbeeeddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222222eeeeeeeeeeeeeeeeeee
    eeeeeeeeedbeeeeddeeedddeebddbeebdeeedbbdddbeeedbeeedbeddddeeeeeeddeeeeebdeeeddeeebddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222222222222222222222eeeeeeeeeeeeeeeeeee
    eeeeeeeeebdeeeedbeebddeeeddbeeebdbeedddbedbeeedbeeedbddbeddbdbeedbeeeeebdeeddeeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecce222222222222222222eeeeeeeeeeeeeeeeee
    eedeeeeeeddeeeedeeeebeeeeebeeeeeddbebdbeedbeeebeeeedddeeeeddbeebddeeeeeedddbeeeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeecceee222222222222eeeeeeeeeeeeeeeeee
    eebdbbbbdddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdeeeeeeeeeeeeeeeeeeeebddeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeecceeeeeeeeeee22222eeeeeeeeeeeeeeeee
    eeebdddddbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccecceeeecceeeeeeeeeeeee22222eeeeeeeeeeeeeeee
    eeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeecceeeeeeeeeeeeee2222eeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeceeeeeeeeeeeeeeee2222eeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeecceeeeeeeeeeeeeeeee2222eeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeceeeeeeeeeeeeeeeeeee2222eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeee222eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeeeeeeeeee2222eeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeececccceeeeeeeeeeeeeeeeeee2222eeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeeeeeeeeeeeeeeee2222eeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222eeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222eeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee222eeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
let homeScreen = true
make_settings()
mySprite = sprites.create(img`
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    dd...................................................................................................dd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `, SpriteKind.Cursor)
mySprite.x = 80.5
mySprite.y = 70
selection = 1
let textSprite = textsprite.create("Go Bird Watching", 14, 15)
textSprite.setPosition(80, 70)
let textSprite2 = textsprite.create("See Stats", 14, 15)
textSprite2.setPosition(80, 90)
let textSprite3 = textsprite.create("View Credits", 14, 15)
textSprite3.setPosition(80, 110)
forever(function () {
    if (!(spriteutils.isDestroyed(myMenu))) {
        myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selection == "Close") {
                game.reset()
            }
        })
    }
})
forever(function () {
    if (homeScreen && controller.A.isPressed()) {
        if (selection == 1) {
            tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level4`))
            locations()
            list = [-25, 25]
            sprites.destroyAllSpritesOfKind(SpriteKind.Cursor)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            homeScreen = false
            birdWatching = true
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                `)
            mySprite2 = sprites.create(img`
                .........................
                .........................
                ....ccc.bbb..............
                ...bbbbbfffbbbbbbbbbbb...
                ..bbbbbbfffbbbbbbbbbbbb..
                ..bbbbbbbbbbbbbbbbbbbbb..
                ..bbbfffffffffffffffbbb..
                ..bbbf.............fbbb..
                ..bbbf......f......fbbb..
                ..bbbf.....fff.....fbbb..
                ..bbbf....f...f....fbbb..
                ..bbbf....f...f....fbbb..
                ..bbbf.....fff.....fbbb..
                ..bbbf......f......fbbb..
                ..bbbf.............fbbb..
                ..bbbfffffffffffffffbbb..
                ..bbbbbbbbbbbbbbbbbbbbb..
                ..bbbbbbbbbbbbbbbbbbbbb..
                ...bbbbbbbbbbbbbbbbbbb...
                .........................
                .........................
                `, SpriteKind.Camera)
            mySprite2.changeScale(1, ScaleAnchor.Middle)
            mySprite2.z = 10
            controller.moveSprite(mySprite2)
            scene.cameraFollowSprite(mySprite2)
        } else if (selection == 2) {
            scene.setBackgroundImage(img`
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `)
            sprites.destroyAllSpritesOfKind(SpriteKind.Cursor)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            homeScreen = false
            myMenu = miniMenu.createMenu(
            miniMenu.createMenuItem("Total Sightings: " + blockSettings.readNumber("Total Sightings")),
            miniMenu.createMenuItem("Bald Eagle Sightings: " + blockSettings.readNumber("Bald Eagle Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 1 1 1 f f f f f f f f 1 1 1 
                4 4 1 f 1 f f f f f f f f 4 . . 
                . . 1 1 1 f f f f f f f f . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("American Robin Sightings: " + blockSettings.readNumber("American Robin Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . c c c c c c c c c c c c c . 
                . 4 c f 1 c c c c c c 1 4 . . . 
                . . . c c 4 4 4 4 4 4 1 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Steller's Jay Sightings: " + blockSettings.readNumber("Steller's Jay Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f . . . . . . . . . . . . 
                . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                . f f a f 8 8 8 8 8 8 9 c c . . 
                . . f f f 8 8 8 8 8 8 8 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Western Meadowlark Sightings: " + blockSettings.readNumber("Western Meadowlark Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . d d d e d d d d d d d d d . 
                b b 5 f d d d e d d e d c c . . 
                . . d 5 5 5 f 5 5 5 d d . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Red-winged Blackbird Sightings: " + blockSettings.readNumber("Red-winged Blackbird Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f f f f f f f f f f . 
                . a f a f f f f f f f f a a . . 
                . . f f f f f f f f f f . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Scissor-tailed Flycatcher Sightings: " + blockSettings.readNumber("Scissor-tailed Flycatcher Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 1 1 1 1 1 1 1 1 1 1 1 1 1 a a 
                a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                . . 1 1 1 1 1 1 1 1 1 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Baltimore Oriole Sightings: " + blockSettings.readNumber("Baltimore Oriole Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f a . 
                a f a f f 4 4 4 4 4 4 c c . . . 
                . . f f 4 4 4 4 4 4 4 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Northern Cardinal Sightings: " + blockSettings.readNumber("Northern Cardinal Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 2 . . . . . . . . . . . . . 
                . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Pileated Woodpecker Sightings: " + blockSettings.readNumber("Pileated Woodpecker Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 . . . . . . . . . . . 
                . . f 1 f f f f f f f f f f f f 
                a a 1 a 1 1 f f f f f f a . . . 
                . . f 1 1 f f f f f f f . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Mallard Sightings: " + blockSettings.readNumber("Mallard Sightings"), img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 7 7 7 e e e e e e e e e e e 
                5 5 7 a 7 e e d d d d d 4 4 . . 
                . . 7 7 7 e d d d d d d . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("Close")
            )
            myMenu.setDimensions(scene.screenWidth(), scene.screenHeight())
            myMenu.setPosition(1, 1)
        } else if (selection == 3) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Cursor)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            textSprite4 = textsprite.create("Developed by Blobbey", 14, 15)
            textSprite4.setPosition(80, 100)
            homeScreen = false
            pause(5000)
            sprites.destroyAllSpritesOfKind(SpriteKind.Text)
            game.reset()
        }
    }
})
game.onUpdateInterval(randint(1000, 10000), function () {
    if (birdWatching) {
        if (Math.percentChance(5)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Eagle)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f f f . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . f f f f f . . . 
                    . . . . . . . f f f f f f . . . 
                    . . . . . . f f f f f f . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f f f . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 1 1 1 f f f f f f f f 1 1 1 
                    4 4 1 f 1 f f f f f f f f 4 . . 
                    . . 1 1 1 f f f f f f f f . . . 
                    . . . . . . . f f f f f . . . . 
                    . . . . . . . . f f f f f . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    1 1 1 f f f f f f f f 1 1 1 . . 
                    . . 4 f f f f f f f f 1 f 1 4 4 
                    . . . f f f f f f f f 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    1 1 1 f f f f f f f f 1 1 1 . . 
                    . . 4 f f f f f f f f 1 f 1 4 4 
                    . . . f f f f f f f f 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . f f f f f . . . . . . . . 
                    . . . f f f f f f . . . . . . . 
                    . . . . f f f f f f . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    1 1 1 f f f f f f f f 1 1 1 . . 
                    . . 4 f f f f f f f f 1 f 1 4 4 
                    . . . f f f f f f f f 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    1 1 1 f f f f f f f f 1 1 1 . . 
                    . . 4 f f f f f f f f 1 f 1 4 4 
                    . . . f f f f f f f f 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    1 1 1 f f f f f f f f 1 1 1 . . 
                    . . 4 f f f f f f f f 1 f 1 4 4 
                    . . . f f f f f f f f 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    1 1 1 f f f f f f f f 1 1 1 . . 
                    . . 4 f f f f f f f f 1 f 1 4 4 
                    . . . f f f f f f f f 1 1 1 . . 
                    . . . . f f f f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    1 1 1 f f f f f f f f 1 1 1 . . 
                    . . 4 f f f f f f f f 1 f 1 4 4 
                    . . . f f f f f f f f 1 1 1 . . 
                    . . . . f f f f f . . . . . . . 
                    . . . f f f f f . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(25)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(5)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 4 4 4 4 4 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Robin)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 4 4 4 4 4 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . c c c c c . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 4 4 4 4 4 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c c c c . . . . 
                    . . . . . . c c c c c . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 4 4 4 4 4 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . c c c c c . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 4 4 4 4 4 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 4 4 4 4 4 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 c c c c c 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . c c c c c c c c c c c c c . 
                    . 4 c f 1 c c c c c c 1 4 . . . 
                    . . . c c 4 c c c c c 1 . . . . 
                    . . . . . . . c c c c c . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . c c c c c c c c c c c c c . . 
                    . . . 4 1 c c c c c c 1 f c 4 . 
                    . . . . 1 4 4 4 4 4 4 c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . c c c c c . . . . . . 
                    . c c c c c c c c c c c c c . . 
                    . . . 4 1 c c c c c c 1 f c 4 . 
                    . . . . 1 4 4 4 4 4 4 c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c c c . . . . . . . 
                    . . . . . c c c c c . . . . . . 
                    . c c c c c c c c c c c c c . . 
                    . . . 4 1 c c c c c c 1 f c 4 . 
                    . . . . 1 4 4 4 4 4 4 c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . c c c c c . . . . . . 
                    . c c c c c c c c c c c c c . . 
                    . . . 4 1 c c c c c c 1 f c 4 . 
                    . . . . 1 4 4 4 4 4 4 c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . c c c c c c c c c c c c c . . 
                    . . . 4 1 c c c c c c 1 f c 4 . 
                    . . . . 1 4 4 4 4 4 4 c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . c c c c c c c c c c c c c . . 
                    . . . 4 1 c c c c c c 1 f c 4 . 
                    . . . . 1 c c c c c 4 c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . c c c c c c c c c c c c c . . 
                    . . . 4 1 c c c c c c 1 f c 4 . 
                    . . . . 1 c c c c c 4 c c . . . 
                    . . . . c c c c c . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(20)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(10)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(5.5)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Jay)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f . . a a a a a . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . a a a a a . . . . 
                    . . . f . . a a a a a . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f . . a a a a a . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . 8 8 8 8 8 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f . . . . . . . . . . . . 
                    . . f f f 8 8 8 8 8 8 8 8 8 8 . 
                    . f f a f 8 8 8 8 8 8 9 c c . . 
                    . . f f f 8 8 8 8 8 8 8 . . . . 
                    . . . . . . 8 8 8 8 8 . . . . . 
                    . . . . . . . 8 8 8 8 8 . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . 8 8 8 8 8 8 8 8 8 8 f f f . . 
                    . . c c 9 8 8 8 8 8 8 f a f f . 
                    . . . . 8 8 8 8 8 8 8 f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . a a a a a . . f . . . 
                    . 8 8 8 8 8 8 8 8 8 8 f f f . . 
                    . . c c 9 8 8 8 8 8 8 f a f f . 
                    . . . . 8 8 8 8 8 8 8 f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . a a a a a . . . . . . . 
                    . . . . . a a a a a . . f . . . 
                    . 8 8 8 8 8 8 8 8 8 8 f f f . . 
                    . . c c 9 8 8 8 8 8 8 f a f f . 
                    . . . . 8 8 8 8 8 8 8 f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . a a a a a . . f . . . 
                    . 8 8 8 8 8 8 8 8 8 8 f f f . . 
                    . . c c 9 8 8 8 8 8 8 f a f f . 
                    . . . . 8 8 8 8 8 8 8 f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . 8 8 8 8 8 8 8 8 8 8 f f f . . 
                    . . c c 9 8 8 8 8 8 8 f a f f . 
                    . . . . 8 8 8 8 8 8 8 f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . 8 8 8 8 8 8 8 8 8 8 f f f . . 
                    . . c c 9 8 8 8 8 8 8 f a f f . 
                    . . . . 8 8 8 8 8 8 8 f f f . . 
                    . . . . . 8 8 8 8 8 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . f . . . 
                    . 8 8 8 8 8 8 8 8 8 8 f f f . . 
                    . . c c 9 8 8 8 8 8 8 f a f f . 
                    . . . . 8 8 8 8 8 8 8 f f f . . 
                    . . . . . 8 8 8 8 8 . . . . . . 
                    . . . . 8 8 8 8 8 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(25)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(5)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(5.5)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . d d d e d d d d d d d d d . 
                    b b 5 f d d d e d d e d c c . . 
                    . . d 5 5 5 f 5 5 5 d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Meadowlark)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . d d d e d d d d d d d d d 
                    . b b 5 f d d d e d d e d c c . 
                    . . . d 5 5 5 f 5 5 5 d d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . d d d d d . . . . . 
                    . . . d d d d d d d d d d d d d 
                    . b b 5 f d d d d d d e d c c . 
                    . . . d 5 5 5 f 5 5 5 d d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d d d d d . . . . 
                    . . . . . . d d d d d . . . . . 
                    . . . d d d d d d d d d d d d d 
                    . b b 5 f d d d d d d e d c c . 
                    . . . d 5 5 5 f 5 5 5 d d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . d d d d d . . . . . 
                    . . . d d d d d d d d d d d d d 
                    . b b 5 f d d d d d d e d c c . 
                    . . . d 5 5 5 f 5 5 5 d d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . d d d e d d d d d d d d d 
                    . b b 5 f d d d e d d e d c c . 
                    . . . d 5 5 5 f 5 5 5 d d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . d d d e d d d d d d d d d 
                    . b b 5 f d d d e d d e d c c . 
                    . . . d 5 5 d d d d d d d . . . 
                    . . . . . . d d d d d . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . d d d e d d d d d d d d d 
                    . b b 5 f d d d e d d e d c c . 
                    . . . d 5 5 d d d d d d d . . . 
                    . . . . . . d d d d d . . . . . 
                    . . . . . . . d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    d d d d d d d d d e d d d . . . 
                    . c c d e d d e d d d f 5 b b . 
                    . . . d d 5 5 5 f 5 5 5 d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d . . . . . . 
                    d d d d d d d d d d d d d . . . 
                    . c c d e d d d d d d f 5 b b . 
                    . . . d d 5 5 5 f 5 5 5 d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . d d d d d . . . . . . . 
                    . . . . . d d d d d . . . . . . 
                    d d d d d d d d d d d d d . . . 
                    . c c d e d d d d d d f 5 b b . 
                    . . . d d 5 5 5 f 5 5 5 d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . d d d d d . . . . . . 
                    d d d d d d d d d d d d d . . . 
                    . c c d e d d d d d d f 5 b b . 
                    . . . d d 5 5 5 f 5 5 5 d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    d d d d d d d d d e d d d . . . 
                    . c c d e d d e d d d f 5 b b . 
                    . . . d d 5 5 5 f 5 5 5 d . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    d d d d d d d d d e d d d . . . 
                    . c c d e d d e d d d f 5 b b . 
                    . . . d d d d d d d 5 5 d . . . 
                    . . . . . d d d d d . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    d d d d d d d d d e d d d . . . 
                    . c c d e d d e d d d f 5 b b . 
                    . . . d d d d d d d 5 5 d . . . 
                    . . . . . d d d d d . . . . . . 
                    . . . . d d d d d . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(30)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(5)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(6)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Blackbird)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . a a a a a . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a a a a a . . . . . 
                    . . . . . a a a a a . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . a a a a a . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f 2 2 f f f f . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . a f a f f f f f f f f a a . . 
                    . . f f f f 2 2 f f f f . . . . 
                    . . . . . f f 5 f f . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f . . 
                    . . a a f f f f f f f f a f a . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a a a a a . . . . . 
                    . f f f f f f f f f f f f f . . 
                    . . a a f f f f f f f f a f a . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . a a a a a . . . . . . 
                    . . . . . . a a a a a . . . . . 
                    . f f f f f f f f f f f f f . . 
                    . . a a f f f f f f f f a f a . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . a a a a a . . . . . 
                    . f f f f f f f f f f f f f . . 
                    . . a a f f f f f f f f a f a . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f . . 
                    . . a a f f f f f f f f a f a . 
                    . . . . f f f f f f f f f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f . . 
                    . . a a f f f f f f f f a f a . 
                    . . . . f f f f 2 2 f f f f . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f . . 
                    . . a a f f f f f f f f a f a . 
                    . . . . f f f f 2 2 f f f f . . 
                    . . . . . . f f 5 f f . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(30)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Cattails)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(10)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(6)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Flycatcher)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 1 1 1 1 1 . . . . . . 
                    . 1 1 1 3 3 3 3 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . 1 1 1 1 1 1 . . . . . 
                    . . . . 1 2 3 3 1 1 . . . . . . 
                    . 1 1 1 2 3 3 3 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 1 1 1 1 1 1 . . . . . . 
                    . 1 1 1 3 3 3 3 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 a a 
                    a 1 f 1 1 1 1 1 1 1 1 c c . . . 
                    . . 1 1 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 . . . . . . 
                    . . . . . 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    a a 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . c c 1 1 1 1 1 1 1 1 f 1 a 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 1 1 . . . . 
                    a a 1 1 1 1 1 1 3 3 3 3 1 1 1 . 
                    . . . c c 1 1 1 1 1 1 1 1 f 1 a 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . 1 1 1 1 1 1 . . . . . 
                    . . . . . . 1 1 3 3 2 1 . . . . 
                    a a 1 1 1 1 1 1 3 3 3 2 1 1 1 . 
                    . . . c c 1 1 1 1 1 1 1 1 f 1 a 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 1 1 . . . . 
                    a a 1 1 1 1 1 1 3 3 3 3 1 1 1 . 
                    . . . c c 1 1 1 1 1 1 1 1 f 1 a 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    a a 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . c c 1 1 1 1 1 1 1 1 f 1 a 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    a a 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . c c 1 1 1 1 1 1 1 1 f 1 a 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . 1 1 1 1 1 1 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    a a 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . c c 1 1 1 1 1 1 1 1 f 1 a 
                    . . . . . 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . . 1 1 1 1 1 1 . . . . 
                    . . . . . 1 1 1 1 1 1 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(10)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(10)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(10)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Cattails)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(7)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 4 4 4 4 4 c c . . . 
                    . . f f 4 4 4 4 4 4 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Oriole)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 4 4 4 4 4 c c . . . 
                    . . f f 4 4 4 4 4 4 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 4 4 4 4 4 c c . . . 
                    . . f f 4 4 4 4 4 4 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 4 4 4 4 4 c c . . . 
                    . . f f 4 4 4 4 4 4 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 4 4 4 4 4 c c . . . 
                    . . f f 4 4 4 4 4 4 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 4 4 4 4 4 c c . . . 
                    . . f f 4 4 4 4 4 4 4 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 f f f f f c c . . . 
                    . . f f 4 f 1 f f f 4 . . . . . 
                    . . . . . f f 1 f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f f f f f f f f f f f f f a . 
                    a f a f f 4 f f f f f c c . . . 
                    . . f f 4 f 1 f f f 4 . . . . . 
                    . . . . . f f 1 f f . . . . . . 
                    . . . . . . f f 1 f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . a f f f f f f f f f f f f f . 
                    . . . c c 4 4 4 4 4 4 f f a f a 
                    . . . . . 4 4 4 4 4 4 4 f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . a f f f f f f f f f f f f f . 
                    . . . c c 4 4 4 4 4 4 f f a f a 
                    . . . . . 4 4 4 4 4 4 4 f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . a f f f f f f f f f f f f f . 
                    . . . c c 4 4 4 4 4 4 f f a f a 
                    . . . . . 4 4 4 4 4 4 4 f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . a f f f f f f f f f f f f f . 
                    . . . c c 4 4 4 4 4 4 f f a f a 
                    . . . . . 4 4 4 4 4 4 4 f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . a f f f f f f f f f f f f f . 
                    . . . c c 4 4 4 4 4 4 f f a f a 
                    . . . . . 4 4 4 4 4 4 4 f f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . a f f f f f f f f f f f f f . 
                    . . . c c f f f f f 4 f f a f a 
                    . . . . . 4 f f f 1 f 4 f f . . 
                    . . . . . . f f 1 f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . a f f f f f f f f f f f f f . 
                    . . . c c f f f f f 4 f f a f a 
                    . . . . . 4 f f f 1 f 4 f f . . 
                    . . . . . . f f 1 f f . . . . . 
                    . . . . . f f 1 f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(25)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(7)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 . . . . . . . . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Cardinal)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 . . . . . . . . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 . 2 2 2 2 2 2 . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . 2 2 2 2 2 2 . . . . . 
                    . . 2 . 2 2 2 2 2 2 . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 . 2 2 2 2 2 2 . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 . . . . . . . . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 . . . . . . . . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . 2 2 2 2 2 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 . . . . . . . . . . . . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    4 2 a 2 2 2 2 2 2 2 2 c c . . . 
                    . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . 2 2 2 2 2 2 . . . . . . 
                    . . . . . 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . . . c c 2 2 2 2 2 2 2 2 a 2 4 
                    . . . . . 2 2 2 2 2 2 2 2 2 2 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 2 . 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . . . c c 2 2 2 2 2 2 2 2 a 2 4 
                    . . . . . 2 2 2 2 2 2 2 2 2 2 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . 2 2 2 2 2 2 . . . . . 
                    . . . . . . 2 2 2 2 2 2 . 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . . . c c 2 2 2 2 2 2 2 2 a 2 4 
                    . . . . . 2 2 2 2 2 2 2 2 2 2 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 2 2 . 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . . . c c 2 2 2 2 2 2 2 2 a 2 4 
                    . . . . . 2 2 2 2 2 2 2 2 2 2 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . . . c c 2 2 2 2 2 2 2 2 a 2 4 
                    . . . . . 2 2 2 2 2 2 2 2 2 2 . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . . . c c 2 2 2 2 2 2 2 2 a 2 4 
                    . . . . . 2 2 2 2 2 2 2 2 2 2 . 
                    . . . . . . 2 2 2 2 2 2 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 2 . . 
                    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                    . . . c c 2 2 2 2 2 2 2 2 a 2 4 
                    . . . . . 2 2 2 2 2 2 2 2 2 2 . 
                    . . . . . . 2 2 2 2 2 2 . . . . 
                    . . . . . 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(20)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(10)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(8)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 . . . . . . . . . . . 
                    . . f 1 f f f f f f f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Woodpecker)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 . . . . . . . . . . . 
                    . . f 1 f f f f f f f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 . f f f f f . . . . . 
                    . . f 1 f f 1 1 1 1 f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f f f . . . . 
                    . . . 2 2 . f 1 1 1 f . . . . . 
                    . . f 1 f f 1 1 1 1 f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 . f f f f f . . . . . 
                    . . f 1 f f 1 1 1 1 f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 . . . . . . . . . . . 
                    . . f 1 f f f f f f f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 . . . . . . . . . . . 
                    . . f 1 f f f f f f f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f 1 f f f f f . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 . . . . . . . . . . . 
                    . . f 1 f f f f f f f f f f f f 
                    a a 1 a 1 1 f f f f f f a . . . 
                    . . f 1 1 f 1 f f f f f . . . . 
                    . . . . . f f 1 f f . . . . . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 2 2 . . . 
                    f f f f f f f f f f f f 1 f . . 
                    . . . a f f f f f f 1 1 a 1 a a 
                    . . . . f f f f f f f 1 1 f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f . 2 2 . . . 
                    f f f f f f 1 1 1 1 f f 1 f . . 
                    . . . a f f f f f f 1 1 a 1 a a 
                    . . . . f f f f f f f 1 1 f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . . . . 
                    . . . . . f 1 1 1 f . 2 2 . . . 
                    f f f f f f 1 1 1 1 f f 1 f . . 
                    . . . a f f f f f f 1 1 a 1 a a 
                    . . . . f f f f f f f 1 1 f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . f f f f f . 2 2 . . . 
                    f f f f f f 1 1 1 1 f f 1 f . . 
                    . . . a f f f f f f 1 1 a 1 a a 
                    . . . . f f f f f f f 1 1 f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 2 2 . . . 
                    f f f f f f f f f f f f 1 f . . 
                    . . . a f f f f f f 1 1 a 1 a a 
                    . . . . f f f f f f f 1 1 f . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 2 2 . . . 
                    f f f f f f f f f f f f 1 f . . 
                    . . . a f f f f f f 1 1 a 1 a a 
                    . . . . f f f f f 1 f 1 1 f . . 
                    . . . . . . f f f f f . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 2 2 . . . 
                    f f f f f f f f f f f f 1 f . . 
                    . . . a f f f f f f 1 1 a 1 a a 
                    . . . . f f f f f 1 f 1 1 f . . 
                    . . . . . . f f 1 f f . . . . . 
                    . . . . . f f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(20)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Wood)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(10)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Leaves)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        } else if (Math.percentChance(8)) {
            for (let index = 0; index < 1; index++) {
                myBird = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 7 7 7 e e e e e e e e e e e 
                    5 5 7 a 7 e e d d d d d 4 4 . . 
                    . . 7 7 7 e d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Mallard)
                sprites.setDataBoolean(myBird, "Spotted", false)
                sprites.setDataBoolean(myBird, "Perching", false)
                sprites.setDataBoolean(myBird, "Landing", false)
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 7 7 7 e e e e e e e e e e e 
                    5 5 7 a 7 e e d d d d d 4 4 . . 
                    . . 7 7 7 e d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d d d d d . . . . 
                    . . 7 7 7 e d d d d d e e e e e 
                    5 5 7 a 7 e d d d d d d 4 4 . . 
                    . . 7 7 7 e d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . d d d d d . . . 
                    . . . . . . . d d d d d . . . . 
                    . . 7 7 7 e d d d d d e e e e e 
                    5 5 7 a 7 e d d d d d d 4 4 . . 
                    . . 7 7 7 e d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . d d d d d . . . . 
                    . . 7 7 7 e d d d d d e e e e e 
                    5 5 7 a 7 e d d d d d d 4 4 . . 
                    . . 7 7 7 e d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 7 7 7 e e e e e e e e e e e 
                    5 5 7 a 7 e e d d d d d 4 4 . . 
                    . . 7 7 7 e d d d d d d . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 7 7 7 e e e e e e e e e e e 
                    5 5 7 a 7 e e e e e e d 4 4 . . 
                    . . 7 7 7 e d e e e e c . . . . 
                    . . . . . . . e e e e e . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 7 7 7 e e e e e e e e e e e 
                    5 5 7 a 7 e e e e e e d 4 4 . . 
                    . . 7 7 7 e d e e e e c . . . . 
                    . . . . . . . e e e e c . . . . 
                    . . . . . . . . e e e e e . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingLeft)
                )
                characterAnimations.loopFrames(
                myBird,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    e e e e e e e e e e e 7 7 7 . . 
                    . . 4 4 d d d d d e e 7 a 7 5 5 
                    . . . . d d d d d d e 7 7 7 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . d d d d d . . . . . . . 
                    e e e e e d d d d d e 7 7 7 . . 
                    . . 4 4 d d d d d d e 7 a 7 5 5 
                    . . . . d d d d d d e 7 7 7 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . d d d d d . . . . . . . . 
                    . . . . d d d d d . . . . . . . 
                    e e e e e d d d d d e 7 7 7 . . 
                    . . 4 4 d d d d d d e 7 a 7 5 5 
                    . . . . d d d d d d e 7 7 7 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . d d d d d . . . . . . . 
                    e e e e e d d d d d e 7 7 7 . . 
                    . . 4 4 d d d d d d e 7 a 7 5 5 
                    . . . . d d d d d d e 7 7 7 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    e e e e e e e e e e e 7 7 7 . . 
                    . . 4 4 d d d d d e e 7 a 7 5 5 
                    . . . . d d d d d d e 7 7 7 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    e e e e e e e e e e e 7 7 7 . . 
                    . . 4 4 d e e e e e e 7 a 7 5 5 
                    . . . . c e e e e d e 7 7 7 . . 
                    . . . . e e e e e . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    e e e e e e e e e e e 7 7 7 . . 
                    . . 4 4 d e e e e e e 7 a 7 5 5 
                    . . . . c e e e e d e 7 7 7 . . 
                    . . . . c e e e e . . . . . . . 
                    . . . e e e e e . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                100,
                characterAnimations.rule(Predicate.MovingRight)
                )
                tiles.placeOnRandomTile(myBird, assets.tile`myTile9`)
                myBird.vx = list._pickRandom()
                myBird.setFlag(SpriteFlag.AutoDestroy, false)
                myBird.setFlag(SpriteFlag.GhostThroughWalls, true)
                if (Math.percentChance(20)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Water)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                } else if (Math.percentChance(15)) {
                    spriteutils.setVelocityAtAngle(myBird, spriteutils.angleFrom(myBird, sprites.allOfKind(SpriteKind.Grass)._pickRandom()), 25)
                    sprites.setDataBoolean(myBird, "Landing", true)
                }
            }
        }
    }
})
