WorldgenEvents.remove(event => {
    let tfmgOreList =[
        'tfmg:lead_ore',
        'tfmg:deepslate_lead_ore',
        'tfmg:deepslate_nickel_ore',
        'tfmg:nickel_ore',
        'tfmg:sulfur'
    ];

    event.removeOres (props => {
        props.blocks = tfmgOreList
    });

});
