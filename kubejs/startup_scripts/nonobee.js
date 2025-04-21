StartupEvents.registry('entity_type', event => {
    event.create('kubejs:nonobee', 'entityjs:mob')
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
                    .setMaxSpeed(0.2);
            })
        })
        .followLeashSpeed(1.0);
});