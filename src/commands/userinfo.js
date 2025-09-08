const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: {
    name: 'userinfo',
    description: 'Get info about a user',
    options: [
      {
        name: 'target',
        description: 'The user you want info about',
        type: 6, // USER
        required: false,
      },
    ],
  },
  async execute(interaction) {
    const user = interaction.options.getUser("target") || interaction.user;
    const member = await interaction.guild.members.fetch(user.id);

    const embed = new EmbedBuilder()
      .setTitle(`User Info: ${user.tag}`)
      .setThumbnail(user.displayAvatarURL())
      .addFields(
        { name: "ID", value: user.id, inline: true },
        {
          name: "Joined Discord",
          value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`,
          inline: true,
        },
        {
          name: "Joined Server",
          value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`,
          inline: true,
        }
      )
      .setColor(0x5865f2);

    await interaction.reply({ embeds: [embed] });
  },
};
