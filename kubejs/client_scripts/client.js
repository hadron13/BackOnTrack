// priority: 0
onEvent('jei.hide.items', event => {
	event.hide('ae2:facade')
	event.hide('thermal:cinnabar_dust')

	let hide_metal = (mod, type) =>{
		event.hide(mod+':'+type+'_ingot')
		event.hide(mod+':'+type+'_nugget')
		event.hide(mod+':'+type+'_block')
	}
	hide_metal('thermal', 'steel')
	hide_metal('thermal', 'tin')
	hide_metal('thermal', 'bronze')
    hide_metal('thermal', 'electrum')
	hide_metal('createdeco', 'cast_iron')
	hide_metal('createindustry', 'cast_iron')
	hide_metal('davebuildingmod', 'steel')
	hide_metal('beyond_earth', 'steel')

	let hide_ores = (mod, type) =>{
		event.hide(mod+':'+type+'_ore')
		event.hide(mod+':'+'deepslate_'+type+'_ore')
		event.hide(mod+':'+'raw_'+type)
		event.hide(mod+':'+'raw_'+type+'_block')
		event.hide('create:crushed_raw_'+type)
	}
	hide_ores('thermal', 'tin')
	hide_ores('thermal', 'silver')
	hide_ores('occultism', 'silver')

    let hide_thermal_set = (type) => {
        event.hide('thermal:'+type+'_gear')
        event.hide('thermal:'+type+'_plate')
        event.hide('thermal:'+type+'_dust')
    }
    hide_thermal_set('tin')
    hide_thermal_set('bronze')
    hide_thermal_set('electrum')

	event.hide('occultism:silver_ore_deepslate')

	event.hide('thermal:oil_sand')
	event.hide('thermal:oil_red_sand')

	event.hide('createindustry:steel_casing')
	event.hide('waterstrainer:string_mesh')
	event.hide('waterstrainer:iron_mesh')
	event.hide('waterstrainer:obsidian_mesh')
	event.hide('waterstrainer:strainer_survivalist_solid')
	event.hide('waterstrainer:strainer_survivalist_reinforced')
	event.hide('waterstrainer:strainer_fisherman_solid')

	event.hide('ae2:inscriber')
	event.hide('ae2:vibration_chamber')
	event.hide('ae2:quartz_growth_accelerator')

	event.hide('createindustry:coal_coke')
	event.hide('createindustry:saltpeter')
	event.hide('createindustry:steel_ingot')

	event.hide('beyond_earth:iron_plate')
	event.hide('beyond_earth:compressed_steel')
	event.hide('beyond_earth:engine_fan')
	event.hide('beyond_earth:oxygen_tank')
	event.hide('beyond_earth:iron_stick')
	event.hide('beyond_earth:water_pump')
	event.hide('beyond_earth:compressor')
	event.hide('beyond_earth:coal_generator')
	event.hide('beyond_earth:nasa_workbench')
	event.hide('beyond_earth:fuel_refinery')
	event.hide('beyond_earth:oxygen_gear')
	event.hide('biomesoplenty:rose_quartz_shard')

	event.hide('create:crushed_raw_silver')

	event.hide('createdeco:andesite_door')
	event.hide('createdeco:copper_door')
	event.hide('createdeco:brass_door')
	event.hide('createdeco:locked_andesite_door')
	event.hide('createdeco:locked_copper_door')
	event.hide('createdeco:locked_brass_door')

	event.hide('createdeco:zinc_coin')
	event.hide('createdeco:copper_coin')
	event.hide('createdeco:brass_coin')
	event.hide('createdeco:iron_coin')
	event.hide('createdeco:gold_coin')
	event.hide('createdeco:cast_iron_coin')
	event.hide('createdeco:netherite_coin')
	event.hide('createdeco:zinc_coinstack')
	event.hide('createdeco:copper_coinstack')
	event.hide('createdeco:brass_coinstack')
	event.hide('createdeco:iron_coinstack')
	event.hide('createdeco:gold_coinstack')
	event.hide('createdeco:cast_iron_coinstack')
	event.hide('createdeco:netherite_coinstack')

	event.hide('#forge:coins')

	event.hide('thermal:iron_plate')
	event.hide('thermal:copper_plate')
	event.hide('thermal:gold_plate')
	event.hide('thermal:netherite_plate')

	// let coin_materials = ['zinc', 'copper', 'brass', 'iron', 'gold', 'cast_iron', 'netherite']
	// coin_materials.foreach(e => {
	// 	event.hide(`createdeco:${e}_coin`)
	// 	event.hide(`createdeco:${e}_coinstack`)
	// })

	event.hide('createindustry:sulfur_powder')
	event.hide('createindustry:saltpeter')

	event.hide('grapplemod:rocketupgradeitem')


	event.hide('createaddition:diamond_grit')
	event.hide('createaddition:capacitor')
	event.hide('createaddition:zinc_sheet')

	// event.hide('#forge:tools/pickaxes')
	event.hide('@trashcans')
	event.hide('@metalbarrels')
	event.hide('@pipez')
	event.hide('@toms_storage')
	event.hide('@itemfilters')
	//event.hide('@enderstorage')
	event.hide('@davebuildingmod')
	// event.hide('@')


})

onEvent('jei.subtypes', event => {
	// event.useNBT('advancedrocketry:planet_id_chip')
})

onEvent('jei.hide.fluids', event => {
	event.hide('beyond_earth:fuel')
})

onEvent('jei.add.items', event => {
	event.add('pipez:fluid_pipe')
	event.add('pipez:energy_pipe')

	event.add('toms_storage:ts.crafting_terminal')
	event.add('toms_storage:ts.storage_terminal')
	event.add('toms_storage:ts.inventory_connector')
	event.add('toms_storage:ts.inventory_cable')

	event.add('metalbarrels:wood_to_copper')
	event.add('metalbarrels:wood_to_iron')
	event.add('metalbarrels:wood_to_silver')
	event.add('metalbarrels:wood_to_gold')
	event.add('metalbarrels:wood_to_netherite')
	event.add('metalbarrels:copper_barrel')
	event.add('metalbarrels:iron_barrel')
	event.add('metalbarrels:silver_barrel')
	event.add('metalbarrels:gold_barrel')
	event.add('metalbarrels:netherite_barrel')

	event.add('thermal:apatite_ore')
	event.add('thermal:deepslate_apatite_ore')

	event.add('trashcans:item_trash_can')

	event.add('davebuildingmod:track_end')
	event.add('davebuildingmod:thomas_face')
	event.add('davebuildingmod:small_thomas_face')

	event.add('thermal:silver_coin')
	event.add('thermal:gold_coin')
})

onEvent('jei.remove.categories', event => {
})

onEvent('item.tooltip', tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} Slots`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7Main Assembly: ${stage == "4" ? "§6Finale" : "§6Chapter " + stage}`, '§8Consider automating this item'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7Secondary Assembly: §6Chapter ${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7Not consumed in the`, `§7Assembly Process`])
	let ore = (id, y1, y2) => tooltip.add(id, [`§o§7Y level §6${y1} §7to §6${y2}`])


	// tooltip.add("minecraft:redstone_ore", [`§7Does not generate, crush Cinnabar to obtain Redstone.`]);

	ore("forbidden_arcanus:arcane_crystal_ore", 1, 9)
	ore("forbidden_arcanus:xpetrified_ore", 1, 30)
	// ore("ae2:quartz_ore", 1, 30)
	ore("thermal:apatite_ore", -16, 96)
	ore("thermal:deepslate_apatite_ore", -16, 96)

	ore("thermal:cinnabar_ore", -59, 10)
	ore("thermal:deepslate_cinnabar_ore", -59, 10)

	ore("thermal:niter_ore", -26, 20)
	ore("thermal:deepslate_niter_ore", -26, 20)

	ore("thermal:nickel_ore", -40, 20)
	ore("thermal:deepslate_nickel_ore", -40, 20)
	ore("thermal:lead_ore", -60, 10)
	ore("thermal:deepslate_lead_ore", -60, 10)
	ore("thermal:sulfur_ore", -16, 32)
	ore("thermal:deepslate_sulfur_ore", -16, 32)
	//ore("create:zinc_ore", 15, 70)
	//ore("create:copper_ore", 40, 85)

	//ore("minecraft:coal_ore", 1, 128)
	//ore("minecraft:iron_ore", 1, 64)
	//ore("minecraft:lapis_ore", 1, 32)
	//ore("minecraft:gold_ore", 1, 32)
	//ore("minecraft:diamond_ore", 1, 16)



	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)
	holds('netherite', 15*9)

	main_assembly('kubejs:rotation_mechanism', "1")
	bonus_assembly('kubejs:pressure_mechanism', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:scorch_mechanism', "2A")
	bonus_assembly('kubejs:ender_mechanism', "3B")
	main_assembly('kubejs:explosive_mechanism', "3")
	bonus_assembly('kubejs:train_mechanism', "3A")
	bonus_assembly('kubejs:candy_mechanism', "2B")
	main_assembly('kubejs:power_mechanism', "4")



	not_consumed('farmersdelight:diamond_knife')
	not_consumed('kubejs:stone_saw')
	not_consumed('kubejs:iron_saw')
	not_consumed('kubejs:diamond_saw')
	not_consumed('createindustry:screwdriver')
	// not_consumed('create:super_glue')
	// not_consumed('xreliquary:mercy_cross')
	// not_consumed('xreliquary:ender_staff')

	// tooltip.add("structurescompass:structures_compass", [`§7Right-Click to Activate`]);

	tooltip.add("magicfeather:magicfeather", [`§6Grants Creative Flight`]);

	tooltip.add("kubejs:resistor", [`350kΩ`])
	tooltip.add("kubejs:electrolytic_capacitor", [`200V 470uF`])
	tooltip.add("kubejs:ceramic_capacitor", [`50V 0.1uF`])
	tooltip.add("kubejs:inductor", [`60uH`])


	// tooltip.add("xreliquary:alkahestry_tome", [`§6Cannot be used in Mechanical Crafting`]);

	tooltip.add("pipez:energy_pipe", [`§7Connections may have to be`, `§7marked as §fInputs §7by sneak-clicking`, `§7the connection with a §fWrench`]);
	tooltip.add("pipez:fluid_pipe", [`§7Connections may have to be`, `§7marked as §fInputs §7by sneak-clicking`, `§7the connection with a §fWrench`]);

	tooltip.add("kubejs:accellerator_redstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
		"  §6in §eincorrect §6slots will not be consumed"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7When used in Alchemy Research:", "  §6One of the §ecorrect §6Reagents",
		"  §6in §ecorrect §6slots will not be consumed"]);

	tooltip.add("kubejs:steel_ring", ["§7Obtained breaking a §6built-up steel cannon barrel"])

	tooltip.add("createindustry:steel_pump", ["§cWarning: this item may not work correctly.", "§cIf you do use it, expect problems."])
	tooltip.add("createindustry:steel_pipe", ["§cWarning: this item may not work correctly.", "§cIf you do use it, expect problems."])
	tooltip.add("createindustry:steel_fluid_tank", ["§eWarning: this item may not work correctly outside a tower."])

})

onEvent('jei.information', event => {

})
