module.exports = {
  data: {
    name: "cr",
    description: "Mentions the CR",
  },
  async execute(interaction) {
    const roleId = "1277942802763878453";
    const roleMention = `<@&${roleId}>`;
    await interaction.reply(`Attention, ${roleMention}! Someone is looking for you !!`);
  },
};
