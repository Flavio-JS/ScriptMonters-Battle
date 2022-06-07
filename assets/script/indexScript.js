/*Controle de escolha de ScriptMonsters*/
let maxArrowClicks = 0;

function arrowRight() {
  maxArrowClicks++;
  document.querySelector(".arrow.left").style.setProperty("opacity", "100%");
  document.querySelector(".name-monster").style.setProperty("opacity", "100%");
  document.querySelector(".h2-container").innerHTML = "<h2>STATUS</h2>";
  if (maxArrowClicks == 3) {
    document.querySelector(".arrow.right").style.setProperty("opacity", "50%");
  }
  if (maxArrowClicks == 4) {
    // Evitar que o usuário bugue o menu de  escolha
    maxArrowClicks = 3;
  }

  if (maxArrowClicks == 0) {
    //remove Monster
    document.querySelector(".name-monster").style.setProperty("opacity", "50%");
    document.querySelector(".name-monster").innerHTML = "";
    document.querySelector(".main-info").innerHTML = //como jogar
      "<ul><li>Escolha seu ScriptMonster</li><li>Cada ScriptMonster tem 3 habilidades <br /><ul><li>Mordida (ataque neutro)</li><li>Skill (ataque elemental)</li><li>Curar (cura HP)</li></ul></li><li>Durante o jogo escolha uma das 3 ações</li></ul>";
    document.querySelector(".h2-container").innerHTML = "<h2>Como Jogar</h2>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
  }
  if (maxArrowClicks == 1) {
    //Exibe FireMonster
    document.querySelector(".name-monster").innerHTML = "FireMonster";
    document.querySelector(".main-info").innerHTML = //Fire Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: ICE (Causa +5%DMG)</li><li>Fraco Contra: Aqua (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 50% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 2) {
    //Exibe AquaMonster
    document.querySelector(".name-monster").innerHTML = "AquaMonster";
    document.querySelector(".main-info").innerHTML = //Aqua Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 100HP</li><li>Forte Contra: FIRE (Causa +5%DMG)</li><li>Fraco Contra: ICE (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 3) {
    //Exibe IceMonster
    document.querySelector(".name-monster").innerHTML = "IceMonster";
    document.querySelector(".main-info").innerHTML = //Ice Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: AQUA (Causa +5%DMG)</li><li>Fraco Contra: FIRE (Recebe +5%DMG)</li><li>Esquiva: 20% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
  }
}

function arrowLeft() {
  maxArrowClicks--;
  document.querySelector(".arrow.right").style.setProperty("opacity", "100%");
  if (maxArrowClicks == 0) {
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
  }
  if (maxArrowClicks == -1) {
    // Evitar que o usuário bugue o menu de  escolha
    maxArrowClicks = 0;
  }

  if (maxArrowClicks == 0) {
    //remove Monster
    document.querySelector(".name-monster").style.setProperty("opacity", "50%");
    document.querySelector(".name-monster").innerHTML = "";
    document.querySelector(".main-info").innerHTML = //como jogar
      "<ul><li>Escolha seu ScriptMonster</li><li>Cada ScriptMonster tem 3 habilidades <br /><ul><li>Mordida (ataque neutro)</li><li>Skill (ataque elemental)</li><li>Curar (cura HP)</li></ul></li><li>Durante o jogo escolha uma das 3 ações</li></ul>";
    document.querySelector(".h2-container").innerHTML = "<h2>Como Jogar</h2>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
  }
  if (maxArrowClicks == 1) {
    //Exibe FireMonster
    document.querySelector(".name-monster").innerHTML = "FireMonster";
    document.querySelector(".main-info").innerHTML = //Fire Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: ICE (Causa +5%DMG)</li><li>Fraco Contra: Aqua (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 50% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 2) {
    //Exibe AquaMonster
    document.querySelector(".name-monster").innerHTML = "AquaMonster";
    document.querySelector(".main-info").innerHTML = //Aqua Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 100HP</li><li>Forte Contra: FIRE (Causa +5%DMG)</li><li>Fraco Contra: ICE (Recebe +5%DMG)</li><li>Esquiva: 15% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
  }
  if (maxArrowClicks == 3) {
    //Exibe IceMonster
    document.querySelector(".name-monster").innerHTML = "IceMonster";
    document.querySelector(".main-info").innerHTML = //Ice Monster Stats
      "<ul><li>HP: 2000</li><li>Skill DMG: 200</li><li>Mordida DMG: 100</li><li>Cura: 80HP</li><li>Forte Contra: AQUA (Causa +5%DMG)</li><li>Fraco Contra: FIRE (Recebe +5%DMG)</li><li>Esquiva: 20% Chance de evitar DMG</li><li>Critico: 40% Chance de causar 1.5 do DMG</li></ul>";
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.removeProperty("background-image");
    document
      .querySelector(".monsters-img.choice")
      .style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
  }
}

//Definindo monster do Player

let monsterID = 0;

let fireMonsterStatus = {
  ID: 1,
  HP: 2000,
  Stamina: 0,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 80,
  EsquivaChance: 15,
  CritChance: 50,
};

let aquaMonsterStatus = {
  ID: 2,
  HP: 2000,
  Stamina: 0,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 100,
  EsquivaChance: 15,
  CritChance: 40,
};

let iceMonsterStatus = {
  ID: 3,
  HP: 2000,
  Stamina: 0,
  SkillAtk: 200,
  NormalAtk: 100,
  Cura: 80,
  EsquivaChance: 20,
  CritChance: 40,
};

var player1 = {
  ID: 0,
  HP: 0,
  SkillAtk: 0,
  NormalAtk: 0,
  Cura: 0,
  EsquivaChance: 0,
  CritChance: 0,
};
var player2 = {
  ID: 0,
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
  if (monsterID == fireMonsterStatus.ID) {
    player1 = fireMonsterStatus;
    maxArrowClicks = 0;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == aquaMonsterStatus.ID) {
    maxArrowClicks = 0;
    player1 = aquaMonsterStatus;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == iceMonsterStatus.ID) {
    maxArrowClicks = 0;
    player1 = iceMonsterStatus;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  }

  alert(
    `Monster Escolhido com sucesso ! Antes do Player2 Escolher o monster, clique em "OK" para que ele não veja o Monster esolhido`
  );

  document
    .querySelector(".action-button.player1")
    .style.setProperty("display", "none");

  document
    .querySelector(".action-button.player2")
    .style.setProperty("display", "inline");
}

function escolherMonster2() {
  monsterID = maxArrowClicks;
  if (monsterID == 0) {
    alert("Escolha um script monster");
    return 0;
  }
  if (monsterID == fireMonsterStatus.ID) {
    player2 = fireMonsterStatus;
    maxArrowClicks = 0;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == aquaMonsterStatus.ID) {
    maxArrowClicks = 0;
    player2 = aquaMonsterStatus;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
    arrowLeft();
  } else if (monsterID == iceMonsterStatus.ID) {
    maxArrowClicks = 0;
    player2 = iceMonsterStatus;
    document.querySelector(".arrow.left").style.setProperty("opacity", "50%");
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

  if (player1.ID == 1) {
    document
      .querySelector(".monster-face-player1")
      .style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
  } else if (player1.ID == 2) {
    document
      .querySelector(".monster-face-player1")
      .style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
  } else if (player1.ID == 3) {
    document
      .querySelector(".monster-face-player1")
      .style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
  }

  if (player2.ID == 1) {
    document
      .querySelector(".monster-face-player2")
      .style.setProperty(
        "background-image",
        "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
      );
  } else if (player2.ID == 2) {
    document
      .querySelector(".monster-face-player2")
      .style.setProperty(
        "background-image",
        "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
      );
  } else if (player2.ID == 3) {
    document
      .querySelector(".monster-face-player2")
      .style.setProperty(
        "background-image",
        "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
      );
  }

  alert(`Turno do Player1`);
}

//mecânica de batalha
let turnPlayer1 = true;
let turnPlayer2 = false;

function morderPlayer1() {
  if (turnPlayer1 == false) {
    //não deixa jogar se não for o turno dele
    alert(`Agora é a vez do Player2`);
    return 0;
  } else {
    if (player1.ID == 1) {
      //altera a face do monster
      document
        .querySelector(".monster-face-player1")
        .style.setProperty(
          "background-image",
          "url(./assets/img/FireMonster/Fire-Monster-biting.png)"
        );
    } else if (player1.ID == 2) {
      document
        .querySelector(".monster-face-player1")
        .style.setProperty(
          "background-image",
          "url(./assets/img/AquaMonster/Aqua-Monster-biting.png)"
        );
    } else {
      document
        .querySelector(".monster-face-player1")
        .style.setProperty(
          "background-image",
          "url(./assets/img/IceMonster/Ice-Monster-biting.png)"
        );
    }
    let esquivaInimigo = Math.floor(Math.random() * 100);

    if (esquivaInimigo <= player2.EsquivaChance) {
      //por algum motivo o monster esquiva mas não executa esse if, tenho que descobrir o porque ainda
      document.querySelector(
        ".dmg-causado-player1"
      ).innerHTML = `Inimigo Esquivou`;

      document.querySelector(
        ".dmg-recebido-player2"
      ).innerHTML = `Você Esquivou`;

      if (player2.ID == 1) {
        document
          .querySelector(".monster-face-player2")
          .style.setProperty(
            "background-image",
            "url(./assets/img/FireMonster/Fire-Monster-normal.png)"
          );
      } else if (player2.ID == 2) {
        document
          .querySelector(".monster-face-player2")
          .style.setProperty(
            "background-image",
            "url(./assets/img/AquaMonster/Aqua-Monster-normal.png)"
          );
      } else {
        document
          .querySelector(".monster-face-player2")
          .style.setProperty(
            "background-image",
            "url(./assets/img/IceMonster/Ice-Monster-normal.png)"
          );
      }

      alert(`Inimigo Esquivou`);
    } else {
      if (player2.ID == 1) {
        document
          .querySelector(".monster-face-player2")
          .style.setProperty(
            "background-image",
            "url(./assets/img/FireMonster/Fire-Monster-take-damage.png)"
          );
      } else if (player2.ID == 2) {
        document
          .querySelector(".monster-face-player2")
          .style.setProperty(
            "background-image",
            "url(./assets/img/AquaMonster/Aqua-Monster-take-damage.png)"
          );
      } else {
        document
          .querySelector(".monster-face-player2")
          .style.setProperty(
            "background-image",
            "url(./assets/img/IceMonster/Ice-Monster-take-damage.png)"
          );
      }
      let chanceCritico = Math.floor(Math.random() * 100);
      alert("chanceCritifco: " + chanceCritico);

      if (chanceCritico <= player1.CritChance) {
        alert(`Player1 acertou normal ATK crítico`);
        if (
          (player1.ID == 1 && player2.ID == 3) ||
          (player1.ID == 2 && player2.ID == 1) ||
          (player1.ID == 3 && player2.ID == 2)
        ) {
          player2.HP =
            player2.HP - (player1.NormalAtk + player1.NormalAtk * 0.05) * 1.5;
          document.querySelector(
            ".dmg-causado-playerl"
          ).innerHTML = `Você causou ${
            (player1.NormalAtk + player1.NormalAtk * 0.05) * 1.5
          }dmg`;
          document.querySelector(
            ".dmg-recebido-player2"
          ).innerHTML = `Você sofreu ${
            (player1.NormalAtk + player1.NormalAtk * 0.05) * 1.5
          }dmg`;
          document.querySelector(".hp-player2").innerHTML = `HP: ${player2.HP}`;
          if (player1.Stamina < 100) {
            player1.Stamina = player1.Stamina + 50;
          }
          document.querySelector(
            ".stamina-player1"
          ).innerHTML = `Stamina: ${player1.Stamina}%`;
          if (player2.HP <= 0) {
            alert(`Player1 venceu`);
          }
        } else {
          player2.HP = player2.HP - player1.NormalAtk * 1.5;
          document.querySelector(
            ".dmg-causado-playerl"
          ).innerHTML = `Você causou ${player1.NormalAtk * 1.5}dmg`;
          document.querySelector(".hp-player2").innerHTML = `HP: ${player2.HP}`;
          document.querySelector(
            ".dmg-recebido-player2"
          ).innerHTML = `Você sofreu ${player1.NormalAtk * 1.5}dmg`;
          if (player1.Stamina < 100) {
            player1.Stamina = player1.Stamina + 50;
          }
          document.querySelector(
            ".stamina-player1"
          ).innerHTML = `Stamina: ${player1.Stamina}%`;
          if (player2.HP <= 0) {
            alert(`Player1 venceu`);
          }
        }
      } else {
        alert(`Player1 acertou normal ATK`);
        if (
          (player1.ID == 1 && player2.ID == 3) ||
          (player1.ID == 2 && player2.ID == 1) ||
          (player1.ID == 3 && player2.ID == 2)
        ) {
          player2.HP =
            player2.HP - player1.NormalAtk + player1.NormalAtk * 0.05;
          document.querySelector(
            ".dmg-causado-playerl"
          ).innerHTML = `Você causou ${
            player1.NormalAtk + player1.NormalAtk * 0.05
          }dmg`;
          document.querySelector(
            ".dmg-recebido-player2"
          ).innerHTML = `Você sofreu ${
            player1.NormalAtk + player1.NormalAtk * 0.05
          }dmg`;
          document.querySelector(".hp-player2").innerHTML = `HP: ${player2.HP}`;
          if (player1.Stamina < 100) {
            player1.Stamina = player1.Stamina + 50;
          }
          document.querySelector(
            ".stamina-player1"
          ).innerHTML = `Stamina: ${player1.Stamina}%`;
          if (player2.HP <= 0) {
            alert(`Player1 venceu`);
          }
        } else {
          player2.HP = player2.HP - player1.NormalAtk;
          document.querySelector(
            ".dmg-causado-playerl"
          ).innerHTML = `Você causou ${player1.NormalAtk}dmg`;
          document.querySelector(
            ".dmg-recebido-player2"
          ).innerHTML = `Você sofreu ${player1.NormalAtk}dmg`;
          document.querySelector(".hp-player2").innerHTML = `HP: ${player2.HP}`;
          if (player1.Stamina < 100) {
            player1.Stamina = player1.Stamina + 50;
          }
          document.querySelector(
            ".stamina-player1"
          ).innerHTML = `Stamina: ${player1.Stamina}%`;
          if (player2.HP <= 0) {
            alert(`Player1 venceu`);
          }
        }
      }
    }
  }
  turnPlayer1 == true;
}

function skillPlayer1() {
  if (turnPlayer1 == false) {
    alert(`Agora é a vez do Player2`);
    return 0;
  }
  if (player.Stamina < 100) {
    alert(
      `É necessário 100% de Stamina para utilizar Skill, você tem ${player.Stamina}, ganhe stamina acertando ataques neutros !`
    );
  }
}

function curarPlayer1() {
  if (turnPlayer1 == false) {
    alert(`Agora é a vez do Player2`);
    return 0;
  }
}

function morderPlayer2() {
  if (turnPlayer2 == false) {
    alert(`Agora é a vez do Player1`);
    return 0;
  }
}

function skillPlayer2() {
  if (turnPlayer2 == false) {
    alert(`Agora é a vez do Player1`);
    return 0;
  }
  if (player.Stamina < 100) {
    alert(
      `É necessário 100% de Stamina para utilizar Skill, você tem ${player.Stamina}, ganhe stamina acertando ataques neutros !`
    );
  }
}

function curarPlayer2() {
  if (turnPlayer2 == false) {
    alert(`Agora é a vez do Player1`);
    return 0;
  }
}
