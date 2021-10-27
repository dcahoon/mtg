"use strict";

const { card } = require('mtgsdk')

const url = 'https://api.magicthegathering.io/v1/cards';

//const url = "https://api.scryfall.com/";




const validateExists = (value) => {
  return value && value.trim()
}



const submitHandler = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)
  const searchName = formData.get("cardName")
  console.log(searchName)
  
}



const main = () => {
  const form = document.querySelector("#search-form")
  form.addEventListener("submit", submitHandler)
}

window.addEventListener("DOMContentLoaded", main)








async function getCardByName (name) {
   
    card.where({name: name})
        .then(result => {
            console.log(result[0]);
            //console.log(result[0].text.includes('goblins'));
            return result[0];
        });
        
} // end getCardByName function

//getCardByName('isochron scepter');


// showCard("entreat the angels");

async function getCardsBySubtype (subtype) {

    const cardNameList = [];
    const cardList = [];
    
    card.where({ subtypes: subtype })
        .then(result => {
            for (let c in result) {
                if (!cardNameList.includes(result[c].name)) {
                    cardList.push(result[c]);
                    cardNameList.push(result[c].name);
                }
            }
            console.log(cardNameList);
        })

} // end getCardsBySubtype function

// getCardsBySubtype('lhurgoyf');

//getCardsBySubtype('angel');












/* {
    name: 'Entreat the Angels',
    manaCost: '{X}{X}{W}{W}{W}',
    cmc: 3,
    colors: [ 'White' ],
    colorIdentity: [ 'W' ],
    type: 'Sorcery',
    types: [ 'Sorcery' ],
    rarity: 'Mythic',
    set: 'AVR',
    setName: 'Avacyn Restored',
    text: 'Create X 4/4 white Angel creature tokens with flying.\n' +
      "Miracle {X}{W}{W} (You may cast this card for its miracle cost when you draw it if it's the first card you drew this turn.)",
    artist: 'Todd Lockwood',
    number: '20',
    layout: 'normal',
    multiverseid: '247426',
    imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=247426&type=card',
    rulings: [
      {
        date: '2017-03-14',
        text: 'A mana cost of {X}{X} means that you pay twice X. If you want X to be 3, you pay {6}{W}{W}{W} to cast Entreat the Angels.'
      },
      {
        date: '2017-03-14',
        text: 'Entreat the Angels’s converted mana cost is based on its mana cost of {X}{X}{W}{W}{W}, even if you’re casting it for its miracle cost. For example, if you cast Entreat the Angels for its miracle cost and choose 4 for X, its converted mana cost is 11.'
      },
      {
        date: '2018-07-13',
        text: 'You still draw the card, whether you use the miracle ability or not. Any ability that triggers whenever you draw a card, for example, will trigger. If you don’t cast the card using its miracle ability, it will remain in your hand.'
      },
      {
        date: '2018-07-13',
        text: 'If the card with miracle leaves your hand before the triggered ability resolves, you won’t be able to cast it using its miracle ability.'
      },
      {
        date: '2018-07-13',
        text: 'You can reveal and cast a card with miracle on any turn, not just your own, if it’s the first card you’ve drawn that turn.'
      },
      {
        date: '2018-07-13',
        text: 'It’s important to reveal a card with miracle before it is mixed with the other cards in your hand.'
      },
      {
        date: '2018-07-13',
        text: 'Multiple card draws are always treated as a sequence of individual card draws. For example, if you haven’t drawn any cards yet during a turn and cast a spell that instructs you to draw three cards, you’ll draw them one at a time. Only the first card drawn this way may be revealed and cast using its miracle ability.'
      },
      {
        date: '2018-07-13',
        text: 'If an effect puts a card into your hand without using the word “draw,” the card wasn’t drawn.'
      },
      {
        date: '2018-07-13',
        text: 'You don’t have to reveal a drawn card with miracle if you don’t wish to cast it at that time.'
      },
      {
        date: '2018-07-13',
        text: 'You can cast a card for its miracle cost only as the miracle triggered ability resolves. If you don’t want to cast it at that time (or you can’t cast it, perhaps because there are no legal targets available), you won’t be able to cast it later for the miracle cost.'
      },
      {
        date: '2018-07-13',
        text: 'You cast the card with miracle during the resolution of the triggered ability. Ignore any timing rules based on the card’s type.'
      },
      {
        date: '2018-07-13',
        text: 'Miracle is an alternative cost to cast the spell with miracle. It can’t be combined with other alternative costs, such as casting a spell “without paying its mana cost.”'
      },
      {
        date: '2018-07-13',
        text: 'To determine the total cost of a spell, start with the mana cost or alternative cost (such as a miracle cost) you’re paying, add any cost increases, then apply any cost reductions. The converted mana cost of the spell remains unchanged, no matter what the total cost to cast it was.'
      }
    ],
    foreignNames: [
      {
        name: 'Anrufung der Engel',
        text: 'Bringe X 4/4 weiße Engel-Kreaturenspielsteine mit Flugfähigkeit ins Spiel.\n' +
          'Mirakulum {X}{W}{W} (Du kannst diese Karte zu ihren Mirakulum-Kosten wirken, wenn du sie ziehst, falls es die erste Karte ist, die du in diesem Zug gezogen hast.)',
        type: 'Hexerei',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=340540&type=card',
        language: 'German',
        multiverseid: 340540
      },
      {
        name: 'Rogar a los ángeles',
        text: 'Pon en el campo de batalla X fichas de criatura Ángel blancas 4/4 con la habilidad de volar.\n' +
          'Milagro {X}{W}{W}. (Puedes lanzar esta carta pagando su coste de milagro cuando la robes si es la primera carta que robaste este turno.)',
        type: 'Conjuro',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=296178&type=card',
        language: 'Spanish',
        multiverseid: 296178
      },
      {
        name: 'Implorez les anges',
        text: 'Mettez sur le champ de bataille X jetons de créature 4/4 blanche Ange avec le vol.\n' +
          "Miracle {X}{W}{W} (Vous pouvez lancer cette carte pour son coût de miracle quand vous la piochez si c'est la première carte que vous avez piochée ce tour-ci.)",
        type: 'Rituel',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295690&type=card',
        language: 'French',
        multiverseid: 295690
      },
      {
        name: 'Supplicare gli Angeli',
        text: 'Metti sul campo di battaglia X pedine creatura Angelo 4/4 bianche con volare.\n' +
          'Miracolo {X}{W}{W} (Puoi lanciare questa carta pagando il suo costo di miracolo quando la peschi, se è la prima che hai pescato in questo turno.)',
        type: 'Stregoneria',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=296422&type=card',
        language: 'Italian',
        multiverseid: 296422
      },
      {
        name: '天使への願い',
        text: '飛行を持つ白の４/４の天使・クリーチャー・トークンをＸ体戦場に出す。\n' +
          '奇跡 {X}{W}{W} （あなたがこのカードを引いたとき、これがこのターンに最初に引いたカードだった場合、あなたはこれの奇跡コストを支払うことでこれを唱えてもよい。）',
        type: 'ソーサリー',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=294413&type=card',
        language: 'Japanese',
        multiverseid: 294413
      },
      {
        name: '천사에게의 탄원',
        text: '비행 능력을 가진 4/4 백색 천사 생물 토큰 X개를 전장에 놓는다.\n' +
          '기적 {X}{W}{W} (당신이 이 카드를 뽑을 때, 이 카드가 당신이 이번 턴에 뽑은 첫 번째 카드라면 당신은 기적 비용을  지불하고 이 카드를 발동할 수 있다.)',
        type: '집중마법',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=294958&type=card',
        language: 'Korean',
        multiverseid: 294958
      },
      {
        name: 'Súplica aos Anjos',
        text: 'Coloque no campo de batalha X fichas de criatura brancas 4/4 do tipo Anjo com voar.\n' +
          'Milagre {X}{W}{W} (Você pode conjurar este card pagando seu custo de milagre ao comprá-lo se este for o primeiro card que você compra neste turno.)',
        type: 'Feitiço',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295446&type=card',
        language: 'Portuguese (Brazil)',
        multiverseid: 295446
      },
      {
        name: 'Молитва Ангелам',
        text: 'Положите на поле битвы Х фишек существа 4/4 белый Ангел с Полетом.\n' +
          'Чудо {X}{W}{W} (Вы можете разыграть эту карту за ее стоимость Чуда, когда вы берете ее, если это первая карта, которую вы взяли в этом ходу).',
        type: 'Волшебство',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295934&type=card',
        language: 'Russian',
        multiverseid: 295934
      },
      {
        name: '敦请天使',
        text: '将X个4/4白色，具飞行异能的天使衍生生物放进战场。\n' +
          '奇迹{X}{W}{W} （当你抓此牌时，如果它是你于本回合抓的第一张牌，你可以支付其奇迹费用来施放它。）',
        type: '法术',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=294714&type=card',
        language: 'Chinese Simplified',
        multiverseid: 294714
      },
      {
        name: '敦請天使',
        text: '將X個4/4白色，具飛行異能的天使衍生生物放進戰場。\n' +
          '奇蹟{X}{W}{W} （當你抽此牌時，如果它是你於本回合抽的第一張牌，你可以支付其奇蹟費用來施放它。）',
        type: '巫術',
        flavor: null,
        imageUrl: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=295202&type=card',
        language: 'Chinese Traditional',
        multiverseid: 295202
      }
    ],
    printings: [ 'AVR', 'C18', 'MM3', 'PLIST', 'V15' ],
    originalText: 'Put X 4/4 white Angel creature tokens with flying onto the battlefield.\n' +
      "Miracle {X}{W}{W} (You may cast this card for its miracle cost when you draw it if it's the first card you drew this turn.)",
    originalType: 'Sorcery',
    legalities: [
      { format: 'Commander', legality: 'Legal' },
      { format: 'Duel', legality: 'Legal' },
      { format: 'Legacy', legality: 'Legal' },
      { format: 'Modern', legality: 'Legal' },
      { format: 'Vintage', legality: 'Legal' }
    ],
    id: '93d5fc46-7b67-5524-a364-83938e9bb944'
  }


 */














// console.log(card);

/* card.where({ block: 'Shadows over Innistrad', border: 'black' })
    .then(sets => {
        console.log(sets[0].name) // "Welcome Deck 2016"
        console.log(sets[1].name) // "Shadows over Innistrad"
        console.log(sets[2].name) // "Eldritch Moon"
    })
    .catch((error) => {
        console.log(error);
    }); */

/* card.find(3)    // finds by ID, 3 is "Black Lotus"
    .then(result => {
        console.log(result.card.name);
    }); */

/* card.all({name: 'temporal mastery', pageSize: 1})
    .on('data', card => {
        console.log(card.name);
    }); */















