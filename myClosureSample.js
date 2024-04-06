
// W3Schools has really good example and this explanation 
// JavaScript closure. It makes it possible for a function to have "private" variables.

function parent(name){

    studentID = "123-45-6789" // social security number
    studentStatus = "E" //enrolled
    studentGrades = ["CLASS1:A", "CLASS2:A", "CLASS3:D"]
    studentName="Anna"

    var child = function getStudentStatus(){
        if (name == studentName)
            return studentStatus
        else
            return "unauthorized access"
    }

    return child

}

var child = parent("bob")
console.log(child)
console.log(child())

var child = parent("Anna")
console.log(child())