const Discord = require("discord.js");
const bot = new Discord.Client();
const request = require('request');

const rn = require('random-number');
var options = {
	min: 1800000,
	max: 18000000,
	integer: true
}

const prefix = "h!";

var blacklist = {}

bot.on("ready", () => {
	console.log("Połączony.");
	console.log("Gotowy!\n");

	var z = 0;
	var i = 0;
    var loop = setInterval(function() {
        i++;
        if(i > 2) i = 1;

        var time = new Date();

        if(i == 1) bot.user.setPresence({game: {name: "Jak zrobić animacje w MMD", url: "https://www.youtube.com/watch?v=CxTWKIoQu2I", type: 'WATCHING'}});
        else if (i == 2) bot.user.setPresence({game: {name: bot.users.size + " zboków 😒", url: "https://www.youtube.com/watch?v=CxTWKIoQu2I", type: "LISTENING"}});
    }, 60000);

    var loop2 = setInterval(function() {
    	var slowkaLosowe = [
    	"Co tam ludzie?",
    	"Hej",
    	"Siemanko",
    	"Cześć",
    	"Co u was?",
    	"Ale zboki z was 😒",
    	"😒😒😒",
    	"Zobaczcie mój nowy vocaloid",
    	"Zaraz wam dyktature zrobię, tak jak za starych czasów",
    	"Chodzę do szkoły atystycznej i jedyna skupiam się na mandze",
    	"Nie lubię martwej natury",
    	"Skończyłam Dangaronpę",
    	"Kto z was oglądał Re:Zero?"
    	];

    	z++;
    	if(z > 2) z = 1;

    	if (z == 1) bot.channels.get("226663040513343488").send(slowkaLosowe[Math.floor(Math.random() * slowkaLosowe.length)]);
    	else if (z == 2) bot.channels.get("226663040513343488").send(slowkaLosowe[Math.floor(Math.random() * slowkaLosowe.length)]);
    }, rn(options));
});

var i = 0;
var x = 0;

bot.on("message", async msg => {
	if(msg.author.bot) return;
	if(blacklist[msg.author.id]) return;

	if(!msg.guild) {
		i++;
		if(i > 7) i = 1;

		if(!blacklist[msg.author.id]) {
			if(i == 1) msg.reply("Czego ty chcesz ode mnie zboku 😒");
			else if(i == 2) msg.reply("Serio? Nie masz nic do roboty?");
			else if(i == 3) msg.reply("Jeśli nie przestaniesz to zablokuje cię..");
			else if(i == 4) msg.reply("Napewno tego chcesz?");
			else if(i == 5) msg.reply("Widzę, że chcesz.. Dam ci szansę, nie pisz do mnie.");
			else if(i == 6) msg.reply("Dobra blokuję cie zboku 😒");
			else if(i == 7) blacklist[msg.author.id] = 1;
		} else return;
	}
    try {
        var response = msg.guild.name + " > " + msg.channel.name + " > " + msg.author.username + " > " + msg.content;
    } catch(e) {
        var response = "DM > " + msg.author.username + " > " + msg.content;
    }
    console.log(response);

    if(msg.content.toLowerCase().includes("cycki") || msg.content.toLowerCase().includes("kocham cie") || msg.content.toLowerCase().includes("hentai") || msg.content.toLowerCase().includes("anal")) {
    	msg.reply("zbok 😒");
    }

    if(msg.content.includes("<@483650694461521921>") || msg.content.toLowerCase().includes("hepi")) {
    	x++;
    	if(x > 13) x = 1;

    	if(x == 1) msg.channel.send("Spadaj 😒");
    	else if(x == 2) msg.channel.send("Mówiłam, żebyś spadał 😒😒");
    	else if(x == 3) msg.channel.send("Zboku odczep się 😒");
    	else if(x == 4) msg.channel.send("...");
    	else if(x == 5) msg.reply("to zbok 😒 @everyone");
    	else if(x == 6) msg.channel.send("Już yorek jest od ciebie lepszy");
    	else if(x == 7) msg.channel.send("Myślisz, że jesteś fajny? ..Zboku 😒");
    	else if(x == 8) msg.channel.send("Wole yorka niż ciebie");
    	else if(x == 9) msg.channel.send("Jesteś wkurzający...");
    	else if(x == 10) msg.channel.send("Spadaj ode mnie, albo wystawię twoją nerkę na olx 😒");
    	else if(x == 11) msg.channel.send("Phi");
    	else if(x == 12) msg.channel.send("Widziałam rzeczy brutalniejsze");
    	else if(x == 13) msg.channel.send("Hmm");
    }

    if(msg.content.startsWith(prefix + "segz")) {
    	msg.delete();
    	msg.author.send("No hej misiaczku :)", {
    		file: "https://cdn.discordapp.com/attachments/483422732940214282/483540125372907521/1531072136425.png"
    	});

    }
});

console.log("Łączenie..");
bot.login(process.env.BOT_TOKEN)
