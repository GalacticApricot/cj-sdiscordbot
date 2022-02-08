module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        
        if(message.member.roles.cache.has('940440886171557929')){
            if(target){
               const memberTarget = message.guild.members.cache.get(target.id);
               memberTarget.kick();
                 message.channel.send(`<@${memberTarget.user.id}> has been given a tough time by the boot`);
            }else{
                 message.channel.send(`You coudn't kick that member!`);
            }
        } else {
            message.channel.send('insufficient permissions');
        }
    }
}
