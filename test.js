const imageUrls = [
    "",
    
    
  ];
  
  const NameNotify = 'NOTIFY BLOX FRUIT';
  const DiscordLink = ' https://discord.gg/jCsdU5NR7p';
  const NameDiscord = '𝗗𝗦 𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬 ';
  const NameUser = 'ᴅs_ɴᴏᴏʙᴛᴏᴘʀᴏ';
  
  const themefullmoon = {
      use: true,
      name:"🌖 FULL MOON 🌔",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354709408147574875/V_vIzEsRHgRGbjQ79MH9CDVIm8YmCmt0kKfHrUU_c_4-uFats4hiSRrnYocNkBpfpnqd'
    }
   const themeKitsune = {
      use: true,
      name:"🦊 KITSUNE 🦊",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354710265559781458/U6wrvjDXr3DnNQuD-65zpMgRLXPW_JxeR_NDbk5r9L_L3CefxRBbzIAGysqUGsLzVycN'
    }           
   const thememirage = {
      use: true,
      name:"🏝️ MIRAGE ISLAND 🏝️",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354709678273073292/2ACFDyecdnR92Y3KqG0OfEhoZk5b0-maC77pqcxXAWqtNxrw5G1BOqQG_m_6J_9d4u8b'
    }
  const themeHaki = {
      use: true,
      name:"🎨 HAKI LEGENDARY 🎨",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354710078397091900/BQ2EMZt7s37Eot9ZRxxkfDUlibtQjgKWaE0JrivwTRhGv2PIharesqinbqqYyowV7B5s'
    }  
 const themeCursedCaptain = {
      use: true,
      name:"🎃 Cursed Captain 🎃",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354710748273705090/8nXAOypt-cPoGs-Sb1LXoR0z8w71DJzUI2MhpW8bmSx_JoL2_EqAtPFhTTNQZu4Cklte'
    }      
  const themeSword = {
      use: true,
      name:"⚔️ SWORD LEGENDARY ⚔️",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354709830115266611/zA0NcCfqYEdgJbVEM7FQiZoTHEmr3F4F-BqrEsR3gS176RzCpIOd9U4GE4xa7mXQIvbn'
    }
  const themeRip = {
      use: true,
      name:"👻 RIP INDRA👻",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354715978700947616/CsqycpxlODEMKLgrtJ_YD7LgIlWqTMV3mSptXtzq1ieP87mXqD96LI4k_fYgZJRua--r'
    }
  const themedoughKing = {
      use: true,
      name:"🍮 DOUGH KING 🍮",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354710645034979343/cOveZaKMggidL6QqxbjMwZaCId-8lXvHKKnmBtouCJ_B37BH2ckboR68MbcP7nWeSw4Y'
    }          
  const themeSoulReaper = {
      use: true,
      name:"💀 SOUL REAPER 💀",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354710509534052393/JRaayuyy-1Oo-qCvQG3z6usHBDB6WZOIzYIr1BTImYAjs1LVE4Z6eTJXIhEHdbHSPb3J'
    }                 
  const themeBoss = {
      use: true,
      name:"👺 BOSS RAID 👺",
      "color": 0x4287f5,
      url:'https://discord.com/api/webhooks/1354710405326442557/zX4a7U0SpUhVBbuAp9jzUpPX8_qu0AoxZPgff90U__L1ZTNUoPmOiGBQUMZUPSbOIAF2'
    }       
  const axios = require('axios');
  
  async function _S(theme, fieldsss) {
    if (!theme.use) {
      return '';
    }
  
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  
    const data = {
      content: null,
      embeds: [
        {
          title: theme.name,
          description: ``,
          color: theme.color,
          fields: fieldsss,
          author: { name: `${NameNotify}` },
        image: { url: randomImageUrl },
        footer: { text: `` },
        timestamp: new Date().toISOString(),        
      }
    ],
    attachments: []
  };
  
    try {
      const response = await axios.post(theme.url, data);
      if (response.status === 204) {
        console.log('\x1b[31m[SYSTEM]\x1b[32mCheck Speed : ', theme.name);
      } else {
        console.log('Http OutPut : ' + response.status);
      }
    } catch (error) {
      console.log('\x1b[31m[SYSTEM]\x1b[32mError OutPut : ' + error.message);
    }
  }
  
  const { Client } = require('discord.js-selfbot-v13');
  const DiscordBot = new Client();
  
  DiscordBot.on('ready', async () => {
    console.log(`Console - Start Webhook`);
  });
  
  DiscordBot.on('messageCreate',async (message) => {
  if (message.channelId == 1085601598555832400) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themefullmoon,data)
   }
  } else if (message.channelId == 1085601317717811200) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(thememirage,data)    
   }
 } else if (message.channelId == 1088023824555053097) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeHaki,data)    
   }
  } else if (message.channelId == 1144623714663682138) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeSword,data)    
   }
  } else if (message.channelId == 1197504846459310161) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeBoss,data)    
   }
  } else if (message.channelId == 1272330848766791711) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeKitsune,data)    
   }
  } else if (message.channelId == 1278307203836547192) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themedoughKing,data)    
   }
    } else if (message.channelId == 1280377893918212168) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeSoulReaper,data)    
   }      
  } else if (message.channelId == 1278307088115830875) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeCursedCaptain,data)    
   }  
    } else if (message.channelId == 1278307153802694728) {
      if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeRip,data)    
   }          
    } 
  });
  
  const token = 'MTExMjYxNjY0MjM2MzUzOTQ3OA.GXo_dV.JkoDj6MxkLjMOaxERERknTs-WSWFvfC3zBiSho';
  
  DiscordBot.login(token);
