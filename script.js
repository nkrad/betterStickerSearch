//script go here brrr


// https://steamcommunity.com/market/search?q=&category_730_ItemSet%5B0%5D=any&category_730_ProPlayer%5B0%5D=any&category_730_TournamentTeam%5B0%5D=any&category_730_Weapon%5B0%5D=any&appid=730

// new sample URL with most fields filled out
// https://steamcommunity.com/market/search?

//q=Redline - SEARCH QUERY
//&category_730_ItemSet[]=tag_set_op10_characters - SKIN COLLECTION
//&category_730_ProPlayer[]=tag_abe - PLAYER (the valve search is broken for this)
//&category_730_StickerCapsule[]=tag_crate_sticker_pack_csgo10_capsule_lootlist - STICKER COLLECTION
//&category_730_TournamentTeam[]=tag_Team16 - TEAM
//&category_730_Weapon[]=tag_weapon_ak47 - WEAPON
//&category_730_Exterior[]=tag_WearCategory2 - WEAR
//&category_730_Quality[]=tag_tournament - TYPE
//&category_730_Tournament[]=tag_Tournament20 - TOURNAMENT
//&appid=730 - APPID


var baseURL = "https://steamcommunity.com/market/search?appid=730&q=";

function marketSearch(){
    let url = baseURL;

    let query = document.getElementById("query").value;
    let skinCollection = document.getElementById("skinCollection").value;
    let player = '"' + document.getElementById("player").value + '"';
    let stickerCollection = document.getElementById("stickerCollection").value;
    let team = document.getElementById("team").value;
    let weapon = document.getElementById("weapon").value;
    let wear = document.getElementById("wear").value;
    let type = document.getElementById("type").value;
    let stickerType = document.getElementById("stickerType").value;
    let stickerYear = document.getElementById("stickerYear").value;

    url += query+'&';

    // if only player is entered then only search for player
    //if(player != "any" && skinCollection == "any" && stickerCollection == "any" && team == "any" && weapon == "any" && wear == "any" && type == "any"){
    //    url = "https://steamcommunity.com/market/search?q="+player+stickerType+stickerYear+"&descriptions=1&category_730_ItemSet%5B%5D="+skinCollection+"&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D="+stickerCollection+"&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D="+weapon+"&appid=730#p1_price_asc"
    //    alert(url);
    //}

    url = "https://steamcommunity.com/market/search?q="+team+" "+player+stickerType+stickerYear+"&descriptions=1&category_730_ItemSet%5B%5D="+skinCollection+"&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D="+stickerCollection+"&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D="+weapon+"&appid=730#p1_price_asc"

    //if(skinCollection != "any"){
    //    url += 'category_730_ItemSet[]='+skinCollection+'&';
    //}
    //if(player != "any"){
    //    url += 'category_730_ProPlayer[]='+player+'&';
    //}
    //if(stickerCollection != "any"){
    //    url += 'category_730_StickerCapsule[]='+stickerCollection+'&';
    //}
    //if(team != "any"){
    //    url += 'category_730_TournamentTeam[]='+team+'&';
    //}
    //if(weapon != "any"){
    //    url += 'category_730_Weapon[]='+weapon+'&';
    //}
    //if(wear != "any"){
    //    url += 'category_730_Exterior[]='+wear+'&';
    //}
    //if(type != "any"){
    //    url += 'category_730_Quality[]='+type+'&';
    //}

    alert(url);

    //window.open(url, '_blank').focus();
};

//https://steamcommunity.com/market/search?q=freakazoid&descriptions=1&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=any&appid=730#p1_price_asc