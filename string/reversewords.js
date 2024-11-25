let s='  this is an      amazing program'

function reverse(s){
    let ans=''
    let temp=''
   // s=s.trim()
    for(let i of s){
      if(i!=' '){
        temp+=i
         
      }else{
        if(temp==''){

        }else{
        if(ans==''){
            ans=temp
        }else{
        ans=temp+' '+ans
        }temp=''
        }
      }
      
    }
    if(temp!=''){
        if(ans!=""){
        ans=temp+' '+ans
        }else{
            ans=temp
        }
    }
    return ans
};
//oneliner
//return s.trim().split(' ').filter(Boolean).reverse().join(' ');
console.log(reverse(s))
