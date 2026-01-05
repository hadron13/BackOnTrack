// priority: 0

StartupEvents.registry('item', event => {

	event.create('rose_quartz_seed').texture("kubejs:item/rose_quartz_seed_0").displayName("Rose Quartz Seed")

	event.create('soul').texture("kubejs:item/soul").displayName("Soul")

	event.create('growing_rose_seed', 'create:sequenced_assembly')			.texture("kubejs:item/rose_quartz_seed_0").displayName('Rose Quartz Seed')
	event.create('tiny_rose_crystal')										.texture("kubejs:item/rose_quartz_seed_1").displayName('Tiny Rose Quartz')
	event.create('growing_tiny_rose_crystal', 'create:sequenced_assembly')	.texture("kubejs:item/rose_quartz_seed_1").displayName('Tiny Rose Quartz')
	event.create('small_rose_crystal')										.texture("kubejs:item/rose_quartz_seed_2").displayName('Small Rose Quartz')
	event.create('growing_small_rose_crystal', 'create:sequenced_assembly')	.texture("kubejs:item/rose_quartz_seed_2").displayName('Small Rose Quartz')

	event.create('titamium_sheet').texture("kubejs:item/titamium_sheet").displayName("Titamium Sheet")
	event.create('titamium_gear').texture("kubejs:item/titamium_gear").displayName("Titamium Gear")
	event.create('titamium_ingot').texture("kubejs:item/titamium_ingot").displayName("Titamium Ingot")

	event.create('rotation_mechanism_base').texture("kubejs:item/rotation_mechanism_base").displayName("Rotation Mechanism Base")

	let processors = ["Calculation", "Logic", "Engineering"]
	processors.forEach(name => {
		let e = name.toLowerCase()
		event.create('incomplete_' + e + '_processor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_' + e + '_processor').displayName('Incomplete ' + name + ' Processor')
	})

	event.create('sodium_powder').texture("kubejs:item/sodium_powder").displayName('Sodium Powder').food(food => {
		food
		.hunger(10)
		.saturation(10)
		.alwaysEdible()
		.eaten(ctx => {
			ctx.player.kill()
		})
	})

	let mechanism = (name) => {
		let id = name.toLowerCase().replace(' ', '_')
		event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism')
		event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism')}

	mechanism('Rotation')
	mechanism('Pressure')
	mechanism('Logistic')
	mechanism('Train')
	mechanism('Scorch')
	mechanism('Explosive')
	mechanism('Power')
	mechanism('Ender')
	mechanism('High Power')

	event.create('candy_mechanism').texture("kubejs:item/chocolate_bomb").displayName('Chocolate Bomb').food(food => {
		food
		.hunger(17)
		.saturation(2)
		.effect('speed', 5000, 0, 2)
		.effect('farmersdelight:nourishment', 5000, 0, 2)
		.alwaysEdible()
	})

	event.create('incomplete_candy_mechanism', 'create:sequenced_assembly').texture("kubejs:item/chocolate_bomb_incomplete").displayName('Incomplete Chocolate Bomb')

	// Misc / Integration
	event.create('pipe_module_utility').texture("kubejs:item/pipe_module_utility").displayName('Utility Pipe Module')
	event.create('pipe_module_tier_1').texture("kubejs:item/pipe_module_tier_1").displayName('Brass Pipe Module')
	event.create('pipe_module_tier_2').texture("kubejs:item/pipe_module_tier_2").displayName('Enderium Pipe Module')
	event.create('pipe_module_tier_3').texture("kubejs:item/pipe_module_tier_3").displayName('Invar Pipe Module')

	event.create('metallurgic_silicon').texture("kubejs:item/metallurgic_silicon").displayName('Metallurgic silicon')
	event.create('smoke_mote').texture("kubejs:item/smoke_mote").displayName('Insulative Coating')

	event.create('high_power_coil').texture("kubejs:item/high_power_coil").displayName('High Power Coil')
	event.create('faraday_cage').texture("kubejs:item/faraday_cage").displayName('Faraday Cage')
	event.create('invar_core').texture("kubejs:item/invar_core").displayName('Invar Core')

	event.create('incomplete_steel_engine', 'create:sequenced_assembly').texture("kubejs:item/incomplete_engine_t1").displayName('Incomplete Brass Engine')
	event.create('failed_steel_engine').texture("kubejs:item/failed_engine_t1").displayName('Failed Brass Engine')

	event.create('circuit_scrap').texture("kubejs:item/circuit_scrap").displayName('Circuit Scrap')
	event.create('zinc_dust').texture("kubejs:item/zinc_dust").displayName('Zinc Dust')
	event.create('cobalt_dust').texture("kubejs:item/cobalt_dust").displayName('Cobalt Dust')

	event.create('asurine_bits').texture("kubejs:item/asurine_bits").displayName('Asurine Chunks')
	event.create('andesite_blend').texture("kubejs:item/andesite_blend").displayName('Andesitic Blend')
	event.create('andesite_dust').texture("kubejs:item/andesite_dust").displayName('Andesite Dust')
	
	event.create('impure_sky_chunks').texture("kubejs:item/impure_sky_chunks").displayName('Impure Sky Chunks')
	event.create('clean_sky_chunks').texture("kubejs:item/clean_sky_chunks").displayName('Clean Sky Chunks')
	event.create('cut_sky_chunks').texture("kubejs:item/clean_sky_pellet").displayName('Clean Sky Pellet')
	event.create('pure_sky_chunks').texture("kubejs:item/pure_sky_pellet").displayName('Pure Sky Pellet')

	event.create('dry_pulp').texture("kubejs:item/dry_pulp").displayName('Dry Pulp')
	event.create('resin_pulp').texture("kubejs:item/resin_pulp").displayName('Resin Pulp')

	event.create('diorite_dust').texture("kubejs:item/diorite_dust").displayName('Diorite Dust')
	event.create('turbine_engine').texture("kubejs:item/diorite_dust").displayName('Turbine Engine')

	event.create('limenite').texture("kubejs:item/ilmenite").displayName('Ilmenite')
	event.create('titanium_sponge').texture("kubejs:item/titamium_sponge").displayName('Titamium Sponge')
	event.create('titanium_dust').texture("kubejs:item/titamium_dust").displayName('Titamium Dust')
	event.create('titanium_blend').texture("kubejs:item/titamium_blend").displayName('Raw Titamium')
	event.create('magnesium_chloride').texture("kubejs:item/magnesium_chloride").displayName('Magnesium Chloride')
	event.create('magnesium_ingot').texture("kubejs:item/magnesium_ingot").displayName('Magnesium Ingot')
	
	event.create('steel_ring').texture("kubejs:item/steel_ring").displayName('Steel Ring')
	event.create('gold_ring').texture("kubejs:item/precision_mechanism_ring").displayName('Gold Ring')
	event.create('coal_ring').texture("kubejs:item/ender_mechanism_ring").displayName('Cast Ring')
	event.create('silicon_compound').texture("kubejs:item/silicon_compound").displayName('Silicon Charge')

	event.create('soaked_sheet').texture("kubejs:item/soaked_sheet").displayName('Soaked Copper Sheet')
	event.create('rough_sheet').texture("kubejs:item/rough_sheet").displayName('Rough Copper Sheet')

	event.create('rotation_template').texture("kubejs:item/andesite_template").displayName('Andesite Template')
	event.create('brass_template').texture("kubejs:item/brass_template").displayName('Brass Template')

	event.create('resistor').texture("kubejs:item/resistor").displayName('Resistor')
	event.create('inductor').texture("kubejs:item/inductor").displayName('Induction Coil')
	event.create('ceramic_capacitor').texture("kubejs:item/capacitor_ceramic").displayName('Ceramic Capacitor')
	event.create('electrolytic_capacitor').texture("kubejs:item/capacitor_electrolytic").displayName('Electrolytic Capacitor')

	event.create('dirt_resistor').texture("kubejs:item/resistor_dirt").displayName('Dirty Resistor')
	event.create('dirt_inductor').texture("kubejs:item/inductor_dirt").displayName('Dirty Induction Coil')
	event.create('dirt_ceramic_capacitor').texture("kubejs:item/capacitor_ceramic_dirt").displayName('Dirty Ceramic Capacitor')
	event.create('dirt_electrolytic_capacitor').texture("kubejs:item/capacitor_electrolytic_dirt").displayName('Dirty Electrolytic Capacitor')

	event.create('incomplete_resistor', 'create:sequenced_assembly').texture("kubejs:item/resistor_incomplete").displayName('Incomplete Resistor')
	event.create('incomplete_inductor', 'create:sequenced_assembly').texture("kubejs:item/inductor_incomplete").displayName('Incomplete Induction Coil')
	event.create('incomplete_ceramic_capacitor', 'create:sequenced_assembly').texture("kubejs:item/capacitor_ceramic_incomplete").displayName('Incomplete Ceramic Capacitor')
	event.create('incomplete_electrolytic_capacitor', 'create:sequenced_assembly').texture("kubejs:item/capacitor_electrolytic_incomplete").displayName('Incomplete Electrolytic Capacitor')

	event.create('inductor_core').texture("kubejs:item/inductor_core").displayName('Magnetic Core')

	event.create('carbon_sheet').texture("kubejs:item/carbon_sheet").displayName('Carbon Sheet')
	event.create('mica_sheet').texture("kubejs:item/mica_sheet").displayName('Mica Sheet')
	event.create('ceramic_powder').texture("kubejs:item/ceramic_powder").displayName('Ceramic Powder')

	event.create('plastic').texture("kubejs:item/plastic").displayName('Plastic')
	event.create('nickel_compound').texture("kubejs:item/nickel_compound").displayName('Nickel Compound')
	event.create('invar_compound').texture("kubejs:item/invar_compound").displayName('Unprocessed Invar Ingot')

	event.create('lube_can').texture("kubejs:item/lube_can").displayName('Lubricant Can').maxDamage(256)
	event.create('soldering_iron').texture("kubejs:item/soldering_iron").displayName('Soldering Iron').maxDamage(1024)

	event.create('golden_tube').texture("kubejs:item/yellow_tube").displayName("Golden Tube")
	event.create('diamond_tube').texture("kubejs:item/blue_tube").displayName("Diamond Tube")
	event.create('empty_tube').texture("kubejs:item/empty_tube").displayName("Empty Tube")

	event.create('tungstem_sword_tuned', 'sword').tier('netherite').attackDamageBaseline(50.0).speedBaseline(10).displayName('Titamium Sword').unstackable()

	event.create('incomplete_rotation_machine', 'create:sequenced_assembly').parentModel("kubejs:block/incomplete_andesite_machine").displayName('Incomplete Rotation Machine')

})

StartupEvents.registry('block', event => {
	event.create('enderium_casing').model('kubejs:block/enderium_casing').material('metal').hardness(4.0).displayName('Ender Casing')
	event.create('zinc_casing').material('metal').hardness(3.0).displayName('Zinc Casing')
	event.create('invar_casing').material('metal').hardness(3.0).displayName('Invar Casing')
	event.create('fluix_casing').material('metal').hardness(3.0).displayName('Fluix Casing')
	event.create('mica_block').material('metal').hardness(3.0).displayName('Mica Block')

	event.create('soulless_sand').model('kubejs:block/soulless_sand').material('metal').hardness(4.0).displayName('Souless Sand')

	event.create('ae2:3x_sky_stone_block').model('kubejs:block/sky_stone_block').material('metal').hardness(4.0).displayName('sky stone block 3x')
	event.create('ae2:2x_sky_stone_block').model('kubejs:block/sky_stone_block').material('metal').hardness(4.0).displayName('sky stone block 2x')
	event.create('ae2:1x_sky_stone_block').model('kubejs:block/sky_stone_block').material('metal').hardness(4.0).displayName('sky stone block 1x')

	let machine = (name, display, layer) => {
	let id = name.toLowerCase()
	event.create(id + '_machine')
		.model('kubejs:block/' + id + '_machine')
		.material('lantern')
		.hardness(3.0)
		.displayName(display + ' Machine')
		.notSolid()
		.renderType(layer)}

	machine('Andesite', 'Rotation', "solid")
	machine('Brass', 'Precision',"translucent")
	machine('Logistic', 'Logistic', "solid")
	machine('Copper', 'Pressure', "cutout")
	machine('Zinc', 'Scorch',"cutout")
	machine('Train', 'Track', "cutout")
	machine('Enderium', 'Abstruse',"cutout")
  machine('Explosive', 'Explosive', "solid")
	machine('Power', 'Power', "translucent")
	machine('Invar', 'Inductive', "translucent")

})

StartupEvents.registry('fluid', event => {

    //Volatile gas -> gearbox
    //Propane -> gearbox
    //Butane -> gearbox
    //LPG -> gearbox

		event.create('oil_brine')
			.thinTexture(0x373e42)
			.bucketColor(0x373e42)
			.displayName('Petroleum Brine')
		event.create('desalted_oil')
			.thinTexture(0x482e37)
			.bucketColor(0x482e37)
			.displayName('Desalted Petroleum')
		event.create('oil')
			.thinTexture(0x11141d)
			.bucketColor(0x11141d)
			.displayName('Oil')
		event.create('light_naphta')
			.thinTexture(0xd9d8a3)
			.bucketColor(0xd9d8a3)
			.displayName('Light Naphta')
		event.create('heavy_naphta')
			.thinTexture(0xc4c26e)
			.bucketColor(0xc4c26e)
			.displayName('Heavy Naphta')
		event.create('desulfurized_heavy_naphta')
			.thinTexture(0xCFC254)
			.bucketColor(0xCFC254)
			.displayName('Desulfurized Heavy Naphta')
		event.create('plastic')
			.thinTexture(0xd8d8d5)
			.bucketColor(0xd8d8d5)
			.displayName('Liquid Plastic')
		event.create('hydrocracked_gasoline')
			.thinTexture(0xA68D3F)
			.bucketColor(0xA68D3F)
			.displayName('Hydrocracked Gasoline')
		event.create('untreated_gasoline')
			.thinTexture(0xC49B21)
			.bucketColor(0xC49B21)
			.displayName('Untreated Gasoline')
		event.create('gasoline')
			.thinTexture(0xCFC254)
			.bucketColor(0xCFC254)
			.displayName('Refined Gasoline')
		event.create('kerosene')
			.thinTexture(0x4FB590)
			.bucketColor(0x4FB590)
			.displayName('Kerosene')
		event.create('desulfurized_kerosene')
			.thinTexture(0x26A69A)
			.bucketColor(0x26A69A)
			.displayName('Desulfurized Kerosene')
    event.create('light_diesel')
      .thinTexture(0xB58C4F)
			.bucketColor(0xB58C4F)
      .displayName('Light Diesel')
    event.create('heavy_diesel')
      .thinTexture(0x856638)
			.bucketColor(0x856638)
      .displayName('Heavy Diesel')
    event.create('desulfurized_light_diesel')
      .thinTexture(0xE57373)
			.bucketColor(0xE57373)
      .displayName('Refined Diesel')
    event.create('light_gas_oil')
      .thinTexture(0x5E7A88)
			.bucketColor(0x5E7A88)
      .displayName('Light Gas Oil')
    event.create('heavy_gas_oil')
      .thinTexture(0x2C393F)
			.bucketColor(0x2C393F)
      .displayName('Heavy Gas Oil')
    event.create('hydrotreated_gas_oil')
      .thinTexture(0x3C394F)
			.bucketColor(0x3C394F)
      .displayName('Hydrotreated Gas Oil')
    event.create('desulfurized_heavy_diesel')
      .thinTexture(0xB54F4F)
			.bucketColor(0xB54F4F)
      .displayName('Desulfurized Heavy Diesel')
		event.create('oil_residue')
			.thinTexture(0x311111)
			.bucketColor(0x311111)
			.displayName('Oil Residue')
		event.create('heavy_oil_residue')
			.thickTexture(0x111111)
			.bucketColor(0x111111)
			.displayName('Heavy Oil Residue')
		event.create('fuel_oil')
			.thickTexture(0x525252)
			.bucketColor(0x525252)
			.displayName('Fuel Oil')
		event.create('alkylate')
			.thinTexture(0xB1A7C3)
			.bucketColor(0xB1A7C3)
			.displayName('Alkylate')
		event.create('sulfuric_acid')
			.thinTexture(0xd6d842)
			.bucketColor(0xd6d842)
			.displayName('Sulfuric Acid')
		event.create('lubricant')
			.thinTexture(0xFFC107)
			.bucketColor(0xFFC107)
			.displayName('Lubricant')
    event.create('molten_desh')
			.thinTexture(0xedaf53)
			.bucketColor(0xedaf53)
			.displayName('Molten Desh')
    event.create('endstone_fluid')
			.thickTexture(0xeef6b4)
			.bucketColor(0xeef6b4)
			.displayName('Liquid End')
		event.create('ash_water')
			.thickTexture(0xa5afaf)
			.bucketColor(0xa5afaf)
			.displayName('Alkaline Solution')
		event.create('dirt_water')
			.thinTexture(0xc18551)
			.bucketColor(0xc18551)
			.displayName('Dirty Water')
		event.create('electrolyte')
			.thinTexture(0xd6d842)
			.bucketColor(0xd6d842)
			.displayName('Electrolyte')
    event.create('tnt1')
			.thinTexture(0xDDE2E5)
			.bucketColor(0xDDE2E5)
			.displayName('Titanium Tetrachloride')
    event.create('tnt2')
			.thinTexture(0xD1D19A)
			.bucketColor(0xD1D19A)
			.displayName('Heated Titanium Tetrachloride')
    event.create('tnt5')
			.thinTexture(0xF080FE)
			.bucketColor(0xF080FE)
			.displayName('Argon')
    event.create('tnt6')
			.thinTexture(0x008FEB)
			.bucketColor(0x008FEB)
			.displayName('Brine')
		event.create('sif4')
			.thinTexture(0xaec1c1)
			.displayName('Silicon Tetrafluoride')
		event.create('sif2')
			.thinTexture(0x97bfc4)
			.displayName('Silicon Diofluoride')

    // event.create('udmh')
		// 	.thickTexture(0x4054a5)
		// 	.bucketColor(0x4054a5)
		// 	.displayName('1,1-dimethylhydrazine')
		// event.create('ethanol')
		// 	.thinTexture(0xedaf53)
		// 	.bucketColor(0xedaf53)
		// 	.displayName('Ethanol')
    // event.create('methanol')
		// 	.thinTexture(0xdbbb87)
		// 	.bucketColor(0xdbbb87)
		// 	.displayName('Methanol')
    // event.create('hypochlorous_acid')
		// 	.thickTexture(0x3a878e)
		// 	.bucketColor(0x3a878e)
		// 	.displayName('Hypochlorous Acid')
    // event.create('mercury')
		// 	.thickTexture(0x8c8c8c)
		// 	.bucketColor(0x8c8c8c)
		// 	.displayName('Mercury')

})

ItemEvents.modification(event => {
	event.modify('ad_astra:hammer', item => {item.maxDamage = 50})
	
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify('ae2:' + element + '_paint_ball', item => {
			item.maxStackSize = 1
		})
	});

})
BlockEvents.modification(event => {

})
