let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let CR = (id, x) => MOD("create", id, x)
let GB = (id, x) => MOD("gearbox", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let F = (id, x) =>  MOD("forge", id, x)

ServerEvents.recipes((bot) => {

	bot.recipes.createCompacting(KJ('rose_quartz_seed'),Fluid.of(TE('redstone'), 500) )

	bot.recipes.createDeploying(CR('electron_tube'), [KJ('empty_tube'), CR('polished_rose_quartz')])

  bot.recipes.createSplashing([Item.of(MC('gold_nugget', 2)).withChance(0.45)], 'minecraft:red_sand')

  bot.recipes.gearboxPyroprocessing(SP("ash"), MC("#logs"))
	bot.recipes.gearboxPyroprocessing(TC('coin_cast'), MC('gold_ingot'))

	bot.recipes.createFilling(KJ('golden_tube'), [KJ('empty_tube'), Fluid.of(TC('molten_gold'), 20)])
	bot.recipes.createFilling(KJ('empty_tube'), [MC('glass'), Fluid.of(TC('molten_iron'), 20)])

  bot.recipes.createMilling([KJ('diorite_dust')], MC('diorite')).processingTime(75)
	bot.recipes.createMilling([KJ('impure_sky_chunks')], AE2('sky_stone_block')).processingTime(75)
	bot.recipes.createMilling([AE2('sky_dust')], KJ('pure_sky_chunks')).processingTime(75)

	bot.recipes.createMixing(Fluid.of(TC("molten_obsidian"), 500), [AE2('sky_dust'), AE2('sky_dust'), Fluid.of(MC('water'), 500)])
	bot.recipes.createMixing([AE2('certus_quartz_crystal'), Fluid.of(TE("redstone"), 250)], [AE2('charged_certus_quartz_crystal'), Fluid.of(TC("molten_obsidian"), 250)])
	bot.recipes.createMixing([KJ('pure_sky_chunks')], [KJ('cut_sky_chunks'), Fluid.of(MC('water'), 250), KJ('diorite_dust')])
	bot.recipes.createMixing(Fluid.of(KJ('ash_water'), 500), [Item.of(SP('ash'), 1), Fluid.of(MC('water'), 500)])
	bot.recipes.createMixing([KJ('clean_sky_chunks'), Fluid.of(KJ('dirt_water'), 50)], [KJ('impure_sky_chunks'), Fluid.of(KJ("ash_water"), 250)])
	bot.recipes.createMixing([Fluid.of(TC('magma'), 50)], [MC('iron_nugget'), MC('calcite'), Fluid.of(KJ("dirt_water"), 50)]).heated()

	bot.custom({
		"type": "tconstruct:casting_table",
		"cast": { "item": TC("coin_cast") },
		"cast_consumed": false,
		"fluid": { "tag": "tconstruct:molten_gold", "amount": 20 },
		"result": { "item": KJ("gold_ring") },
		"cooling_time": 60
	})
	bot.custom({
		"type": "farmersdelight:cutting",
		"ingredients": [{ "item": "kubejs:clean_sky_chunks" }],
		"tool": { "tag": "forge:tools/knives" },
		"result": [{"item": "kubejs:cut_sky_chunks", "count": 1 }]})

  let t = CR('incomplete_precision_mechanism')
	bot.recipes.createSequencedAssembly([
		CR('precision_mechanism'),
	], KJ('rotation_mechanism'), [
		bot.recipes.createDeploying(t, [t, KJ('gold_ring')]),
		bot.recipes.createDeploying(t, [t, CR('electron_tube')]),
		bot.recipes.createDeploying(t, [t, CR('electron_tube')]),
		bot.recipes.createDeploying(t, [t, KJ('golden_tube')]),
		bot.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)
		.id('kubejs:precision_mechanism')

  let grow = (from, via, to) => {
		bot.recipes.createSequencedAssembly([to], from, [
			bot.recipes.createFilling(via, [via, Fluid.of(MC('water'), 500)]),
		]).transitionalItem(via)
			.loops(3)
			.id('kubejs:grow_' + to.split(':')[1])
	}

	let brass_machine = (id, amount, other_ingredient) => {
		bot.remove({ output: id })
		if (other_ingredient) {
			bot.smithing(Item.of(id, amount), KJ('brass_template'), 'kubejs:brass_machine', other_ingredient)
			bot.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:brass_machine', B: other_ingredient })
		}
		else
			bot.stonecutting(Item.of(id, amount), 'kubejs:brass_machine')
	}

  brass_machine('create:sequenced_gearshift', 2, CR('gearshift'))
	brass_machine('create:rotation_speed_controller', 1, CR('large_cogwheel'))
	brass_machine(CR('stockpile_switch'), 2, MC('chest'))
	brass_machine('create:content_observer', 2, MC('observer'))
	brass_machine('thermal:machine_press', 1, MC('dropper'))
	brass_machine(AE2('crystal_resonance_generator'), 1, MC('redstone'))
	brass_machine('torchmaster:feral_flare_lantern', 1, MC('glowstone_dust'))
	brass_machine(PP('pressurizer'), 1, CR('propeller'))
	brass_machine(CR('brass_funnel'), 4, TE('cured_rubber'))
	brass_machine(CR('brass_tunnel'), 4, MC('dried_kelp'))
	brass_machine(SS('advanced_magnet_upgrade'), 1)
	brass_machine(SB('advanced_magnet_upgrade'), 1)
	brass_machine(KJ('pipe_module_tier_1'), 4)
	brass_machine(SS('hopper_upgrade'), 1)
	brass_machine(SS('advanced_hopper_upgrade'), 1)
	brass_machine(CR('elevator_pulley'), 1, CR('rope_pulley'))
	brass_machine(AE2('growth_accelerator'), 1, KJ('candy_mechanism'))

	grow(KJ("rose_quartz_seed"), KJ('growing_rose_seed'), KJ('tiny_rose_crystal'))
	grow(KJ("tiny_rose_crystal"), KJ('growing_tiny_rose_crystal'), KJ('small_rose_crystal'))
	grow(KJ("small_rose_crystal"), KJ('growing_small_rose_crystal'), CR('polished_rose_quartz'))

  bot.smithing(PP('item_terminal'), KJ('brass_template'), 'toms_storage:ts.storage_terminal', KJ('brass_machine'))
	bot.smithing(CI('steel_fluid_tank'), KJ('brass_template'), CR('fluid_tank'), AL('steel_sheet'))

	bot.shapeless(CR('fluid_tank'), [CC('fluid_vessel')])
	bot.shapeless(CR('item_vault'), [CC('item_silo')])

	bot.shaped(KJ('brass_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {
		C: CR('brass_casing'),
		S: CR('precision_mechanism')
	})
	bot.shaped(CR('mechanical_crafter', 3), [
		' R ',
		'HTH',
		' M '
	], {M: KJ('brass_machine'), H: CR('brass_sheet'), R: CR('cogwheel'), T: MC('crafting_table')}) 

	bot.shaped(CR('mechanical_arm'), [
		'HHT',
		'H  ',
		'HMR'
	], {M: KJ('brass_machine'), H: CR('brass_sheet'), R: CR('cogwheel'), T: CR('brass_hand')})  



})