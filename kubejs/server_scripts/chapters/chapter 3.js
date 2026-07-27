let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let CR = (id, x) => MOD("create", id, x)
let GB = (id, x) => MOD("gearbox", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let AL = (id, x) => MOD("alloyed", id, x)
let PC = (id, x) => MOD("petrochem", id, x)

ServerEvents.recipes((bot) => {

    bot.remove({mod: "petrochem"})

    bot.custom({ "type": "petrochem:gasoline_engine_fuel", "ingredients": [{"fluid": "petrochem:gasoline", "amount": 1}], "results": [], "processingTime": 20 })
    bot.custom({ "type": "petrochem:diesel_engine_fuel", "ingredients": [{"fluid": "petrochem:diesel", "amount": 1}], "results": [], "processingTime": 20 })

    bot.recipes.petrochem.pumpjack(Fluid.of("petrochem:petroleum", 100), [],"minecraft:desert")
    bot.recipes.petrochem.pumpjack(Fluid.of("petrochem:petroleum", 90), [],"minecraft:swamp")
    bot.recipes.petrochem.pumpjack(Fluid.of("petrochem:petroleum", 50), [],"minecraft:ocean")
    bot.recipes.petrochem.pumpjack(Fluid.of("petrochem:petroleum", 70), [],"minecraft:deep_ocean")
    bot.recipes.petrochem.pumpjack(Fluid.of("petrochem:petroleum", 150), [],"minecraft:jungle")
    bot.recipes.petrochem.pumpjack(Fluid.of("petrochem:petroleum", 150), [],"minecraft:deep_cold_ocean")



    bot.recipes.createMixing(Fluid.of(PC("oil_brine"), 270), [Fluid.of(PC("petroleum"), 250), Fluid.of(MC("water"), 20)] )
    bot.recipes.petrochemElectrolyzing([Fluid.of(PC("desalted_oil"), 250), PC("salt_dust"), Item.of(MC("sand")).withChance(0.2)], Fluid.of(PC("oil_brine"), 270)).energy(100).superheated()

// auxiliary recipes
    bot.recipes.petrochemElectrolyzing([Fluid.of(PC("hydrogen"), 60), Fluid.of(PC("oxygen"), 30)], Fluid.of(MC("water"), 90)).energy(150)
    bot.recipes.petrochemElectrolyzing([Fluid.of(PC("hydrogen"), 300), PC("sulfur_dust")], Fluid.of(PC("hydrogen_sulfide"), 300)).energy(100)
    bot.recipes.petrochemElectrolyzing([Fluid.of(PC("chlorine"), 500), PC("caustic_soda")], [Fluid.of(MC("water"), 1000), PC("salt_dust")]).energy(100)
    bot.recipes.createMixing([Fluid.of("petrochem:sulfuric_acid", 1000), CR("golden_sheet")], [Fluid.of("minecraft:water", 1000), PC("sulfur_dust"), CR("golden_sheet")])
    bot.recipes.createMixing([Fluid.of("petrochem:steam", 500)], Fluid.of("minecraft:water", 100)).heated()
    bot.recipes.createMixing([Fluid.of("petrochem:air", 500), CR("propeller")], CR("propeller"))

    bot.recipes.petrochemDistilling([
        Fluid.of("petrochem:oil", 1000),
        Fluid.of("petrochem:light_naphta", 150),
        Fluid.of("petrochem:volatile_gas", 150),
        ],
        Fluid.of("petrochem:desalted_oil", 1300)
    ).mode("distil_flash")

    let merox = (ingredient, results) =>{
        bot.recipes.createMixing([ Item.of("petrochem:caustic_soda").withChance(0.5)].concat(results) , [ingredient, PC("caustic_soda")])
    }
    let desulfurize = (ingredient_name) =>{
        bot.recipes.createMixing([ Fluid.of("petrochem:hydrogen_sulfide", 100), Fluid.of("petrochem:desulfurized_" + ingredient_name, 500)] , [Fluid.of("petrochem:" + ingredient_name, 600), Fluid.of("petrochem:hydrogen", 100) ]).heated()}

    merox(Fluid.of("petrochem:volatile_gas", 1000), [Fluid.of("petrochem:butane", 300), Fluid.of("petrochem:propane", 1000)])
    bot.recipes.createMixing(Fluid.of("petrochem:lpg", 1000), [Fluid.of("petrochem:butane", 300), Fluid.of("petrochem:propane", 1000)])

    bot.recipes.createMixing(Fluid.of("petrochem:ethylene", 200), [Fluid.of("petrochem:light_naphta", 500), Fluid.of("petrochem:steam", 1000)]).heated()
    bot.recipes.createMixing(Fluid.of("petrochem:plastic", 1000), [Fluid.of("petrochem:ethylene", 1000), Fluid.of("petrochem:air", 1000)])

    bot.recipes.petrochemDistilling([
        Fluid.of("petrochem:oil_residue",  300),
        Fluid.of("petrochem:light_gas_oil",150),
        Fluid.of("petrochem:heavy_diesel", 200),
        Fluid.of("petrochem:light_diesel", 100),
        Fluid.of("petrochem:kerosene",     100),
        Fluid.of("petrochem:heavy_naphta", 150)
        ],
        Fluid.of("petrochem:oil", 1000)
    ).mode("distil_atmospheric")

    desulfurize("heavy_naphta")
    desulfurize("kerosene")
    desulfurize("heavy_diesel")
    desulfurize("light_diesel")

    merox(Fluid.of("petrochem:desulfurized_kerosene", 1000), [Fluid.of("ad_astra:fuel", 100)])

    bot.recipes.petrochemDistilling([
        Fluid.of("petrochem:heavy_oil_residue", 200),
        Fluid.of("petrochem:heavy_gas_oil", 200 ),
        Fluid.of("petrochem:light_gas_oil", 100 )],
        Fluid.of("petrochem:oil_residue", 500)
    ).mode("distil_vacuum")

    bot.recipes.createCompacting([PC("petroleum_coke", 3), Fluid.of("petrochem:fuel_oil", 300)], Fluid.of("petrochem:heavy_oil_residue", 600)).heated()

    let hydrocrack = (results, ingredient, catalyst) =>{
        bot.recipes.createMixing(results.concat([catalyst]), [ingredient, Fluid.of("petrochem:hydrogen", 100), catalyst]).heated()
    }
    let catalyst_crack = (results, ingredient, catalyst) =>{
        bot.recipes.createMixing(results.concat([catalyst]), [ingredient, catalyst]).heated()
    }

    bot.recipes.createMixing([Fluid.of("petrochem:hydrogen_sulfide", 100), Fluid.of("petrochem:hydrotreated_gas_oil", 500)], [Fluid.of("petrochem:light_gas_oil", 500), Fluid.of("petrochem:hydrogen", 100)]).heated()
    bot.recipes.createMixing(Item.of("createbigcannons:cast_iron_ingot", 1), [Fluid.of("tconstruct:molten_iron", 90), Item.of("minecraft:charcoal", 1)]).heated()

    catalyst_crack([Fluid.of("petrochem:fuel_oil", 300), Fluid.of("petrochem:heavy_naphta", 200)], Fluid.of("petrochem:hydrotreated_gas_oil", 500), CR("polished_rose_quartz"))
    bot.recipes.createMixing(Fluid.of("petrochem:alkylate", 200), [Fluid.of("petrochem:hydrotreated_gas_oil", 500), Fluid.of("petrochem:sulfuric_acid", 500)])

    hydrocrack([Fluid.of("petrochem:heavy_diesel", 100), Fluid.of("petrochem:hydrocracked_gasoline", 400)], Fluid.of("petrochem:heavy_gas_oil", 500), CR("polished_rose_quartz"))
    hydrocrack([Fluid.of("petrochem:diesel", 400)], Fluid.of("petrochem:desulfurized_heavy_diesel", 500), CR("polished_rose_quartz"))

    bot.recipes.createMixing(Fluid.of("petrochem:untreated_gasoline", 800), [Fluid.of("petrochem:desulfurized_heavy_naphta", 500), Fluid.of("petrochem:hydrocracked_gasoline", 300)])
    bot.recipes.createMixing(Fluid.of("petrochem:gasoline", 1000), [Fluid.of("petrochem:alkylate", 200), Fluid.of("petrochem:untreated_gasoline", 800)])

    bot.recipes.createMixing([Fluid.of("petrochem:lubricant", 200), PC("asphalt", 2)], [Fluid.of("petrochem:fuel_oil", 300), Fluid.of("petrochem:propane", 100)])
    bot.recipes.rubberworksCompressing(PC("asphalt"), Fluid.of("petrochem:heavy_oil_residue", 200))

    bot.recipes.gearboxPyroprocessing(TE('coal_coke'), MC('coal'))
    bot.recipes.createMixing(Fluid.of(BC('molten_steel'), 90), [Fluid.of(TC('molten_iron'), 90), PC('petroleum_coke')]).heated()
    bot.recipes.createMixing(Fluid.of(BC('molten_steel'), 90), [Fluid.of(TC('molten_iron'), 90), TE('coal_coke')]).heated()

    bot.shapeless(PC('steel_pump'), [CR('cogwheel'), PC('steel_fluid_pipe')])

    bot.shaped(PC('distillation_output'), ['SSS', 'VFP', 'SSS'], {S: AL('steel_sheet'), V: CR('fluid_valve'), F: CR('smart_fluid_pipe'), P: PC('steel_fluid_pipe')})
    bot.shaped(PC('distillation_controller'), ['SSS', 'FPV', 'SSS'], {S: AL('steel_sheet'), V: CR('stressometer'), F: AL('steel_casing'), P: KJ('brass_machine')})
	bot.shaped(KJ('explosive_machine'), ['SSS', 'SCS', 'SSS'], {C: 'alloyed:steel_casing', S: KJ('explosive_mechanism')})
    bot.shaped(PC('steel_fluid_pipe', 6), ['SCS'], {C: AL('steel_ingot'), S: AL('steel_sheet')})
    bot.shaped(PC('steel_fluid_pipe', 6), ['S', 'C', 'S'], {C: AL('steel_ingot'), S: AL('steel_sheet')})

    bot.shaped(PC('medium_engine'), ['SLS', 'BMF', 'TCT'], {T: 'alloyed:steel_block', C: KJ('explosive_machine'), S: CR('steam_engine'), L: CR('stock_link'), B: AL('bronze_block'), M: PC('small_engine'), F: PC('flarestack')})
    bot.shaped(PC('small_engine'), ['B B', 'SCS', 'DMD'], {B: AL('bronze_ingot'), S: CR('steam_engine'), D: AL('steel_block'), C: CR('stressometer'), M: KJ('explosive_machine')})
    bot.shaped(PC('flarestack'), ['S S', 'SCS', 'IBI'], {B: AL('bronze_ingot'), I: CR('industrial_iron_block'), S: AL('steel_ingot'), C: CR('empty_blaze_burner')})

	bot.custom({
		"type": "tconstruct:casting_table",
		"cast": { "item": TC("coin_cast") },
		"cast_consumed": false,
		"fluid": { "name": "createbigcannons:molten_steel", "amount": 180 },
		"result": { "item": KJ("steel_ring") },
		"cooling_time": 60
	})

	let t = KJ('incomplete_explosive_mechanism')
	bot.recipes.createSequencedAssembly([
		KJ('explosive_mechanism'),
	], CR('precision_mechanism'), [
		bot.recipes.createDeploying(t, [t, KJ("steel_ring")]),
		bot.recipes.createFilling(t, [t, Fluid.of("petrochem:diesel", 90)]),
		bot.recipes.createFilling(t, [t, Fluid.of("petrochem:gasoline", 120)]),
		bot.recipes.createFilling(t, [t, Fluid.of("petrochem:lubricant", 120)]),
		bot.recipes.createFilling(t, [t, Fluid.of("petrochem:lpg", 120)]),
		bot.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)

})
