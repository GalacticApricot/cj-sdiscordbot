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
    guildMember.guild.channels.cache.get('940440886171557929').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
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

client.on('message', message =>{
    if(!message.member.roles.cache.has('940441543590961223')){
    if(message.content.includes('ass') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('shit') || message.author.bot){
        message.delete()
        }
 
    if(message.content.includes('fuck') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('bitch') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('nigg') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('nig') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('nlg') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('cum') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('porn') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('hentai') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('boob') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('uhh') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('vagina') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('dick') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('Ass') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('Shit') || message.author.bot){
        message.delete()
        }
 
    if(message.content.includes('Fuck') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('Bitch') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('Nigg') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('Cum') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('Porn') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('Hentai') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('Boob') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('Uhh') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('Vagina') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('Dick') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('aSs') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('sHit') || message.author.bot){
        message.delete()
        }
 
    if(message.content.includes('fUck') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('b1tch') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('n!gg') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('cum') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('p0rn') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('hent') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('boob') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('uhh') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('vagina') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('dick') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('faggot') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('shmuck') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('sex') || message.author.bot){
        message.delete()
        }

    if(message.content.includes('horny') || message.author.bot){
        message.delete()
        }
        
    if(message.content.includes('h0rny') || message.author.bot){
        message.delete()
        }

 }

});

client.login('OTQwMzEwMDQ2MTA4MTg0NjY1.YgFh-Q.5YrrXEkrk-qkz6w9eV6wJjSsfVg')
