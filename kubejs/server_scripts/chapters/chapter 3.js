let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let CR = (id, x) => MOD("create", id, x)
let GB = (id, x) => MOD("gearbox", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let F = (id, x) =>  MOD("forge", id, x)
let AL = (id, x) => MOD("alloyed", id, x)

ServerEvents.recipes((bot) => {

    bot.recipes.gearbox.pumpjack(Fluid.of("gearbox:petroleum", 250), [],"minecraft:desert")
    bot.recipes.gearbox.pumpjack(Fluid.of("gearbox:petroleum", 300), [],"minecraft:swamp")
    bot.recipes.gearbox.pumpjack(Fluid.of("gearbox:petroleum", 100), [],"minecraft:ocean")

    bot.recipes.createMixing(Fluid.of(KJ("oil_brine"), 270), [Fluid.of(GB("petroleum"), 250), Fluid.of(MC("water"), 20)] )
    bot.recipes.gearboxElectrolyzing([Fluid.of(KJ("desalted_oil"), 250), GB("salt_dust"), Item.of(MC("sand")).withChance(0.2)], Fluid.of(KJ("oil_brine"), 270)).energy(100).superheated()

// auxiliary recipes
    bot.recipes.gearboxElectrolyzing([Fluid.of(GB("hydrogen"), 60), Fluid.of(GB("oxygen"), 30)], Fluid.of(MC("water"), 90)).energy(150)
    bot.recipes.gearboxElectrolyzing([Fluid.of(GB("hydrogen"), 300), GB("sulfur_dust")], Fluid.of(GB("hydrogen_sulfide"), 300)).energy(100)
    bot.recipes.gearboxElectrolyzing([Fluid.of(GB("chlorine"), 500), GB("caustic_soda")], [Fluid.of(MC("water"), 1000), GB("salt_dust")]).energy(100)
    bot.recipes.createMixing([Fluid.of("kubejs:sulfuric_acid", 1000), CR("golden_sheet")], [Fluid.of("minecraft:water", 1000), GB("sulfur_dust"), CR("golden_sheet")])
    bot.recipes.createMixing([Fluid.of("gearbox:steam", 500)], Fluid.of("minecraft:water", 100)).heated()
    bot.recipes.createMixing([Fluid.of("gearbox:air", 500), CR("propeller")], CR("propeller"))

    bot.recipes.gearboxDistilling([
        Fluid.of("kubejs:oil", 1000),
        Fluid.of("kubejs:light_naphta", 150),
        Fluid.of("gearbox:volatile_gas", 150),
        ],
        Fluid.of("kubejs:desalted_oil", 1300)
    ).mode("distil_flash")

    let merox = (ingredient, results) =>{
        bot.recipes.createMixing([ Item.of("gearbox:caustic_soda").withChance(0.5)].concat(results) , [ingredient, GB("caustic_soda")])
    }
    let desulfurize = (ingredient_name) =>{
        bot.recipes.createMixing([ Fluid.of("gearbox:hydrogen_sulfide", 100), Fluid.of("kubejs:desulfurized_" + ingredient_name, 500)] , [Fluid.of("kubejs:" + ingredient_name, 600), Fluid.of("gearbox:hydrogen", 100) ]).heated()}

    merox(Fluid.of("gearbox:volatile_gas", 1000), [Fluid.of("gearbox:butane", 300), Fluid.of("gearbox:propane", 1000)])
    bot.recipes.createMixing(Fluid.of("gearbox:lpg", 1000), [Fluid.of("gearbox:butane", 300), Fluid.of("gearbox:propane", 700)])

    bot.recipes.createMixing(Fluid.of("gearbox:ethylene", 200), [Fluid.of("kubejs:light_naphta", 500), Fluid.of("gearbox:steam", 1000)]).heated()
    bot.recipes.createMixing(Fluid.of("kubejs:plastic", 1000), [Fluid.of("gearbox:ethylene", 1000), Fluid.of("gearbox:air", 1000)])

    bot.recipes.gearboxDistilling([
        Fluid.of("kubejs:oil_residue",  300),
        Fluid.of("kubejs:light_gas_oil",150),
        Fluid.of("kubejs:heavy_diesel", 200),
        Fluid.of("kubejs:light_diesel", 100),
        Fluid.of("kubejs:kerosene",     100),
        Fluid.of("kubejs:heavy_naphta", 150)
        ],
        Fluid.of("kubejs:oil", 1000)
    ).mode("distil_atmospheric")

    desulfurize("heavy_naphta")
    desulfurize("kerosene")
    desulfurize("heavy_diesel")
    desulfurize("light_diesel")

    merox(Fluid.of("kubejs:desulfurized_kerosene", 1000), [Fluid.of("ad_astra:fuel", 100)])

    bot.recipes.gearboxDistilling([
        Fluid.of("kubejs:heavy_oil_residue", 200),
        Fluid.of("kubejs:heavy_gas_oil", 200 ),
        Fluid.of("kubejs:light_gas_oil", 100 )],
        Fluid.of("kubejs:oil_residue", 500)
    ).mode("distil_vacuum")

    bot.recipes.createCompacting([GB("petroleum_coke", 3), Fluid.of("kubejs:fuel_oil", 300)], Fluid.of("kubejs:heavy_oil_residue", 600)).heated()

    let hydrocrack = (results, ingredient, catalyst) =>{
        bot.recipes.createMixing(results.concat([catalyst]), [ingredient, Fluid.of("gearbox:hydrogen", 100), catalyst]).heated()
    }
    let catalyst_crack = (results, ingredient, catalyst) =>{
        bot.recipes.createMixing(results.concat([catalyst]), [ingredient, catalyst]).heated()
    }

    bot.recipes.createMixing(Fluid.of("kubejs:hydrotreated_gas_oil", 500), [Fluid.of("kubejs:light_gas_oil", 500), Fluid.of("gearbox:hydrogen", 100)]).heated()

    catalyst_crack([Fluid.of("kubejs:fuel_oil", 300), Fluid.of("kubejs:heavy_naphta", 200)], Fluid.of("kubejs:hydrotreated_gas_oil", 500), CR("polished_rose_quartz"))
    bot.recipes.createMixing(Fluid.of("kubejs:alkylate", 200), [Fluid.of("kubejs:hydrotreated_gas_oil", 500), Fluid.of("kubejs:sulfuric_acid", 500)])

    hydrocrack([Fluid.of("kubejs:heavy_diesel", 100), Fluid.of("kubejs:hydrocracked_gasoline", 400)], Fluid.of("kubejs:heavy_gas_oil", 500), CR("polished_rose_quartz"))
    hydrocrack([Fluid.of("kubejs:desulfurized_light_diesel", 400)], Fluid.of("kubejs:desulfurized_heavy_diesel", 500), CR("polished_rose_quartz"))

    bot.recipes.createMixing(Fluid.of("kubejs:untreated_gasoline", 800), [Fluid.of("kubejs:desulfurized_heavy_naphta", 500), Fluid.of("kubejs:hydrocracked_gasoline", 300)])
    bot.recipes.createMixing(Fluid.of("kubejs:gasoline", 1000), [Fluid.of("kubejs:alkylate", 200), Fluid.of("kubejs:untreated_gasoline", 800)])

    bot.recipes.createMixing([Fluid.of("kubejs:lubricant", 200), GB("asphalt", 2)], [Fluid.of("kubejs:fuel_oil", 300), Fluid.of("gearbox:propane", 100)])
    bot.recipes.gearboxCompressing(GB("asphalt"), Fluid.of("kubejs:heavy_oil_residue", 200))

    bot.recipes.gearboxPyroprocessing(TE('coal_coke'), MC('coal'))
    bot.recipes.createMixing(Fluid.of(BC('molten_steel'), 90), [Fluid.of(TC('molten_iron'), 90), GB('petroleum_coke')]).heated()
    bot.recipes.createMixing(Fluid.of(BC('molten_steel'), 90), [Fluid.of(TC('molten_iron'), 90), TE('coal_coke')]).heated()

    bot.shaped(GB('distillation_output'), [
        'SSS',
        'VFP',
        'SSS'
    ], {S: AL('steel_sheet'), V: CR('fluid_valve'), F: CR('smart_fluid_pipe'), P: GB('steel_fluid_pipe')})
    bot.shaped(GB('distillation_controller'), [
        'SSS',
        'FPV',
        'SSS'
    ], {S: AL('steel_sheet'), V: CR('stressometer'), F: AL('steel_casing'), P: KJ('brass_machine')})
	bot.shaped(KJ('explosive_machine'), [
			'SSS',
			'SCS',
			'SSS'
		], {C: 'alloyed:steel_casing', S: KJ('explosive_mechanism')})
    bot.shaped(GB('steel_fluid_pipe', 6), [
        'SCS'
    ], {C: AL('steel_ingot'), S: AL('steel_sheet')})
    bot.shaped(GB('steel_fluid_pipe', 6), [
        'S', 'C', 'S'
    ], {C: AL('steel_ingot'), S: AL('steel_sheet')})


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
		bot.recipes.createFilling(t, [t, Fluid.of("kubejs:desulfurized_light_diesel",  90)]),
		bot.recipes.createFilling(t, [t, Fluid.of("kubejs:gasoline", 120)]),
		bot.recipes.createFilling(t, [t, Fluid.of("kubejs:lubricant", 120)]),
		bot.recipes.createFilling(t, [t, Fluid.of("gearbox:lpg", 120)]),
		bot.recipes.gearboxMechanizing(t, t)
	]).transitionalItem(t)
		.loops(1)

})
