StartupEvents.registry('entity_type', event => {
    let teste = event.create('kubejs:nonobee', 'minecraft:parrot')
        .sized(1, 1)
        .modelSize(1/16, 1/16)
        .animationResource(entity => {
            return "kubejs:animations/entity/nonobee.animation.json";
        }).addAnimationController("nonobeeController", 1, event => {

            event.thenLoop("idle");

            return true;
        })
        .eggItem(item => {
            item.backgroundColor(0x8f3cc5);
            item.highlightColor(0x1c1134);
        })
        .setMoveControl(entity => {
            return EntityJSUtils.createMoveControl(entity, moveControlBuilder => {
                moveControlBuilder
                    .setMaxSpeed(1/16);
            })
        })
        .fireImmune(true)
        .isInvulnerableTo(context => {
            return true;
        })
        // .setBlockJumpFactor(entity => {
        //     return 4;
        // })
        .setJumpControl(entity => {
            return EntityJSUtils.createJumpControl(entity, jumpControlBuilder => {
                jumpControlBuilder
                    .tick(30)
                    .jump(3);
            })
        })
});