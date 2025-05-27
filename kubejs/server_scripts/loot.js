let mystery_leaves_but_no_gapples =
{
    "type": "minecraft:block",
    "pools": [
        {
            "name": "forbidden_arcanus:mysterywood_leaves",
            "rolls": 1,
            "entries": [
                {
                    "type": "minecraft:alternatives",
                    "children": [
                        {
                            "type": "minecraft:item",
                            "conditions": [
                                {
                                    "condition": "minecraft:alternative",
                                    "terms": [
                                        {
                                            "condition": "minecraft:match_tool",
                                            "predicate": {
                                                "tag": "forge:shears"
                                            }
                                        },
                                        {
                                            "condition": "minecraft:match_tool",
                                            "predicate": {
                                                "enchantments": [
                                                    {
                                                        "enchantment": "minecraft:silk_touch",
                                                        "levels": {
                                                            "min": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ],
                            "name": "forbidden_arcanus:mysterywood_leaves"
                        },
                        {
                            "type": "minecraft:item",
                            "conditions": [
                                {
                                    "condition": "minecraft:survives_explosion"
                                },
                                {
                                    "condition": "minecraft:table_bonus",
                                    "enchantment": "minecraft:fortune",
                                    "chances": [
                                        0.05,
                                        0.0625,
                                        0.083333336,
                                        0.1
                                    ]
                                }
                            ],
                            "name": "forbidden_arcanus:mysterywood_sapling"
                        }
                    ]
                }
            ]
        },
        {
            "name": "forbidden_arcanus:mysterywood_leaves",
            "rolls": 1,
            "entries": [
                {
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:table_bonus",
                            "enchantment": "minecraft:fortune",
                            "chances": [
                                0.02,
                                0.022222223,
                                0.025,
                                0.033333335,
                                0.1
                            ]
                        }
                    ],
                    "functions": [
                        {
                            "function": "minecraft:set_count",
                            "count": {
                                "min": 1.0,
                                "max": 2.0,
                                "type": "minecraft:uniform"
                            }
                        },
                        {
                            "function": "minecraft:explosion_decay"
                        }
                    ],
                    "name": "minecraft:stick"
                }
            ],
            "conditions": [
                {
                    "condition": "minecraft:inverted",
                    "term": {
                        "condition": "minecraft:alternative",
                        "terms": [
                            {
                                "condition": "minecraft:match_tool",
                                "predicate": {
                                    "tag": "forge:shears"
                                }
                            },
                            {
                                "condition": "minecraft:match_tool",
                                "predicate": {
                                    "enchantments": [
                                        {
                                            "enchantment": "minecraft:silk_touch",
                                            "levels": {
                                                "min": 1
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            "name": "forbidden_arcanus:mysterywood_leaves",
            "rolls": 1,
            "entries": [
                {
                    "type": "minecraft:item",
                    "conditions": [
                        {
                            "condition": "minecraft:survives_explosion"
                        },
                        {
                            "condition": "minecraft:table_bonus",
                            "enchantment": "minecraft:fortune",
                            "chances": [
                                0.005,
                                0.0055555557,
                                0.00625,
                                0.008333334,
                                0.025
                            ]
                        }
                    ],
                    "name": "minecraft:gold_nugget"
                }
            ],
            "conditions": [
                {
                    "condition": "minecraft:inverted",
                    "term": {
                        "condition": "minecraft:alternative",
                        "terms": [
                            {
                                "condition": "minecraft:match_tool",
                                "predicate": {
                                    "tag": "forge:shears"
                                }
                            },
                            {
                                "condition": "minecraft:match_tool",
                                "predicate": {
                                    "enchantments": [
                                        {
                                            "enchantment": "minecraft:silk_touch",
                                            "levels": {
                                                "min": 1
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}

LootJS.modifiers((event) => {
    //#obrigadoboatpaking

    const customLoot = (block, loot) => event.addBlockLootModifier(block).not((not) => {not.matchLoot(block)}).addLoot(loot);

    customLoot('buddingcrystals:small_budding_skystone_bud', '8x ae2:sky_stone_block')
    customLoot('buddingcrystals:medium_budding_skystone_bud', '8x ae2:sky_stone_block')
    customLoot('buddingcrystals:large_budding_skystone_bud', '8x ae2:sky_stone_block')

    customLoot('createbigcannons:steel_cannon_chamber', '64x kubejs:steel_ring')

    // event.addBlockLootModifier('tfmg:lead_ore').addLoot('thermal:raw_lead')
    // event.addBlockLootModifier('tfmg:deepslate_lead_ore').addLoot('thermal:raw_lead')
    // event.addBlockLootModifier('tfmg:nickel_ore').addLoot('thermal:raw_nickel')
    // event.addBlockLootModifier('tfmg:deepslate_nickel_ore').addLoot('thermal:raw_nickel')
});

