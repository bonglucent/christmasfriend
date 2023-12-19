function sleep(ms){
return new Promise((resolve)=>setTimeout(resolve,ms))
}

const phrases=["Hi,I am Milan,your friend.Wishing you this Christmas with a little gift..","May this Christmas bring you moments of joy, peace, and well-deserved relaxation.","Wishing you a Christmas filled with the warmth of friendship, the joy of learning, and the well-deserved break you've earned.","Merry Christmas, and here's to a season of rest, reflection, and the promise of a bright future in medicine!","The chapter you are learning today is going to save someone’s life tomorrow. Pay attention.","Behind every exquisite thing that existed,there was something tragic" ];
const el=document.getElementById("pip");
let sleeptime=100;
let curPhraseIndex=0;
const writeLoop=async()=>{ 
    while(true){
        let curWord=phrases[curPhraseIndex];
         for ( let i=0;i<curWord.length;i++)
         {
            el.innerText=curWord.substring(0,i +1);
            await sleep(sleeptime);

        }
        await sleep(sleeptime * 5);

        for ( let i=curWord.length;i>0; i-- ){
            el.innerText=curWord.substring(0,i -1);
            await sleep(sleeptime);
         }
         await sleep(sleeptime * 5);
         if (curPhraseIndex===phrases.length-1){
            curPhraseIndex=0;
         }
         else{
            curPhraseIndex++;
         }


    }
};
writeLoop();
