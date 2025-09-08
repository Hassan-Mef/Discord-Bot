module.exports = {
  data: {
    name: "hey",
    description: "Replies with hey!",
  },
  async execute(interaction) {
    await interaction.reply("Hey big man 👋");
  },
};
