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

bot.on("message", async msg => {
	if(msg.author.bot) return;
	if(!msg.guild) {
		i++;
		if(i > 3) i 1;

		if(i == 1) msg.reply("czego ty chcesz ode mnie zboku 😒");
		if(i == 2) msg.reply("serio? Nie masz nic do roboty?");
		if(i == 3) msg.reply("jeśli nie przestaniesz to zablokuje cię..");
		if(i == 4) msg.reply("napewno tego chcesz?");
		if(i == 5) msg.reply("widzę, że chcesz.. Dam ci szansę, nie pisz do mnie.");
		if(i == 6) msg.reply("dobra blokuję cie zboku 😒");
		if(i == 7) return;
		if(i == 8) return;
		if(i == 9) return;
		if(i == 10) return;
		if(i == 11) return;
		if(i == 12) return;
		if(i == 13) return;
		if(i == 14) return;
		if(i == 15) return;
		if(i == 16) return;
		if(i == 17) return;
		if(i == 18) return;
		if(i == 19) return;
		if(i == 20) return;
		if(i == 21) msg.reply("serio? Ciągle do mnie piszesz? 😒");
	}
    try {
        var response = msg.guild.name + " > " + msg.channel.name + " > " + msg.author.username + " > " + msg.content;
    } catch(e) {
        var response = "DM > " + msg.author.username + " > " + msg.content;
    }
    console.log(response);

    var zboczoneSlowa = [
    "cycki",
    "pizda",
    "cipa",
    "kutas",
    "anal",
    "oral",
    "hentai",
    "porno",
    "porn",
    "seks",
    "kocham cie",
    "dupa"
    ];
    if(msg.content.includes(zboczoneSlowa)) {
    	msg.reply("zbok 😒");
    }

});

console.log("Łączenie..");
bot.login(process.env.BOT_TOKEN)