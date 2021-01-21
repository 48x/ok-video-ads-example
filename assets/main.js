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
    var platform = new URL(window.location.href).searchParams.get("vk_platform");
    if (platform) {
        document.getElementById("log").textContent += getCurrentTime() + platform + "\n\n";
    }
    if (platform === "mobile_web" || platform === "desktop_web") {
        window.history.back();
    } else {
        document.getElementById("log").textContent += getCurrentTime() + platform + "\n\n";
        bridge.send("VKWebAppClose", {"status": "success", "payload": {"name": "test"} });
    }
}