require('dotenv').config();
const {Client , IntentsBitField} = require('discord.js');

const client = new Client(
    {
        intents : [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.MessageContent,



        ],
});

client.on('ready', (c)=> {
    console.log(`❤ ${c.user.tag} is online `);
});

client.on('messageCreate' , (message) =>{

    if(message.author.bot) {
        return;
    }
    if (message.content === 'Hello') {
        message.reply('Hey!');

    }
    if (message.content === 'Shit') {
        message.reply('Hey! NO Swearing 😡' )

    }
    if(message.content === 'gg') {
        message.react('😀')
    }
    if(message.content === 'Good Morning') {
        message.reply(' Good Morning @everyone')
    }
   if (message.content === "nigga") {
     // Replace USER_ID with the actual user's ID
     const userId = "1120256018874650735"; // Example user ID

     // Mention the user in the reply
     message.reply(`oh the only nigga i know is  <@${userId}>`);
   }
   if (message.content === "hitler") {
     // Replace USER_ID with the actual user's ID
     const userId = "356405780116930563"; // Example user ID

     // Mention the user in the reply
     message.reply(`Best Man in history  <@${userId}>`);
   }


    
});

// client.on('interactionCreate' ,  (interaction) => {
//     if (!interaction.isChatInputCommand()) return ;

//     if (interaction.commandName === 'hey') {
//         interaction.reply('Hey big man');
//     }
// });

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "cr") {
    
    const roleId = "1277942802763878453";

    
    const roleMention = `<@&${roleId}>`;

    
    await interaction.channel.send(
      `Attention, ${roleMention}! Someone is looking for you !!.`
    );
  }
});


client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === "ping") {
    
    const userId = options.getUser("user").id;


    const user = await client.users.fetch(userId);

    
    interaction.reply(`Hello, ${user}! 🌟`);
  }
});


client.login(process.env.TOKEN);

