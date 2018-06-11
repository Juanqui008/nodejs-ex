 const TelegramBot = require('node-telegram-bot-api');
 
 // API Token Telegram
 const token = '591985463:AAHM2942GL8CQKM4k_IjokQEaCJdsbNmz5Y';

 // Creamos un bot que usa 'polling'para obtener actualizaciones
const bot = new TelegramBot(token, {polling: true});
 const request = require('request');
 
// Cuando mandes el mensaje "Hola" reconoce tú nombre y genera un input: Hola Daniel
 bot.on('message', (msg) => {
 var Hola = "hola";
 if (msg.text.toString().toLowerCase().indexOf(Hola) === 0) {
     bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name);
 }
 });
 
 // Cuando mandes el mensaje "Gracias" reconoce tú nombre y genera un input: De nada Daniel
 bot.on('message', (msg) => {
 var Hola = "Gracias";
 if (msg.text.toString().toLowerCase().indexOf(Gracias) === 0) {
     bot.sendMessage(msg.chat.id, "De nada " + msg.from.first_name);
 }
 });
 
 bot.onText(/\Lista de comandos/, (msg) => {
 bot.sendMessage(msg.chat.id, "Hola, Hola Josemi, Córtate, córtate, Is that allowed?, Shut up, Hurricane Katrina, A quién le estás diciendo shut up, Chillin in the hot tub, Pussy, Hostión, I love u bitch, Fuck off, Thanks, I´m calling the police, What the fuck, I won´t hesitate bitch");    
 });

bot.onText(/\Córtate, córtate/, (msg) => {
   const url = 'https://ia801506.us.archive.org/28/items/LosPistolerosDelEclipse.mp3/Los_pistoleros_del_eclipse.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });

bot.onText(/\Is that allowed?/, (msg) => {
   const url = 'https://ia601505.us.archive.org/15/items/IsThisAllowedORIGINALVINE/Is_This_Allowed_ORIGINAL_VINE.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });

bot.onText(/\Shut up/, (msg) => {
   const url = 'https://ia601506.us.archive.org/23/items/VineEnEspanolYellingShutUpForNoReason/Vine_en_Espanol_-_Yelling_shut_up_for_no_reason.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });

bot.onText(/\Hurricane Katrina/, (msg) => {
   const url = 'https://ia601507.us.archive.org/0/items/MoreLikeHurricaneTortillaVINE128kbitOpus/More%20like%20hurricane%20tortilla%20VINE%20%28128kbit_Opus%29.ogg';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });

bot.onText(/\A quién le estás diciendo shut up/, (msg) => {
   const url = 'https://ia601509.us.archive.org/27/items/ShutUp_201806/shut%20up.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });

bot.onText(/\Chillin in the hot tub/, (msg) => {
   const url = 'https://ia601505.us.archive.org/5/items/AnthonyPadillaChillinInTheHotTubVine128kbitVorbis/Anthony%20Padilla%20_Chillin%20in%20the%20Hot%20Tub_%20Vine%20%28128kbit_Vorbis%29.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });

bot.onText(/\Pussy/, (msg) => {
   const url = 'https://ia601505.us.archive.org/3/items/BoBurnhamClubJamVine/Bo_Burnham_-_Club_Jam_Vine.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });

bot.onText(/\Hostión/, (msg) => {
   const url = 'https://ia601503.us.archive.org/11/items/ComeGetYourJuice/Come%20Get%20Your%20Juice.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });
bot.onText(/\I love u bitch/, (msg) => {
   const url = 'https://ia601507.us.archive.org/27/items/ILoveYouBitch.VINE96kbitVorbis/I%20love%20you%2C%20bitch.%20VINE%20%2896kbit_Vorbis%29.ogg';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });
bot.onText(/\Fuck off/, (msg) => {
   const url = 'https://ia601501.us.archive.org/0/items/FuckOffJanetImNotGoingToYourFuckingBabyShowerOriginalVine128kbitAAC_201806/Fuck%20off%20janet%20I%E2%80%99m%20not%20going%20to%20your%20fucking%20baby%20shower%20original%20vine%20%28128kbit_AAC%29.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });
bot.onText(/\Thanks/, (msg) => {
   const url = 'https://ia601506.us.archive.org/33/items/ItsAnAvocado....thanks....96kbitAAC/It%27s%20an%20avocado%21....thanks%21....%20%2896kbit_AAC%29.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });
bot.onText(/\I´m calling the police/, (msg) => {
   const url = 'https://ia601508.us.archive.org/20/items/ImCallingThePolice128kbitAAC/I%27m%20calling%20the%20police%20%28128kbit_AAC%29.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });
bot.onText(/\Hola Josemi/, (msg) => {
   const url = 'https://ia601505.us.archive.org/35/items/HolaJosemiVioladorDeMierda192kbitAAC/Hola%20Josemi%20violador%20de%20Mierda%20%28192kbit_AAC%29.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });
bot.onText(/\What the fuck/, (msg) => {
   const url = 'https://ia601509.us.archive.org/3/items/WhatTheFuckIsUpKyle.128kbitAAC/What%20the%20fuck%20is%20up%20Kyle.%20%28128kbit_AAC%29.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });
bot.onText(/\I won´t hesitate bitch/, (msg) => {
   const url = 'https://ia601500.us.archive.org/16/items/IWontHesitateBitch96kbitAAC/I%20won%27t%20hesitate%20bitch%20%2896kbit_AAC%29.mp3';
   const audio = request(url);
   bot.sendVoice(msg.chat.id, audio);  
  });


