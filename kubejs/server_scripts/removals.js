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

const removeByMod = [
  'davebuildingmod',
  'angelring',
  'pipez',
  'trashcans',
  'gearbox',
  'toms_storage',
  'tfmg',
  'create_factory_logistics', //voce quer re-colocar o factory logistics, eu nao botei esse mod pq ele esta bugado, ou seja, voce e um idiota se apagar isso.
];

const recipeIdsToRemove = [
  AP("charcoal_block"),
  CR('splashing/gravel'),
  CR('splashing/red_sand'),
  TC("smeltery/casting/metal/copper/ingot_gold_cast"),
  TC("smeltery/casting/metal/copper/ingot_sand_cast"),
  TC("smeltery/casting/metal/copper/nugget_gold_cast"),
  TC("smeltery/casting/metal/copper/nugget_sand_cast"),
  TC("smeltery/casting/metal/copper/block"),
  TC("smeltery/casting/metal/silver/ingot_gold_cast"),
  TC("smeltery/casting/metal/silver/ingot_sand_cast"),
  TC("smeltery/casting/metal/silver/nugget_gold_cast"),
  TC("smeltery/casting/metal/silver/nugget_sand_cast"),
  TC("smeltery/casting/metal/silver/block"),
  'thermal:machines/refinery/refinery_heavy_oil',
  'thermal:machines/refinery/refinery_light_oil',
  CR('crafting/kinetics/belt_connector'),
  'thermal:rubber_3',
  'thermal:rubber_from_dandelion',
  'thermal:rubber_from_vine',
  TC('compat/create/andesite_alloy_iron'),
  CR('crafting/materials/andesite_alloy'),
  CR('crafting/materials/andesite_alloy_from_zinc'),
  CR('mixing/andesite_alloy'),
  CR('mixing/andesite_alloy_from_zinc'),
  TE('compat/create/smelter_create_alloy_andesite_alloy'),
  TE('compat/create/smelter_create_alloy_andesite_alloy'),
  TC('compat/create/andesite_alloy_zinc'),
  TC('compat/create/andesite_alloy_iron'),
  CR('milling/granite'),
  CR('milling/andesite'),
  CR('splashing/sand'),
  CR('compat/ae2/milling/sky_stone_block'),
  CR('crushing/diorite'),
  CR('compat/ae2/milling/certus_quartz'),
  CR('crafting/materials/electron_tube'),
  CR('crafting/materials/rose_quartz'),
  TC('smeltery/casting/obsidian/block'),
  TC('smeltery/alloys/molten_obsidian_from_soup'),
  TC('smeltery/melting/seared/reinforcement'),
  TC('tools/materials/melting/darkthread'),
  TC('tools/materials/melting/nahuatl'),
  TC('smeltery/alloys/molten_obsidian'),
  TC('smeltery/melting/metal/slimesteel/reinforcement'),
  TC('smeltery/melting/metal/iron/reinforcement'),
  TC('smeltery/melting/metal/gold/reinforcement'),
  TC('smeltery/melting/metal/cobalt/reinforcement'),
  TC('smeltery/melting/metal/emerald/reinforcement'),
  TC('smeltery/melting/metal/amethyst_bronze/reinforcement'),
  TC('smeltery/melting/diamond/enchanting_table'),
  "create:deploying/cogwheel",
  TC("smeltery/casting/seared/smeltery_controller"),
  TC("smeltery/melting/copper/smeltery_controller"),
  CI("compacting/cinderflourblock"),
  CR("industrial_iron_block_from_ingots_iron_stonecutting"),
  "create_connected:crafting/kinetics/item_silo",
  CR("sequenced_assembly/precision_mechanism"),
  CC('crafting/kinetics/fluid_vessel'),
  TC('smeltery/alloys/molten_bronze'),
  TC('smeltery/alloys/molten_brass'),
  TC('smeltery/alloys/molten_invar'),
  TC('smeltery/alloys/molten_electrum'),
  TC('smeltery/alloys/molten_constantan'),
  TC('smeltery/alloys/molten_rose_gold'),
  TC('smeltery/alloys/molten_enderium'),
  TC('smeltery/alloys/molten_lumium'),
  TC('smeltery/alloys/molten_signalum'),
  "architects_palette:withered_bone",
  'computercraft:turtle_advanced',
  'computercraft:turtle_advanced_upgrade',
  'computercraft:turtle_normal',
  'decorative_blocks:lattice',
  "tconstruct:smeltery/entity_melting/ender",
  "tconstruct:tables/tinkers_forge",
  "tconstruct:tables/scorched_forge",
  "grapplemod:repeller",
  "grapplemod:forcefieldupgradeitem",
  "grapplemod:rocketupgradeitem",
  "grapplemod:rocketdoublemotorhook",
  "grapplemod:magnethook",
  "grapplemod:rockethook",
  MC("diorite"),
  MC("andesite"),
  MC("granite"),
  CR("mixing/brass_ingot"),
  "thermal:compat/biomesoplenty/tree_extractor_bop_pink_cherry",
  "thermal:compat/biomesoplenty/tree_extractor_bop_white_cherry",
  "thermal:compat/biomesoplenty/tree_extractor_bop_fir",
  TC("smeltery/melting/metal/gold/enchanted_apple"),
  TC("smeltery/casting/metal/steel/ingot_gold_cast"),
  TC("smeltery/casting/metal/steel/ingot_sand_cast"),
  CR("cutting/andesite_alloy"),
  TE("storage/beetroot_block"),
  TE("storage/potato_block"),
  AE2("misc/grindstone_woodengear"),
  AE2("tools/misctools_entropy_manipulator"),
  TE("storage/carrot_block"),
  TE("fire_charge/invar_ingot_3"),
  TE("fire_charge/enderium_ingot_2"),
  TE("fire_charge/constantan_ingot_2"),
  TE("fire_charge/bronze_ingot_4"),
  TE("fire_charge/electrum_ingot_2"),
  TE("fire_charge/lumium_ingot_4"),
  TE("fire_charge/signalum_ingot_4"),
  TE("machines/pulverizer/pulverizer_cinnabar"),
  TE("machines/smelter/smelter_alloy_signalum"),
  TE("machines/smelter/smelter_alloy_lumium"),
  TE("machines/smelter/smelter_alloy_electrum"),
  TE("machines/smelter/smelter_alloy_enderium"),
  TE("machines/smelter/smelter_alloy_invar"),
  TE("machines/smelter/smelter_alloy_constantan"),
  TE("machines/smelter/smelter_alloy_bronze"),
  TE("compat/create/smelter_create_alloy_brass"),
  TE("compat/tconstruct/smelter_alloy_tconstruct_rose_gold_ingot"),
  TE("machine/pulverizer/pulverizer_ender_pearl"),
  TE("storage/electrum_block"),
  TE("storage/electrum_nugget_from_ingot"),
  TE("machine/pulverizer/pulverizer_electrum_ingot_to_dust"),
  TE("parts/electrum_gear"),
  TE("gunpowder_4"),
  BC("compacting/forge_steel_ingot"),
  AP("smelting/charcoal_block_from_logs_that_burn_smoking"),
  "portality:generator",
  TC("smeltery/melting/metals/gold/dust"),
  TC("smeltery/melting/metals/zinc/dust"),
  TC("smeltery/melting/metals/iron/dust"),
  "ad_astra:steel_ingot_blasting",
  "alloyed:mixing/steel_ingot",
  "create_confectionery:ruby_chocolate_recipe",
  "create:milling/dripstone_block",
  CR("smeltery/melting/soul/sand"),
  TC("smeltery/melting/soul/sand"),
  TC("smeltery/casting/scorched/foundry_controller"),
  CI("mixing/coal_coke"),
  CI("crushing/limestone"),
  TE("machine/pyrolyzer/pyrolyzer_logs"),
  TE("devices/rock_gen/rock_gen_cobbled_deepslate"),
  CR("crushing/obsidian"),
  TE("compat/tconstruct/chiller_tconstruct_tin_ingot"),
  TE("machine/crucible/crucible_ender_pearl"),
  TC("smeltery/casting/metal/nickel/ingot_gold_cast"),
  TC("smeltery/casting/metal/nickel/ingot_sand_cast"),
  ED("cutting/ender_shard"),
  XT("extruding/basalt"),
  XT("extruding/cobblestone"),
  XT("extruding/stone"),
  CR("milling/compat/ae2/sky_stone_block"),
  XT("extruding/scoria"),
  CR("sandpaper_polishing/rose_quartz"),
  CR("sandpaper_polishing/rose_quartz_using_deployer"),
  TC("smeltery/casting/metal/gold/coin_gold_cast"),
  TC("smeltery/casting/metal/gold/coin_sand_cast"),
  TC("smeltery/casting/metal/silver/coin_gold_cast"),
  TC("smeltery/casting/metal/silver/coin_sand_cast"),
  TE("augments/item_filter_augment"),
  FD("flint_knife"),
  FD("iron_knife"),
  FD("golden_knife"),
  FD("diamond_knife"),
  /tconstruct:smeltery\/melting\/obsidian\/.*/,
  /ae2:tools\/paintballs.*/,
  /tconstruct:smeltery\/.*\/tin.*/,
  /tconstruct:smeltery\/casting\/ender\/.*/,
  /tconstruct:smeltery\/melting\/ender\/.*/,
  /tconstruct:smeltery\/.*\/ore/,
  /thermal:machine\/smelter\/.*dust/,
  /thermal:earth_charge\/.*/,
];

const recipeTypesToRemove = [
  AD("oxygen_loader"),
  AD("oxygen_bubble_distributor"),
  "tconstruct:entity_melting",
  TE("tree_extractor"),
  CI("distillation"),
  GB("distilling"),
  TE("sawmill"),
  TE("centrifuge"),
  AE2("inscriber"),
  AE2("grinder"),
  TE("press")
];

const removeByInput = [
  TE('oil_sand'),
  TE('oil_red_sand'),
  TE('lightning_charge'),
  TE('ice_charge'),
  TE('earth_charge'),
  '#forge:coins',
  '#forge:ores/redstone',
  '#create:crushed_raw_materials',
  '#forge:ores/tin',
  '#forge:ores/silver'
];

const removeByOutput = [
  TE("side_config_augment"),
  AD("steel_plate"),
  MC('basalt'),
  PP('pipe'),
  PP('blank_module'),
  'tfmg:steel_block',
  TE('bronze_dust'),
  CI('steel_mechanism'),
  'create:sail_frame',
  'create:white_sail',
  'ad_astra:steel_nugget',
  TE('steel_nugget'),
  CI('steel_chemical_vat'),
  CI('cast_iron_chemical_vat'),
  CI('fireproof_chemical_vat'),
  CI('industrial_mixer'),
  SD('upgrade_template'),
  CI('electrode_holder'),
  CI('aluminum_fluid_tank'),
  CI('cast_iron_fluid_tank'),
  'createaddition:diamond_grit',
  TE('fluid_cell_frame'),
  TE('energy_cell_frame'),
  'tfmg:screwdriver',
  MC('gunpowder'),
  AE2('ender_dust'),
  TE('drill_head'),
  TE('saw_blade'),
  'buddingcrystals:budding_budding_skystone',
  CR('encased_fan'),
  CR('deployer'),
  'sliceanddice:slicer',
  'thermal:device_tree_extractor',
  CR('mechanical_drill'),
  CR('mechanical_mixer'),
  CR('mechanical_saw'),
  CR('mechanical_press'),
  'thermal:dynamo_stirling',
  CR('steam_engine'),
  CR('spout'),
  CR('hose_pulley'),
  TE('dynamo_magmatic'),
  'create_enchantment_industry:printer',
  'createqol:trash_can',
  'createqol:inventory_linker',
  'createqol:brass_trash_can',
  'createqol:player_paper',
  'createqol:shadow_radiance_helmet',
  'createqol:shadow_radiance_chestplate',
  'createqol:shadow_radiance_leggings',
  'createqol:shadow_radiance_boots',
  'createqol:refined_radiance_helmet',
  'createqol:refined_radiance_chestplate',
  'createqol:refined_radiance_leggings',
  'createqol:refined_radiance_boots',
  'createqol:shadow_steel_helmet',
  'createqol:shadow_steel_chestplate',
  'createqol:shadow_steel_leggings',
  'createqol:shadow_steel_boots',
  'createqol:shadow_steel_sword',
  'createqol:shadow_steel_pickaxe',
  'createqol:shadow_steel_axe',
  'createqol:shadow_steel_shovel',
  'createqol:shadow_steel_hoe',
  'createqol:shadow_radiance_sword',
  'createqol:shadow_radiance_pickaxe',
  'createqol:shadow_radiance_axe',
  'createqol:shadow_radiance_shovel',
  'createqol:shadow_radiance_hoe',
  'createqol:refined_radiance_sword',
  'createqol:refined_radiance_pickaxe',
  'createqol:refined_radiance_axe',
  'createqol:refined_radiance_shovel',
  'createqol:refined_radiance_hoe',
  CI("lead_nugget"),
  CI("lead_sheet"),
  CI("lead_ingot"),
  "pipeorgans:copper_boot",
  TE("device_lava_gen"),
  TC("molten_brass"),
  SB("void_upgrade"),
  SB("advanced_void_upgrade"),
  SS("advanced_void_upgrade"),
  SS("void_upgrade"),
  SS("void_upgrade"),
  BC("cast_iron_ingot"),
  CI("cast_iron_ingot"),
  TE("redstone_mushroom_spores"),
  "magicfeather:primeval_feather",
  CR("factory_gauge"),
  CR('mechanical_arm'),
  CR('mechanical_crafter'),
  TE('dynamo_numismatic'),
  PP('item_terminal'),
  SS('controller'),
  SS('storage_link'),
  SS('storage_io'),
  SS('storage_input'),
  SS('storage_output'),
  SS('magnet_upgrade'),
  SB('magnet_upgrade'),
  SD('magnet_upgrade'),
  SD('magnet_upgrade_2'),
  SD('magnet_upgrade_3'),
  CC('parallel_gearbox'),
  CC('vertical_parallel_gearbox'),
  CC('six_way_gearbox'),
  CC('vertical_six_way_gearbox'),
  CC('centrifugal_clutch'),
  CC('freewheel_clutch'),
  CC('brake'),
  CC('overstress_clutch'),
  CC('shear_pin'),
  TE('potion_quiver'),
  TE('potion_infuser'),
  TE('fluid_duct_windowed'),
  TE('fluid_duct'),
  TE('energy_duct'),
  TC("scorched_brick"),
  TC('obsidian_pane'),
  '#forge:coins',
  AE2('grindstone'),
  TE('tin_block'),
  AE2('vibration_chamber'),
  AE2('inscriber'),
  AE2('quartz_glass'),
  AE2('silicon'),
  CR('chromatic_compound'),
  '#forge:plates/tin',
  '#forge:plates/silver',
  '#forge:gears/tin',
  '#forge:gears/silver',
  TE('steel_plate'),
  TE('steel_ingot'),
  TE('steel_block'),
  'createdeco:andesite_door',
  'createdeco:copper_door',
  'createdeco:brass_door',
  'createdeco:locked_andesite_door',
  'createdeco:locked_copper_door',
  'createdeco:locked_brass_door',
  'createaddition:zinc_sheet',
  TE('lightning_charge'),
  TE('ice_charge'),
  TE('earth_charge'),
  CI("large_pumpjack_hammer_connector"),
  CI("large_pumpjack_hammer_head"),
  CI("large_pumpjack_hammer_part"),
  CI("pumpjack_hammer_connector"),
  CI("pumpjack_hammer_head"),
  CI("pumpjack_hammer_part"),
  CI("pumpjack_crank"),
  CI("pumpjack_hammer"),
  CI("pumpjack_base"),
  CI("machine_input"),
  CI("electric_motor"),
  CI("resistor"),
  CI("copper_coil"),
  CI("neon_tube"),
  CI("turbine_engine"),
  CI("regular_engine"),
  CI("radial_engine"),
  CI("large_engine"),
  CI("simple_large_engine"),
  CI("engine_gearbox"),
  CI("engine_controller"),
  CI("cable_tube"),
  CI("light_bulb"),
  CI("energy_meter"),
  CI("voltmeter"),
  CI("firebox"),
  CI("converter"),
  CI("capacitor"),
  CI("accumulator"),
  CI("rotor"),
  CI("stator"),
  CI("cable_connector"),
  CI("electric_casing"),
  CI("polarizer"),
  CI("generator"),
  CI("galvanic_cell"),
  CI("surface_scanner"),
  CI("casting_spout"),
  CI("casting_basin"),
  "createaddition:capacitor",
  "createaddition:electric_motor",
  "createaddition:alternator",
  "projectred_core:red_ingot",
  "projectred_core:red_iron_comp",
  AE2("printed_calculation_processor"),
  AE2("printed_engineering_processor"),
  AE2("printed_logic_processor"),
  AE2("silicon"),
  TE("rubber"),
  CI('heavy_plate'),
  CI('quad_potato_cannon'),
  CI('steel_fluid_tank'),
  TE('machine_frame'),
  TE("basalz_powder"),
  TE("blizz_powder"),
  TE('chiller_ball_cast'),
  TE('chiller_rod_cast'),
  TE('chiller_ingot_cast'),
  WT('warp_scroll'),
  WT('return_scroll'),
  WT('bound_scroll'),
  WT('warp_stone'),
  WT('warp_dust'),
  ES('ender_pouch'),
  TE('enderium_ingot'),
  TC('steel_block')
];

const native_metals = [
  'iron', 
  'zinc', 
  'lead', 
  'copper', 
  'nickel', 
  'gold'
];

ServerEvents.recipes((event) => {

  native_metals.forEach(e => {
		event.remove({ type: MC("smelting"), input: F("#dusts/" + e) })
		event.remove({ type: MC("blasting"), input: F("#dusts/" + e) })
		event.remove({ type: TC("melting"), input: F("#dusts/" + e) })
    event.remove({ id: TC('smeltery/melting/metal/' + e +'/dust')})
	})

  recipeIdsToRemove.forEach((recipeId) => {
    event.remove({ id: recipeId });
  });

  removeByOutput.forEach((output) => {
    event.remove({ output: output });
  });

  removeByInput.forEach((input) => {
    event.remove({ input: input });
  });

  removeByMod.forEach((modop) => {
    event.remove({ mod: modop });
  });

  recipeTypesToRemove.forEach((recipeType) => {
    event.remove({ type: recipeType });
  });

  event.remove({ mod: 'ad_astra', type: 'minecraft:crafting_shaped'})
	event.remove({ mod: 'ad_astra', type: 'ad_astra:nasa_workbench'})
	event.remove({ mod: 'ad_astra', type: 'ad_astra:compressor'})
	event.remove({ mod: 'ad_astra', type: 'ad_astra:coal_generator'})
	event.remove({ mod: 'ad_astra', type: 'ad_astra:nasa_workbench'})

	event.remove({ type: MC("crafting_shapeless"), output: TE('constantan_dust') })
	event.remove({ type: MC("crafting_shapeless"), output: TE('electrum_dust') })
	event.remove({ type: MC("crafting_shapeless"), output: TE('lumium_dust') })
	event.remove({ type: MC("crafting_shapeless"), output: TE('signalum_dust') })
	event.remove({ type: MC("crafting_shapeless"), output: TE('enderium_dust') })
	event.remove({ type: MC("crafting_shapeless"), output: TE('bronze_dust') })
	event.remove({ type: MC("crafting_shapeless"), output: TE('invar_dust') })

  event.remove({ input: TE('signalum_dust'), output: TE('signalum_ingot') })
	event.remove({ output: TE('signalum_dust'), input: TE('signalum_ingot') })

});