const destribute = document.getElementById('destribute');
const tarot = document.getElementById('tarot')

let array =["意思", "理性", "清楚", "秩序", "知恵", "誓約", "善良", "禁止", "友情", "生命", "血統", "開放","平和","創造","信頼","出発","変化","結合","栄光","勇気","幸福","庇護","治療","自愛" ];
let result=[];


function answers(arrays){
  return `①主人公の現在は「${arrays[0]}」です。ここからその人の物語の、どういう始まりをイメージしますか？

  ②主人公の過去は「${arrays[1]}」です。その人の昔の姿、あるいは隠された姿です。

  ③送り手は「${arrays[2]}」です。主人公に何かを依頼する人物です。

  ④対象者（依頼の内容）は「${arrays[3]}」です。主人公に与えられる課題やミッション、運命です。誰か探す相手でも、目的や探し物でも、取り戻すものでもいいです。

  ⑤受け手は「${arrays[4]}」です。届け物の受け取り人です。人物でなくてもかまいません。

  ⑥主人公の近未来は「${arrays[5]}」です。主人公に最初に起きる出来事です。

  ⑦援助者は「${arrays[6]}」です。主人公を助ける人やモノです。どんな人やモノで、何故どうやって助けてくれるのでしょう。

  ⑧敵対者は「${arrays[7]}」です。主人公の行動を妨害する人やモノです。どんな人やモノで、何故どうやって妨害するのでしょう。

  ⑨結末（未来）は「${arrays[8]}」です。主人公は最後にどうなったのでしょう。`
    }

destribute.addEventListener(
  'click',
  ()=>{
    let copy = [...array];
    result= [];
    console.log('初期のcopy:', copy.length); // 24のはず
    for(let i=0;i<9;i++){
      console.log(`ループ${i}: copy.length = ${copy.length}`);//デバッグ用
      let randomNumber = Math.floor(Math.random()*copy.length);
      console.log(`randomNumber: ${randomNumber}, 選ばれた値: ${copy[randomNumber]}`);//デバッグ用
    result.push(copy[randomNumber]);
    copy.splice(randomNumber,1);
    }
    for (let i=0; i<9; i++){
      let random = Math.random();
      if(random<0.5){
        result[i]=`${result[i]}の逆位置`;
      }
    }
    console.log('最終result:', result);//最終リザルト

    tarot.innerHTML="";
    const heading= document.createElement('h3');
    heading.innerText='実行結果';
    tarot.appendChild(heading);

    const paragraph= document.createElement('p');
    const results = answers(result);
    paragraph.innerText= results;
    paragraph.style.whiteSpace = 'pre-line';
    tarot.appendChild(paragraph);
  });

  