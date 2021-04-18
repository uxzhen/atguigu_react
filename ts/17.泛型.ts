 // 泛型

 function join<xuzhen>(f:xuzhen,s:xuzhen){
    return `${f}${s}`
 }
 // join<string>(1,2)
 join<string>("a","b")
 join<any>("a","b")

 function  myFun<ANY>(p:ANY[]){
    return p;
 }

 myFun<string>(["a","a"])


 function join2<T,P>(f:T,s:P){
     return `${f}${s}`
 }
 // join<string>(1,2)
 join2<string,number>("a",2)
