class  SelectGirl {
    constructor(private girls:string[]|number[]) {
    }
    getGirl(index:number):string|number{
        return this.girls[index]
    }
}

const selct = new SelectGirl(["a","b","c"])
console.log(selct.getGirl(1))

//泛型
class  SelectGirl1 <T>{
    constructor(private girls:T[]) {
    }
    getGirl(index:number):T{
        return this.girls[index]
    }
}

const selct1 = new SelectGirl1<string|number>(["a","b","c",3])
console.log(selct1.getGirl(1))

//继承
interface Girl2{
    name:string
}

class  SelectGirl2 <T extends Girl2>{
    constructor(private girls:T[]) {
    }
    getGirl(index:number):T{
        return this.girls[index]
    }
}

const selct2 = new SelectGirl2<Girl2>([{name:"1"},{name:"2"}])
console.log(selct2.getGirl(1))