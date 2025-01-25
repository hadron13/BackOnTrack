onEvent('player.logged_in', event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
    //   console.log('mucho texto')
      event.player.stages.add('starting_items')
      // Give some items to player
      event.player.give('ftbquests:book')
    }

  })