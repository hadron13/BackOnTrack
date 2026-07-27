var seed
var log = []

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let GB = (id, x) => MOD("gearbox", id, x);
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let ES = (id, x) => MOD("enderstorage", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) =>MOD("biomesoplenty", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x) 
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let WT = (id, x) => MOD("waystones", id, x)
let PP = (id, x) => MOD("prettypipes", id, x)
let BC = (id, x) => MOD("createbigcannons", id, x)
let CI = (id, x) => MOD("tfmg", id, x)
let ED = (id, x) => MOD("endersdelight", id, x)
let AD = (id, x) => MOD("ad_astra", id, x)
let CC = (id, x) => MOD("create_connected", id, x)
let AL = (id, x) => MOD("alloyed", id, x)
let SS = (id, x) => MOD("sophisticatedstorage", id, x)
let SB = (id, x) => MOD("sophisticatedbackpacks", id, x)
let ML = (id, x) => MOD("createmetallurgy", id, x)
let CFL = (id, x) => MOD("create_factory_logistics", id, x)
let CP = (id, x) => MOD("chipped", id, x)
let MOL = (id, x) => MOD("morelights", id, x)
let CF = (id, x) => MOD("fluid", id, x)
let RW = (id, x) =>  MOD("rubberworks", id, x)
//

let colors = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let wood_types = [MC('oak'), MC('spruce'), MC('birch'), MC('jungle'), MC('acacia'), MC('dark_oak'), MC('crimson'), MC('warped'), BOP('fir'), BOP('redwood'), BOP('cherry'), BOP('mahogany'), BOP('jacaranda'), BOP('palm'), BOP('willow'), BOP('dead'), BOP('magic'), BOP('umbran'), BOP('hellbark'), AP('twisted')]
let wood_nomes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped', 'mangrove', 'cherry', 'bamboo']
let donutCraft = (event, output, center, ring) => {
	event.shaped(output, [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: center,
		S: ring
	})
}

ServerEvents.recipes(event => {
	log.push('Registering Recipes')

	MetallurgyRecipes(event)
	unwantedRecipes(event)
	tweaks(event)
	unify(event)
	trickierWindmills(event)
	rubberMatters(event)
	prettierpipes(event)
	dioriticAndesite(event)
	electronTube(event)
  enderStuff(event)
	invarChapter(event)
	gearboxrecipes(event)
	andesiteMachine(event)
	copperMachine(event)
	brassMachine(event)
	trainMachine(event)
	zincMachine(event)
  oilComplex(event)
	explosiveMachine(event)
	chocolate(event)
	invarMachine(event)
	enderMachine(event)
	fluixMachine(event)
	titaniumStuff(event)
	circuits(event)
	barrels(event)
	rocketScience(event)
	drawersop(event)
	trading(event)
  Alloys(event)

	log.push('Recipes Updated')
})

ServerEvents.tags('item', event => {
  const mods = [
    'thermal', 'create', 'alloyed', 'tconstruct', 'createbigcannons', 'tfmg', 'forbidden_arcanus'
  ];

  const materials = [
    'copper', 'tin', 'silver', 'lead', 'constantan', 'bronze', 'enderium',
    'netherite', 'nickel', 'gold', 'aluminum', 'zinc', 'steel', 'cast_iron', 'aluminum', 'nickel'
  ];

  const types = [
    { suffix: '_ingot', forgePrefix: 'ingots/', createSuffix: '_ingot' },
    { suffix: '_nugget', forgePrefix: 'nuggets/', createSuffix: '_nugget' },
    { suffix: '_block', forgePrefix: 'storage_blocks/', createSuffix: '_block' }
  ];

  mods.forEach(mod => {
    materials.forEach(material => {
      types.forEach(type => {
        const itemId = `${mod}:${material}${type.suffix}`;
        const forgeTag = `forge:${type.forgePrefix}${material}`;
        const createTag = `create:${material}${type.createSuffix}`;

        event.add(forgeTag, itemId);
        event.add(createTag, itemId);
      });
    });
  });
});

ServerEvents.tags('block', event => {
  const mods = [
    'thermal', 'create', 'alloyed', 'tconstruct', 'createbigcannons', 'tfmg', 'forbidden_arcanus'
  ];

  const materials = [
    'copper', 'tin', 'silver', 'lead', 'constantan', 'bronze', 'enderium',
    'netherite', 'nickel', 'gold', 'aluminum', 'zinc', 'steel', 'cast_iron', 'aluminum', 'nickel'
  ];

  mods.forEach(mod => {
    materials.forEach(material => {
      const blockId = `${mod}:${material}_block`;
      const forgeTag = `forge:storage_blocks/${material}`;
      event.add(forgeTag, blockId);
    });
  });
});

ServerEvents.tags('block', event => {
	event.add('forge:ores', 'ae2:sky_stone_block')
	event.add('ae2:growth_acceleratable', 'buddingcrystals:budding_budding_skystone')
    let tweak_casing = (r) => {
	event.add('create:wrench_pickup', r)
	}
	tweak_casing('kubejs:zinc_casing')
	tweak_casing('kubejs:enderium_casing')
	tweak_casing('kubejs:invar_casing')
	tweak_casing('kubejs:fluix_casing')
	tweak_casing('@kubejs')
	tweak_casing('@chipped')
	tweak_casing('@createdeco')
	tweak_casing('@gearbox')
})
ServerEvents.tags('item', event => {
	colors.forEach(element => {
		event.get(F('glazed_terracotta')).add(MC(`${element}_glazed_terracotta`))
	});

	global.trades.forEach(element => {
		event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
		event.get('thermal:crafting/dies').add(`kubejs:trade_card_${element}`)
	});
	
	global.professions.forEach(element => {
		event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
		event.get('thermal:crafting/dies').add(`kubejs:profession_card_${element}`)
	});

	event.get("forge:tools/axes").add(TC("hand_axe"))
	event.get("forge:vines").add(MC("vine")).add(BOP("willow_vine")).add(BOP("spanish_moss"))

	event.get("forge:circuit_press")
		.add(AE2("name_press"))
		.add(AE2("silicon_press"))
		.add(AE2("logic_processor_press"))
		.add(AE2("engineering_processor_press"))
		.add(AE2("calculation_processor_press"))

	event.get('forge:super_glues').add(CR('super_glue'))
	event.get('forge:wrenches').add(CR('wrench'))
	event.get('forge:tools/wrench').add(CR('wrench'))
	event.get('forge:soldering_irons').add(KJ('soldering_iron'))
	event.get('forge:ingots/steel').add("alloyed:steel_ingot")
	event.get('forge:storage_blocks/steel').add("alloyed:steel_block")

	event.get('create:upright_on_belt')
		.add(AE2("red_paint_ball"))
		.add(AE2("yellow_paint_ball"))
		.add(AE2("green_paint_ball"))
		.add(AE2("blue_paint_ball"))
		.add(AE2("magenta_paint_ball"))
		.add(AE2("black_paint_ball"))

	event.get('tconstruct:anvil_metal').add(CR('zinc_block'))

	let remove_metal =(ingot, block, nugget, type, substitute)=>{
		event.remove('forge:ingots/' + type, ingot)
		event.remove('forge:ingots', ingot)

		event.remove('balm:ingots', ingot)

		event.remove('forge:nuggets/' + type, nugget)
		event.remove('forge:nuggets', nugget)

		event.remove('forge:storage_blocks/' + type, block)
		event.remove('forge:storage_blocks', block)
	}

	remove_metal(TE('steel_ingot'), TE('steel_block'), TE('steel_nugget'), 'steel')
	remove_metal('davebuildingmod:steel_ingot', 'davebuildingmod:steel_block', '', 'steel')
	remove_metal(TE('bronze_ingot'), TE('bronze_block'), TE('bronze_nugget'), 'bronze')
	remove_metal(TE('electrum_ingot'), TE('electrum_block'), TE('electrum_nugget'), 'electrum')

	let remove_thermal_plate = (type) =>{
		event.remove("forge:plates", TE(type+'_plate'))
		event.remove("forge:plates/"+type, TE(type+'_plate'))
	}
	let remove_thermal_gear = (type) =>{
		event.remove("forge:gears", TE(type+'_gear'))
		event.remove("forge:gears/"+type, TE(type+'_gear'))
	}
	let remove_thermal_dust = (type) =>{
		event.remove("forge:dusts", TE(type+'_dust'))
		event.remove("forge:dusts/"+type, TE(type+'_dust'))
	}

	let remove_thermal_set = (dust, gear, plate, type)=>{
		event.remove('forge:dusts', dust)
		event.remove('forge:dusts/'+type, dust)

		event.remove('forge:gears', gear)
		event.remove('forge:gears/'+type, gear)

		event.remove('forge:plates', plate)
		event.remove('forge:plates/'+type, plate)
	}
	remove_thermal_set(TE('bronze_dust'), TE('bronze_gear'), TE('bronze_plate'),            'bronze')
    remove_thermal_set(TE('electrum_dust'), TE('electrum_gear'), TE('electrum_plate'),     'electrum')

	remove_thermal_plate('iron')
	remove_thermal_plate('gold')
	remove_thermal_plate('copper')
	remove_thermal_plate('netherite')

	event.remove('forge:gems/rose_quartz', 'biomesoplenty:rose_quartz_shard')
	event.remove('forge:dusts/diamond', 'createaddition:diamond_grit')
	event.remove('forge:dusts', 'createaddition:diamond_grit')
	event.remove('forge:plates/zinc', 'createaddition:zinc_sheet')
	event.remove('forge:plates', 'createaddition:zinc_sheet')

})

ServerEvents.tags('fluid', event => {
	event.add('ad_astra:vehicle_fuel', 'thermal:refined_fuel')
	event.remove('ad_astra:vehicle_fuel', 'ad_astra:fuel')
})

// Scripts
function Alloys(event) {

	event.custom({
		"type": "tconstruct:alloy",
		"inputs": [
			{ "name": "tconstruct:molten_silver", "amount": 90 },
			{ "name": "tconstruct:molten_copper", "amount": 90 },
			{ "name": "thermal:redstone", "amount": 1000 }
		],
		"result": {
			"fluid": "tconstruct:molten_signalum",
			"amount": 90
		},
		"temperature": 1000
	})

	event.custom({
		"type": "tconstruct:alloy",
		"inputs": [
			{ "name": "tconstruct:molten_silver", "amount": 90 },
			{ "name": "tconstruct:molten_copper", "amount": 90 },
			{ "name": "thermal:glowstone", "amount": 1000 }
		],
		"result": {
			"fluid": "tconstruct:molten_lumium",
			"amount": 90
		},
		"temperature": 1000
    })

	event.recipes.createMixing(Fluid.of(TC('molten_constantan'), 4), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_nickel'), 4)]).processingTime(1)
	event.recipes.createMixing(Fluid.of(TC('molten_rose_gold'), 4), [Fluid.of(TC('molten_copper'), 4), Fluid.of(TC('molten_gold'), 4)]).processingTime(1)

	event.recipes.createCompacting(KJ("invar_compound", 2), [TE("nickel_ingot"), MC("iron_ingot")]).heated()
	event.recipes.gearboxPyroprocessing(TE("invar_ingot"), KJ("invar_compound"))

	event.recipes.thermal.smelter(CR("brass_ingot", 2), [MC("copper_ingot"), CR("zinc_ingot")])
	event.recipes.thermal.smelter(TC("rose_gold_ingot", 2), [MC("copper_ingot"), MC("gold_ingot")])
	event.recipes.thermal.smelter(TE("constantan_ingot", 2), [MC("copper_ingot"), TE("nickel_ingot")])

	event.recipes.createHaunting(MC('chainmail_helmet'),  Item.of(MC('iron_helmet')).ignoreNBT() )
	event.recipes.createHaunting(MC('chainmail_chestplate'),   Item.of(MC('iron_chestplate')).ignoreNBT())
	event.recipes.createHaunting(MC('chainmail_leggings'),   Item.of(MC('iron_leggings')).ignoreNBT())
	event.recipes.createHaunting(MC('chainmail_boots'),   Item.of(MC('iron_boots')).ignoreNBT())
}

function unwantedRecipes(event) {
}

function tweaks(event) {
	event.shapeless(TE("item_filter_augment"), [CR("filter"), TE("lapis_gear")])

	event.shaped(FD('flint_knife'), ['S ', ' M'], { M: MC("flint"), S: F('#rods/wooden') })
	event.shaped(FD('iron_knife'), ['S ', ' M'], { M: MC("iron_ingot"), S: F('#rods/wooden') })
	event.shaped(FD('golden_knife'), ['S ', ' M'], { M: MC("gold_ingot"), S: F('#rods/wooden') })
	event.shaped(FD('diamond_knife'), ['S ', ' M'], { M: MC("diamond"), S: F('#rods/wooden') })

	event.shaped("decorative_blocks:lattice", [
		'SS',
		'SS'
	], {
		S: F("#rods/wooden")
	})

	event.shaped("trashcans:item_trash_can", [
		'SSS',
		'AEA',
		'AAA'
	], {
		S: CR('iron_sheet'),
		A: CR('andesite_alloy'),
		E: MC('ender_pearl')
	})

	event.smithing("computercraft:turtle_normal", "computercraft:computer_normal", TE("invar_gear"))
	event.smithing("computercraft:turtle_advanced", "computercraft:computer_advanced", TE("invar_gear"))
	event.recipes.createMechanicalCrafting("computercraft:turtle_normal", "AB", { A: "computercraft:computer_normal", B: TE("invar_gear") })
	event.recipes.createMechanicalCrafting("computercraft:turtle_advanced", "AB", { A: "computercraft:computer_advanced", B: TE("invar_gear") })

	event.shaped("computercraft:turtle_advanced", [
		'SSS',
		'SMS',
		'S S'
	], {
		M: "computercraft:turtle_normal",
		S: MC('gold_ingot')
	})

	event.shaped(TC('obsidian_pane', 8), [
		'SSS',
		'SSS'
	], {
		S: MC('obsidian')
	})

	event.replaceInput({ id: "architects_palette:wither_lamp" }, AP('withered_bone'), TC('necrotic_bone'))
	event.replaceInput({ id: "architects_palette:withered_bone_block" }, AP('withered_bone'), TC('necrotic_bone'))

	event.replaceInput({ id: CR('crafting/kinetics/rope_pulley') }, '#forge:wool', '#supplementaries:ropes')
	event.replaceInput({ output: CR('adjustable_chain_gearshift') }, CR('electron_tube'), MC('redstone'))

	let tweak_casing = (r, i1, i2, tag) => {
		event.remove({ output: r })
		if(tag){
			event.custom({
				"type": "create:item_application",
				"ingredients": [
					{
					"tag": i2
					},
					{
					"item": i1
					}
				],
				"results": [
					{
					"item": r
					}
				]
			})
		}else{
			event.custom({
				"type": "create:item_application",
				"ingredients": [
					{
				"item": i2
					},
					{
					"item": i1
					}
				],
				"results": [
					{
					"item": r
					}
				]
			})
		}

	}

	tweak_casing('create:andesite_casing', 	'create:andesite_alloy', 'minecraft:logs', true)
	tweak_casing('create:copper_casing', 	'create:copper_sheet', 	'minecraft:logs', true)
	tweak_casing('create:brass_casing', 	'create:brass_sheet', 	'minecraft:logs', true)
  tweak_casing('create:railway_casing', 	'create:sturdy_sheet', 	'minecraft:logs', true)
  tweak_casing('create:shadow_steel_casing', 	'create:shadow_steel', 	'minecraft:logs', true)
	tweak_casing('create:refined_radiance_casing', 	'create:refined_radiance', 	'minecraft:logs', true)
	tweak_casing('alloyed:steel_casing', 	'alloyed:steel_sheet', 	'minecraft:logs', true)
	tweak_casing('kubejs:zinc_casing', 		'createdeco:zinc_sheet', 'minecraft:logs', true)
	tweak_casing('kubejs:enderium_casing', 'thermal:enderium_plate', 'minecraft:logs', true)
	tweak_casing('kubejs:invar_casing', 	'thermal:invar_plate', 	'minecraft:logs', true)
	tweak_casing('kubejs:fluix_casing', 	'thermal:lead_plate', 	'minecraft:logs', true)
	tweak_casing('alloyed:bronze_casing', 	'alloyed:bronze_ingot', 	'minecraft:logs', true)

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "tag": "forge:circuit_press" },
		"result": {
			"fluid": "tconstruct:molten_invar",
			"amount": 180
		},
		"temperature": 500,
		"time": 90
	})

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "tag": "forge:recycling" },
		"result": {
			"fluid": "tconstruct:molten_iron",
			"amount": 30
		},
		"temperature": 500,
		"time": 40
	})

	event.shaped(TE("side_config_augment"), [
		' S ',
		'PMP',
		' S '
	], {
		P: TE("invar_ingot"),
		M: TE("redstone_servo"),
		S: TE("gold_gear")
	})

	event.custom({
			"type": "thermal:rock_gen",
			"adjacent": "kubejs:molten_desh",
			"result": { "item": KJ('mica_block') }
		})
	let cobblegen = (below, output) => {
		event.custom({
			"type": "thermal:rock_gen",
			"adjacent": "minecraft:water",
			"below": below,
			"result": { "item": output }
		})
	}

	cobblegen(MC("polished_andesite"), MC("andesite"))
	cobblegen(MC("polished_granite"), MC("granite"))
	cobblegen(MC("polished_diorite"), MC("diorite"))
	cobblegen(CP("polished_calcite"), MC ("calcite"))

	cobblegen(MC("soul_soil"), MC("basalt"))
	cobblegen(MC("polished_deepslate"), MC("cobbled_deepslate"))

	event.recipes.createPressing([TE('nickel_plate')], TE('nickel_ingot'))
	
	event.stonecutting(AP("charcoal_block"), MC('charcoal'))

	event.recipes.createSplashing([
		Item.of(MC('iron_nugget', 2)).withChance(0.45),
		Item.of(MC('flint')).withChance(0.25)
	], 'minecraft:gravel')

	donutCraft(event, AP('plating_block', 8), CR('iron_sheet'), MC('stone'))

	let cast_block = (fluid, item) => {
		event.custom({
			"type": "tconstruct:casting_basin",
			"fluid": { "name": fluid, "amount": 810 },
			"result": { "item": item },
			"cooling_time": 150
		})
	}

	let cast = (type, fluid, amount, item, time) => {
		event.custom({
			"type": "tconstruct:casting_table",
			"cast": { "tag": "tconstruct:casts/single_use/" + type },
			"cast_consumed": true,
			"fluid": { "name": fluid, "amount": amount },
			"result": { "item": item },
			"cooling_time": time
		})
		event.custom({
			"type": "tconstruct:casting_table",
			"cast": { "tag": "tconstruct:casts/multi_use/" + type },
			"fluid": { "name": fluid, "amount": amount },
			"result": { "item": item },
			"cooling_time": time
		})
	}

	cast("ingot", BC('molten_steel'), 90, AL('steel_ingot'), 50)
	cast("ingot", KJ('plastic'), 90, KJ('plastic'), 20)
	cast("ingot", TC("molten_silver"), 90, TE("silver_ingot"), 50)
	cast("nugget", TC("molten_silver"), 10, TE("silver_nugget"), 17)
	cast_block(TC("molten_silver"), TE("silver_block"))

	cast("ingot", TC("molten_copper"), 90, MC("copper_ingot"), 50)
	cast("nugget", TC("molten_copper"), 10, CR("copper_nugget"), 17)
	cast_block(TC("molten_copper"), MC("copper_block"))

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"tag": "forge:rods/blaze"
		},
		"result": {
			"fluid": "tconstruct:blazing_blood",
			"amount": 100
		},
		"temperature": 790,
		"time": 40
	})


	event.custom({
		"type": "tconstruct:ore_melting",
		"ingredient": {
			"tag": "forge:ores/netherite_scrap"
		},
		"result": {
			"fluid": "tconstruct:molten_debris",
			"amount": 90
		},
		"temperature": 1175,
		"time": 143,
		"byproducts": [
			{
				"fluid": "tconstruct:molten_diamond",
				"amount": 30
			},
			{
				"fluid": "tconstruct:molten_gold",
				"amount": 90
			}
		]
	})

	event.custom({
		"type": "thermal:refinery",
		"ingredient": {
			"fluid": "thermal:glowstone",
			"amount": 1000
		},
		"result": [
			{
				"item": "thermal:lumium_ingot"
			}
		],
		"energy": 2000
	})

	event.custom({
		"type": "thermal:refinery",
		"ingredient": {
			"fluid": "thermal:redstone",
			"amount": 1000
		},
		"result": [
			{
				"item": "thermal:signalum_ingot"
			}
		],
		"energy": 2000
	})

	event.stonecutting('2x biomesoplenty:rose_quartz_block', CR('rose_quartz'))

}

function prettierpipes(event) {
	event.shaped(PP("pipe", 8), [
		'PMP'
	], {
		P: CR('brass_sheet'),
		M: CR('brass_ingot')
	})

	event.shaped(KJ("rotation_template", 4), [
		'MLM',
		'MLM',
		'MMM'
	], {
		M: CR('andesite_alloy'),
		L: '#minecraft:planks'
	})

	event.shaped(KJ("brass_template", 8), [
		'MLM',
		'MLM',
		'MMM'
	], {
		M: CR('brass_ingot'),
		L: '#minecraft:planks'
	})

	event.shaped("8x pipez:energy_pipe", [
		'PMP'
	], {
		P: TE('invar_ingot'),
		M: MC('redstone')
	})

	event.shaped("2x pipez:fluid_pipe", [
		'MPM'
	], {
		P: 'ad_astra:desh_nugget',
		M: CR('fluid_pipe')
	})

	let module = (type, result) => {
		event.remove({ output: PP(result) })
		event.stonecutting(PP(result), 'kubejs:pipe_module_' + type)
	}

	module('utility', 'filter_increase_modifier')
	module('utility', 'tag_filter_modifier')
	module('utility', 'mod_filter_modifier')
	module('utility', 'nbt_filter_modifier')
	module('utility', 'damage_filter_modifier')
	module('utility', 'round_robin_sorting_modifier')
	module('utility', 'random_sorting_modifier')
	module('utility', 'redstone_module')
	module('utility', 'stack_size_module')
	module('utility', 'low_high_priority_module')
	module('utility', 'medium_high_priority_module')
	module('utility', 'high_high_priority_module')
	module('utility', 'low_low_priority_module')
	module('utility', 'medium_low_priority_module')
	module('utility', 'high_low_priority_module')

	let tiers = ['low', 'medium', 'high']
	for (var i = 0; i < tiers.length; i++) {
		let tier = 'tier_' + (i + 1)
		let prefix = tiers[i] + "_"
		module(tier, prefix + 'extraction_module')
		module(tier, prefix + 'retrieval_module')
		module(tier, prefix + 'speed_module')
		module(tier, prefix + 'filter_module')
		module(tier, prefix + 'crafting_module')
	}
}

function barrels(event) {
    event.shaped(CR("chromatic_compound"),[
		'RSR',
		'SAS',
		'RSR'
	], {
		R: MC('obsidian'),
		S: 'createcasing:chorium_ingot',
		A: "alloyed:bronze_ingot"
	})

	event.custom({
"type": "tconstruct:casting_table",
"cast": {
    "tag": "forge:ingots"
},
"cast_consumed": true,
"cooling_time": 57,
"fluid": {
    "amount": 90,
    "tag": "forge:molten_gold"
},
"result": "tconstruct:ingot_cast",
"switch_slots": true
})

	event.custom({
  "type": "mantle:crafting_shaped_retextured",
  "category": "misc",
  "key": {
    "m": {
      "tag": "tconstruct:anvil_metal"
    },
    "s": {
      "tag": "tconstruct:seared_blocks"
    }
  },
  "match_all": true,
  "pattern": [
    "mmm",
    " s ",
    "sss"
  ],
  "result": {
    "item": "tconstruct:tinkers_anvil"
  },
  "show_notification": true,
  "texture": {
    "tag": "tconstruct:anvil_metal"
  }
})
	event.custom({
  "type": "mantle:crafting_shaped_retextured",
  "category": "misc",
  "key": {
    "m": {
      "tag": "tconstruct:anvil_metal"
    },
    "s": {
      "tag": "tconstruct:scorched_blocks"
    }
  },
  "match_all": true,
  "pattern": [
    "mmm",
    " s ",
    "sss"
  ],
  "result": {
    "item": "tconstruct:scorched_anvil"
  },
  "show_notification": true,
  "texture": {
    "tag": "tconstruct:anvil_metal"
  }
})
}

function rocketScience(event) {
	let steel = "alloyed:steel_sheet"
	let cool_glass = "thermal:signalum_glass"
	let nose_cone = "ad_astra:rocket_nose_cone"
	let fin = "ad_astra:rocket_fin"
	let engine_t1 = "ad_astra:steel_engine"
	let tank_t1 = "ad_astra:steel_tank"

	event.recipes.gearboxElectrolyzing([Fluid.of(GB("oxygen"), 300), Fluid.of(GB("hydrogen"), 500)], Fluid.of(MC("water"))).energy(1000)
	// //event.recipes.gearboxCentrifuging([Fluid.of(KJ("oxygen"), 240), Fluid.of(KJ(""), 500)], Fluid.of(MC("water"))).energy(1000)
    
    // event.custom({
    //     "type":"ad_astra:oxygen_loader",
    //     "input": {
    //         "name": "gearbox:oxygen",
    //         "amount": 5
    // },
    //     "oxygen": 5 
    // })

    // event.custom({
    //     "type":"ad_astra:oxygen_bubble_distributor",
    //     "input": {
    //         "name": "gearbox:oxygen",
    //         "amount": 5
    // },
    //     "oxygen": 5 
    // })

	event.recipes.createMechanicalCrafting(Item.of(MC('clay_ball'), 4), ['A'], { A: 'minecraft:clay' })

	event.recipes.createMechanicalCrafting("ad_astra:engine_frame", [
		' S ',
		'S S',
		'S S'
	], {
		S:"createbigcannons:nethersteel_ingot"
	})

	let t = KJ('incomplete_steel_engine')
	event.recipes.createSequencedAssembly([
		Item.of(engine_t1).withChance(1),
		Item.of("kubejs:failed_steel_engine").withChance(199)
	], "ad_astra:engine_frame", [
		event.recipes.createDeploying(t, [t, KJ("explosive_mechanism")]),
		event.recipes.createDeploying(t, [t, KJ("pressure_mechanism")]),
		event.recipes.createDeploying(t, [t, CR("brass_sheet")])
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:steel_engine')

	event.shaped("ad_astra:wheel",[
		'RRR',
		'RSR',
		'RRR'
	], {
		R: RW('rubber_sheet'),
		S: 'alloyed:steel_sheet'
	})

	event.recipes.createMechanicalCrafting("ad_astra:tier_1_rover", [
		'WMW',
		'SSS',
		'SSS',
		'WVW'
	], {
		S:"alloyed:steel_sheet",
		W:'ad_astra:wheel',
		V:CR('black_valve_handle'),
		M:AD('steel_engine')
	})

	event.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
		{
			"item": "kubejs:failed_steel_engine"
		}
		],
		"results": [
		{
			"fluid": "createbigcannons:molten_nethersteel",
			"amount": 450
		},
		{
			"fluid": "tconstruct:molten_brass",
			"amount": 90
		},
		],
		"processingTime": 180,
		"heatRequirement": "heated"
	})

	event.recipes.createMechanicalCrafting("ad_astra:rocket_fin", [
		'SS ',
		'SSS',
		'SSS'
	], {
		S:"alloyed:steel_sheet"
	})

	event.recipes.createMechanicalCrafting(nose_cone, [
		' S ',
		'SBS'
	], {
		S:"createbigcannons:nethersteel_ingot",
		B:"alloyed:steel_block"
	})

	event.recipes.createMechanicalCrafting("ad_astra:tier_1_rocket", [
		'  N  ',
		' BGB ',
		' BTB ',
		' BTB ',
		'FBTBF',
		'FTETF'
	], {
		E: engine_t1,
		B: CR("brass_block"),
		N: AD("rocket_nose_cone"),
		F: fin,
		G: cool_glass,
		T: tank_t1
	})

	event.shapeless(tank_t1, GB('steel_fluid_tank'));

	event.recipes.createMechanicalCrafting("ad_astra:oxygen_loader", [
		'AAA',
		'P R',
		'AAA'
	], {
		A: steel,
		P: CR('mechanical_pump'),
		R: TE("rf_coil")
	})

	event.recipes.createMechanicalCrafting("ad_astra:oxygen_distributor", [
		'AAA',
		'PSR',
		'AAA'
	], {
		A: steel,
		P: CR('mechanical_pump'),
		R: TE("rf_coil"),
		S: CR('propeller')
	})

	event.recipes.createMechanicalCrafting("ad_astra:launch_pad", [
		'PPP',
		'III'
	], {
		P: steel,
		I: MC("iron_block"),
	})

	let pattern = [
		' A ',
		'GSG',
		' A '
	];

	event.recipes.createMechanicalCrafting("ad_astra:space_helmet", pattern,
		{
			A: steel,
			G: CR("brass_sheet"),
			S: CR("copper_diving_helmet")
		})
	
	event.recipes.createMechanicalCrafting("ad_astra:space_suit", pattern,
		{
			A: steel,
			G: CR("brass_sheet"),
			S: CR("copper_backtank")
		})

	event.recipes.createMechanicalCrafting("ad_astra:space_pants", pattern,
		{
			A: steel,
			G: CR("brass_sheet"),
			S: TE("hazmat_leggings")
		})

	event.recipes.createMechanicalCrafting("ad_astra:space_boots", pattern,
		{
			A: steel,
			G: CR("brass_sheet"),
			S: TE("hazmat_boots")
		})

}

function drawersop(event) {
	let drawer_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']
	let drawer_sizes = ['1', '2', '4']
	event.replaceInput({ id: SD('compacting_drawers_3') }, MC('iron_ingot'), CR('zinc_ingot'))

	drawer_types.forEach(e => {
		let trim = SD(`${e}_trim`)
		let plank = MC(`${e}_planks`)
		event.remove({ id: trim })
		event.shaped(Item.of(trim, 4), [
			'SSS',
			'PMP',
			'SSS'
		], {
			P: CR('zinc_ingot'),
			M: F('#chests'),
			S: plank
		})

		event.stonecutting(SD("upgrade_template"), trim)

		drawer_sizes.forEach(size => {
			let full = SD(`${e}_full_drawers_${size}`)
			let half = SD(`${e}_half_drawers_${size}`)
			event.remove({ id: full })
			event.remove({ id: half })
			event.stonecutting(full, trim)
			event.stonecutting(Item.of(half, 2), trim)
		})
	})
}

function unify(event) {
	event.recipes.createMilling(TE("nickel_dust"), TE("nickel_ingot"))
	event.recipes.createMilling(TE("lead_dust"), TE("lead_ingot"))
	event.recipes.createMilling(TE("copper_dust"), MC("copper_ingot"))
	event.recipes.createMilling(KJ("zinc_dust"), CR("zinc_ingot"))

	event.replaceOutput({ id: CR('compat/ae2/milling/gold') }, AE2('gold_dust'), TE('gold_dust'))
	event.replaceOutput({ id: CR('compat/ae2/milling/iron') }, AE2('iron_dust'), TE('iron_dust'))
	event.replaceInput({ id: TE('augments/rf_coil_storage_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('augments/rf_coil_xfer_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('augments/rf_coil_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('tools/detonator') }, F('#ingots/silver'), TE('lead_ingot'))
	event.replaceInput({}, '#forge:plates/iron', CR('iron_sheet'))
	event.replaceInput({}, '#forge:plates/gold', CR('golden_sheet'))
	event.replaceInput({}, '#forge:dusts/gold', TE('gold_dust'))
	event.replaceInput({}, '#forge:dusts/iron', TE('iron_dust'))
	event.replaceInput({}, '#forge:dusts/diamond', TE('diamond_dust'))
	event.replaceInput({}, '#forge:dusts/copper', TE('copper_dust'))
	event.replaceInput({}, '#forge:plates/copper', CR('copper_sheet'))
	event.replaceInput({}, '#forge:plates/zinc', 'createdeco:zinc_sheet')
	event.replaceInput({}, '#forge:ingots/copper', MC('copper_ingot'))
	event.replaceOutput({},'#forge:ingots/copper', MC('copper_ingot'))
	event.replaceInput({}, '#forge:nuggets/copper', CR('copper_nugget'))
	event.replaceOutput({},'#forge:nuggets/copper', CR('copper_nugget'))
	event.replaceOutput({},'#forge:ores/copper', '#minecraft:copper_ores')
	event.replaceOutput({},'#forge:nuggets/silver', TE('silver_nugget'))
	event.replaceOutput({},'#forge:ingots/silver', TE('silver_ingot'))
	event.replaceOutput({},'#forge:storage_blocks/silver', TE('silver_block'))
	event.replaceInput({}, '#forge:nuggets/silver', TE('silver_nugget'))
	event.replaceInput({}, '#forge:ingots/silver', TE('silver_ingot'))
	event.replaceInput({}, '#forge:storage_blocks/silver', TE('silver_block'))
	event.replaceInput({}, '#forge:storage_blocks/copper', MC('copper_block'))
	event.replaceOutput({}, '#forge:storage_blocks/copper', MC('copper_block'))
	event.replaceInput({}, '#forge:gems/ruby', TE('ruby'))
	event.replaceInput({}, '#forge:gems/sapphire', TE('sapphire'))

	event.replaceOutput({}, TC("steel_ingot"), AL('steel_ingot'))

	event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25)], 'biomesoplenty:black_sand')
	event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25)], 'biomesoplenty:white_sand')
	event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25)], 'biomesoplenty:orange_sand')

	event.replaceInput({ type: "minecraft:crafting_shaped" }, '#forge:ingots/tin', CR('zinc_ingot'))

	event.replaceInput({}, '#forge:plates/bronze', 'alloyed:bronze_sheet')
	event.replaceInput({}, '#forge:ingots/bronze', 'alloyed:bronze_ingot')
	event.replaceInput({}, '#forge:plates/silver', TE('invar_plate'))
	event.replaceInput({}, '#forge:plates/constantan', TE('signalum_plate'))

	event.replaceInput({}, '#forge:gears/tin', TE('lead_gear'))
	event.replaceInput({}, '#forge:gears/bronze', TE('nickel_gear'))
	event.replaceInput({}, '#forge:gears/silver', TE('invar_gear'))
	event.replaceInput({}, '#forge:gears/constantan', TE('signalum_gear'))
	event.replaceInput({}, '#forge:gears/electrum', TE('constantan_gear'))

	event.replaceInput({}, '#forge:plates/invar', TE('invar_ingot'))

	event.recipes.createCrushing(TE('diamond_dust'), MC('diamond'))

	event.recipes.createPressing([TE('lead_plate')], TE('lead_ingot'))
	event.recipes.createPressing([TE('enderium_plate')], TE('enderium_ingot'))
	event.recipes.createPressing([TE('lumium_plate')], TE('lumium_ingot'))
	event.recipes.createPressing([TE('signalum_plate')], TE('signalum_ingot'))
	event.recipes.createPressing([TE('constantan_plate')], TE('constantan_ingot'))

	let woodcutting = (mod, log, planks, slab) => {
		event.recipes.createCutting([mod + ":stripped_" + log], mod + ":" + log).processingTime(50)
		event.recipes.createCutting([Item.of(mod + ":" + planks, 6)], mod + ":stripped_" + log).processingTime(50)
		event.recipes.createCutting([Item.of(mod + ":" + slab, 2)], mod + ":" + planks).processingTime(50)
	}

	woodcutting("architects_palette", "twisted_log", "twisted_planks", "twisted_slab")
	woodcutting("tconstruct", "greenheart_log", "greenheart_planks", "greenheart_planks_slab")
	woodcutting("tconstruct", "skyroot_log", "skyroot_planks", "skyroot_planks_slab")
	woodcutting("tconstruct", "bloodshroom_log", "bloodshroom_planks", "bloodshroom_planks_slab")

	event.replaceInput({ id: TC("smeltery/casts/gold_casts/ingots") }, MC("copper_ingot"), "#forge:ingots")
	event.replaceInput({ id: TC("smeltery/casts/gold_casts/nuggets") }, CR("copper_nugget"), "#forge:nuggets")
	event.replaceInput({ id: TC("smeltery/casts/gold_casts/plates") }, CR("iron_sheet"), "#forge:plates")
	event.replaceInput({ id: TC("smeltery/casts/gold_casts/gears") }, TE("lead_gear"), "#forge:gears")
	event.replaceInput({ id: TC("smeltery/casts/gold_casts/gems") }, TE("ruby"), "#forge:gems")

	colors.forEach(color => {
	event.remove({id:  'createdeco:' + color + '_shipping_container'})
	});
	event.replaceOutput({},'ad_astra:steel_ingot', 'alloyed:steel_ingot')
	event.replaceInput({},'thermal:cured_rubber', 'rubberworks:rubber_sheet')

    let remove_input_output = (item) =>{
        event.remove({input: item})
        event.remove({output: item})
    }
    let remove_metal_set = (mod, metal) => {
        remove_input_output(`${mod}:${metal}_ingot`)
        remove_input_output(`${mod}:${metal}_block`)
        remove_input_output(`${mod}:${metal}_nugget`)
    }
    let remove_thermal_set = (metal) =>{
        remove_input_output(`thermal:${metal}_plate`)
        remove_input_output(`thermal:${metal}_dust`)
        remove_input_output(`thermal:${metal}_gear`)
    }
		let replace_metal_set = (mod, metal, mod2, metal2) => {
        event.replaceOutput({},`${mod}:${metal}_ingot`, `${mod2}:${metal2}_ingot`)
        event.replaceOutput({},`${mod}:${metal}_block`, `${mod2}:${metal2}_block`)
        event.replaceOutput({},`${mod}:${metal}_nugget`, `${mod2}:${metal2}_nugget`)
		}

    remove_metal_set('thermal', 'electrum')
		remove_metal_set('tfmg', 'lead')
		remove_metal_set('tfmg', 'constantan')
		remove_metal_set('createdeco', 'cast_iron')
		remove_metal_set('tfmg', 'nickel')

    remove_thermal_set('electrum')

    replace_metal_set('tfmg', 'constantan', 'thermal', 'constantan')
		replace_metal_set('tfmg', 'nickel', 'thermal', 'nickel')
		replace_metal_set('tfmg', 'lead', 'thermal', 'lead')

	event.shapeless('alloyed:steel_ingot','ad_astra:steel_ingot')

}

function trickierWindmills(event) {
	event.shapeless('create:sail_frame', ['create:white_sail'])
	event.shaped('2x create:white_sail', [
		'SSS',
		'NAN',
		'SSS'
	], {
		A: MC('white_wool'),
		N: CR('zinc_nugget'),
		S: 'minecraft:stick'
	})
}

function rubberMatters(event) {
	event.shaped(CR('belt_connector', 3), [
		'SSS',
		'SSS'
	], {
		S: RW('rubber_sheet')
	})

	event.shaped(TE('fluid_cell_frame'), [
		'NSN',
		'SAS',
		'NSN'
	], {
		A: TE('steel_gear'),
		N: MC('copper_ingot'),
		S: '#forge:glass'
	})

	event.shaped(TE('energy_cell_frame'), [
		'NSN',
		'SAS',
		'NSN'
	], {
		A: KJ('power_mechanism'),
		N: MC('copper_ingot'),
		S: '#forge:glass'
	})

	event.shapeless(RW('rubber', 3), [MC("slime_ball"), TE("sulfur")])

	let sap_tree = (mod, fluid, type) =>{
		event.recipes.rubberworksSapping(fluid, [mod + ":" + type + "_log", mod + ":" +  type + "_leaves"])
	}

	sap_tree('minecraft', Fluid.of(RW('resin'), 20), "oak")
	sap_tree('minecraft', Fluid.of(RW('resin'), 70), "spruce")
	sap_tree('minecraft', Fluid.of(RW('resin'), 30), "birch")
	sap_tree('minecraft', Fluid.of(RW('resin'), 70), "jungle")
	sap_tree('minecraft', Fluid.of(RW('resin'), 40), "acacia")
	sap_tree('minecraft', Fluid.of(RW('resin'), 60), "dark_oak")

	sap_tree('biomesoplenty', Fluid.of(RW('resin'), 50), "redwood")
	sap_tree('biomesoplenty', Fluid.of(RW('resin'), 60), "fir")
	sap_tree('biomesoplenty', Fluid.of(RW('resin'), 50), "jacaranda")
	sap_tree('biomesoplenty', Fluid.of(RW('resin'), 70), "mahogany")
	sap_tree('biomesoplenty', Fluid.of(RW('resin'), 10), "dead")
	sap_tree('biomesoplenty', Fluid.of(MC('lava'), 15), "hellbark")
	sap_tree('biomesoplenty', Fluid.of(MC('water'), 100), "willow")
	sap_tree('biomesoplenty', Fluid.of(KJ('dirt_water'), 100), "palm")
	sap_tree('biomesoplenty', Fluid.of(('create_enchantment_industry:ink'), 50), "umbran")
	sap_tree('biomesoplenty', Fluid.of(('create_enchantment_industry:experience'), 1), "magic")

	event.recipes.rubberworksSapping(Fluid.of(RW("resin"), 40), ["biomesoplenty:cherry_log", "biomesoplenty:white_cherry_leaves"])
	event.recipes.rubberworksSapping(Fluid.of(RW("resin"), 40), ["biomesoplenty:cherry_log", "biomesoplenty:pink_cherry_leaves"])

	event.recipes.rubberworksSapping(Fluid.of(TC("earth_slime"), 20), [TC("greenheart_log"), TC("earth_slime_leaves")])
	event.recipes.rubberworksSapping(Fluid.of(TC("sky_slime"), 20),   [TC("skyroot_log"), TC("sky_slime_leaves")])
	event.recipes.rubberworksSapping(Fluid.of(TC("ender_slime"), 20), [TC("greenheart_log"), TC("ender_slime_leaves")])
}

function dioriticAndesite(event) {
	event.recipes.createMixing(Item.of(MC('gunpowder'), 6), [MC('charcoal', 2), TE('sulfur_dust'), TE("niter_dust", 3)]).processingTime(1)
	event.recipes.createSplashing([Item.of(MC("clay_ball")).withChance(0.65)], MC('sand'))
}

function electronTube(event) {
	event.recipes.createMilling([AE2('certus_quartz_dust')], '#ae2:all_certus_quartz').processingTime(200)

	event.recipes.createDeploying(KJ('diamond_tube'), [KJ('empty_tube'), MC('diamond')])
}

function andesiteMachine(event) {
	event.recipes.createMilling(['4x ' + AE2('ender_dust')], ED('ender_shard')).processingTime(600)
	event.recipes.createCrushing(['6x ' + AE2('ender_dust')], ED('ender_shard')).processingTime(400)

	event.shaped('thermal:dynamo_stirling', [
		' P ',
		'AMA',
		'AIA'
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: MC('furnace'),  P:TE('rf_coil')})
}

function copperMachine(event) {
	event.shaped(KJ('pressure_mechanism'), [
		'SCS'
	], {
		C: KJ('rotation_mechanism'),
		S: RW('rubber_sheet')
	})

	event.shaped(KJ('copper_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: CR('copper_casing'),
		S: KJ('pressure_mechanism')
	})

	donutCraft(event, TC('smeltery_controller'), TC('seared_bricks'), KJ('pressure_mechanism'))

	let copper_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('rotation_template'), 'kubejs:copper_machine', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:copper_machine', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'kubejs:copper_machine')
	}
	
	copper_machine('create:copper_backtank', 1, MC("copper_block"))
	copper_machine('create:portable_fluid_interface', 2)
	copper_machine('create:fluid_tank', 3, "#forge:glass")
	copper_machine('thermal:upgrade_augment_1', 1, MC('redstone'))
	copper_machine('create:item_drain', 3, MC("iron_bars"))
	copper_machine('thermal:device_water_gen', 1, MC('bucket'))
	copper_machine('create:smart_fluid_pipe', 2)
	copper_machine('create_enchantment_industry:disenchanter', 1, "#create:sandpaper")
	copper_machine('create:fluid_tank', 3, "#forge:glass")
  copper_machine(CF('pipette'), 1, CR('mechanical_arm'))
  copper_machine(CF('centrifugal_pump'), 2, CR('mechanical_pump'))
	copper_machine(CF('copper_tap'), 1, SP('faucet'))

	let abstruse_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('brass_template'), 'kubejs:enderium_machine', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:enderium_machine', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'kubejs:copper_machine')
	}

	abstruse_machine(ES('ender_chest'), 2, F('#chests'))
	abstruse_machine(ES('ender_tank'), 2, CR("fluid_tank"))
	abstruse_machine(TE('upgrade_augment_3'), 1, KJ('power_mechanism'))

	event.shaped(CR('steam_engine'), [
		' G ',
		'CMC',
		'CBC'
	], {M: KJ('copper_machine'), C: MC('copper_ingot'), G: CR('golden_sheet'), B: MC('copper_block')})  
	
	event.shaped(CR('spout'), [
		' M ',
		'RHR',
		' R '
	], {M: KJ('copper_machine'), H: MC('hopper'), R: RW('rubber_sheet')})  
	
	event.shaped(CR('hose_pulley'), [
		'   ',
		'PMS',
		' R '
	], {M: KJ('copper_machine'), S: CR('shaft'), R: RW('rubber_block'), P: CR('fluid_pipe')})  
	
	event.shaped(TE('dynamo_magmatic'), [
		' R ',
		'HMH',
		'HTH'
	], {M: KJ('copper_machine'), H: 'alloyed:steel_ingot', R: TE('rf_coil'), T: TC('seared_fuel_tank')}) 
	
	event.shaped('create_enchantment_industry:printer', [
		' M ',
		'RHR',
		' I '
	], {M: KJ('copper_machine'), H: MC('hopper'), I: MC('iron_block'), R: 'create_enchantment_industry:experience_rotor'}) 
}

function MetallurgyRecipes(event){
	let assembly_machine = (mechanism, machine, casing) => {
		let t = casing + '_casing'
		event.recipes.createSequencedAssembly([
			machine + '_machine',
		], casing + '_casing', [
			event.recipes.createDeploying(t, [t, mechanism + '_mechanism'])
		])	.transitionalItem(t)
			.loops(8)
			.id(machine+'_machine_by_deployer')
	}

	assembly_machine(KJ("rotation"), GB("kinetic"), CR("andesite"))
	assembly_machine(CR("precision"), KJ("brass"), CR("brass"))
	assembly_machine(KJ("pressure"), KJ("copper"), CR("copper"))
	assembly_machine(KJ("scorch"), KJ("zinc"), KJ("zinc"))
	assembly_machine(KJ("train"), KJ("train"), CR("railway"))
	assembly_machine(KJ("explosive"), KJ("explosive"), AL("steel"))
	assembly_machine(KJ("ender"), KJ("enderium"), KJ("enderium"))
	assembly_machine(KJ("power"), KJ("power"), KJ("fluix"))
	assembly_machine(KJ("high_power"), KJ("invar"), KJ("invar"))

	event.recipes.createMixing(Fluid.of(TC('molten_brass'), 20), [Fluid.of(TC("molten_zinc"), 10), Fluid.of(TC("molten_copper"), 10)])

	event.recipes.createFilling(MC('grass_block'), [MC('coarse_dirt'), Fluid.of(MC('water'), 20)])

	event.shapeless(CR("white_sail"), CR("sail_frame"))

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": { "item": TC("ingot_cast") },
		"cast_consumed": false,
		"fluid": { "tag": "tconstruct:molten_brass", "amount": 90 },
		"result": { "item": CR("brass_ingot") },
		"cooling_time": 60
	})

	event.shaped(MC("copper_block"), [
		'C'
	], {
		C: MC('cut_copper')
	})

	event.recipes.createCrushing(MC('redstone', 5), CR('polished_rose_quartz'))

	event.recipes.createMechanicalCrafting(GB('steel_fluid_tank', 1), "AB", { A: CR('fluid_tank'), B: AL('steel_sheet') })

	let inscriber = (type, fluid, amount, time) => {
	event.custom({
			"type": "tconstruct:casting_table",
			"cast": { "item": "ae2:"+type+"_processor_press"},
			"fluid": { "name": fluid, "amount": amount },
			"result": { "item": "ae2:printed_"+type+"_processor" },
			"cooling_time": time
		})
	event.shaped("ae2:"+type+"_processor", [
		'ABC',
	], {C: AE2("printed_silicon"), B: KJ("power_mechanism"), A: "ae2:printed_"+type+"_processor"})
	}

	inscriber("calculation", TC('molten_zinc'), 90, 40)
	inscriber("engineering", TC('molten_diamond'), 90, 40)
	inscriber("logic", TC('molten_gold'), 90, 40)

	event.shaped(AE2('fluix_glass_cable', 16), ['AB',], {A: KJ("power_mechanism"), B: AE2('logic_processor')})

	event.recipes.rubberworksCompressing(AE2("silicon"), 	Fluid.of(KJ("sif2"), 50)).heated()
  let luz = (id, amount) => {
	event.stonecutting(Item.of(id, amount), 'createaddition:small_light_connector')
	event.shaped('createaddition:small_light_connector', ['C',], {C: id})
  }
	luz(MOL('small_light_with_reflector'), 1)
	luz(MOL('small_cage_light'), 1)
	luz(MOL('small_tube_light'), 1)
	luz(MOL('skinny_tube_light'), 1)
	luz(MOL('pyle_headlight'), 1)
	luz(MOL('small_armored_light'), 1)
	luz(MOL('small_green_sconce'), 1)
	luz(MOL('small_edison_bulb'), 1)

	let creative = (type) => {
	event.remove({output: "createcasing:vertical_"+type+"_gearbox"})
	event.remove({output: "createcasing:"+type+"_encased_chain_drive"})
	event.remove({output: "createcasing:"+type+"_adjustable_chain_gearshift"})
	event.remove({output: "createcasing:"+type+"_chain_conveyor"})
  event.remove({output: "createcasing:"+type+"_casing"})
	event.remove({output: "createcasing:"+type+"_gearbox"})
	event.remove({output: "createcasing:"+type+"_cogwheel"})
	event.remove({output: "createcasing:"+type+"_configurable_gearbox"})
	event.remove({output: "createcasing:"+type+"_mixer"})
	event.remove({output: "createcasing:"+type+"_press"})
	event.remove({output: "createcasing:"+type+"_depot"})
	event.remove({output: "createcasing:"+type+"_gearshift"})
	event.remove({output: "createcasing:"+type+"_clutch"})
	event.remove({output: "createcasing:"+type+"_deployer"})
	event.remove({output: "createcasing:"+type+"_portable_storage_interface"})
	event.remove({output: "createcasing:"+type+"_encased_fan"})
	event.remove({output: "createcasing:"+type+"_mechanical_harvester"})
	event.remove({output: "createcasing:"+type+"_mechanical_saw"})
	event.remove({output: "createcasing:"+type+"_mechanical_drill"})
	event.remove({output: "createcasing:"+type+"_mechanical_plough"})
	event.remove({output: "createcasing:"+type+"_mechanical_roller"})
	}

	wood_nomes.forEach(type => {
	event.remove({output: 'createcasing:'+type+'_shaft'})
	});
	
	let encased = (type) => {
    event.remove({output: "createcasing:"+type+"_configurable_gearbox"})
	}

	encased("railway")
	encased("copper")
	encased("andesite")
	encased("brass")
	encased("weathered_iron")
	encased("refined_radiance")
	encased("shadow_steel")
	encased("industrial_iron")

  creative("creative")

	event.shaped(AD('gas_tank'), ['SS','SS'], {S: AD('steel_tank')})
	event.shaped(AD('large_gas_tank'), ['SS','SS'], {S: AD('gas_tank')})

let adblocks = (item) => {
event.stonecutting(AD(`encased_${item}_block`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_plateblock`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_panel`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_plating`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_plating_stairs`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_plating_slab`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_pillar`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`glowing_${item}_pillar`, 4), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_plating_button`, 2), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_plating_pressure_plate`, 2), AD(`${item}_factory_block`))//
event.stonecutting(AD(`${item}_sliding_door`, 2), AD(`${item}_factory_block`))//
}
event.stonecutting(AD(`airlock`, 2), AD(`steel_factory_block`))
event.stonecutting(AD(`reinforced_door`, 2), AD(`steel_factory_block`))
event.stonecutting(AD(`steel_door`, 2), AD(`steel_factory_block`))
event.stonecutting(AD(`steel_trapdoor`, 2), AD(`steel_factory_block`))
event.shaped(AD(`steel_factory_block`, 2), ['SCS','C C','SCS'], {C: MC('cobblestone'), S: AL('steel_ingot')})
event.shaped(AD(`desh_factory_block`, 2), ['SCS','C C','SCS'], {C: MC('cobblestone'), S: AD('desh_ingot')})
event.shaped(AD(`iron_factory_block`, 2), ['SCS','C C','SCS'], {C: MC('cobblestone'), S: MC('iron_ingot')})

adblocks('steel')
adblocks('desh')
adblocks('iron')

let smith = (item, quantidade, item2, catalyst) => {
event.smithing(Item.of(item, quantidade), KJ('brass_template'), catalyst, item2)
}
smith(AD('netherite_space_helmet'), 1, AD('space_helmet'), MC('netherite_ingot'))
smith(AD('netherite_space_suit'), 1, AD('space_suit'), MC('netherite_ingot'))
smith(AD('netherite_space_pants'), 1, AD('space_pants'), MC('netherite_ingot'))
smith(AD('netherite_space_boots'), 1, AD('space_boots'), MC('netherite_ingot'))
}

function brassMachine(event) {
	let redstoneTransmute = (input, output) => {
		event.custom({
			"type": "tconstruct:casting_basin",
			"cast": {"item": input},
			"cast_consumed": true,
			"fluid": {"name": "thermal:redstone", "amount": 50},
			"result": output, "cooling_time": 30})}

	redstoneTransmute(MC("cobblestone"), MC("netherrack"))
	redstoneTransmute(MC("sand"), MC("red_sand"))

	event.recipes.gearboxPyroprocessing(CR('limestone'), MC('cobblestone'))

	event.recipes.createCompacting(CR("brass_ingot"), Fluid.of(TC('molten_brass'), 90))
  event.recipes.createCompacting(MC("dripstone_block"), MC('clay'))

	event.shaped(TE('dynamo_numismatic'), [
		' R ',
		'HMH',
		'HTH'
	], {M: KJ('brass_machine'), H: CR('brass_sheet'), R: TE('rf_coil'), T: TE('silver_coin')})  

}

function titaniumStuff(event){
	event.recipes.createMixing(Fluid.of(KJ('tnt2'), 250), Fluid.of(KJ('tnt1'), 250)).heated()
	event.recipes.createMixing([AD("desh_ingot"), Fluid.of(KJ('tnt5'), 250)], [AD("desh_ingot"), SP("ash")]).heated()
	event.recipes.createMixing(KJ("sodium_powder"), MC("sand")).heated()
	event.recipes.createMixing(Fluid.of(KJ('tnt6'), 250), [MC('sand'), Fluid.of(MC('water'), 200)]).processingTime(50)

	event.recipes.gearboxElectrolyzing([KJ("magnesium_ingot"), Fluid.of(GB("chlorine"), 50)], KJ("magnesium_chloride")).heated().energy(1000)
	event.recipes.gearboxElectrolyzing([KJ('sodium_powder'), Fluid.of(GB('chlorine'), 125), Fluid.of(MC('water'), 250)], Fluid.of(KJ('tnt6'), 500)).energy(100)

	event.recipes.gearboxIrradiating([Fluid.of(GB('chlorine'), 250), KJ("sodium_powder", 2)], Fluid.of(KJ('tnt6'), 250), 0xf005fe, 2)
	event.recipes.gearboxTransmuting(TE("silver_ingot"), MC("gold_ingot"), 0xff6db6, 4)
	event.recipes.gearboxTransmuting(TC("cobalt_ingot"), MC("gold_ingot"), 0xff6db6, 2)
	event.recipes.gearboxTransmuting(MC("diamond"), MC("gold_ingot"), 0xff6db6, 16)
	event.recipes.gearboxTransmuting(MC("netherite_ingot"), MC("gold_ingot"), 0xff6db6, 40)
	event.recipes.gearboxTransmuting("projectred_core:red_ingot", TE("silver_ingot"), 0x62ffaa, 8)
	event.recipes.gearboxTransmuting("gearbox:geld_ingot",TE("silver_ingot"), 0x62ffaa, 4)
	event.recipes.gearboxTransmuting(KJ("limenite"), "gearbox:geld_ingot", 0x5bffa5, 6)
	event.recipes.gearboxTransmuting(TE("enderium_ingot"), MC("diamond"), 0x13fe8e, 40)

    event.recipes.gearboxIrradiating(Fluid.of(KJ('tnt1'), 250), [Fluid.of(GB('chlorine'), 250), KJ("limenite"), TE("coal_coke")], 0x22fe28, 4)
	event.recipes.gearboxIrradiating([KJ("titanium_sponge"), KJ("magnesium_chloride")], [Fluid.of(KJ('tnt2'), 375), KJ("magnesium_ingot"), Fluid.of(KJ('tnt5'), 125)], 0x22fe28, 8)
	event.recipes.gearboxIrradiating(KJ("titanium_blend"), KJ("titanium_dust"), 0x85affe, 6)

	event.recipes.thermal.pulverizer(KJ("titanium_dust") , KJ("titanium_sponge")).energy(5000)

	event.recipes.gearboxPyroprocessing(KJ("titamium_ingot"), KJ("titanium_blend"))
}

function enderStuff(event){
	event.shaped(KJ('enderium_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('enderium_casing'),
		S: KJ('ender_mechanism')
	})

	event.custom({
		"type": "tconstruct:melting",
			"ingredient": {
				"item": "ad_astra:desh_ingot"
	},
			"result": {
	"fluid": "kubejs:molten_desh",
			"amount": 90
		},
	"temperature": 425,
	"time": 60,
"byproducts": []
});

	event.recipes.createMechanicalExtruderExtruding(KJ('mica_block'), [Fluid.of('minecraft:lava'),Fluid.of('kubejs:molten_desh')]).requiredBonks(8)
	event.recipes.createMechanicalExtruderExtruding(MC('calcite'), [Fluid.of('minecraft:lava'),Fluid.of('minecraft:water')]).withCatalyst('chipped:polished_calcite').requiredBonks(8)
	event.recipes.createMechanicalExtruderExtruding(MC('diorite'), [Fluid.of('minecraft:lava'),Fluid.of('minecraft:water')]).withCatalyst('minecraft:polished_diorite').requiredBonks(4)
	event.recipes.createMechanicalExtruderExtruding(MC('cobblestone'), [Fluid.of('minecraft:lava'),Fluid.of('minecraft:water')]).requiredBonks(4)

	let t = KJ('incomplete_ender_mechanism')
	event.recipes.createSequencedAssembly([
		KJ('ender_mechanism'),
	], KJ('explosive_mechanism'), [
		event.recipes.createDeploying(t, [t, KJ("coal_ring")]),
		event.recipes.createDeploying(t, [t, TE("enderium_gear")]),
		event.recipes.createDeploying(t, [t, TE("enderium_gear")]),
		event.recipes.createFilling(t, [t, Fluid.of(KJ("endstone_fluid"), 50)]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)

	event.recipes.createMixing([Fluid.of(KJ('endstone_fluid'), 25), Fluid.of(TC('molten_enderium'), 270)],
		[Fluid.of(TC('molten_enderium'), 270), MC("cobblestone")]).heated()

	event.recipes.gearboxMechanizing(TE("enderium_gear"), TE("enderium_ingot"))
	event.recipes.gearboxMechanizing(AE2("printed_silicon"), AE2("silicon"))
	event.recipes.gearboxMechanizing(KJ("coal_ring"), BC("cast_iron_ingot"))

	event.recipes.gearboxPyroprocessing(TE('enderium_ingot'), AE2('ender_dust'))

	event.replaceInput({id: "create:compat/ae2/milling/ender_pearl"}, MC("ender_pearl"), ED("ender_shard"))

	event.shaped(WT('warp_dust'), [
		'SCP',
		'   ',
		'   '
	], {
		C: MC('purple_dye'),
		P: KJ('ender_mechanism'),
		S: MC('ender_pearl')
	})

	event.shaped(WT('warp_stone'), [
		'PSP',
		'SCS',
		'PSP'
	], {
		C: KJ('ender_mechanism'),
		P: MC('purple_dye'),
		S: MC('ender_pearl')
	})

	event.custom({

		"type": "farmersdelight:cutting",
		"ingredients": [
			{
			"item": "minecraft:ender_pearl"
			}
		],
		"tool": {
			"tag": "forge:tools/knives"
		},
		"result": [
			{
			"item": "endersdelight:ender_shard",
			"count": 2
			}
		]

	})

	event.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
		{
			"item": "thermal:enderium_ingot"
		}
		],
		"results": [
		{
			"fluid": "tconstruct:molten_enderium",
			"amount": 90
		}
		],
		"processingTime": 180,
		"heatRequirement": "heated"
	})
}

function invarChapter(event){

	event.recipes.createMilling((TE('iron_dust')) , MC("iron_ingot"))
	event.recipes.createCrushing((TE('iron_dust')) , MC("iron_ingot"))
	event.recipes.createMixing(Item.of(KJ('smoke_mote'), 2), [KJ("mica_sheet"), Fluid.of(KJ("plastic"), 125)])

	let t = KJ('incomplete_high_power_mechanism')
	event.recipes.createSequencedAssembly([
		KJ('high_power_mechanism'),
	], KJ('power_mechanism'), [
		event.recipes.createDeploying(t, [t, KJ("faraday_cage")]),
		event.recipes.createDeploying(t, [t, KJ("golden_tube")]),
		event.recipes.createDeploying(t, [t, KJ("high_power_coil")]),
		event.recipes.createDeploying(t, [t, KJ("smoke_mote")]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)

	event.recipes.createPressing([TE('invar_plate')], TE('invar_ingot'))

	let invar_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('brass_template'), KJ('invar_machine'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: KJ('invar_machine'), B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), KJ('invar_machine'))
	}

	event.replaceInput({ type: "minecraft:crafting_shaped", id: /ae2:.*/ }, F("#ingots/iron"), TE("lead_plate"))

	invar_machine(TE('dynamo_compression'), 1, TE('rf_coil'))
	invar_machine(TE('machine_furnace'), 1, 'alloyed:steel_ingot')
	invar_machine(TE('machine_chiller'), 1, MC('blue_ice'))
	invar_machine(TE('machine_pyrolyzer'), 1, MC('blaze_rod'))
	invar_machine(TE('machine_bottler'), 1, CR('spout'))
	invar_machine(TE('machine_centrifuge'), 1, MC('compass'))
	invar_machine(TE('machine_refinery'), 1, '#forge:glass')
	invar_machine(TE('machine_pulverizer'), 1, CR('millstone'))
	invar_machine(TE('machine_smelter'), 1, MC('blast_furnace'))
	invar_machine(TE('machine_sawmill'), 1, CR('mechanical_saw'))
	invar_machine(TE('machine_brewer'), 1, MC('brewing_stand'))
	invar_machine(TE('machine_insolator'), 1, FD('rich_soil'))
	invar_machine(TE('machine_crystallizer'), 1, AE2('certus_quartz_crystal'))
	invar_machine(TE('machine_crafter'), 1, MC('crafting_table'))

	invar_machine(TE('flux_saw'), 1, TE('saw_blade'))
	invar_machine(TE('flux_drill'), 1, TE('drill_head'))
	invar_machine(TE('flux_capacitor'), 1, 'createaddition:modular_accumulator')
	invar_machine(TE('flux_magnet'), 1, 'ae2wtlib:magnet_card')
	invar_machine(TE('fluid_reservoir'), 1, SP('jar'))

	event.stonecutting(KJ('pipe_module_tier_3', 4), KJ('invar_machine'))
	event.stonecutting(KJ('pipe_module_tier_2', 4), KJ('enderium_machine'))

	event.recipes.createDeploying(KJ('high_power_coil'), [KJ('inductor'), KJ('invar_core')])

	event.custom({
		"type": "tconstruct:casting_table",
		"cast": { "item": TC("ingot_cast") },
		"cast_consumed": false,
		"fluid": { "tag": "tconstruct:molten_nickel", "amount": 90 },
		"result": { "item": KJ("nickel_compound") },
		"cooling_time": 150
	})

	event.custom({
		"type":"createaddition:charging",
		"input": {
			"item": "thermal:invar_ingot",
			"count": 1
		},
		"result": {
			"item": "kubejs:invar_core",
			"count": 1
		},
		"energy": 15000
	})

	event.custom({
		"type":"createaddition:rolling",
		"input": {
			"item": "thermal:invar_plate"
		},
		"result": {
			"item": "kubejs:faraday_cage",
			"count": 1
		}
	})
}

function gearboxrecipes(event){
	event.recipes.gearboxPyroprocessing(FD("fried_egg"), F("#eggs"))
	event.recipes.gearboxPyroprocessing(MC("brick"), MC("clay_ball"))
	event.recipes.gearboxPyroprocessing(AE2("quartz_glass"), AE2("certus_quartz_dust"))
	event.recipes.rubberworksCompressing([TE("sulfur_dust", 3), TE("tar", 2)], Fluid.of(GB("lpg"), 250)).heated()

  const TYPES = ["railway", "copper", "andesite", "brass", "weathered_iron", "refined_radiance", "shadow_steel", "industrial_iron"]
  const TYPE_BLOCK = { weathered_iron: "create:weathered_iron_block",industrial_iron: "create:industrial_iron_block"}
  const MACHINES = [
    { base_name: "encased_chain_drive",         create_name: "encased_chain_drive" },
    { base_name: "adjustable_chain_gearshift",  create_name: "adjustable_chain_gearshift" },
    { base_name: "chain_conveyor",              create_name: "chain_conveyor" },
    { base_name: "gearbox",                     create_name: "gearbox" },
    { base_name: "vertical_gearbox",            create_name: "vertical_gearbox" },
    { base_name: "cogwheel",                    create_name: "cogwheel" },
    { base_name: "mixer",                       create_name: "mechanical_mixer" },
    { base_name: "press",                       create_name: "mechanical_press" },
    { base_name: "depot",                       create_name: "depot" },
    { base_name: "gearshift",                   create_name: "gearshift" },
    { base_name: "clutch",                      create_name: "clutch" },
    { base_name: "deployer",                    create_name: "deployer" },
    { base_name: "portable_storage_interface",  create_name: "portable_storage_interface" },
    { base_name: "encased_fan",                 create_name: "encased_fan" },
    { base_name: "mechanical_harvester",        create_name: "mechanical_harvester" },
    { base_name: "mechanical_saw",              create_name: "mechanical_saw" },
    { base_name: "mechanical_drill",            create_name: "mechanical_drill" },
    { base_name: "mechanical_plough",           create_name: "mechanical_plough" },
    { base_name: "mechanical_roller",           create_name: "mechanical_roller" }]

  function getTypeIngredient(type) {
    return TYPE_BLOCK[type] || `create:${type}_casing`}
  for (let type of TYPES) {
    event.remove({ output: `createcasing:vertical_${type}_gearbox` })
    for (let machine of MACHINES) {
      let out = `createcasing:${type}_${machine.base_name}`
      console.log("Processando: " + out)
      let outputItem = Item.of(out)
      if (!outputItem.isEmpty()) {
        event.remove({ output: out })
        event.shaped(outputItem, ["BS"], {
          B: `create:${machine.create_name}`,
          S: getTypeIngredient(type)
        }).id(`kubejs:createcasing_swap/${type}/${machine.base_name}`)
      } else { console.log("Item não encontrado: " + out)}}}
}

function trainMachine(event){
	event.recipes.gearboxPyroprocessing(MC("crying_obsidian"), MC("obsidian")).heated().processingTime(100)
	event.recipes.createMilling([Item.of(CR("powdered_obsidian")).withChance(1), Item.of(MC("obsidian")).withChance(0.9)], MC("crying_obsidian"))

	event.shaped(KJ('train_mechanism'), [
		' S ',
		'CBE',
		' S '
	], {
		C: KJ('pressure_mechanism'),
		S: CR('sturdy_sheet'),
		E: KJ('rotation_mechanism'),
		B: CR('brass_ingot')
	})

	donutCraft(event, KJ('train_machine'), CR('railway_casing'), KJ('train_mechanism'))
	donutCraft(event, KJ('invar_machine'), KJ('invar_casing'), KJ('high_power_mechanism'))

}

function zincMachine(event) {

	let train_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('rotation_template'), 'kubejs:train_machine', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:train_machine', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'kubejs:train_machine')
	}

	train_machine(CR('track_station'), 2, MC('compass'))
	train_machine(CR('track_signal'), 4, MC('redstone_torch'))
	train_machine(CR('track_observer'), 4, MC('observer'))
	train_machine(CR('controls'), 1, CR('analog_lever'))

}

function oilComplex(event){
	
}

function explosiveMachine(event){

	event.recipes.createMixing([MC('dirt', 12)], [Fluid.of(MC('water')), MC('sand', 4), MC('clay_ball', 4), MC('gravel', 4)])

    event.shaped(GB('electrolyzer'), [
		'SSS',
		'SMW',
		'C Z'
	], {
		C: MC('copper_ingot'),
		Z: CR('zinc_ingot'),
		M: CR('mechanical_mixer'),
		S: ('alloyed:steel_sheet'),
        W: 'create:copper_sheet'
	})

	event.shaped(GB('pumpjack_well'), [
		'SCS',
		'SCB',
		'SAS'
	], {
		C: CR('chute'),
		B: CR('fluid_pipe'),
		A: TE('drill_head'),
		S: ('alloyed:steel_ingot')
	})

	event.shaped(GB('pumpjack_arm'), [
		'SRB',
		'SCB',
		'SA '
	], {
		C: CR('shaft'),
		B: ('alloyed:steel_block'),
		A: AL('steel_scaffolding'),
		R: ('alloyed:steel_bars'),
		S: MC('chain')
	})

	event.shaped(GB('pumpjack_crank'), [
		' R ',
		'SA ',
		' A '
	], {
		R: AL('steel_scaffolding'),
		A: ('alloyed:steel_block'),
		S: CR('shaft')
	})



	event.custom({
		"type": "createbigcannons:melting",
		"ingredients": [
		{
			"item": "create:crushed_raw_aluminum"
		}
		],
		"results": [
		{
			"fluid": "tconstruct:molten_aluminum",
			"amount": 60
		},
		],
		"processingTime": 180,
		"heatRequirement": "heated"
	})

}

function chocolate(event){
	let t = KJ('incomplete_candy_mechanism')
	event.recipes.createSequencedAssembly([
		KJ('candy_mechanism'),
	], KJ('explosive_mechanism'), [
		event.recipes.createDeploying(t, [t, 'create_confectionery:gingerbread']),
		event.recipes.createFilling(t, [t, Fluid.of(CR('chocolate'), 500)]),
		event.recipes.createFilling(t, [t, Fluid.of("create_confectionery:ruby_chocolate",  50)]),
		event.recipes.createFilling(t, [t, Fluid.of("create_confectionery:black_chocolate",200)]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)
	event.recipes.createMixing(Fluid.of("create_confectionery:ruby_chocolate", 250), [Fluid.of(MC('milk'), 250), MC('sugar'), CR('polished_rose_quartz'), MC('cocoa_beans')])

	t = KJ('incomplete_inductor')
	event.recipes.createSequencedAssembly([
		KJ('dirt_inductor'),
	], KJ('inductor_core'), [
		event.recipes.createDeploying(t, [t, "createaddition:copper_wire"]),
		event.recipes.createDeploying(t, [t, KJ('plastic')]),
		event.recipes.createDeploying(t, [t, "createaddition:copper_wire"]),
		event.recipes.createDeploying(t, [t, KJ('plastic')]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:inductor')

	t = KJ('incomplete_resistor')
	event.recipes.createSequencedAssembly([
		KJ('dirt_resistor'),
	], KJ('plastic'), [
		event.recipes.createDeploying(t, [t, KJ('carbon_sheet')]),
		event.recipes.createDeploying(t, [t, KJ('carbon_sheet')]),
		event.recipes.createDeploying(t, [t, MC('clay_ball')]),
		event.recipes.createDeploying(t, [t, "createaddition:copper_rod"]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:resistor_assembly')

	t = KJ('incomplete_electrolytic_capacitor')
	event.recipes.createSequencedAssembly([
		KJ('dirt_electrolytic_capacitor'),
	], KJ('rough_sheet'), [
		event.recipes.createFilling  (t, [t, Fluid.of(MC('water'), 500)]),
		event.recipes.createFilling  (t, [t, Fluid.of(KJ('electrolyte'), 200)]),
		event.recipes.createDeploying(t, [t, CR('copper_sheet')]),
		event.recipes.createDeploying(t, [t, "createaddition:copper_rod"]),
		event.recipes.createDeploying(t, [t, KJ('plastic')]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:electrolytic_capacitor_assembly')

	t = KJ('incomplete_ceramic_capacitor')
	event.recipes.createSequencedAssembly([
		KJ('dirt_ceramic_capacitor'),
	], KJ('ceramic_powder'), [
		event.recipes.createPressing(t, t),
		event.recipes.createDeploying(t, [t, CR('copper_sheet')]),
		event.recipes.createDeploying(t, [t, KJ('mica_sheet')]),
		event.recipes.createDeploying(t, [t, CR('copper_sheet')]),
		event.recipes.createDeploying(t, [t, KJ('ceramic_powder')]),
		event.recipes.createDeploying(t, [t, "createaddition:copper_rod"]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:resistor')
}

function invarMachine(event) {
	event.custom({
		"type":"createaddition:charging",
		"input": {
			"item": "createbigcannons:cast_iron_ingot",
			"count": 1
		},
		"result": {
			"item": "kubejs:inductor_core",
			"count": 1
		},
		"energy": 10000
	})

	event.custom({
		"type":"createaddition:charging",
		"input": {
			"item": "kubejs:soaked_sheet",
			"count": 1
		},
		"result": {
			"item": "kubejs:rough_sheet",
			"count": 1
		},
		"energy": 4000
	})

	event.replaceInput({output: "createaddition:copper_wire"}, '#forge:plates/copper', "createaddition:copper_rod")
	event.recipes.createMilling(KJ('ceramic_powder'), MC('brick')).processingTime(50)
	event.recipes.createCrushing([Item.of(MC('clay_ball')).withChance(1),Item.of(CR('copper_nugget')).withChance(0.65),Item.of(CR('copper_nugget')).withChance(0.5)], MC("dripstone_block"))
	event.recipes.createCutting(KJ('mica_sheet', 3), KJ('mica_block'))
	event.recipes.createMixing([Fluid.of(KJ('electrolyte'), 1000), 'ad_astra:desh_ingot'], [TE('sulfur_dust'), "ad_astra:desh_ingot", Fluid.of(MC('water'), 1000)])
	event.recipes.createMixing([Fluid.of(KJ('plastic'), 100), 'ad_astra:desh_ingot'], ["ad_astra:desh_ingot", Fluid.of(KJ('heavy_oil'), 100)]).heated()
	event.recipes.createPressing(KJ('carbon_sheet'), MC('charcoal'))
	event.recipes.createCompacting(KJ('carbon_sheet'), MC('coal', 2))
	event.recipes.createFilling(KJ('soaked_sheet'), [CR('copper_sheet'), Fluid.of(KJ('electrolyte'), 100)])
	event.shapeless(TE('machine_frame'), KJ('power_machine'))

	event.recipes.createMixing([KJ('resistor'), Fluid.of(KJ('dirt_water'), 110)], [KJ('dirt_resistor'), Fluid.of(MC('water'), 100)])
	event.recipes.createMixing([KJ('ceramic_capacitor'), Fluid.of(KJ('dirt_water'), 110)], [KJ('dirt_ceramic_capacitor'), Fluid.of(MC('water'), 100)])
	event.recipes.createMixing([KJ('electrolytic_capacitor'), Fluid.of(KJ('dirt_water'), 110)], [KJ('dirt_electrolytic_capacitor'), Fluid.of(MC('water'), 100)])
	event.recipes.createMixing([KJ('inductor'), Fluid.of(KJ('dirt_water'), 110)], [KJ('dirt_inductor'), Fluid.of(MC('water'), 100)])

	let t = KJ('incomplete_power_mechanism')
	event.recipes.createSequencedAssembly([
		KJ('power_mechanism'),
	], KJ('explosive_mechanism'), [
		event.recipes.createDeploying(t, [t, CR('copper_sheet')]),
		event.recipes.createDeploying(t, [t, KJ('electrolytic_capacitor')]),
		event.recipes.createDeploying(t, [t, KJ('ceramic_capacitor')]),
		event.recipes.createDeploying(t, [t, KJ('resistor')]),
		event.recipes.createDeploying(t, [t, KJ('inductor')]),
		event.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:power_mechanism')

	event.shaped(KJ('soldering_iron'), [
		' PW',
		' IP',
		'I  '
	], {
		P: KJ('plastic'),
		I: MC('iron_ingot'),
		W: "createaddition:copper_wire"
	})

	event.shaped(KJ('power_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: KJ('fluix_casing'),
		S: KJ('power_mechanism')
	})

	event.replaceInput({id: "createaddition:crafting/modular_accumulator"}, "createaddition:capacitor", KJ('electrolytic_capacitor'))
	event.replaceInput({input: "createaddition:capacitor"}, "createaddition:capacitor", KJ('ceramic_capacitor') )
	event.replaceInput({}, Fluid.of(TC('molten_steel')), Fluid.of(BC('molten_steel')))
	event.replaceInput({}, TE('steel_plate'), AL('steel_sheet'))
	event.replaceInput({}, AD('steel_plate'), AL('steel_sheet'))

	event.recipes.createMechanicalCrafting("createaddition:electric_motor", [
		' BIB ',
		'BSPSB',
		' BSB '
	], {
		S:"createaddition:copper_spool",
		B:CR('brass_sheet'),
		P:KJ('power_machine'),
		I:"createaddition:iron_rod"
	})

	event.recipes.createMechanicalCrafting("createaddition:alternator", [
		' BIB ',
		'BSPSB',
		' BSB '
	], {
		S:"createaddition:copper_spool",
		B:BC('cast_iron_ingot'),
		P:KJ('power_machine'),
		I:"createaddition:iron_rod"
	})
}

function fluixMachine(event) {
	let fluix_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), KJ('brass_template'), KJ('power_machine'), other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: KJ('power_machine'), B: other_ingredient })
		}
	}

	fluix_machine(AE2('formation_core'), 4, AE2("logic_processor"))
	fluix_machine(AE2('annihilation_core'), 4, AE2("calculation_processor"))
	fluix_machine(AE2('blank_pattern'), 16, AE2("fluix_crystal"))

	event.recipes.thermal.smelter(("projectred_core:red_iron_comp"), [MC("iron_ingot"), MC("redstone")]).energy(1500)
	event.recipes.gearboxPyroprocessing(("projectred_core:red_ingot"), ("projectred_core:red_iron_comp"))

	event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, MC("redstone"), KJ('calculation_mechanism'))
	event.replaceInput({ id: AE2("network/cells/storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dusts/redstone'))
	event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, MC("green_dye"), KJ('calculation_mechanism'))
	event.replaceInput({ id: AE2("network/cells/fluid_storage_components_cell_1k_part") }, AE2("logic_processor"), F('#dyes/green'))
	event.replaceInput({ id: AE2("network/cells/spatial_components") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
	event.replaceInput({ id: AE2("network/cells/spatial_components") }, AE2("engineering_processor"), F('#dusts/glowstone'))
	event.replaceInput({ id: AE2("network/crafting/patterns_blank") }, MC("glowstone_dust"), KJ('calculation_mechanism'))
	event.recipes.thermal.smelter(AE2("fluix_crystal", 2), [MC("quartz"), AE2("charged_certus_quartz_crystal"), MC("redstone")]).energy(4000)

	event.recipes.createMixing([Fluid.of(KJ('sif4'), 100), AD('desh_ingot')], [TE('apatite'), AD('desh_ingot')])
	event.recipes.createMixing(Fluid.of(KJ('sif2'), 200), [Fluid.of(KJ('sif4'), 100), AE2('certus_quartz_dust'), KJ('metallurgic_silicon')])
	event.recipes.createMixing(KJ('silicon_compound'), [MC('sand'), TE('coal_coke')])
	event.recipes.gearboxPyroprocessing(KJ('metallurgic_silicon'), KJ("silicon_compound"))

}

function enderMachine(event) {
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "tag": "forge:coins/silver" },
		"result": {
			"fluid": "tconstruct:molten_silver",
			"amount": 10
		},
		"temperature": 790,
		"time": 40
	})

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": { "tag": "forge:coins/gold" },
		"result": {
			"fluid": "tconstruct:molten_gold",
			"amount": 10
		},
		"temperature": 790,
		"time": 40
	})
}

function circuits(event) {
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": MC('redstone')
		},
		"result": {
			"fluid": TE('redstone'),
			"amount": 100
		},
		"temperature": 300,
		"time": 10
	});

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": MC('redstone_block')
		},
		"result": {
			"fluid": TE('redstone'),
			"amount": 900
		},
		"temperature": 500,
		"time": 90
	});

	event.recipes.thermal.crucible(Fluid.of(TC("molten_diamond"), 90), MC("diamond")).energy(10000)
}

function madMaths(event) {
	let meltOrCrucible = (id, out, outAmount) => {
		event.recipes.thermal.crucible(Fluid.of(out, outAmount), [id]).energy(20)
		event.custom({
			"type": "tconstruct:melting",
			"ingredient": { "item": id },
			"result": {
				"fluid": out,
				"amount": outAmount
			},
			"temperature": 200,
			"time": 20
		})
	}

	meltOrCrucible(KJ("plastic"), KJ("plastic"), 90)
}

function trading(event) {
	let trade = (card_id, ingredient, output) => {
		event.recipes.thermal.press(output, [ingredient, card_id]).energy(1000)
	}

	global.trades.forEach(element => {
		if (global.transactions[element])
			global.transactions[element].forEach(transaction => {
				console.log(element)
				trade(KJ('trade_card_' + element), transaction.in, transaction.out)
			})
	});

	global.professions.forEach(element => {
		if (global.transactions[element])
			global.transactions[element].forEach(transaction => {
				console.log(transaction.in)
				trade(KJ('profession_card_' + element), transaction.in, transaction.out)
			})
	});
}
