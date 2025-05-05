global.bees = [
    {
        'id': 'nonobee',
        'name': 'Nonobee',
        'egg_colors': {
            'background': 0x8f3cc5,
            'highlight': 0x1c1134
        },
        "description": "\u00A75" + "The Power of " + "\u00A7o"  + "\u00A7l" + "PURPLE",
        "egg_name": "Nonobee Spwan Egg",
        "proportion": 1/16
    },
    {
        'id': 'danbee',
        'name': 'Danbee',
        'egg_colors': {
            'background': 0xc53c3c,
            'highlight': 0x341111
        },
        "description": "\u00A74" + "The Power of " + "\u00A7o"  + "\u00A7l" + "RED",
        "egg_name": "Danbee Spwan Egg",
        "proportion": 1/16
    },
    {
        'id': 'mitinhobee',
        'name': 'Mitinhobee',
        'egg_colors': {
            'background': 0xc5853c,
            'highlight': 0x3b240b
        },
        "description": "\u00A76" + "The Power of " + "\u00A7o"  + "\u00A7l" + "YELLOW",
        "egg_name": "Mitinhobee Spwan Egg",
        "proportion": 1/24
    }
];

StartupEvents.registry('entity_type', event => {
    global.bees.forEach(bee => {
    event.create('kubejs:'+bee.id, 'minecraft:parrot')
        .sized(1, 1)
        .modelSize(bee.proportion, bee.proportion)
        .animationResource(entity => {
            return "kubejs:animations/entity/"+bee.id+".animation.json";
        }).addAnimationController(bee.id+"Controller", 1, event => {

            event.thenLoop("idle");

            return true;
        })
        .eggItem(item => {
            item.backgroundColor(bee.egg_colors.background);
            item.highlightColor(bee.egg_colors.highlight);
        })
        .setMoveControl(entity => {
            return EntityJSUtils.createMoveControl(entity, moveControlBuilder => {
                moveControlBuilder
                    .setMaxSpeed(bee.proportion);
            })
        })
        .setAmbientSound("kubejs:mitinho")
        .ambientSoundInterval(100)
        .setSoundVolume(0.5)
        .fireImmune(true)
        .isInvulnerableTo(context => {
            return true;
        })
        .setJumpControl(entity => {
            return EntityJSUtils.createJumpControl(entity, jumpControlBuilder => {
                jumpControlBuilder
                    .tick(30)
                    .jump(3);
            })
        })
    });
});