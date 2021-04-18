interface Waiter{
    anjiao:boolean;
    say:()=>{
    }

}

interface Teacher{
    anjiao:boolean;
    skill:()=>{
    }
}

function judgeWho(animal:Waiter|Teacher){
    if(animal.anjiao){
        (animal as Teacher).skill();
    }else {
        (animal as Waiter).say();
    }
}

function judgeWho1(animal:Waiter|Teacher){
    if("skill" in animal){
        animal.skill()
    }else{
        animal.say()
    }
}

function  add(first:string|number,second:string|number){
    if(typeof first === "string"||typeof second === "string"){
       return `${first}${second}`
    }
    return first + second
}

class NumberObj{
    count:number;
}

function addObj(f:object|NumberObj,s:object|NumberObj){

    if(f instanceof NumberObj&& s instanceof  NumberObj){
        return    f + s;
    }
    return 0;
}
