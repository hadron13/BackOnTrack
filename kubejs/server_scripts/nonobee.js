EntityJSEvents.addGoalSelectors('kubejs:nonobee', e => {
    let Player = Java.loadClass('net.minecraft.world.entity.player.Player')
    e.panic(1, 0.5)
    e.floatSwim(1)
    e.meleeAttack(4, 1, true)
    e.leapAtTarget(3, 0.4)
    e.waterAvoidingRandomStroll(5, 0.4, 0.8)
    e.lookAtEntity(6, Player, 8, 0.8, false)
    e.randomLookAround(7)
    e.behaviors.flyingRandomStroll(0.5)
    e.customGoal(
        'follow_target',
        1,
        mob => true,
        mob => true,
        true,
        mob => {},
        mob => mob.getNavigation().stop(),
        true,
        /** @param {Internal.Mob} mob */ mob => {
            let mobAABB = mob.boundingBox.inflate(5)
            mob.level.getEntitiesWithin(mobAABB).forEach(entity => {
                if (entity == null) return
                if (entity.player && entity.distanceToEntity(mob) < 20) {
                    mob.getNavigation().moveTo(entity.block.x, entity.y, entity.z, 0.4);
                }
            })
        }
    )
    let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
    e.removeGoal($PanicGoal)
    e.removeGoals(context => {
        const { goal, entity } = context
        return goal.getClass() == $PanicGoal
    })
})

EntityJSEvents.buildBrain('kubejs:nonobee', event => {
    const activitybehaviors = [
        event.behaviors.flyingRandomStroll(0.5)
    ]
    const idlebehaviors = [
        event.behaviors.flyingRandomStroll(0.5)
    ]
    const corebehaviors = [
        event.behaviors.flyingRandomStroll(0.5)
    ]
    event.idleActivity(1, idlebehaviors)
    event.coreActivity(1, corebehaviors)
})