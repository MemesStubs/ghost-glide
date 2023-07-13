namespace SpriteKind {
    export const Finish = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(winTypes.Multi)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    ghost2.x += 1.5
    ghost2.startEffect(effects.hearts, 100)
    info.player2.changeScoreBy(1)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Ghost4.x += 1.5
    Ghost4.startEffect(effects.fountain, 100)
    info.player4.changeScoreBy(1)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    ghost.x += 1.5
    ghost.startEffect(effects.spray, 100)
    info.player1.changeScoreBy(1)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Ghost3.x += 1.5
    Ghost3.startEffect(effects.confetti, 100)
    info.player3.changeScoreBy(1)
})
let Ghost4: Sprite = null
let Ghost3: Sprite = null
let ghost2: Sprite = null
let ghost: Sprite = null
scene.setBackgroundColor(1)
scene.setBackgroundImage(assets.image`bgFrame`)
ghost = sprites.create(assets.image`skellyWalkRight1`, SpriteKind.Player)
ghost.setPosition(20, 15)
ghost2 = sprites.create(assets.image`bread`, SpriteKind.Player)
ghost2.setPosition(20, 34)
Ghost3 = sprites.create(assets.image`myImage`, SpriteKind.Player)
Ghost3.setPosition(20, 57)
Ghost4 = sprites.create(assets.image`skellyWalkRight0`, SpriteKind.Player)
Ghost4.setPosition(20, 77)
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
finish.setPosition(150, 50)
let textSprite2 = textsprite.create("Ghosty Glide")
textSprite2.setPosition(80, 108)
