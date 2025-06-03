// priority: 0
JEIEvents.hideItems(event => {
	event.hide('ae2:facade')
	event.hide('thermal:cinnabar_dust')

	// event.hide("create_connected:parallel_gearbox")
	// event.hide("create_connected:vertical_parallel_gearbox")
	// event.hide("create_connected:six_way_gearbox")
	// event.hide("create_connected:vertical_six_way_gearbox")
	// event.hide("create_connected:shear_pin")
	// event.hide("create_connected:overstress_clutch")
	// event.hide("create_connected:centrifugal_clutch")
	// event.hide("create_connected:freewheel_clutch")
	// event.hide("create_connected:brake")


	let hide_metal = (mod, type) =>{
		event.hide(mod+':'+type+'_ingot')
		event.hide(mod+':'+type+'_nugget')
		event.hide(mod+':'+type+'_block')
	}
	hide_metal('tconstruct', 'steel')
	hide_metal('thermal', 'steel')
	hide_metal('thermal', 'tin')
	hide_metal('thermal', 'bronze')
    hide_metal('thermal', 'electrum')
	hide_metal('createdeco', 'cast_iron')
//	hide_metal('tfmg', 'cast_iron')
	hide_metal('davebuildingmod', 'steel')
	hide_metal('ad_astra', 'steel')

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

	let encased = (type) => {
  event.hide("createcasing:"+type+"_configurable_gearbox")
	}

	encased("railway")
	encased("copper")
	encased("andesite")
	encased("brass")
	encased("industrial_iron")

	let creative = (type) => {
	event.hide("createcasing:vertical_"+type+"_gearbox")
	event.hide("createcasing:"+type+"_encased_chain_drive")
	event.hide("createcasing:"+type+"_adjustable_chain_gearshift")
  event.hide("createcasing:"+type+"_casing")
	event.hide("createcasing:"+type+"_gearbox")
	event.hide("createcasing:"+type+"_cogwheel")
	event.hide("createcasing:"+type+"_configurable_gearbox")
	event.hide("createcasing:"+type+"_mixer")
	event.hide("createcasing:"+type+"_press")
	event.hide("createcasing:"+type+"_depot")
	}

  creative("creative")

	event.hide('occultism:silver_ore_deepslate')
	event.hide('thermal:oil_sand')
	event.hide('thermal:oil_red_sand')
	event.hide('tfmg:steel_casing')
	event.hide('waterstrainer:string_mesh')
	event.hide('waterstrainer:iron_mesh')
	event.hide('waterstrainer:obsidian_mesh')
	event.hide('waterstrainer:strainer_survivalist_solid')
	event.hide('waterstrainer:strainer_survivalist_reinforced')
	event.hide('waterstrainer:strainer_fisherman_solid')
	event.hide('ae2:inscriber')
	event.hide('ae2:vibration_chamber')
	event.hide('ae2:quartz_growth_accelerator')
	event.hide('createmetallurgy:wolframite_ore')
	event.hide('createmetallurgy:dirty_wolframite_dust')
	event.hide('createmetallurgy:wolframite__dust')
	event.hide('createmetallurgy:dirty_gold_dust')
	event.hide('createmetallurgy:gold_dust')
	event.hide('createmetallurgy:dirty_iron_dust')
	event.hide('createmetallurgy:iron_dust')
	event.hide('createmetallurgy:dirty_copper_dust')
	event.hide('createmetallurgy:copper_dust')
	event.hide('createmetallurgy:dirty_zinc_dust')
	event.hide('createmetallurgy:zinc_dust')
	event.hide('createmetallurgy:slag')
	event.hide('createmetallurgy:coke_block')
	event.hide('createmetallurgy:coke')
	event.hide('createmetallurgy:steel_block')
	event.hide('createmetallurgy:steel_ingot')
	event.hide('tfmg:coal_coke')
	event.hide('tfmg:saltpeter')
	event.hide('tfmg:steel_ingot')
	event.hide('ad_astra:iron_plate')
	event.hide('ad_astra:compressed_steel')
	event.hide('ad_astra:engine_fan')
	event.hide('ad_astra:oxygen_tank')
	event.hide('ad_astra:iron_stick')
	event.hide('ad_astra:water_pump')
	event.hide('ad_astra:compressor')
	event.hide('ad_astra:coal_generator')
	event.hide('ad_astra:nasa_workbench')
	event.hide('ad_astra:fuel_refinery')
	event.hide('ad_astra:oxygen_gear')
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
	event.hide('tfmg:sulfur_powder')
	event.hide('tfmg:saltpeter')
	event.hide('tfmg:pumpjack_hammer')
	event.hide('tfmg:pumpjack_crank')
	event.hide('tfmg:pumpjack_hammer_part')
	event.hide('tfmg:pumpjack_hammer_head')
	event.hide('tfmg:pumpjack_hammer_connector')
	event.hide('tfmg:pumpjack_base')
	event.hide('tfmg:large_pumpjack_hammer_part')
	event.hide('tfmg:large_pumpjack_hammer_head')
	event.hide('tfmg:large_pumpjack_hammer_connector')
	event.hide("kubejs:growing_rose_seed")
	event.hide("kubejs:growing_tiny_rose_crystal")
	event.hide("kubejs:growing_small_rose_crystal")
	event.hide("kubejs:incomplete_calculation_processor")
	event.hide("kubejs:incomplete_logic_processor")
	event.hide("kubejs:incomplete_engineering_processor")
	event.hide("kubejs:incomplete_rotation_mechanism")
	event.hide("kubejs:incomplete_pressure_mechanism")
	event.hide("kubejs:incomplete_train_mechanism")
	event.hide("kubejs:incomplete_scorch_mechanism")
	event.hide("kubejs:incomplete_power_mechanism")
	event.hide("kubejs:incomplete_explosive_mechanism")
	event.hide("kubejs:incomplete_ender_mechanism")
	event.hide("kubejs:incomplete_high_power_mechanism")
	event.hide("kubejs:incomplete_candy_mechanism")
	event.hide("kubejs:incomplete_steel_engine")
	event.hide("kubejs:incomplete_resistor")
	event.hide("kubejs:incomplete_inductor")
	event.hide("kubejs:incomplete_ceramic_capacitor")
	event.hide("kubejs:incomplete_electrolytic_capacitor")
	event.hide("kubejs:incomplete_rotation_machine")
	event.hide("kubejs:calculator")
	event.hide("kubejs:charged_calculator")
	event.hide("tfmg:machine_input") 
	event.hide("tfmg:electric_motor") 
	event.hide("tfmg:resistor") 
	event.hide("tfmg:copper_coil") 
	event.hide("tfmg:neon_tube") 
	event.hide("tfmg:cable_tube") 
	event.hide("tfmg:light_bulb") 
	event.hide("tfmg:energy_meter") 
	event.hide("tfmg:voltmeter") 
	event.hide("tfmg:firebox") 
	event.hide("tfmg:converter") 
	event.hide("tfmg:capacitor") 
	event.hide("tfmg:accumulator") 
	event.hide("tfmg:rotor")
	event.hide("tfmg:oil_deposit")
	event.hide("tfmg:stator") 
	event.hide("tfmg:cable_connector") 
	event.hide("tfmg:electric_casing")
	event.hide("tfmg:polarizer")      
	event.hide("tfmg:generator")      
	event.hide("tfmg:galvanic_cell") 
	event.hide("tfmg:surface_scanner") 
	event.hide("tfmg:casting_spout") 
	event.hide("tfmg:casting_basin")
	event.hide("tfmg:steel_mechanism")
	event.hide("tfmg:lead_ore")
	event.hide("tfmg:deepslate_lead_ore")
	event.hide("tfmg:lead_ore")
	event.hide("tfmg:deepslate_nickel_ore")
	event.hide("tfmg:nickel_ore")
	event.hide("tfmg:sulfur")
	event.hide ("sophisticatedbackpacks:void_upgrade")
	event.hide ("sophisticatedbackpacks:advanced_void_upgrade")
	event.hide ("sophisticatedstorage:advanced_void_upgrade")
	event.hide ("sophisticatedstorage:void_upgrade")
	event.hide("create_factory_logistics:fluid_mechanism")
	event.hide("create_factory_logistics:incomplete_fluid_mechanism")
	event.hide("gearbox:mirror")
	event.hide("gearbox:laser_drill")
	event.hide("gearbox:chemical_reactor")
	event.hide("gearbox:dipper")
	event.hide("gearbox:tau_cannon")
	event.hide("gearbox:geld_ingot")
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
	event.hide('@davebuildingmod')
	event.hide('@buddingcrystals')
	// event.hide('@expatternprovider')
	// event.hide('@ae2')
	// event.hide('@ae2things')
	// event.hide('@ae2wtlib')
	// event.hide('@aeinfinitybooster')
	event.hide('@trashcans')

})

JEIEvents.subtypes(event => {
	// event.useNBT('advancedrocketry:planet_id_chip')
})

JEIEvents.hideFluids(event => {
	event.hide('ad_astra:fuel')
})

JEIEvents.addItems(event => {
	event.add('buddingcrystals:budding_budding_skystone')
	event.add('buddingcrystals:budding_skystone_cluster')

	event.add('pipez:fluid_pipe')
	event.add('pipez:energy_pipe')

	// event.add('ae2:charger')
	// event.add('ae2:certus_quartz_crystal')
	// event.add('ae2:charged_certus_quartz_crystal')
	// event.add('ae2:sky_dust')
	// event.add('ae2:sky_stone_block')
	// event.add('ae2:1x_sky_stone_block')
	// event.add('ae2:2x_sky_stone_block')
	// event.add('ae2:3x_sky_stone_block')
	// event.add('ae2:ender_dust')
	// event.add('ae2:crystal_resonance_generator')


	event.add('toms_storage:ts.crafting_terminal')
	event.add('toms_storage:ts.storage_terminal')
	event.add('toms_storage:ts.inventory_connector')
	event.add('toms_storage:ts.inventory_cable')
	event.add('toms_storage:ts.inventory_cable_connector')

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

JEIEvents.removeCategories(event => {
})

ItemEvents.tooltip(tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} Slots`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7Main Assembly: ${stage == "5" ? "§6Finale" : "§6Chapter " + stage}`, '§8Consider automating this item'])
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
	bonus_assembly('kubejs:train_mechanism', "1B")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:scorch_mechanism', "2A")
	bonus_assembly('kubejs:ender_mechanism', "3B")
	main_assembly('kubejs:explosive_mechanism', "3")
	bonus_assembly('kubejs:candy_mechanism', "2B")
	main_assembly('kubejs:power_mechanism', "4")
	bonus_assembly('kubejs:high_power_mechanism', "4A")
    main_assembly('gearbox:ultimate_mechanism', "5")


	not_consumed('farmersdelight:diamond_knife')
	// not_consumed('kubejs:stone_saw')
	// not_consumed('kubejs:iron_saw')
	// not_consumed('kubejs:diamond_saw')
	// not_consumed('tfmg:screwdriver')
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

	tooltip.add("kubejs:steel_ring", ["§7Obtained breaking a §6steel cannon chamber"])

	tooltip.add("thermal:machine_press", ["§eWarning: crash when viewing recipes."])

	tooltip.add("ae2:growth_accelerator", ["§erecipe by volit <3"])

	tooltip.add('buddingcrystals:budding_budding_skystone', ["§cwarning, this block cannot be broken after being placed, if it breaks, it will disappear"])

	tooltip.add("tfmg:steel_pump", ["§cWarning: this item may not work correctly.", "§cIf you do use it, expect problems."])
	tooltip.add("tfmg:steel_pipe", ["§cWarning: this item may not work correctly.", "§cIf you do use it, expect problems."])
	//tooltip.add("tfmg:steel_fluid_tank", ["§eWarning: this item may not work correctly outside a tower."])

})

JEIEvents.information(event => {

})
