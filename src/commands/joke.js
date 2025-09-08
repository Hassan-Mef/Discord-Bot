const { getJoke, makeJokeEmbed } = require('../jokeAPI');

module.exports = {
  data: {
    name: 'joke',
    description: 'Get a random Joke',
    options: [
      {
        name: 'category',
        description: 'Type of Joke',
        type: 3, // STRING
        required: false,
        choices: [
          { name: 'Any', value: 'Any' },
          { name: 'Programming', value: 'Programming' },
          { name: 'Dark', value: 'Dark' },
        ],
      },
    ],
  },
  async execute(interaction) {
    await interaction.deferReply();
    try {
      const joke = await getJoke();
      const embedJoke = makeJokeEmbed(joke);
      await interaction.editReply({ embeds: [embedJoke] });
    } catch (err) {
      console.error(err);
      await interaction.editReply("⚠️ Sorry, I couldn't fetch a joke right now.");
    }
  },
};
