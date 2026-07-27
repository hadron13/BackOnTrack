let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let CR = (id, x) => MOD("create", id, x)
let GB = (id, x) => MOD("gearbox", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let RW = (id, x) =>  MOD("rubberworks", id, x)

ServerEvents.recipes((bot) => {
	bot.recipes.createMechanicalExtruderExtruding(MC('andesite'), [Fluid.of('minecraft:lava'),Fluid.of('minecraft:water')]).withCatalyst('minecraft:polished_andesite').requiredBonks(4)
	bot.recipes.createMechanicalExtruderExtruding(MC('granite'), [Fluid.of('minecraft:lava'),Fluid.of('minecraft:water')]).withCatalyst('minecraft:polished_granite').requiredBonks(4)

	bot.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, '#forge:plates/brass', CR('golden_sheet'))

	bot.smithing('toms_storage:ts.crafting_terminal', "kubejs:rotation_template",'toms_storage:ts.storage_terminal', MC('crafting_table'))

	bot.stonecutting(Item.of(GB('core_tube'), 3), CR('metal_girder')).id('gearbox:core_tube_manual')

	bot.recipes.createCutting(CR('shaft', 6), CR('andesite_alloy'))
	bot.recipes.createCutting(KJ('rotation_mechanism_base'), MC('#wooden_slabs'))

	bot.recipes.createMixing(Item.of(CR('andesite_alloy'), 2), [CR("zinc_nugget"), KJ("andesite_blend")])

	bot.recipes.createMilling([Item.of(MC('red_sand')).withChance(0.40), Item.of(KJ('asurine_bits')).withChance(0.60)], MC("granite"))
	bot.recipes.createMilling(Item.of(KJ('andesite_dust')), MC("andesite"))

	bot.recipes.createDeploying(CR('cogwheel', 4), [CR('shaft'), "#minecraft:planks"])

	bot.recipes.createSplashing([CR("zinc_nugget"), Item.of(CR("zinc_nugget")).withChance(0.5)], KJ('asurine_bits'))

	bot.recipes.gearboxPyroprocessing(KJ("andesite_blend"), MC("andesite"))

	let andesite_machine = (id, amount, other_ingredient) => {
	bot.remove({ output: id })
	if (other_ingredient) {
		bot.smithing(Item.of(id, amount), KJ('rotation_template'), GB('kinetic_machine'), other_ingredient)
		bot.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'gearbox:kinetic_machine', B: other_ingredient })
	}
	else
	bot.stonecutting(Item.of(id, amount), 'gearbox:kinetic_machine')
	}

		andesite_machine('create_mechanical_extruder:mechanical_extruder', 1, MC('piston'))
		andesite_machine(AE2('charger'), 1, CR('copper_sheet'))
		andesite_machine(CR('item_vault'), 3, CR('iron_sheet'))
		andesite_machine(CR('mechanical_roller'), 1, CR('crushing_wheel'))
		andesite_machine(CR('contraption_controls'), 1, MC('stone_button'))
		andesite_machine('toms_storage:ts.storage_terminal', 1, MC('diamond'))
		andesite_machine('toms_storage:ts.inventory_proxy', 1, F('#chests'))
		andesite_machine('toms_storage:ts.inventory_connector', 1, CR('andesite_funnel'))
		andesite_machine('toms_storage:ts.inventory_cable_connector', 1, CR('electron_tube'))
		andesite_machine('gearbox:brass_press', 1, CR('brass_block'))
		andesite_machine(CR('chain_conveyor'), 2, MC('chain'))
		andesite_machine(CR('andesite_funnel'), 4, RW('rubber_sheet'))
		andesite_machine(CR('andesite_tunnel'), 4, RW('rubber'))
		andesite_machine('toms_storage:ts.inventory_cable', 8, MC('redstone'))
		andesite_machine('create:portable_storage_interface', 2)
		andesite_machine('create:mechanical_harvester', 2)
		andesite_machine('create:mechanical_plough', 2)
		andesite_machine('kubejs:pipe_module_utility', 4)
		andesite_machine(GB('kiln'), 1, MC('blast_furnace'))

	let t = 'kubejs:incomplete_rotation_mechanism'
	bot.recipes.createSequencedAssembly([
	'kubejs:rotation_mechanism',
	], 'kubejs:rotation_mechanism_base', [
	bot.recipes.createDeploying(t, [t, CR('cogwheel')]),
	bot.recipes.createDeploying(t, [t, CR('large_cogwheel')]),
	bot.recipes.createDeploying(t, [t, CR('andesite_alloy')]),
	bot.recipes.createPressing(t, t)]).transitionalItem(t)
	.loops(1)
	.id('kubejs:rotation_mechanism')

	bot.smithing('toms_storage:ts.crafting_terminal', "kubejs:rotation_template",'toms_storage:ts.storage_terminal', MC('crafting_table'))
	bot.shapeless(KJ('rotation_mechanism'), [KJ('rotation_mechanism_base'), CR('cogwheel'), CR('andesite_alloy'), CR('large_cogwheel')]).id("kubejs:rotation_mechanism_manual_only")
	bot.shapeless(GB('kinetic_machine'), KJ('andesite_machine'))
	bot.shapeless(RW('sapper'), GB('sapper'))
	bot.shapeless(RW('compressor'), GB('compressor'))
	bot.shapeless(KJ('rotation_mechanism_base'), ['#cb_microblock:tools/saw', MC("#logs")]).damageIngredient(Item.of('cb_microblock:stone_saw')).damageIngredient(Item.of('cb_microblock:iron_saw')).damageIngredient(Item.of('cb_microblock:diamond_saw'))

  bot.shaped(RW('compressor'), [
		'   ',
		'CBE',
		'GGG'
	], {C: CR('andesite_alloy'), E: CR('fluid_pipe'), B: GB('kinetic_machine'), G: CR('industrial_iron_block')})
	bot.shaped(RW('sapper'), [
		' G ',
		'CBE',
		' S '
	], {C: TE('drill_head'), S: GB('kinetic_machine'), E: CR('fluid_pipe'), B: CR('cogwheel'), G: CR('andesite_alloy')})
  bot.shaped(CR('encased_fan'), [
		' I ',
		'AMA',
		' P '
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: CR('shaft'), P: CR('propeller')})
	bot.shaped(CR('deployer'), [
		' I ',
		'AMA',
		' P '
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: CR('piston_extension_pole'), P: CR('brass_hand')})
	bot.shaped(CR('mechanical_press'), [
		' I ',
		'AMA',
		' P '
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: CR('piston_extension_pole'), P: MC('iron_block')})
	bot.shaped(GB('core_drill'), [
		' I ',
		'PMP',
		'AAA'
	], {M: GB('kinetic_machine'), A: TE('drill_head'), I: CR('piston_extension_pole'), P: CR('shaft')})
	bot.shaped(CR('mechanical_mixer'), [
		' I ',
		'AMA',
		' P '
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: CR('cogwheel'), P: CR('whisk')})
	bot.shaped('sliceanddice:slicer', [
		' I ',
		'AMA',
		' P '
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: CR('cogwheel'), P: CR('turntable')})
	bot.shaped(CR('mechanical_drill'), [
		' I ',
		'AMA',
		' P '
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: CR('shaft'), P: TE('drill_head')})
	bot.shaped(CR('mechanical_saw'), [
		' I ',
		'AMA',
		' P '
	], {M: GB('kinetic_machine'), A: CR('andesite_alloy'), I: CR('shaft'), P: TE('saw_blade')})
  bot.shaped(TE('saw_blade'), [
		'NPN',
		'PLP',
		'NPN'
	], {N: MC('iron_nugget'), P: CR('iron_sheet'), L: TE('lead_ingot')})
  bot.shaped(TE('drill_head'), [
		'NN ',
		'NLP',
		' PL'
	], {N: MC('iron_nugget'), P: CR('iron_sheet'), L: TE('lead_ingot')})
	bot.shaped(GB('kinetic_machine'), [
		'SSS',
		'SCS',
		'SSS'
	], {C: CR('andesite_casing'), S: KJ('rotation_mechanism')})
  bot.shaped(Item.of(MC('andesite'), 2), [
		'SA',
		'AS'
	], {A: MC('tuff'), S: MC('cobblestone')})
	bot.shaped(Item.of(KJ('andesite_blend'), 2), [
		'SA',
		'AS'
	], {A: MC('clay_ball'), S: MC('andesite')})
	bot.shaped(Item.of(CR('andesite_alloy'), 2), [
		'SA',
		'AS'
	], {A: KJ('andesite_blend'), S: CR('zinc_nugget')})

})