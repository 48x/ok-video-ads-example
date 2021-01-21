function prepareRewardedAd() {
    FAPI.UI.loadAd();
}

function showRewardedAd() {
    FAPI.UI.showLoadedAd();
}

function showInterstitialAd() {
    FAPI.UI.showAd();
}

function getCurrentTime() {
    var now = new Date();
    return ("[" + new Date().toLocaleString() + "]");
}

function clearLog() {
    document.getElementById("log").textContent = "";
}

function goBack() {
    window.history.back();
}