module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        message.channel.send('Commands: -youtube, -patreon, -twitter, -help');
    }
}
