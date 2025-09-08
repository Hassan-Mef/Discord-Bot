module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.author.bot) return;

    if (message.content === 'Hello') {
      return message.reply('Hey!');
    }
    if (message.content === 'Shit') {
      return message.reply('Hey! NO Swearing 😡');
    }
    if (message.content === 'gg') {
      return message.react('😀');
    }
    if (message.content === 'Good Morning') {
      return message.reply('Good Morning @everyone');
    }
    if (message.content === "nigga") {
      const userId = "1120256018874650735";
      return message.reply(`oh the only nigga i know is <@${userId}>`);
    }
    if (message.content === "hitler") {
      const userId = "356405780116930563";
      return message.reply(`Best Man in history <@${userId}>`);
    }
  }
};
