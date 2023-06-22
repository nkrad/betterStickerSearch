//script go here brrr


// https://steamcommunity.com/market/search?q=&category_730_ItemSet%5B0%5D=any&category_730_ProPlayer%5B0%5D=any&category_730_TournamentTeam%5B0%5D=any&category_730_Weapon%5B0%5D=any&appid=730
var baseURL = "https://steamcommunity.com/market/search?appid=730&q=";

function marketSearch(){
    let query = document.getElementById("query").value;
    console.log(query);

    let skinCollection = document.getElementById("skinCollection").value;
    console.log(skinCollection);

    let player = document.getElementById("player").value;
    console.log(player);

    let team = document.getElementById("team").value;
    console.log(team);

    let weapon = document.getElementById("weapon").value;
    console.log(weapon);

    let stickerCollection = document.getElementById("stickerCollection").value;
    console.log(stickerCollection);

    let type = document.getElementById("type").value;
    console.log(type);

    let wear = document.getElementById("wear").value;
    console.log(wear);

    let url = baseURL;
    url += query+'&';

    console.log(url);

    //window.open(url, '_blank').focus();
};