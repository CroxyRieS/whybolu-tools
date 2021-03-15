const fetch = require("node-fetch")
const request = require("node-superfetch");
const got = require('got');
module.exports = {
    tdk: async function(kelime) {
        console.log("[Hata]: Bu fonksiyon henüz gelmemiştir.")
    },
    sifre: async function(uzunluk) {
        if(!uzunluk) uzunluk = 10;
        let id = random(uzunluk);
        
        function random(length) {
            var result = "";
            var characters =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
              result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
              );
            }
            return result;
        }

        return {
            cikti: id
        }
    },
    reddit: async function(isim) {
        if(!isim) throw new Error("[Hata]: Reddit üzerinde araştırma yapmak istiyorsan bir isim belirt!")
        const { body } = await request.get(`https://www.reddit.com/user/${isim}/about.json`);
        const { data } = body;

        let cikti = {
            isim: data.name,
            id: data.id,
            karma: data.link_karma + data.comment_karma,
            abone: data.has_subscribed ? `Evet` : `Hayır`
        }

        return cikti;
    },
    kisalt: async function(yazi) {
        if(!yazi.length >= 1024) return;
        const charCheck = (str, max = 1024) => (str.length > max) ? str.slice(0, max - 3) + "..." : str;

        let cikti = {
            kisaltilmis: charCheck(yazi)
        }

        return cikti;
    }

}
 
