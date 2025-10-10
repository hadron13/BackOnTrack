// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let GB = (id, x) => MOD("gearbox", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let ES = (id, x) => MOD("enderstorage", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) =>MOD("biomesoplenty", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x) 
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let WT = (id, x) =>  MOD("waystones", id, x)
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
//

ServerEvents.recipes((bot) => {

	// let stone = Item.of(MC("cobblestone"), 1).withChance(.5)

	// bot.recipes.createMixing(Fluid.of(MC('molten_nickel'), 90), [Fluid.of(TC('molten_copper'), 90), Fluid.of(TC('molten_iron'), 90)]).processingTime(1)

	// bot.recipes.createCrushing([Item.of(TE("sapphire"), 2), Item.of(TE("sapphire"), 1).withChance(.25), stone], TE("sapphire_ore"))
	// bot.recipes.createCrushing([Item.of(TE("ruby"), 2), Item.of(TE("ruby"), 1).withChance(.25), stone], TE("ruby_ore"))

	// bot.recipes.createMilling(['4x ' + MC('redstone')], TE('cinnabar')).processingTime(700)
	// bot.recipes.createCrushing(['6x ' + MC('redstone')], TE('cinnabar')).processingTime(500)
	// bot.recipes.thermal.pulverizer(['8x ' + MC('redstone')], TE('cinnabar')).energy(10000)

	// bot.recipes.createMilling([TE('sulfur_dust')], TE('sulfur')).processingTime(500)
	// bot.recipes.createMilling([TE('niter_dust')], TE('niter')).processingTime(500)
	// bot.recipes.createMilling([TE('apatite_dust')], TE('apatite')).processingTime(500)


	// bot.campfireCooking(MC('iron_nugget', 3), MC('raw_iron'))
	// bot.campfireCooking(CR('zinc_nugget', 3), CR('raw_zinc'))
	// bot.campfireCooking(CR('copper_nugget', 3), MC('raw_copper'))

	// let remove_smelts = (tag) =>{
    //     bot.remove({ input: tag, type: TE("smelter") })
    //     bot.remove({ input: tag, type: TE("pulverizer") })
    //     bot.remove({ input: tag, type: MC("blasting") })
    //     bot.remove({ input: tag, type: MC("smelting") })
    //     bot.remove({ input: tag, type: CR("crushing") })
    //     bot.remove({ input: tag, type: CR("milling") })
	// }

    // let dust_process = (name, ingot, nugget, dust, ore_raw, ore_block, byproduct, fluid_byproduct_name) => {
	// 	let fluid = TC("molten_" + name)
	// 	let fluid_byproduct = TC("molten_" + fluid_byproduct_name)
	// 	let crushed = CR('crushed_raw_' + name)
	// 	let deepslate_ore = ore_block.replace(":", ":deepslate_")

	// 	bot.remove({ id: TC('smeltery/melting/metal/' + name + '/raw') })
	// 	bot.remove({ id: TC('smeltery/melting/metal/' + name + '/raw_block') })
	// 	bot.remove({ input: ore_raw, type: TC("melting") })

	// 	remove_smelts("#forge:ores/" + name)
	// 	remove_smelts("#forge:raw_materials/" + name)
	// 	remove_smelts("#forge:storage_blocks/raw_" + name)

	// 	bot.recipes.gearboxPyroprocessing(Item.of(nugget, 3), ore_raw)
	// 	bot.recipes.gearboxPyroprocessing(Item.of(nugget, 6), crushed)
	// 	bot.recipes.gearboxPyroprocessing(Item.of(ingot, 1), dust)


	// 	bot.recipes.createMilling([Item.of(crushed, 1), stone], ore_block)
	// 	bot.recipes.createMilling([Item.of(crushed, 1), stone], deepslate_ore)
	// 	bot.recipes.createMilling([Item.of(dust, 1),Item.of(dust, 1).withChance(0.2)], ore_raw)
	// 	bot.recipes.createMilling([Item.of(dust, 1), Item.of(dust, 1).withChance(0.5)], crushed)

	// 	bot.recipes.createMilling([Item.of(dust, 1), Item.of(dust, 1).withChance(0.5)], crushed)

	// 	bot.recipes.createCrushing([Item.of(crushed, 2), CR('experience_nugget', 2), MC('cobblestone')], ore_raw)
	// 	bot.recipes.createCrushing([Item.of(dust, 1), Item.of(dust, 1).withChance(0.8)], crushed)

	// 	bot.recipes.thermal.pulverizer([Item.of(dust, 3)], ore_raw).energy(15000)
	// 	bot.recipes.thermal.pulverizer([Item.of(dust, 3)], crushed).energy(10000)
	// 	bot.recipes.thermal.pulverizer([Item.of(dust, 3)], ore_block).energy(3000)
	// 	bot.recipes.thermal.pulverizer([Item.of(dust, 3)], deepslate_ore).energy(6000)

	// 	bot.recipes.thermal.crucible(Fluid.of(fluid, 90), ingot).energy(2000)
	// 	bot.recipes.thermal.crucible(Fluid.of(fluid, 90), dust).energy(3000)

	// 	bot.recipes.createSplashing([Item.of(nugget, 9)], dust)

	// 	bot.custom({
	// 		"type": "thermal:smelter",
	// 		"ingredient": {
	// 			"item": ore_raw
	// 		},
	// 		"result": [
	// 			{
	// 				"item": nugget,
	// 				"chance": 9.0
	// 			},
	// 			{
	// 				"item": byproduct,
	// 				"chance": (byproduct.endsWith('nugget') ? 1.8 : 0.2)
	// 			},
	// 			{
	// 				"item": "thermal:rich_slag",
	// 				"chance": 0.2
	// 			}
	// 		],
	// 		"experience": 0.2,
	// 		"energy": 20000
	// 	})
    // }

    // dust_process('nickel', 	TE('nickel_ingot'), TE('nickel_nugget'), TE('nickel_dust'), TE('raw_nickel'), TE('nickel_ore'),	 CR('copper_nugget'), 'copper')
    // dust_process('lead', 	TE('lead_ingot'), 	TE('lead_nugget'), 	 TE('lead_dust'), 	TE('raw_lead'),   TE('lead_ore'), 	 MC('iron_nugget'), 'iron')
    // dust_process('iron', 	MC('iron_ingot'), 	MC('iron_nugget'), 	 TE('iron_dust'), 	MC('raw_iron'),   MC('iron_ore'),	 TE('nickel_nugget'), 'nickel')
    // dust_process('gold', 	MC('gold_ingot'), 	MC('gold_nugget'), 	 TE('gold_dust'), 	MC('raw_gold'),   MC('gold_ore'),TE('cinnabar'), 'zinc')
    // dust_process('copper', 	MC('copper_ingot'), CR('copper_nugget'), TE('copper_dust'), MC('raw_copper'), MC('copper_ore'),  MC('gold_nugget'), 'gold')
    // dust_process('zinc', 	CR('zinc_ingot'), 	CR('zinc_nugget'), 	 KJ('zinc_dust'), 	CR('raw_zinc'),   CR('zinc_ore'), 	 TE('sulfur'), 'lead')

	// {
	// 	let name = 'cobalt'
	// 	let dust = KJ('cobalt_dust')
	// 	let ore_raw = TC('raw_cobalt')
	// 	let nugget = TC('cobalt_nugget')
	// 	let ingot = TC('cobalt_ingot')

	// 	let fluid = TC("molten_" + name)

	// 	bot.remove({ id: TC('smeltery/melting/metal/' + name + '/raw') })
	// 	bot.remove({ id: TC('smeltery/melting/metal/' + name + '/raw_block') })
	// 	bot.remove({ input: ore_raw, type: TC("melting") })

	// 	remove_smelts("#forge:ores/" + name)
	// 	remove_smelts("#forge:raw_materials/" + name)
	// 	remove_smelts("#forge:storage_blocks/raw_" + name)

	// 	bot.recipes.gearboxPyroprocessing(Item.of(nugget, 3), ore_raw)
	// 	bot.recipes.gearboxPyroprocessing(Item.of(ingot, 1), dust)

	// 	bot.recipes.createMilling([Item.of(dust, 1),Item.of(dust, 1).withChance(0.2)], ore_raw)

	// 	bot.recipes.thermal.pulverizer([Item.of(dust, 3)], ore_raw).energy(15000)

	// 	bot.recipes.thermal.crucible(Fluid.of(fluid, 90), ingot).energy(2000)
	// 	bot.recipes.thermal.crucible(Fluid.of(fluid, 90), dust).energy(3000)
	// }

	// {
	// 	let dust = TE('silver_dust')
	// 	let ore_raw = TE('raw_silver')
    // let crushed = CR('crushed_raw_silver')
	// 	bot.recipes.createCrushing([Item.of(crushed, 2), CR('experience_nugget', 2), MC('cobblestone')], ore_raw)
	// 	bot.recipes.createCrushing([Item.of(dust, 1), Item.of(dust, 1).withChance(0.8)], crushed)
	// 	bot.recipes.createMilling([Item.of(dust, 1),Item.of(dust, 1).withChance(0.2)], ore_raw)

	// 	bot.recipes.thermal.pulverizer([Item.of(dust, 6)], ore_raw).energy(15000)
	// }

	// {
	// 	let dust = TE('lead_dust')
	// 	let ore_raw = 'createnuclear:raw_lead'
    // let crushed = CR('crushed_raw_lead')
	// 	bot.recipes.createCrushing([Item.of(crushed, 2), CR('experience_nugget', 2), MC('cobblestone')], ore_raw)
	// 	bot.recipes.createCrushing([Item.of(dust, 1), Item.of(dust, 1).withChance(0.8)], crushed)

	// 	bot.recipes.createMilling([Item.of(dust, 1),Item.of(dust, 1).withChance(0.2)], ore_raw)

	// 	bot.recipes.thermal.pulverizer([Item.of(dust, 6)], ore_raw).energy(15000)
	// }

})