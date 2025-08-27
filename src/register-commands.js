require("dotenv").config();
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
  {
    name: "cr",
    description: "Mentions the CR",
  },
  {
    name: "ping",
    description: "Pings a user",
    options: [
      {
        name: "user",
        description: "User to ping",
        type: 6, // Type 6 represents a user
        required: true, // Set to true if you want this option to be mandatory
      },
    ],
  },
  {
    name: "headtail", // must be lowercase, no spaces
    description: "Flips a coin and gives Head or Tail",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Resgistering slah Commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Slash Commands registered");
  } catch (error) {
    console.log(`There was an error ${error}`);
  }
})();
