//=============================================================================
// main.js
//=============================================================================
window.onerror = function(message, source, lineno, colno, error) {
    console.log("!!! GAME ERROR !!!: " + message + " at " + source + ":" + lineno);
};
PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};
