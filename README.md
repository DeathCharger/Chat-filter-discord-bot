# Automatic Chat Filter Discord Bot (Self hostable, 24/7 replit method also included)
- A fully cutomisable javascript discord bot that blocks certain blocks users from sending certin "blacklisted" messages in chat
- Can be useful for small servers who want to have their own bot !
- Normal Chat filtering bots work if the blacklisted word is present as a single word. The issue with this is that if any member uses the "blacklisted word" in between a another word without adding spaces the bots wont detect it

- This Bot searches for the keyword even if present in-between another word or in **uppercase or lowercase**

## Customisable features

- Custom Bot activity (Listening,Watching,Playing)
- Can add a code which will add a role when someone triggers the bot and removes it later (Code provided in extra.txt, Useful for temporary mute and stuff)

- Custom replies 

## Dependencies 
 > Install node.js [Select add to path]
Open console and use `npm install discord.js`

# How to run the bot

- First of all you need to make a bot application in discord devloper's portal (There are plenty of videos on web)
- Then you need to get the bot token and insert it in `config.json`
- Then you can edit the `index.js` file and customise it according to your needs 
- You will have to fill the words you need to Filter in the `config.json` (Otherwise the bot may glitch, an example is already given in config.json)
- Then use node index.js
- The bot will come online and start filtering (You will have to add the bot to your server)
- Can add more blacklisted words if you want

## Making it 24/7 using replit

- You can host this bot on replit
- Choose import from github and clone this into replit
- In console, Use `npm install discord.js` 
- Fill in the information in  `config.json` 
- Edit the reply message and custom status if you want in `index.js`
- Click the run button
- Bot runs

# Making it 24/7

The code launches a http server, the adress of the server will be shown above the console
Copy the adress and add a http monitor in UPTIMEROBOT
Follow the instructions given there and complete instructions


## Notes
# Additional

There is a code provided in extra.txt . The purpose of the code is to add a role to a person for ceratin time and remove it
It is useful to add a little punishment for abusers as you can give them mute automatically for a specific period of time

# Crash issues

- No values in config.json
- Typo
- If the bot can't find a Muted role (default) [You can change it]

# If you have any trouble with the bot feel free to dm me in discord DeathCharger#9995

