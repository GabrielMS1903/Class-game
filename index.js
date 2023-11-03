class char{
    constructor (formChar, formType, formAge, formAtaque){
    this.formChar = formChar
    this.formType = formType
    this.formAge = formAge
    this.formAtaque = formAtaque
    }
 
atack(){
    console.log(` The ${this.formChar} ${this.formType} with ${this.formAge} used ${this.formAtaque} counter your enemy. `)
    let i = 1
do{
    console.log("The " + this.formChar + " up to the lvl 6 and your " + this.formAtaque + " up to the lvl 4!")
i++
}while (i < 1)
if(this.formChar != this.formAtaque){
    console.log("You won this battle. Congragulations!")}


}
}
let part = new char ( "Monge", "Coen", "36 years","matial arts level 3")
    part.atack()
