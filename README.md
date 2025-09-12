# Discord Bot (Learn / Dev Project)

This is a **Discord bot** built for learning and experimenting with Discord.js v14.  
It’s not meant to be production-ready but serves as a structured project to understand how to build bots with slash commands, events, and modular code organization.

---

## 📂 Project Structure

```
src/
├── commands/        # All slash commands live here
│   ├── hey.js       # Simple "hey" reply
│   ├── cr.js        # Mentions the CR (custom role/user)
│   ├── ping.js      # Pings a selected user
│   ├── headtail.js  # Coin flip game
│   ├── joke.js      # Fetches jokes from JokeAPI
│   └── userinfo.js  # Shows info about a selected user
│
├── events/          # Event listeners
│   ├── ready.js     # Logs when the bot is online
│   └── interactionCreate.js # Handles slash command interactions
│
├── index.js         # Main entry point, loads commands & events
└── register-commands.js # Registers slash commands with Discord API
```

---

## ✨ Features / Commands

- `/hey` → Replies with "hey!"
- `/cr` → Mentions the CR (class rep or designated user)
- `/ping <user>` → Mentions a selected user (ping test)
- `/headtail` → Flips a coin and returns **Heads** or **Tails**
- `/joke [category]` → Fetches a random joke (Any / Programming / Dark)
- `/userinfo [target]` → Shows info about yourself or another user

---

## 🚀 Running the Bot

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with:
   ```
   TOKEN=your-bot-token
   CLIENT_ID=your-client-id
   GUILD_ID=your-guild-id
   ```

3. Register the slash commands:
   ```bash
   node src/register-commands.js
   ```

4. Start the bot:
   ```bash
   node src/index.js
   ```

---

## 📌 Notes

- This project is for **learning purposes** (not production-ready).  
- Code is modularized for clarity: commands are self-contained, events are separated.  
- New features can easily be added by creating a new file in `src/commands/`.  

---
