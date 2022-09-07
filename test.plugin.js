/**
 * @name TestingBetterDiscord
 * @author RamiresOliv
 * @description Testing BetterDiscord Things! :D
 * @source
 * @version 0.0.0
 */

const config = {
  info: {
    name: "TestingBetterDiscord",
    author: "RamiresOliv",
    version: "0.0.1",
    description: "Testing BetterDiscord Things! :D",
  },
};

const request = require("request");
const fs = require("fs");
const path = require("path");

module.exports = () => ({
  load() {
    const exists = fs.existsSync(
      path.join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js")
    );
    console.log(exists);
    if (!exists) {
      BdApi.showConfirmationModal(
        "Olá 👋 - TestingBetterDiscord",
        "Nós gostariamos de atualizar a livraria de Plugins você permite? Esse arquivo é muito importante para o funcionamento do Plugin! _0PluginLibrary.plugin.js_ https://r.ramiresoliv.repl.co/urls/10547",
        {
          confirmText: "Ok. Tudo bem!",
          cancelText: "Eh.. Não obrigado..",
          onConfirm: () => {
            request.get(
              "https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js",
              (error, response, body) => {
                if (error)
                  return electron.shell.openExternal(
                    "https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js"
                  );
                const types = [
                  "AEEEE!",
                  "Pd pa",
                  "Amem",
                  "PoV:",
                  "uhulll",
                  "Receba!",
                  "Fé em deus",
                ];
                let n = Math.floor(Math.random() * types.length);
                let result = types[n];
                console.log(`"${result}" ${n}. Of ` + JSON.stringify(types));
                BdApi.alert(
                  "Sucesso! ✌ - TestingBetterDiscord",
                  result + "! A livraria foi atualizada com sucesso! :D"
                );
                console.log(
                  "Finished Download. [https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js]"
                );
                fs.writeFileSync(
                  path.join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"),
                  body
                );
              }
            );
          },
          onCancel: () => {
            const types = [
              "Ai mamaee!",
              "UUUI!",
              "Oh não!",
              "Oops!",
              "Eeta!",
              "Vixx!",
              "Deu B.O!",
              "Essa vai pra XRacing!",
              "Deu pode cre!",
              "Capoto o corsa!",
              "Eita p...!",
              "Ai complica..!",
              "Ai não né?!",
              "ZeRO: Vai cobra?",
            ];
            let n = Math.floor(Math.random() * types.length);
            let result = types[n];
            console.log(`"${result}" ${n}. Of ` + JSON.stringify(types));
            BdApi.alert(
              result + " 😟 - TestingBetterDiscord",
              "A Livraria não foi instalada. Forçando o Plugin a não funcionar! _(você pode reiniciar o Discord se quiser fazer download da livraria)_"
            );
          },
        }
      );
    } else {
      console.log("--------------------------------------------------");
      console.warn("Discord: Encosta Encosta Encosta, Perdeu Perdeu!");
      console.warn("Documento todo em dia?");
      console.log("S-S-Sim senhor..");
      console.warn("Liberado.");
    }
  },
  start() {
    this._config = config;
    // Called when the plugin is activated (including after reloads)
    console.log("start up!");

    var libraryScript = document.getElementById("zeresLibraryScript");
    if (!libraryScript) {
      libraryScript = document.createElement("script");
      libraryScript.setAttribute("type", "text/javascript");
      libraryScript.setAttribute(
        "src",
        "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js"
      );
      libraryScript.setAttribute("id", "zeresLibraryScript");
      document.head.appendChild(libraryScript);
    }

    if (typeof window.ZeresLibrary !== "undefined") this.initialize();
    else
      libraryScript.addEventListener("load", () => {
        this.initialize();
      });
    BdApi.React.createElement("input", {
      style: {
        color: "white",
        background: "#36393f",
      },
      className: "InpArg",

      //  value: "what ever you want here"
    });
    let firsttime = false;
    setTimeout(() => {
      BdApi.showNotice(
        "O sistema de Inicializamento de servidor está em desenvolvimento.",
        {
          timeout: 10000,
          type: "warning",
          buttons: [
            {
              label: "Putz! Ok então!",
              onClick: () => {
                if (firsttime) {
                  return;
                } else {
                  firsttime = true;
                }
                BdApi.showToast("Relaxa ai!! Calma lá que tamo fazendo!! :D", {
                  type: "info",
                  timeout: 5000,
                });
                console.warning("Relaxa tamo fazendo!! <3");
              },
            },
          ],
        }
      );
      BdApi.showToast("Error in Server init...", {
        timeout: 10000,
        type: "error",
      });
    }, 3000);

    console.log(libraryScript);
  },

  stop() {
    console.log("bye bye!");
    // Called when the plugin is deactivated
  },
});
