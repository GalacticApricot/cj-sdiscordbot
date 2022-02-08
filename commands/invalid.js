module.exports = {
    name: 'invalid',
    description: "this is a invalid command!",
    execute(message, args){
        message.channel.send('Invalid command, cheeck spelling or type -help for a list of commands');
    }
}
