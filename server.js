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
     bot.sendMessage(msg.chat.id, "Hola  " + msg.from.first_name);
 }
 });
 
 bot.onText(/\Lista de comandos/, (msg) => {
 bot.sendMessage(msg.chat.id, "Hola, Córtate, córtate, Is that allowed?, Shut up, Hurricane Katrina, A quién le estás diciendo shut up, Chillin in the hot tub, Pussy, Hostión");    
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



