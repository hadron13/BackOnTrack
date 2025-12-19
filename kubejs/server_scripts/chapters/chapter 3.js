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

	bot.custom({
  "type": "gearbox:distilling",
  "mode": "distil_flash",
  "ingredients": [
    {"fluid": KJ("desalted_oil"),
      "amount": 250}], "results": [
    {"fluid": CI("heavy_oil"),
      "amount": 120},
    {"fluid": CI("diesel"),
      "amount": 90},
    {"fluid": CI("kerosene"),
      "amount": 70},
    {"fluid": CI("naphtha"),
      "amount": 70},
    {"fluid": CI("gasoline"),
      "amount": 90},
    {"fluid": CI("lpg"),
      "amount": 70}],
  "processingTime": 60
})

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