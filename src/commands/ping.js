module.exports = {
  data: {
    name: 'ping',
    description: 'Ping a user',
    options: [
      {
        name: 'user',
        description: 'User to ping',
        type: 6, // USER
        required: true,
      },
    ],
  },
  async execute(interaction, client) {
    const userId = interaction.options.getUser("user").id;
    const user = await client.users.fetch(userId);
    await interaction.reply(`Hello, ${user}! 🌟`);
  },
};
