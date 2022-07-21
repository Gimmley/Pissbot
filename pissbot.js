// Setup our environment variables via dotenv
require('dotenv').config()
// Import relevant classes from discord.js
const { Client, Intents, Message } = require('discord.js');
const axios = require('axios').default;
// Instantiate a new client with some necessary parameters.
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);
// Notify progress
client.on('ready', function(e){
    console.log(`Logged in as ${client.user.tag}!`)
})
// Authenticate
client.login(process.env.DISCORD_TOKEN)


//variable block
const leadCharacter = "!"

const redditBaseURL = "https://reddit.com/"
const randwierd = [
    "r/dragonsfuckingcars",
    "r/Ooer",
    "r/ButtSharpies",
    "r/Glorp",
    "r/NSFWFunny",
    "r/darkstockphotos",
    "r/ooerintensifies",
    "r/notgayporn",
    "r/consentacles",
    "r/yiff"
  ];
const randhentai = [
      "r/hentai_gif",
      "r/rule34",
      "r/hentai",
      "r/Thighdeology",
      "r/Futanari",
      "r/overwatch_porn",
      "r/Ecchi",
      "r/DekaiHentai",
      "r/hentaimemes",
      "r/ChiisaiHentai",
      "r/Ahegao",
      "r/Monstergirl",
      "r/traphentai",
      "r/waifusgonewild",
      "r/nekomimi",
      "r/kitsunemimi"
  ];
const randCute = [
    "r/aww",
    "r/Eyebleach",
    "r/tippytaps",
    "r/RarePuppers",
    "r/PartyParrot",
    "r/IllegallySmolCats"
];
const randNsfw = [
    "r/NSFW",
    "r/Ass",
    "r/GoneWild",
    "r/NSFW_GIF",
    "r/PAWG",
    "r/BigBoobsGW",
    "r/LipsThatGrip",
    "r/celebnsfw",
    "r/ProneBone",
    "r/biggerthanyouthought",
    "r/RealGirls",
    "r/lesbians"
];
const randSpiders= [
    "r/spiders",
    "r/spiderbro"
];
const lukasList = [
    "https://i.imgur.com/KkdBqfn.png",
    "https://i.imgur.com/2oy4VII.gif",
    "https://i.imgur.com/SOgpR2f.gif",
    "https://i.imgur.com/04ubQ8j.png",
    "https://i.imgur.com/hcLQKXn.jpg",
    "https://i.imgur.com/5Zabsfu.jpg",
    "https://i.imgur.com/bsIZ2HN.jpg",
    "https://i.imgur.com/9XGBt0B.png",
    "https://i.imgur.com/ALXTntQ.png",
    "https://i.imgur.com/5ovKJOM.gif",
    "https://i.imgur.com/Q08U37E.jpg",
    "https://i.imgur.com/z64gzP2.jpg"
];
const danList = [
    "https://i.imgur.com/Ue5UVHN.png",
    "https://i.imgur.com/GfezfEv.png",
    "https://i.imgur.com/VlQbifB.gif",
    "https://i.imgur.com/IdoHV2x.gif",
    "https://i.imgur.com/h5RnRcZ.png",
    "https://i.imgur.com/0gRJCZE.png",
    "https://i.imgur.com/y5haNhK.png",
    "https://i.imgur.com/IBEMNoY.png",
    "https://i.imgur.com/H6FR6nw.jpg",
    "https://i.imgur.com/zdPZx2b.png"
];
const mckenzieList = [
    "https://i.imgur.com/LhdraNa.png",
    "https://i.imgur.com/bhTZwFH.jpg",
    "https://i.imgur.com/TSn3MH4.png"
];
const haleyList = [
    "https://i.imgur.com/ClKkqwW.png",
    "https://i.imgur.com/1yAdlxH.jpg",
    "https://i.imgur.com/SVtvZ4c.jpg",
    "https://i.imgur.com/3Vylg8b.jpg",
    "https://i.imgur.com/66nVloO.mp4",
    "https://i.imgur.com/17i9Z3g.jpg",
    "https://i.imgur.com/Wh6G9iK.jpg",
    "https://i.imgur.com/ZsBtV4z.jpg",
    "https://i.imgur.com/DyGGVHe.jpg",
    "https://i.imgur.com/3PSmcMW.jpg"
];
const paulList = [
    "https://i.imgur.com/C5oibAJ.jpg",
    "https://i.imgur.com/hMxEyfO.jpg",
    "https://i.imgur.com/AwpyDbz.jpg",
    "https://i.imgur.com/1v0oQ5b.jpg",
    "https://i.imgur.com/f2XaoF0.jpg",
    "https://i.imgur.com/M19dbBR.jpg",
    "https://i.imgur.com/uWUKSV8.jpg",
    "https://i.imgur.com/IvcdQW1.jpg",
    "https://i.imgur.com/pRQuVKo.jpg",
    "https://i.imgur.com/cxJR7pj.jpg"
];
const ratList = [
    "https://i.imgur.com/Wh6G9iK.jpg",
    "https://i.imgur.com/j2K8GUl.jpg",
    "https://i.imgur.com/NY6HA7A.jpg",
    "https://i.imgur.com/Z8vCcQv.jpg",
    "https://i.imgur.com/myFFzFV.jpg",
    "https://i.imgur.com/xkSAksD.mp4",
    "https://i.imgur.com/urVdU6f.jpg",
    "https://i.imgur.com/EEWzLJ9.jpg"
];
const jtList = [
    "https://i.imgur.com/hKCy3c4.gif",
    "https://i.imgur.com/7HdlCKD.png",
    "https://i.imgur.com/1MLEdzr.png",
    "https://i.imgur.com/5EjORk4.png",
    "https://i.imgur.com/T9W2lo0.gif"
];
const samList = [
    "https://i.imgur.com/daW7PSK.png",
    "https://i.imgur.com/04dNUcm.jpg",
    "https://i.imgur.com/cyoFu1U.png",
    "https://i.imgur.com/058OcFn.jpg",
    "https://i.imgur.com/s20Qra1.mp4",
    "https://i.imgur.com/PhTqspN.jpg",
    "https://i.imgur.com/zoKOq5V.jpg"
];
const json = "/.json"
const badChannel = "wookus-lovers-anon"
var getWierdEnabled = true;
var getCuteEnabled = true;
var getNudeEnabled = true;
var getSpiderEnabled = true;
var getHentaiEnabled = true;
var ookieChance = .00
var ookies = 0


//calls
try{
//personal replies
client.on("messageCreate", msg => {
    //wooky
    if (msg.content === leadCharacter + "wooky") {
        let oo = formOokie()
        msg.reply("W" + oo + "KY! \n odds of " +ookies.toString()+  " ookies is roughly : " +  (ookieChance.toFixed(20)*100).toString() + "%")
    }
    //lukas
    if (msg.content === leadCharacter + "lukas") {
        let url = getRandomItem(lukasList) 
        msg.channel.send({files: [url]})
    }
    //danzic
    if (msg.content === leadCharacter + "danzic") {
        let url = getRandomItem(danList) 
        msg.channel.send({files: [url]})
    }
    //jt
    if (msg.content === leadCharacter + "jt") {
        let url = getRandomItem(jtList) 
        msg.channel.send({files: [url]})
    }
    //sam
    if (msg.content === leadCharacter + "sam") {
        let url = getRandomItem(samList) 
        msg.channel.send({files: [url]})
    }
    //haley
    if (msg.content === leadCharacter + "haley") {
        let url = getRandomItem(haleyList) 
        msg.channel.send({files: [url]})
    }
    //mackenzie
    if (msg.content === leadCharacter + "mackenzie") {
        let url = getRandomItem(mckenzieList) 
        msg.channel.send({files: [url]})
    }
    //paul
    if (msg.content === leadCharacter + "paul") {
        let url = getRandomItem(paulList) 
        msg.channel.send({files: [url]})
    }
    //rats
    if (msg.content === leadCharacter + "rats") {
        let url = getRandomItem(ratList) 
        msg.channel.send({files: [url]})
    }
    //geg
    if (msg.content === leadCharacter + "geg") {
        msg.channel.send({files: ["https://imgur.com/gputhgw.jpg"]})
      }
})
//randomstuff
client.on("messageCreate", msg => {
    if (msg.content === leadCharacter + "rolld20") {
        let num = randomInt(1,20)
        if(num == 1)
        {
            msg.channel.send(num.toString() + " - You literally shit your pants.")
        }
        else if(num > 1 && num <=5)
        {
            msg.channel.send(num.toString() + " - That could have been much worse you idiot.")
        }
        else if(num > 5 && num <=10)
        {
            msg.channel.send(num.toString() + " - Below average but eh.")
        }
        else if(num > 10 && num <=15)
        {
            msg.channel.send(num.toString() + " - Above average, go you!")
        }
        else if(num > 15 && num <=19)
        {
            msg.channel.send(num.toString() + " - Nice roll, but could be perfect!")
        }
        else if(num == 20)
        {
            msg.channel.send(num.toString() + " - Holy shit I just came!")
        }
    }
    if (msg.content === leadCharacter + "roulette") {
        let num = randomInt(0,5)
        if(num == 0)
        {
            msg.channel.send({files: ["https://i.imgur.com/NDVxk6r.gif"]})
            msg.channel.send("You're dead")
        }
        else
        {
            msg.channel.send("You live to see another day")
        }
    }
})
//getweird
client.on('messageCreate', msg => {
    try{
    if(msg.content === leadCharacter + "getweird" && !getWierdEnabled){
        msg.channel.send("Wait 5 seconds between using the same command please! I don't want to die.\nTry again when your message and this one is deleted!")
        .then(oldMessage => setTimeout(() => {oldMessage.delete()}, 5000))
        setTimeout(() => {msg.delete()}, 5000)
    }
    if (msg.content === leadCharacter + "getweird" && getWierdEnabled && msg.channel.name != badChannel) {
      try{
        axios
          .get(redditBaseURL+getRandomItem(randwierd)+json)
          .then((resp) => {
            const {
              title,
              url,
              subreddit_name_prefixed: subreddit
            } = getRandomPost(resp.data.data.children);
            getWierdEnabled = false
            msg.channel.send(`${url}\n${subreddit}`);
            setTimeout(() => {getWierdEnabled = true}, 5000)
          })
      }
      catch(error)
      {
        msg.channel.send("Sorry reddit api is not being nice");
      }
    }
  }
    catch(error)
        {
            msg.channel.send("Sorry reddit api is not being nice");
        }   
  })
//getcute
  client.on('messageCreate', msg => {
    if(msg.content === leadCharacter + "getcute" && !getCuteEnabled){
        msg.channel.send("Wait 5 seconds between using the same command please! I don't want to die.\nTry again when your message and this one is deleted!")
        .then(oldMessage => setTimeout(() => {oldMessage.delete()}, 5000))
        setTimeout(() => {msg.delete()}, 5000)
    }
    if (msg.content === leadCharacter + "getcute" && getCuteEnabled && msg.channel.name != badChannel) {
        try{
        axios
          .get(redditBaseURL+getRandomItem(randCute)+json)
          .then((resp) => {
            const {
              title,
              url,
              subreddit_name_prefixed: subreddit
            } = getRandomPost(resp.data.data.children);
            getCuteEnabled = false
            msg.channel.send(`${url}\n${subreddit}`);
            setTimeout(() => {getCuteEnabled = true}, 5000)
          })
        }
        catch(error)
        {
            msg.channel.send("Sorry reddit api is not being nice");
        }
    }
  })
//gethentai
client.on('messageCreate', msg => {
    if(msg.content === leadCharacter + "gethentai" && !getHentaiEnabled){
        msg.channel.send("Wait 5 seconds between using the same command please! I don't want to die.\nTry again when your message and this one is deleted!")
        .then(oldMessage => setTimeout(() => {oldMessage.delete()}, 5000))
        setTimeout(() => {msg.delete()}, 5000)
    }
    if (msg.content === leadCharacter + "gethentai" && getHentaiEnabled && msg.channel.name != badChannel) {
        try{
        axios
          .get(redditBaseURL+getRandomItem(randhentai)+json)
          .then((resp) => {
            const {
              title,
              url,
              subreddit_name_prefixed: subreddit
            } = getRandomPost(resp.data.data.children);
            getHentaiEnabled = false
            msg.channel.send(`${url}\n${subreddit}`);
            setTimeout(() => {getHentaiEnabled = true}, 5000)
          })
        }
        catch(error)
        {
            msg.channel.send("Sorry reddit api is not being nice");
        }
    }
  })
//getnude
client.on('messageCreate', msg => {
    try{
    if(msg.content === leadCharacter + "getnude" && !getNudeEnabled){
        msg.channel.send("Wait 5 seconds between using the same command please! I don't want to die. \nTry again when your message and this one is deleted!")
        .then(oldMessage => setTimeout(() => {oldMessage.delete()}, 5000))
        setTimeout(() => {msg.delete()}, 5000)
    }
    if (msg.content === leadCharacter + "getnude" && getNudeEnabled && msg.channel.name != badChannel) {
        axios
          .get(redditBaseURL+getRandomItem(randNsfw)+json)
          .then((resp) => {
            const {
              title,
              url,
              subreddit_name_prefixed: subreddit
            } = getRandomPost(resp.data.data.children);
            getNudeEnabled = false
            msg.channel.send(`${url}\n${subreddit}`);
            setTimeout(() => {getNudeEnabled = true}, 5000)
          })
        }

    }
    catch(error)
        {
            msg.channel.send("Sorry reddit api is not being nice");
        }   
  })
//getspider
client.on('messageCreate', msg => {
    try{
    if(msg.content === leadCharacter + "getspider" && !getSpiderEnabled){
        msg.channel.send("Wait 5 seconds between using the same command please! I don't want to die. \nTry again when your message and this one is deleted!")
        .then(oldMessage => setTimeout(() => {oldMessage.delete()}, 5000))
        setTimeout(() => {msg.delete()}, 5000)
    }
    if (msg.content === leadCharacter + "getspider" && getSpiderEnabled && msg.channel.name != badChannel) {
        axios
          .get(redditBaseURL+getRandomItem(randSpiders)+json)
          .then((resp) => {
            const {
              title,
              url,
              subreddit_name_prefixed: subreddit
            } = getRandomPost(resp.data.data.children);
            getSpiderEnabled = false
            msg.channel.send(`${url}\n${subreddit}`);
            setTimeout(() => {getSpiderEnabled = true}, 5000)
          })
        }

    }
    catch(error)
        {
            msg.channel.send("Sorry reddit api is not being nice");
        }   
  })
//help
client.on("messageCreate", msg => {
    if (msg.content === leadCharacter + "help") {
        msg.channel.send("wooky - replies wooky\nsam - sam pics\nlukas - lukas pics\njt - jt pics\nmackenzie - mackenzie pics\nhaley - haley pics\npaul - paul pics \nrats - rat pics\ngeg- it geg\ngetwierd - get's wierd reddit posts\ngetcute - gets cute reddit posts \ngetnude - gets nude reddit posts\ngetspider - gets spider reddit posts\nrolld20 - roll one 20 sided dice")
    }
})
//supporting functions
function getRandomPost(posts) {
    const randomIndex = randomInt(0, posts.length);
    return posts[randomIndex].data;
  }

function getRandomItem(list){
    const randomIndex = randomInt(0, list.length);
    return list[randomIndex]
  }

  function getNumbOokies() {
      let ran = randomInt(2,50)
      ookieChance = .80
      if(ran > 40)
      {
        ran = randomInt(ran,100)
        ookieChance = .20
      }
      if(ran > 90)
      {
        ran = randomInt(ran,150)
        ookieChance *= ookieChance
      }
      if(ran > 140)
      {
        ran = randomInt(ran,200)
        ookieChance *= ookieChance
      }
      if(ran > 190)
      {
        ran = randomInt(ran,250)
        ookieChance *= ookieChance
      }
      if(ran > 240)
      {
        ran = randomInt(ran,300)
        ookieChance *= ookieChance
      }
      if(ran > 290)
      {
        ran = randomInt(ran,350)
        ookieChance *= ookieChance
      }
      if(ran > 340)
      {
        ran = randomInt(ran,400)
        ookieChance *= ookieChance
      }
      if(ran > 390)
      {
        ran = randomInt(ran,450)
        ookieChance *= ookieChance
      }
      if(ran > 440)
      {
        ran = randomInt(ran,500)
        ookieChance *= ookieChance
      }
    return ran
}

function formOokie() {
    ookies = getNumbOokies()
    let text = ""
    for(let i = 0; i < ookies; i++)
    {
        text += "O"
    }
    return text
}

function randomInt(min, max) {
    return (Math.floor(Math.random() * (max - min))) + min;
  }
}
catch(error)
{
    console.log("Error : " + error.stack())
}
