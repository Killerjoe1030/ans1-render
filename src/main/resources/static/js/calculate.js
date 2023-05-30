
// Defining some constants
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

// create an array containing all the lower bounds
var bounds = [0.00, 50.00, 55.00, 60.00, 65.00, 70.00, 75.00, 80.00, 85.00, 90.00, 95.00, 100.00];

// counter array containing the number of students with each letter grade
// in ascending order (F-A+)
var gradeCount = [2,3,3,2,1,4,1,2,3,3,1]

const MaxGrade = 100.00 
const MinGrade = 0.00
var OGlength = 24 //final index of the grades array in it's base state



updateHist()

window.onclick = function offclickMax(evt){
    var inputbox = document.querySelector('input[id="MaxB"]')
    var inputbox2 = document.querySelector('input[id="AplusB"]')
    var inputbox3 = document.querySelector('input[id="AB"]')
    var inputbox4 = document.querySelector('input[id="AminusB"]')
    var inputbox5 = document.querySelector('input[id="BplusB"]')
    var inputbox6 = document.querySelector('input[id="BB"]')
    var inputbox7 = document.querySelector('input[id="BminusB"]')
    var inputbox8 = document.querySelector('input[id="CplusB"]')
    var inputbox9 = document.querySelector('input[id="CB"]')  
    var inputbox10 = document.querySelector('input[id="CminusB"]')
    var inputbox11 = document.querySelector('input[id="DB"]')
    var inputbox12 = document.querySelector('input[id="FB"]')                  
    var event = evt.target 

    if(event != inputbox){
        console.log("clicked outside box 1")
        updateBound(1)
    }
    if(event != inputbox2){
        console.log("clicked outside box 2")
        updateBound(2)
    }
    if(event != inputbox3){
        console.log("clicked outside box 3")
        updateBound(3)
    }
    if(event != inputbox4){
        console.log("clicked outside box 4")
        updateBound(4)
    }
    if(event != inputbox5){
        console.log("clicked outside box 5")
        updateBound(5)
    }
    if(event != inputbox6){
        console.log("clicked outside box 6")
        updateBound(6)
    }
    if(event != inputbox7){
        console.log("clicked outside box 7")
        updateBound(7)
    }
    if(event != inputbox8){
        console.log("clicked outside box 8")
        updateBound(8)
    }
    if(event != inputbox9){
        console.log("clicked outside box 9")
        updateBound(9)
    }
    if(event != inputbox10){
        console.log("clicked outside box 10")
        updateBound(10)
    }
    if(event != inputbox11){
        console.log("clicked outside box 11")
        updateBound(11)
    }
    if(event != inputbox12){
        console.log("clicked outside box 12")
        updateBound(12)
    }

}

// receives a number 1-12 as input, the number signifies which bound to be updated
function updateBound(Num){

    if(Num < 1 || Num > 12){
        console.log("Invalid Input!")
    }
    //test for the max bound   
    if(Num == 1){
        var newMax = document.getElementById("MaxB").value
        if(newMax <= bounds[10] || newMax > MaxGrade){
            newMax.value = 'Invalid Input!'
            window.alert("Invalid Input! Please make sure the bounds don't overlap")
        }
        else{
            bounds[11] = Number(newMax)
            countGrades()
        }        
    }
    if(Num == 2){
        var newAplus = document.getElementById("AplusB").value 
        if(newAplus <= bounds[9] || newAplus >= bounds[11]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")
        }
        else{
            bounds[10] = Number(newAplus)
            countGrades()
        }
    }
    if(Num == 3){
        var newA = document.getElementById("AB").value 
        console.log(newA)
        if(newA <= bounds[8] || newA >= bounds[10]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[9] = Number(newA)
            countGrades()
        }
    }
    if(Num == 4){
        var newAminus = document.getElementById("AminusB").value
        if(newAminus <= bounds[7] || newAminus >= bounds[9]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[8] = Number(newAminus)
            countGrades()
        }
    }
    if(Num == 5){
        var newBplus = document.getElementById("BplusB").value
        if(newBplus <= bounds[6] || newBplus >= bounds[8]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")
        }
        else{
            bounds[7] = Number(newBplus)
            countGrades()
        }
    }
    if(Num == 6){
        var newB = document.getElementById("BB").value 
        if(newB <= bounds[5] || newB >= bounds[7]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[6] = Number(newB)
            countGrades()
        }
    }
    if(Num == 7){
        var newBminus = document.getElementById("BminusB").value
        if(newBminus <= bounds[4] || newBminus >= bounds[6]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[5] = Number(newBminus)
            countGrades()
        }
    }
    if(Num == 8){
        var newCplus = document.getElementById("CplusB").value 
        if(newCplus <= bounds[3] || newCplus >= bounds[5]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[4] = Number(newCplus)
            countGrades()
        }
    }
    if(Num == 9){
        var newC = document.getElementById("CB").value 
        if(newC <= bounds[2] || newC >= bounds[4]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[3] = Number(newC)
            countGrades()
        }
    }
    if(Num == 10){
        var newCminus = document.getElementById("CminusB").value 
        if(newCminus <= bounds[1] || newCminus >= bounds[3]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[2] = Number(newCminus)
            countGrades()
        }
    }
    if(Num == 11){
        var newD = document.getElementById("DB").value 
        if(newD <= bounds[0] || newD >= bounds[2]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[1] = Number(newD)
            countGrades()
        }
    }
    if(Num == 12){
        var newF = document.getElementById("FB").value 
        if(newF < MinGrade || newF >= bounds[1]){
            window.alert("Invalid Input! Please make sure the bounds don't overlap")            
        }
        else{
            bounds[0] = Number(newF)
            countGrades()
        }
    }

}


function inputdata(){
    var newGrade = document.getElementById("gradeinput").value 
    if (newGrade > MaxGrade || newGrade < MinGrade){
        console.log("Invalid Input!")
        window.alert("Invalid Input! Please enter a valid number within the range of 0.00 - 100.00")
    }
    else{
        grades.push(Number(newGrade)) // Have to convert the input into an integer
        OGlength++ 
        countGrades() // calculate which letter grade the new grade belongs to 
        updateHist()
        console.log(gradeCount)        
    }
    
}

// checks the newest grade added and places it in the correct bound
function countGrades(){
    //reset the counter array to zero for the re count
    for(var i = 0; i < 11; i++){
        gradeCount[i] = 0
    }

    for(var i = 0; i <= OGlength; i++){

        if(grades[i] < bounds[1]){
            //Is it an F?
            console.log(grades[i] + " is an F")
            gradeCount[0]++ //less than 50
        }
        if(grades[i] < bounds[2] && grades[i] >= bounds[1]){
            //Is it a D? 
            console.log(grades[i] + " is an D")            
            gradeCount[1]++ //less than 55 and greater than 50
        }
        if(grades[i] < bounds[3] && grades[i] >= bounds[2]){
            // Is it a C-?
            console.log(grades[i] + " is an C-") 
            gradeCount[2]++ //less than 60 and greater than 55
        }
        if(grades[i] < bounds[4] && grades[i] >= bounds[3]){
            // Is it a C? 
            console.log(grades[i] + " is an C") 
            gradeCount[3]++ 
        }
        if(grades[i] < bounds[5] && grades[i] >= bounds[4]){
            // Is it a C+?
            console.log(grades[i] + " is an C+") 
            gradeCount[4]++
        }
        if(grades[i] < bounds[6] && grades[i] >= bounds[5]){
            // Is it a B-?
            console.log(grades[i] + " is an B-") 
            gradeCount[5]++
        }
        if(grades[i] < bounds[7] && grades[i] >= bounds[6]){
            // Is it a B? 
            console.log(grades[i] + " is an B") 
            gradeCount[6]++
        }
        if(grades[i] < bounds[8] && grades[i] >= bounds[7]){
            // Is it a B+?
            console.log(grades[i] + " is an B+") 
            gradeCount[7]++
        }
        if(grades[i] < bounds[9] && grades[i] >= bounds[8]){
            // Is it a A-?
            console.log(grades[i] + " is an A-") 
            gradeCount[8]++
        }
        if(grades[i] < bounds[10] && grades[i] >= bounds[9]){
            // Is it an A? 
            console.log(grades[i] + " is an A") 
            gradeCount[9]++
        }
        if(grades[i] >= bounds[10]){
            // Is it an A+?
            console.log(grades[i] + " is an A+") 
            gradeCount[10]++
        }
    }
    updateHist() //update the histogram after counting all the grades

}


//function reads the numbers from the counter array and updates the width of each histogram element
function updateHist(){

//Update A+ 
// document.getElementById("Aplus").style.width = (gradeCount[10] * 10) + "px"    
var Aplus = document.getElementsByClassName('Aplus')
Aplus[0].style.width = (gradeCount[10] * 10) + "px" 

//update A
var A = document.getElementsByClassName('A')
A[0].style.width = (gradeCount[9] * 10) + "px"

//update A-
var Aminus = document.getElementsByClassName('Aminus')
Aminus[0].style.width = (gradeCount[8] * 10) + "px"

//update B+ 
var Bplus = document.getElementsByClassName('Bplus')
Bplus[0].style.width = (gradeCount[7] * 10) + "px"

//update B
var B = document.getElementsByClassName('B')
B[0].style.width = (gradeCount[6] * 10) + "px"

//update B-
var Bminus = document.getElementsByClassName('Bminus')
Bminus[0].style.width = (gradeCount[5] * 10) + "px"

//update C+
var Cplus = document.getElementsByClassName('Cplus')
Cplus[0].style.width = (gradeCount[4] * 10) + "px"

//update C
var C = document.getElementsByClassName('C')
C[0].style.width = (gradeCount[3] * 10) + "px"

//update C-
var Cminus = document.getElementsByClassName('Cminus')
Cminus[0].style.width = (gradeCount[2] * 10) + "px"

//update D
var D = document.getElementsByClassName('D')
D[0].style.width = (gradeCount[1] * 10) + "px"

//update F
var F = document.getElementsByClassName('F')
F[0].style.width = (gradeCount[0] * 10) + "px"

}
