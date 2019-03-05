// Sample data
let people = [
    {
        name: "Ahmed",
        email: "ahmed@gmail.com",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }, 
    {
        name: "John",
        email: "john@gmail.com",
        scores: [
            1,
            2,
            3,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }, 
    {
        name: "Animal Hater",
        email: "dontluvpets@gmail.com",
        scores: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }, 
    {
        name: "Animal Lover",
        email: "petluver@gmail.com",
        scores: [
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ]
    }


];

let closestScore=50;
let closestPerson;

//submit answers
// $("#submit-button").on("click", function () {
//     console.log("button works");
    

//     let userName = $("#name-input").val();
//     let userEmail = $("#email-input").val();
//     if (userName === "" || name === " " || userEmail === "" || userEmail === " ") {
//         console.log("empty name or email");
//     }
//     else {
//         let obj = {
//             name: userName,
//             email: userEmail,
//             scores: []
//         }

//         for (let i = 1; i < 11; i++) {
//             let answer = $("#q" + i).val();
//             let value;
//                 if(answer=="5 (strongly agree)")
//                     value = 5;
//                 else if (answer=="1 (strongly disagree)")
//                     value=1;
//                 else if(answer=="2")
//                     value=2;
//                 else if (answer=="3")
//                     value=3;
//                 else if(answer=="4")
//                     value = 4;
            
//             obj.scores.push(value);
//             console.log("Question " + i + ": " + answer);
//         }
//         console.log(obj);
//         comparePeople(obj);
//     }
// });

// //compare scores
// function comparePeople(obj){
//     console.log(obj);
//     for (let i=0;i<people.length; i++){
//         console.log(people[i]);
//         let thisScore=0;
//         for(let j=0;j<obj.scores.length;j++){
//             let currScore;
//             currScore=Math.abs(obj.scores[j]-people[i].scores[j]);
//             console.log(currScore);
//             thisScore+=currScore;
//             // console.log("this score: "+thisScore);
//         }
//         console.log("this score: "+thisScore);
//         if(thisScore<closestScore){
//             closestScore=thisScore;
//             closestPerson=i;
//             thisScore=0;
//         }
//         else
//             thisScore=0;
//     }
//     console.log("closest person: "+people[closestPerson].name);
//     showMatch();
    
//     $.post("/api/characters", obj);
// }

// function showMatch(){
//     $("#results").html(
//         `<div class="card">
//         <h5 class="card-header">Best Match</h5>
//         <div class="card-body">
//           <h5 class="card-title">${people[closestPerson].name}</h5>
//           <p class="card-text">Email: ${people[closestPerson].email}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>`
      
//     );
//     closestScore=50;
// }

module.exports=people;