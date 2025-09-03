const {EmbedBuilder} = require('discord.js')

async function getJoke(category = 'Any') {
    const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,sexist'

    const res = await fetch(url);

    if(!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

     return data.type === 'single'
    ? data.joke
    : `${data.setup}\n\n**${data.delivery}**`;
}

function makeJokeEmbed(text)
{
    return new EmbedBuilder()
    .setTitle("Heres a Joke 🤡")
    .setDescription(text)
    .setColor(0x5865f2)
    .setTimestamp();
}



module.exports = {getJoke , makeJokeEmbed}