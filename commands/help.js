exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Help',
            description: `
            m!play <songName> - Play a song from youtube
            m!pause - pause music
            m!resume - resume music
            m!np - Get now playing song's info
            m!skip - Skip to next song
            m!stop - Stop playing music
            m!volume <value> - adjust volume of the music
            m!queue - to see the full song queue
            m!invite - invite the bot
            `,
            color: 'GREEN'
        }
    })
}
