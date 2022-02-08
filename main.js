const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_PRESENCES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_MESSAGE_TYPING", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILD_VOICE_STATES"], partials: ["MESSAGE", "CHANNEL", "REACTION" ] });

const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Cjbot is online!');
});

client.on('guildMemberAdd', guildMember =>{
    guildMember.guild.channels.cache.get('940440886171557929').send(`@welc welcome <@${guildMember.user.id}>, you are member <@${message.guild.memberCount}>!!`)
    guildMember.guild.channels.cache.get('940440886171557929').send(` `)
    guildMember.guild.channels.cache.get('940440886171557929').send(`➤ #rules for regulations `)
    guildMember.guild.channels.cache.get('940440886171557929').send(`➤ #instructions for hiring instructions `)
    guildMember.guild.channels.cache.get('940440886171557929').send(`➤ #roles for reaction roles `)
    guildMember.guild.channels.cache.get('940440886171557929').send(`➤ #media for media information `)
    guildMember.guild.channels.cache.get('940440886171557929').send(`➤ #chat for community chatting `)
    guildMember.guild.channels.cache.get('940440886171557929').send(` `)
    guildMember.guild.channels.cache.get('940440886171557929').send(`https://tenor.com/view/sea-ocean-splash-wave-gif-11243506 `)
});

client.on('guildMemberRemove', guildMember =>{
    guildMember.guild.channels.cache.get('940440886171557929').send(`User <@${guildMember.user.id}> left and has now been declared mega cringe`)
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'tiktok'){
        client.commands.get('tiktok').execute(message, args);
    } 

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } 
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } 
    
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } 
});

client.login('************************')
