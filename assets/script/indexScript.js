/*Controle de escolha de ScriptMonsters*/
let maxArrowClicks = 0;
let arrowLeftHTML = document.querySelector(".arrow.left");
let arrowRightHTML = document.querySelector(".arrow.right");
let namemonsterHTML = document.querySelector(".name-monster");
let h2ContainerHTML = document.querySelector(".h2-container");
let mainInfoHTML = document.querySelector(".main-info");
let monsterImgChoiceHTML = document.querySelector(".monsters-img.choice");
let actionButtonP1HTML = document.querySelector(".action-button.player1");
let actionButtonP2HTML = document.querySelector(".action-button.player2");

function arrowRight() {
  maxArrowClicks++;
  arrowLeftHTML.style.setProperty("opacity", "100%");
  namemonsterHTML.style.setProperty("opacity", "100%");
  h2ContainerHTML.innerHTML = "<h2>STATUS</h2>";
  if (maxArrowClicks == 3) {
    arrowRightHTML.style.setProperty("opacity", "50%");
  }
  if (maxArrowClicks == 4) {
    // Evitar que o usuário bugue o menu de  escolha
    maxArrowClicks = 3;
  }

  if (maxArrowClicks == 0) {
    //remove Monster
    namemonsterHTML.style.setProperty("opacity", "50%");
    namemonsterHTML.innerHTML = "";
    mainInfoHTML.innerHTML = //como jogar
      "<ul><li>Escolha seu ScriptMonster</li><li>Cada ScriptMonster tem 3 habilidades <br /><ul><li>Mordida (ataque neutro)</li><li>Skill (ataque elemental)</li><li>Curar (cura HP)</li></ul></li><li>Durante o jogo escolha uma das 3 ações</li></ul>";
    h2ContainerHTML.innerHTML = "<h2>Como Jogar</h2>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
  }
  if (maxArrowClicks == 1) {
    //Exibe FireMonster
    namemonsterHTML.innerHTML = "FireMonster";
    mainInfoHTML.innerHTML = //Fire Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: ICE (Causa +5%DMG)</li><li>Fraco Contra: Aqua (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 50% Chance de causar 1.5 do DMG</li></ul>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.setProperty(
      "background-image",
      "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
    );
  }
  if (maxArrowClicks == 2) {
    //Exibe AquaMonster
    namemonsterHTML.innerHTML = "AquaMonster";
    mainInfoHTML.innerHTML = //Aqua Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 100HP</li><li>Forte Contra: FIRE (Causa +5%DMG)</li><li>Fraco Contra: ICE (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.setProperty(
      "background-image",
      "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
    );
  }
  if (maxArrowClicks == 3) {
    //Exibe IceMonster
    namemonsterHTML.innerHTML = "IceMonster";
    mainInfoHTML.innerHTML = //Ice Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: AQUA (Causa +5%DMG)</li><li>Fraco Contra: FIRE (Recebe +5%DMG)</li><li>Esquiva: 20% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.setProperty(
      "background-image",
      "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
    );
  }
}

function arrowLeft() {
  maxArrowClicks--;
  arrowRightHTML.style.setProperty("opacity", "100%");
  if (maxArrowClicks == 0) {
    arrowLeftHTML.style.setProperty("opacity", "50%");
  }
  if (maxArrowClicks == -1) {
    // Evitar que o usuário bugue o menu de  escolha
    maxArrowClicks = 0;
  }

  if (maxArrowClicks == 0) {
    //remove Monster
    namemonsterHTML.style.setProperty("opacity", "50%");
    namemonsterHTML.innerHTML = "";
    mainInfoHTML.innerHTML = //como jogar
      "<ul><li>Escolha seu ScriptMonster</li><li>Cada ScriptMonster tem 3 habilidades <br /><ul><li>Mordida (ataque neutro)</li><li>Skill (ataque elemental)</li><li>Curar (cura HP)</li></ul></li><li>Durante o jogo escolha uma das 3 ações</li></ul>";
    h2ContainerHTML.innerHTML = "<h2>Como Jogar</h2>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
  }
  if (maxArrowClicks == 1) {
    //Exibe FireMonster
    namemonsterHTML.innerHTML = "FireMonster";
    mainInfoHTML.innerHTML = //Fire Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: ICE (Causa +5%DMG)</li><li>Fraco Contra: Aqua (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 50% Chance de causar 1.5 do DMG</li></ul>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.setProperty(
      "background-image",
      "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
    );
  }
  if (maxArrowClicks == 2) {
    //Exibe AquaMonster
    namemonsterHTML.innerHTML = "AquaMonster";
    mainInfoHTML.innerHTML = //Aqua Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 100HP</li><li>Forte Contra: FIRE (Causa +5%DMG)</li><li>Fraco Contra: ICE (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.setProperty(
      "background-image",
      "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
    );
  }
  if (maxArrowClicks == 3) {
    //Exibe IceMonster
    namemonsterHTML.innerHTML = "IceMonster";
    mainInfoHTML.innerHTML = //Ice Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: AQUA (Causa +5%DMG)</li><li>Fraco Contra: FIRE (Recebe +5%DMG)</li><li>Esquiva: 20% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.removeProperty("background-image");
    monsterImgChoiceHTML.style.setProperty(
      "background-image",
      "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
    );
  }
}

//Definindo monster do Player

let monsterID = 0;
let monsterFaceP1 = document.querySelector(".monster-face-player1");
let monsterFaceP2 = document.querySelector(".monster-face-player2");

let fireMonsterStatus = {
  ID: "fire",
  HP: 2000,
  Stamina: 0,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 80,
  EsquivaChance: 15,
  CritChance: 50,
};

let aquaMonsterStatus = {
  ID: "aqua",
  HP: 2000,
  Stamina: 0,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 100,
  EsquivaChance: 15,
  CritChance: 40,
};

let iceMonsterStatus = {
  ID: "ice",
  HP: 2000,
  Stamina: 0,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 80,
  EsquivaChance: 20,
  CritChance: 40,
};

let player1 = {
  ID: "",
  HP: 0,
  SkillAtk: 0,
  NormalAtk: 0,
  Cura: 0,
  EsquivaChance: 0,
  CritChance: 0,
};
let player2 = {
  ID: "",
  HP: 0,
  SkillAtk: 0,
  NormalAtk: 0,
  Cura: 0,
  EsquivaChance: 0,
  CritChance: 0,
};

function escolherMonster1() {
  monsterID = maxArrowClicks;
  if (monsterID == 0) {
    alert("Escolha um script monster");
    return 0;
  }
  if (monsterID == 1) {
    player1 = { ...fireMonsterStatus };
    maxArrowClicks = 0;
    arrowLeftHTML.style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == 2) {
    maxArrowClicks = 0;
    player1 = { ...aquaMonsterStatus };
    arrowLeftHTML.style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == 3) {
    maxArrowClicks = 0;
    player1 = { ...iceMonsterStatus };
    arrowLeftHTML.style.setProperty("opacity", "50%");
    arrowLeft();
  }

  alert(
    `Monster Escolhido com sucesso ! Antes do Player2 Escolher o monster, clique em "OK" para que ele não veja o Monster esolhido`
  );

  actionButtonP1HTML.style.setProperty("display", "none");

  actionButtonP2HTML.style.setProperty("display", "inline");
}

function escolherMonster2() {
  monsterID = maxArrowClicks;
  if (monsterID == 0) {
    alert("Escolha um script monster");
    return 0;
  }
  if (monsterID == 1) {
    player2 = { ...fireMonsterStatus };
    maxArrowClicks = 0;
    arrowLeftHTML.style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == 2) {
    maxArrowClicks = 0;
    player2 = { ...aquaMonsterStatus };
    arrowLeftHTML.style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == 3) {
    maxArrowClicks = 0;
    player2 = { ...iceMonsterStatus };
    arrowLeftHTML.style.setProperty("opacity", "50%");
    arrowLeft();
  }

  console.log(player1);
  console.log(player2);

  alert(`Monster Escolhido com sucesso ! Que vença o melhor ScriptMaster`);

  document //removendo layout de escolha de script monster
    .querySelector(".choice-layout-player1")
    .style.setProperty("display", "none");
  document
    .querySelector(".choice-layout-player2")
    .style.setProperty("display", "none");
  document
    .querySelector(".choice-layout-buttons")
    .style.setProperty("display", "none");

  document //adicionando layout de batalha de script monster
    .querySelector(".battle-layout-player1")
    .style.setProperty("display", "flex");
  document
    .querySelector(".battle-layout-player2")
    .style.setProperty("display", "flex");
  document
    .querySelector(".battle-layout-buttons")
    .style.setProperty("display", "flex");

  if (player1.ID == "fire") {
    monsterFaceP1.style.setProperty(
      "background-image",
      "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
    );
  } else if (player1.ID == "aqua") {
    monsterFaceP1.style.setProperty(
      "background-image",
      "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
    );
  } else if (player1.ID == "ice") {
    monsterFaceP1.style.setProperty(
      "background-image",
      "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
    );
  }

  if (player2.ID == "fire") {
    monsterFaceP2.style.setProperty(
      "background-image",
      "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
    );
  } else if (player2.ID == "aqua") {
    monsterFaceP2.style.setProperty(
      "background-image",
      "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
    );
  } else if (player2.ID == "ice") {
    monsterFaceP2.style.setProperty(
      "background-image",
      "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
    );
  }

  alert(`Turno do Player1`);
}

//mecânica de batalha
let turnPlayer1 = true;
let turnPlayer2 = false;
let turnoCount = 1;

let dmgCausadoPeloP1HTML = document.querySelector(".dmg-causado-playerl");
let dmgCausadoPeloP2HTML = document.querySelector(".dmg-causado-player2");
let dmgRecebidoPeloP1HTML = document.querySelector(".dmg-recebido-player1");
let dmgRecebidoPeloP2HTML = document.querySelector(".dmg-recebido-player2");
let curaP1HTML = document.querySelector(".cura-player1");
let curaP2HTML = document.querySelector(".cura-player2");
let hpPlayer1HTML = document.querySelector(".hp-player1");
let hpPlayer2HTML = document.querySelector(".hp-player2");
let staminaPlayer1HTML = document.querySelector(".stamina-player1");
let staminaPlayer2HTML = document.querySelector(".stamina-player2");

function morderPlayer1() {
  if (turnPlayer1 == false) {
    //não deixa jogar se não for o turno dele
    alert(`Agora é a vez do Player2`);
    return 0;
  } else {
    if (player1.ID == "fire") {
      //altera a face do monster
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-biting.png)"
      );
    } else if (player1.ID == "aqua") {
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-biting.png)"
      );
    } else {
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-biting.png)"
      );
    }
    let esquivaInimigo = Math.floor(Math.random() * 100);

    if (esquivaInimigo <= player2.EsquivaChance) {
      dmgCausadoPeloP1HTML.innerHTML = `Turno ${turnoCount} Inimigo Esquivou`;

      dmgRecebidoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você Esquivou`;

      if (player2.ID == "fire") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
        );
      } else if (player2.ID == "aqua") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
        );
      } else {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
        );
      }

      alert(`Inimigo Esquivou`);
    } else {
      if (player2.ID == "fire") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-take-damage.png)"
        );
      } else if (player2.ID == "aqua") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-take-damage.png)"
        );
      } else {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-take-damage.png)"
        );
      }
      let chanceCritico = Math.floor(Math.random() * 100);

      if (chanceCritico <= player1.CritChance) {
        alert(`Player1 acertou normal ATK crítico`);
        player2.HP = player2.HP - player1.NormalAtk * 1.5;
        dmgCausadoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você causou ${
          player1.NormalAtk * 1.5
        }dmg`;
        hpPlayer2HTML.innerHTML = `HP: ${player2.HP}`;
        dmgRecebidoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${
          player1.NormalAtk * 1.5
        }dmg`;
        if (player1.Stamina == 75) {
          player1.Stamina = player1.Stamina + 25;
        } else if (player1.Stamina < 100) {
          player1.Stamina = player1.Stamina + 50;
        }
        staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;
      } else {
        alert(`Player1 acertou normal ATK`);
        player2.HP = player2.HP - player1.NormalAtk;
        dmgCausadoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você causou ${player1.NormalAtk}dmg`;
        dmgRecebidoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${player1.NormalAtk}dmg`;
        hpPlayer2HTML.innerHTML = `HP: ${player2.HP}`;
        if (player1.Stamina == 75) {
          player1.Stamina = player1.Stamina + 25;
        } else if (player1.Stamina < 100) {
          player1.Stamina = player1.Stamina + 50;
        }
        staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;
      }
      if (player2.HP <= 0) {
        hpPlayer2HTML.innerHTML = `HP: 0`;

        document
          .querySelector(".battle-layout-buttons")
          .style.setProperty("display", "none");
        document
          .querySelector(".end-layout-buttons")
          .style.setProperty("display", "flex");

        if (player2.ID == "fire") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/FireMonster/Fire-Monster-lost.png)"
          );
        } else if (player2.ID == "aqua") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/AquaMonster/Aqua-Monster-lost.png)"
          );
        } else {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/IceMonster/Ice-Monster-lost.png)"
          );
        }
      }
    }
  }

  turnPlayer1 = false;
  turnPlayer2 = true;
  turnoCount++;
}

function skillPlayer1() {
  if (turnPlayer1 == false) {
    //não deixa jogar se não for o turno dele
    alert(`Agora é a vez do Player2`);
    return 0;
  }
  if (player1.Stamina < 100) {
    alert(
      `É necessário 100% de Stamina para utilizar Skill, você tem ${player1.Stamina}, ganhe stamina acertando ataques neutros !`
    );
    return 0;
  } else {
    if (player1.ID == "fire") {
      //altera a face do monster
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-skill-to-right.png)"
      );
    } else if (player1.ID == "aqua") {
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-skill-to-right.png)"
      );
    } else {
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-skill-to-right.png)"
      );
    }
    let esquivaInimigo = Math.floor(Math.random() * 100);

    if (esquivaInimigo <= player2.EsquivaChance) {
      dmgCausadoPeloP1HTML.innerHTML = `Turno ${turnoCount} Inimigo Esquivou`;

      dmgRecebidoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você Esquivou`;

      if (player2.ID == "fire") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
        );
      } else if (player2.ID == "aqua") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
        );
      } else {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
        );
      }

      player1.Stamina = 0;

      staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;

      alert(`Inimigo Esquivou`);
    } else {
      if (player2.ID == "fire") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-take-damage.png)"
        );
      } else if (player2.ID == "aqua") {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-take-damage.png)"
        );
      } else {
        monsterFaceP2.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-take-damage.png)"
        );
      }
      let chanceCritico = Math.floor(Math.random() * 100);

      if (chanceCritico <= player1.CritChance) {
        alert(`Player1 acertou skill ATK crítico`);
        if (
          (player1.ID == "fire" && player2.ID == "ice") ||
          (player1.ID == "aqua" && player2.ID == "fire") ||
          (player1.ID == "ice" && player2.ID == "aqua")
        ) {
          player2.HP =
            player2.HP - (player1.SkillAtk + player1.SkillAtk * 0.05) * 1.5;
          dmgCausadoPeloP1HTML.innerHTML = `Você causou ${
            (player1.SkillAtk + player1.SkillAtk * 0.05) * 1.5
          }dmg`;
          dmgRecebidoPeloP2HTML.innerHTML = `Você sofreu ${
            (player1.SkillAtk + player1.SkillAtk * 0.05) * 1.5
          }dmg`;
          hpPlayer2HTML.innerHTML = `HP: ${player2.HP}`;

          player1.Stamina = 0;

          staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;
        } else {
          player2.HP = player2.HP - player1.SkillAtk * 1.5;
          dmgCausadoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você causou ${
            player1.SkillAtk * 1.5
          }dmg`;
          hpPlayer2HTML.innerHTML = `HP: ${player2.HP}`;
          dmgRecebidoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${
            player1.SkillAtk * 1.5
          }dmg`;

          player1.Stamina = 0;

          staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;
        }
      } else {
        alert(`Player1 acertou skill ATK`);

        if (
          (player1.ID == "fire" && player2.ID == "ice") ||
          (player1.ID == "aqua" && player2.ID == "fire") ||
          (player1.ID == "ice" && player2.ID == "aqua")
        ) {
          player2.HP =
            player2.HP - (player1.SkillAtk + player1.SkillAtk * 0.05);
          dmgCausadoPeloP1HTML.innerHTML = `Você causou ${
            player1.SkillAtk + player1.SkillAtk * 0.05
          }dmg`;
          dmgRecebidoPeloP2HTML.innerHTML = `Você sofreu ${
            player1.SkillAtk + player1.SkillAtk * 0.05
          }dmg`;
          hpPlayer2HTML.innerHTML = `HP: ${player2.HP}`;

          player1.Stamina = 0;

          staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;
        } else {
          player2.HP = player2.HP - player1.SkillAtk;
          dmgCausadoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você causou ${player1.SkillAtk}dmg`;
          hpPlayer2HTML.innerHTML = `HP: ${player2.HP}`;
          dmgRecebidoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${player1.SkillAtk}dmg`;

          player1.Stamina = 0;

          staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;
        }
      }
      if (player2.HP <= 0) {
        hpPlayer2HTML.innerHTML = `HP: 0`;

        document
          .querySelector(".battle-layout-buttons")
          .style.setProperty("display", "none");
        document
          .querySelector(".end-layout-buttons")
          .style.setProperty("display", "flex");

        if (player2.ID == "fire") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/FireMonster/Fire-Monster-lost.png)"
          );
        } else if (player2.ID == "aqua") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/AquaMonster/Aqua-Monster-lost.png)"
          );
        } else {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/IceMonster/Ice-Monster-lost.png)"
          );
        }
      }
    }
  }

  turnPlayer1 = false;
  turnPlayer2 = true;
  turnoCount++;
}

function curarPlayer1() {
  if (turnPlayer1 == false) {
    alert(`Agora é a vez do Player2`);
    return 0;
  }
  if (player1.Stamina < 25) {
    alert(
      `É necessário 25% de Stamina para utilizar Cura, você tem ${player1.Stamina}, ganhe stamina acertando ataques neutros !`
    );
    return 0;
  } else {
    if (player1.ID == "fire") {
      //altera a face do monster
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
    } else if (player1.ID == "aqua") {
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
    } else {
      monsterFaceP1.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
    }

    if (player2.ID == "fire") {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
    } else if (player2.ID == "aqua") {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
    } else {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
    }

    alert(`Player1 Curou ${player1.Cura}`);

    player1.Stamina = player1.Stamina - 25;
    staminaPlayer1HTML.innerHTML = `Stamina: ${player1.Stamina}%`;

    curaP1HTML.innerHTML = `Turno ${turnoCount} Curou ${player1.Cura} de HP`;
    curaP2HTML.innerHTML = `Turno ${turnoCount} Inimigo Curou ${player1.Cura} de HP`;
    player1.HP = player1.HP + player1.Cura;
    hpPlayer1HTML.innerHTML = `HP: ${player1.HP}`;

    turnPlayer1 = false;
    turnPlayer2 = true;
    turnoCount++;
  }
}

function morderPlayer2() {
  if (turnPlayer2 == false) {
    //não deixa jogar se não for o turno dele
    alert(`Agora é a vez do Player1`);
    return 0;
  } else {
    if (player2.ID == "fire") {
      //altera a face do monster
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-biting.png)"
      );
    } else if (player2.ID == "aqua") {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-biting.png)"
      );
    } else {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-biting.png)"
      );
    }
    let esquivaInimigo = Math.floor(Math.random() * 100);

    if (esquivaInimigo <= player1.EsquivaChance) {
      dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Inimigo Esquivou`;

      dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você Esquivou`;

      if (player1.ID == "fire") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
        );
      } else if (player1.ID == "aqua") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
        );
      } else {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
        );
      }

      alert(`Inimigo Esquivou`);
    } else {
      if (player1.ID == "fire") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-take-damage.png)"
        );
      } else if (player1.ID == "aqua") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-take-damage.png)"
        );
      } else {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-take-damage.png)"
        );
      }
      let chanceCritico = Math.floor(Math.random() * 100);

      if (chanceCritico <= player2.CritChance) {
        alert(`Player1 acertou normal ATK crítico`);
        player1.HP = player1.HP - player2.NormalAtk * 1.5;
        dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você causou ${
          player2.NormalAtk * 1.5
        }dmg`;
        hpPlayer1HTML.innerHTML = `HP: ${player1.HP}`;
        dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${
          player2.NormalAtk * 1.5
        }dmg`;
        if (player2.Stamina == 75) {
          player2.Stamina = player2.Stamina + 25;
        } else if (player1.Stamina < 100) {
          player2.Stamina = player2.Stamina + 50;
        }
        staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;
      } else {
        alert(`Player2 acertou normal ATK`);
        player1.HP = player1.HP - player2.NormalAtk;
        dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você causou ${player2.NormalAtk}dmg`;
        dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${player2.NormalAtk}dmg`;
        hpPlayer1HTML.innerHTML = `HP: ${player1.HP}`;
        if (player2.Stamina == 75) {
          player2.Stamina = player2.Stamina + 25;
        } else if (player2.Stamina < 100) {
          player2.Stamina = player2.Stamina + 50;
        }
        staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;
      }
      if (player1.HP <= 0) {
        hpPlayer1HTML.innerHTML = `HP: 0`;

        document
          .querySelector(".battle-layout-buttons")
          .style.setProperty("display", "none");
        document
          .querySelector(".end-layout-buttons")
          .style.setProperty("display", "flex");

        if (player1.ID == "fire") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/FireMonster/Fire-Monster-lost.png)"
          );
        } else if (player1.ID == "aqua") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/AquaMonster/Aqua-Monster-lost.png)"
          );
        } else {
          monsterFaceP1.style.setProperty(
            "background-image",
            "url(./assets/img/IceMonster/Ice-Monster-lost.png)"
          );
        }
      }
    }
  }
  turnPlayer2 = false;
  turnPlayer1 = true;
  turnoCount++;
}

function skillPlayer2() {
  if (turnPlayer2 == false) {
    //não deixa jogar se não for o turno dele
    alert(`Agora é a vez do Player1`);
    return 0;
  }
  if (player2.Stamina < 100) {
    alert(
      `É necessário 100% de Stamina para utilizar Skill, você tem ${player2.Stamina}, ganhe stamina acertando ataques neutros !`
    );
    return 0;
  } else {
    if (player2.ID == "fire") {
      //altera a face do monster
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-skill-to-left.png)"
      );
    } else if (player2.ID == "aqua") {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-skill-to-left.png)"
      );
    } else {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-skill-to-left.png)"
      );
    }
    let esquivaInimigo = Math.floor(Math.random() * 100);

    if (esquivaInimigo <= player1.EsquivaChance) {
      dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Inimigo Esquivou`;

      dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você Esquivou`;

      if (player1.ID == "fire") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
        );
      } else if (player1.ID == "aqua") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
        );
      } else {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
        );
      }

      player2.Stamina = 0;

      staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;

      alert(`Inimigo Esquivou`);
    } else {
      if (player1.ID == "fire") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-take-damage.png)"
        );
      } else if (player1.ID == "aqua") {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-take-damage.png)"
        );
      } else {
        monsterFaceP1.style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-take-damage.png)"
        );
      }
      let chanceCritico = Math.floor(Math.random() * 100);

      if (chanceCritico <= player2.CritChance) {
        alert(`Player2 acertou skill ATK crítico`);

        if (
          (player2.ID == "fire" && player1.ID == "ice") ||
          (player2.ID == "aqua" && player1.ID == "fire") ||
          (player2.ID == "ice" && player1.ID == "aqua")
        ) {
          player1.HP =
            player1.HP - (player2.SkillAtk + player2.SkillAtk * 0.05) * 1.5;
          dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você causou ${
            (player2.SkillAtk + player2.SkillAtk * 0.05) * 1.5
          }dmg`;
          dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${
            (player2.SkillAtk + player2.SkillAtk * 0.05) * 1.5
          }dmg`;
          hpPlayer1HTML.innerHTML = `HP: ${player1.HP}`;
          player2.Stamina = 0;
          staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;
        } else {
          player1.HP = player1.HP - player2.SkillAtk * 1.5;
          dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você causou ${
            player2.SkillAtk * 1.5
          }dmg`;
          hpPlayer1HTML.innerHTML = `HP: ${player1.HP}`;
          dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${
            player2.SkillAtk * 1.5
          }dmg`;

          player2.Stamina = 0;

          staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;
        }
      } else {
        alert(`Player2 acertou skill ATK`);

        if (
          (player2.ID == "fire" && player1.ID == "ice") ||
          (player2.ID == "aqua" && player1.ID == "fire") ||
          (player2.ID == "ice" && player1.ID == "aqua")
        ) {
          player1.HP =
            player1.HP - (player2.SkillAtk + player2.SkillAtk * 0.05);
          dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você causou ${
            player2.SkillAtk + player2.SkillAtk * 0.05
          }dmg`;
          dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${
            player2.SkillAtk + player2.SkillAtk * 0.05
          }dmg`;
          hpPlayer1HTML.innerHTML = `HP: ${player1.HP}`;
          player2.Stamina = 0;
          staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;
        } else {
          player1.HP = player1.HP - player2.SkillAtk;
          dmgCausadoPeloP2HTML.innerHTML = `Turno ${turnoCount} Você causou ${player2.SkillAtk}dmg`;
          hpPlayer1HTML.innerHTML = `HP: ${player1.HP}`;
          dmgRecebidoPeloP1HTML.innerHTML = `Turno ${turnoCount} Você sofreu ${player2.SkillAtk}dmg`;

          player2.Stamina = 0;

          staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;
        }
      }
      if (player1.HP <= 0) {
        hpPlayer1HTML.innerHTML = `HP: 0`;

        document
          .querySelector(".battle-layout-buttons")
          .style.setProperty("display", "none");
        document
          .querySelector(".end-layout-buttons")
          .style.setProperty("display", "flex");

        if (player1.ID == "fire") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/FireMonster/Fire-Monster-lost.png)"
          );
        } else if (player1.ID == "aqua") {
          monsterFaceP2.style.setProperty(
            "background-image",
            "url(./assets/img/AquaMonster/Aqua-Monster-lost.png)"
          );
        } else {
          monsterFaceP1.style.setProperty(
            "background-image",
            "url(./assets/img/IceMonster/Ice-Monster-lost.png)"
          );
        }
      }
    }
  }
  turnPlayer2 = false;
  turnPlayer1 = true;
  turnoCount++;
}

function curarPlayer2() {
  if (turnPlayer2 == false) {
    alert(`Agora é a vez do Player1`);
    return 0;
  }
  if (player2.Stamina < 25) {
    alert(
      `É necessário 25% de Stamina para utilizar Cura, você tem ${player1.Stamina}, ganhe stamina acertando ataques neutros !`
    );
    return 0;
  } else {
    if (player2.ID == "fire") {
      //altera a face do monster
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
    } else if (player2.ID == "aqua") {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
    } else {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
    }

    if (player2.ID == "fire") {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
    } else if (player2.ID == "aqua") {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
    } else {
      monsterFaceP2.style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
    }

    alert(`Player2 Curou ${player2.Cura}`);

    player2.Stamina = player2.Stamina - 25;
    staminaPlayer2HTML.innerHTML = `Stamina: ${player2.Stamina}%`;

    curaP2HTML.innerHTML = `Turno ${turnoCount} Curou ${player2.Cura} de HP`;
    curaP1HTML.innerHTML = `Turno ${turnoCount} Inimigo Curou ${player2.Cura} de HP`;
    player2.HP = player2.HP + player2.Cura;
    hpPlayer2HTML.innerHTML = `HP: ${player2.HP}`;

    turnPlayer1 = true;
    turnPlayer2 = false;
    turnoCount++;
  }
}
