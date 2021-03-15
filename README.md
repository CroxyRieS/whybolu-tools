# WhYBoLu Tools
Bu modül sayesinde işinizi hızlı bir şekilde yapabilirsiniz! hemde ücretsiz!

## Kurulum
> npm i whybolu-tools

## Hızlı Başlangıç
Öncelikle modülümüzü belirtelim,
```javascript
const { tdk, sifre } = require("whybolu-tools");
```

Ardından örnek kullanıma geçelim.

### TDK
``` javascript
tdk("fiil").then((data) => {
    console.log(data)

    /* 
    {
    "anlam": "Olumlu veya olumsuz olarak çekimli durumda zaman kavramı taşıyan veya zaman kavramı ile birlikte kişi kavramı veren kelime, eylem",
    "lisan": "Arapça fiʿl",
    "örnek": "???",
    "yazar": "???",
    "atasözü": "fiile koymak"
    }
    */
})
``` 

ve ya

### Şifre
``` javascript
sifre().then((data) => {
    console.log(data)

    /* 
    {
        "sifre": "1BGtjCQsQh"
    }
    */
})

//isteğe bağlı olarak uzunluk yapabilirsiniz! Örnek: sifre(5)
```

ve ya

### Base64
``` javascript
base64Cevir("selam").then((data) => {
    console.log(data)

    /* 
    {
        "cevrilmis": 'c2VsYW0=' 
    }
    */
})

base64Coz("base64 kodu").then((data) => {
    console.log(data)

    /* 
    {
        "cevrilmis": 'selam' 
    }
    */
})
```

ve ya 

### İnstagram
``` javascript
instagram("alican.ozturk75").then((data) => {
    console.log(data)

    /* 
    {
        "onaylimi": 'Hayır',
        "herekseKapalimi": 'Evet',
        "isHesabimi": 'Hayır',
        "resim": 'https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/106066186_1337627103102237_8176486432046807030_n.jpg?tp=1&_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=Pzt55YPVq2oAX_v2zwQ&oh=35e0affa6ad04223771901b1c04a416b&oe=607A195F',
        "aciklama": 'Yok',
        "takipci": 29,
        "takipEttikleri": 85,
        "isim": 'Alican_Öztürk',
        "postSayisi": 0,
        "website": null
    }
    */
})
```

# Bağlantılar

![Discord](https://discord.gg/Qp8h8mjdAW)
![YouTube](https://youtube.com/c/WhYBoLu)