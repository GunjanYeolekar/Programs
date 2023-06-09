// Write application which performs addition and substraction of 2 numbers.

// Kay karaycha ahe ? (Methods) -> Addition & Substraction

// Te karayla kay lagnar ahe ? (Data) -> 2 numbers

class Arithematic
{
    // Data / Characteristics
    public No1 : number;
    public No2 : number;

    public constructor(A : number, B : number)
    {
        this.No1 = A;
        this.No2 = B;
    }

    public Addition() : number
    {
        return this.No1+this.No2;
    }

    public Substraction() : number
    {
        return this.No1-this.No2;
    }
}

var obj1 = new Arithematic(11,10);
var obj2 = new Arithematic(21,15);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition of obj1 : "+Ret);    // 21

Ret = obj1.Substraction();
console.log("Substraction of obj1 : "+Ret);  // 1

Ret = obj2.Addition();
console.log("Addition of obj2 : "+Ret);    // 36  

Ret = obj2.Substraction();
console.log("Substraction of obj2 : "+Ret);  // 6

