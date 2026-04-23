let buttons = document.querySelectorAll(".button");
let reset = document.querySelector("#reset");
let game = document.querySelector(".game");
let container = document.querySelector(".container");
let newb = document.querySelector("#new");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnof0 =true ;//PLAYER1, PLAYER2
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const enablebuttons = () => {
    for (let button of buttons){
        button.innerText = "";
        button.disabled = false;
    }
};

const resetbtn = () =>{
    turnof0 = true;
    enablebuttons();
    msgcontainer.classList.add("hide");
};
buttons.forEach((button) =>{
    button.addEventListener("click",() =>{
        console.log("box clicked");
       if(turnof0 === true){//player0 ki turn hai
        button.innerText = "0";
        turnof0 = false;
       }
       else{//playerx ki turn hai
        button.innerText = "x";
        turnof0 = true;
       }
       button.disabled = true;
       checkwinner();
    });

});
const disablebuttons = ()=>{
    for (let button of buttons){
        button.disabled = true;
    }
};
const showWinner = (winner) =>{
    msg.innerText =`AND THE WINNER IS   ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebuttons();
}
const checkwinner = () =>{
    for(let pattern of winpatterns){
        console.log(pattern);
        console.log(
            buttons[pattern[0]].innerText,
            buttons[pattern[1]].innerText,
            buttons[pattern[2]].innerText
            
        );
        let pos1val=buttons[pattern[0]].innerText;
        let pos2val=buttons[pattern[1]].innerText;
        let pos3val=buttons[pattern[2]].innerText;
        if (pos1val !=="" && pos2val !=="" && pos3val !==""){
            if(pos1val===pos2val&& pos2val===pos3val){
                console.log("winner declared",pos1val);
                showWinner(pos1val);
                break;
            }
        }
    }

};
reset.addEventListener("click",resetbtn);
newb.addEventListener("click",resetbtn);