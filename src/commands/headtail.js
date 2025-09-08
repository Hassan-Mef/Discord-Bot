module.exports = {
  data: {
    name: "headtail",
    description: "Flips a coin and gives Head or Tail",
  },
  async execute(interaction) {
    const result = Math.random() > 0.5 ? "Heads 🎉" : "Tails 🎉";
    await interaction.reply(`You got ${result}`);
  },
};
