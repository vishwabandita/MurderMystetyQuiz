const quizDB = [
    {
        question: "Q1: Three spies: Three spies, suspected as double agents, speak as follows when questioned: Albert: “Bertie is a mole.” Bertie: “Cedric is a mole.” Cedric: “Bertie is lying.” Assuming that moles lie, other agents tell the truth, and there is just one mole among the three, who is the mole?  ",
        a: "Bertie",
        b: "Albert",
        c: "Cedric",
        d: "No one",
        ans: "ans1"
    },
    {
        question: "Q2: Famous chemist murdered: A very famous chemist was found murdered in his kitchen today. The police have narrowed it down to six suspects. They know it was a two-man job. Their names: Felice, Maxwell, Archibald, Nicolas, Jordan, and Xavier. A note was also found with the body: ’26-3-58/28-27-57-16′. Who are the killers?  ",
        a: "An executioner working for Adam",
        b: "Adam is the killer",
        c: "Adam's servant",
        d: "Adam's brother",
        ans: "ans2"
    },
    {
        question: "Q3: Man killed in his office: A man got killed in his office. The suspects are Edison, Maxis, Jason, Janna, Sofia, Patrick. A calendar near the man has blood, written 6, 4, 9, 10, 11. Who is the killer?",
        a: "Jason",
        b: "Janna",
        c: "Sofia",
        d: "Patrick",
        ans: "ans1"
    },
    {
        question: "Q4: Climbing Trip: A couple went on for a climbing trip. But only the husband returned from the vacation and said that his wife slipped off while climbing and died. On investigating, the local sheriff arrested him saying, “Your travel agent called. You murdered your wife.” The man did not inform anyone about the trip. Then how did the agent was so sure that it is a murder?   ",
        a: "The man bought a two way ticket for his wife and a one way ticket for himself.",
        b: "The man bought only a one way ticket for his wife whereas he bought a two way ticket for himself.",
        c: "The man walked",
        d: "The man took the train to go, and came back on foot",
        ans: "ans2"
    },
    {
        question: "Q5: Egg spinning competition: You are a junior detective investigating a case. Boys at an apartment complain that every day, they have an egg spinning competition with only raw eggs, and every day one particular boy wins. The boys want you to find out how. You are observing the boy spinning an egg when suddenly it drops to the floor. The apartment clerk casually hands him a broom to clean it up, as if it happens every day. You now know why the boy always wins the daily competition. How? ",
        a: "The clerk handed a mop to the boy.",
        b: "The clerk handed the boy a broom, so the egg the boy was spinning must have been hard-boiled.",
        c: "The clerk did nothing.",
        d: "The clerk handed a raw egg to the child nonetheless",
        ans: "ans2"
    },
    {
        question: "Q6: Death in car: A man was shot to death while in his car. There were no powder marks on his clothing, which indicated that the gunman was outside the car. However, all the windows were up and the doors locked. After a close inspection was made, the only bullet-holes discovered were on the man’s body. How was he murdered?  ",
        a: "The victim got out of the car to walk to the bushes.",
        b: "The victim was in a convertible. He was shot when the top was down.",
        c: "The victim stepped out of the car to help a wounded animal",
        d: "The victim got his head out of the car window",
        ans: "ans2"
    },
    {
        question: "Q7: Shauna was killed one Sunday morning. The police know who they are going to arrest from this bit of information. Who killed Shauna and how did the police know whom to arrest?",
        a: "April was getting the mail",
        b: "Alyssa was doing laundry",
        c: "Reggie was cooking",
        d: "Mark was planting in the garden",
        ans: "ans1"
    },
    {
        question: "Q8: Detective's code: A detective who was mere days from cracking an international smuggling ring has suddenly gone missing. While inspecting his last-known location, you find a note: 710 57735 34 5508 51 7718 Currently there are 3 suspects: Bill, John, and Todd. Can you break the detective’s code and find the criminal’s name?   ",
        a: "Bill is the criminal",
        b: "John is the criminal",
        c: "Todd is the criminal",
        d: "Todd and Bill are the criminals",
        ans: "ans1"
    },
    {
        question: "Q9: A man found dead on Saturday morning: A man is found dead one Saturday morning. He was killed while his wife was sleeping. The wife tells the police all that she knows. She tells them that the cook was cooking breakfast, the maid was cleaning and the butler was getting the mail. The police immediately arrest the person who is responsible. Who is responsible and why? ",
        a: "The cook is responsible",
        b: "The wife is responsible for the simple reason that she was supposed to be sleeping but yet she know about all that had happened.",
        c: "The maid is responsible.",
        d: "The maid and the cook are responsible",
        ans: "ans2"
    },
    {
        question: "Q10: Five Suspects: At the scene of a heinous crime, five suspects, one of whom is the guilty party, are being interrogated by a detective. Each of the suspects gives one statement and it later transpires that just three of these statements are correct. These are the statements:\n Uncle Jack: Uncle Jim committed the murder \n Aunt Mary: I did not do it \nCousin Stewart: It was not Cousin Margaret \nUncle Jim: Uncle Jack is lying when he says I did it \nCousin Margaret: Aunt Mary is telling the truth \nWho committed the murder? \n?",
        a: "Aunt Mary",
        b: "Uncle Jim",
        c: "Cousin Margaret",
        d: "Uncle Jack",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;
    
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = ` 
        <h3>You scored ${score}/${quizDB.length} </h3>
        <button class ="btn" onClick="location.reload()"> Play Again </button>
        `;


        showScore.classList.remove('scoreArea');

    }

    if(checkedAnswer == quizDB[questionCount].ans){
        alert("correct");
    }else{
        ("incorrect");
    }

});
