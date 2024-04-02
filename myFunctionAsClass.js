var funcAsClass = function(name, score, grade){
    //this : is the scope of function in which it executes (this - keyword)
    this.name = name;
    this.score = score;
    this.grade = grade;

    this.getStudentDetails = function (isAdmin) {
        return {
            name : this.name,
            grade : this.grade,
            score : this.score,
            newVariable : this.newVariable
        }
    }
}

funcAsClass.prototype.newVariable = "adding without proto to the ctor functio"
var X = new funcAsClass("anna","100","A")
console.log(X.getStudentDetails(true))

//X.newVariable = "adding without proto"
//console.log(X.getStudentDetails(true)) 

