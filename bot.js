const Discord = require("discord.js");
const bot = new Discord.Client();
const request = require('request');

const prefix = "h!";

bot.on("ready", () => {
	console.log("Połączony.");
	console.log("Gotowy!\n");

	var i = 0;
    var loop = setInterval(function() {
        i++;
        if(i > 3) i = 1;

        var time = new Date();

        if(i == 1) bot.user.setPresence({game: {name: "Zboki z was 😒😒", url: "https://www.twitch.tv/#"}});
        else if (i == 2) bot.user.setPresence({game: {name: "I na co się patrzysz?", url: "https://www.twitch.tv/#"}});
        else if (i == 3) bot.user.setPresence({game: {name: "Jest tu " + bot.users.size + " zboków 😒", url: "https://www.twitch.tv/#"}});
    }, 30000);
});

var i = 0;

bot.on("message", async msg => {
	if(msg.author.bot) return;
	if(!msg.guild) {
		i++;
		if(i > 21) i = 1;

		if(i == 1) msg.reply("Czego ty chcesz ode mnie zboku 😒");
		else if(i == 2) msg.reply("Serio? Nie masz nic do roboty?");
		else if(i == 3) msg.reply("Jeśli nie przestaniesz to zablokuje cię..");
		else if(i == 4) msg.reply("Napewno tego chcesz?");
		else if(i == 5) msg.reply("Widzę, że chcesz.. Dam ci szansę, nie pisz do mnie.");
		else if(i == 6) msg.reply("Dobra blokuję cie zboku 😒");
		else if(i == 7) return;
		else if(i == 8) return;
		else if(i == 9) return;
		else if(i == 10) return;
		else if(i == 11) return;
		else if(i == 12) return;
		else if(i == 13) return;
		else if(i == 14) return;
		else if(i == 15) return;
		else if(i == 16) return;
		else if(i == 17) return;
		else if(i == 18) return;
		else if(i == 19) return;
		else if(i == 20) return;
		else if(i == 21) msg.reply("Serio? Ciągle do mnie piszesz? 😒");
	}
    try {
        var response = msg.guild.name + " > " + msg.channel.name + " > " + msg.author.username + " > " + msg.content;
    } catch(e) {
        var response = "DM > " + msg.author.username + " > " + msg.content;
    }
    console.log(response);

    if(msg.content.includes("cycki") || msg.content.includes("kocham cie") || msg.content.includes("hentai") || msg.content.includes("anal")) {
    	msg.reply("zbok 😒");
    }

});

console.log("Łączenie..");
bot.login(process.env.BOT_TOKEN)