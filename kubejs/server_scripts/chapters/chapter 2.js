let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) =>MOD("ae2", id, x)
let XT = (id, x) => MOD("create_mechanical_extruder", id, x)
let CR = (id, x) => MOD("create", id, x)
let GB = (id, x) => MOD("gearbox", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let F = (id, x) =>  MOD("forge", id, x)

ServerEvents.recipes((bot) => {

})