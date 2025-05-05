ItemEvents.tooltip(event => {
    global.bees.forEach(bee => {
        event.add("kubejs:"+bee.id, bee.description)
    });
});

ClientEvents.lang('en_us', event => {
    global.bees.forEach(bee => {
        event.renameItem('kubejs:'+bee.id, bee.egg_name);
    });
})