const Store = require("electron-store");
const store = new Store();
const homeDir = require("os").homedir();
const desktopDir = `${homeDir}\\Desktop\\`;
export default function initStore() {
  if (!store.has("FormConfig.默认")) {
    store.set("FormConfig.默认", {
      languageSelect: "Chinese (Mandarin, Simplified)",
      voiceSelect: "zh-CN-XiaoxiaoNeural",
      voiceStyleSelect: "General",
      role: "Default",
      speed: 1.0,
      pitch: 1.0,
    });
  }
  if (!store.has("savePath")) {
    store.set("savePath", desktopDir);
  }
  if (!store.has("audition")) {
    store.set(
      "audition",
      "这是微软 TTS 测试语音，你可以在设置中更改语音。"
    );
  }
  if (!store.has("autoplay")) {
    store.set("autoplay", true);
  }
  if (!store.has("updateNotification")) {
    store.set("updateNotification", true);
  }
}
