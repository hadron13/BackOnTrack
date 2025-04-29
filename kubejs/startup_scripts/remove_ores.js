WorldgenEvents.remove(event => {
    let tfmgOreList =[
        'tfmg:lead_ore',
        'tfmg:deepslate_lead_ore',
        'tfmg:deepslate_nickel_ore',
        'tfmg:nickel_ore',
        'tfmg:sulfur'
    ];
    
    let metallugyrOreList = [
        'createmetallurgy:wolframite_ore'
    ];

    let IMQUEBRAVELOreList = [
        'create_unbreakable:luminarchy_block',
        'create_unbreakable:philolite_block',
        'forbidden_arcanus:stella_arcanum'
    ];

    event.removeOres (props => {
        props.blocks = tfmgOreList
        props.blocks = metallugyrOreList
        props.blocks = IMQUEBRAVELOreList
    });

});
