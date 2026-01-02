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

  bot.recipes.gearboxDistilling([
    Fluid.of("kubejs:lpg", 160), 
    Fluid.of("kubejs:light_oil", 120)], 
    Fluid.of("kubejs:desalted_oil", 375
    )).mode("distil_flash")

  bot.recipes.gearboxDistilling([
    Fluid.of("kubejs:oil_residue", 120),
    Fluid.of("kubejs:naphta", 105),
    Fluid.of("kubejs:gasoline", 120),
    Fluid.of("kubejs:kerosene", 90)],
    Fluid.of("kubejs:light_oil", 240
    )).mode("distil_atmospheric")

  bot.recipes.gearboxDistilling([
    Fluid.of("kubejs:diesel", 130), 
    Fluid.of("kubejs:heavy_oil", 110)], 
    Fluid.of("kubejs:oil_residue", 240
    )).mode("distil_vacuum")

  bot.recipes.gearbox.pumpjack(Fluid.of("gearbox:petroleum", 250), [],"minecraft:desert")
  bot.recipes.gearbox.pumpjack(Fluid.of("gearbox:petroleum", 300), [],"minecraft:swamp")
  bot.recipes.gearbox.pumpjack(Fluid.of("gearbox:petroleum", 100), [],"minecraft:ocean")

  bot.recipes.createMixing(Fluid.of(KJ("oil_brine"), 100), [Fluid.of(GB("petroleum"), 50), Fluid.of(MC("water"), 50)])
  bot.recipes.gearboxElectrolyzing(Fluid.of(KJ("desalted_oil"), 50), Fluid.of(KJ("oil_brine"), 100)).energy(100)

  bot.recipes.createMixing(Fluid.of(BC('molten_steel'), 90), [Fluid.of(TC('molten_iron'), 90), MC('charcoal')]).heated()

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
	bot.shaped(GB('steel_fluid_pipe'), [
		'SCS'
	], {C: AL('steel_ingot'), S: AL('steel_sheet')})
	bot.shaped(GB('steel_fluid_pipe'), [
		'S', 'C', 'S'
	], {C: AL('steel_ingot'), S: AL('steel_sheet')})


})