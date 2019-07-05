

nums=document.querySelectorAll('.num');
change_number=false;
position=0;
numo=[];
operation=[];
op_index=0;
on_op=false;




nums.forEach(num => {
  num.addEventListener('click',function() {
    query=document.querySelector('.query');
    final=query.value+num.value;
    query.value=final;
    ops=['+','-','x','÷'];
    if(ops.indexOf(num.value)<0){
      numo[position]=numo[position]==undefined?'':numo[position];
      numo[position]+=num.value;
      console.log('index'+position+'='+numo[position]);
      on_op=false;
    }
   
  })  
});


operations=document.querySelectorAll('.op');
operations.forEach(op=>{
    op.addEventListener('click',function(){
     operation[op_index]=op.value;
     position++;
     console.log('operation'+op_index+'='+operation[op_index]);
     op_index++;
     on_op=true;
    });
});

document.querySelector('.equals').addEventListener('click',function(){
    var answer=0;
    for(i=0;i<numo.length;i++){
        numo[i]=parseFloat(numo[i],0);
        numo[i]=isNaN(numo[i])?0:numo[i];
    }

    answer=operate(operation);
    
 
    console.log(answer);
    document.querySelector('.answer').value=answer;
});


document.querySelector('.btn_ac').addEventListener('click',function(){
    position=0;
    op_index=0;
    document.querySelector('.answer').value=0;
    document.querySelector('.query').value='';
    numo=[];
    operation=[];
})

document.querySelector('.btn_del').addEventListener('click',function(){
  
    if(on_op){
        operation.pop();
        op_index--;
        position--;
        on_op=false;
    }
    else{
       on_op=false;
       numo[position]=numo[position].slice(0,-1); 
       if(numo[position].length==0){
           on_op=true;
           
       }
    
    }
    document.querySelector('.query').value=document.querySelector('.query').value.slice(0,-1);
   
});


function operate(operation){
    for(i=0;i<operation.length;i++){
        if(operation[i]=='÷'){
            console.log('divided '+ numo[i]+'÷'+ numo[i+1]+'= ');
            answer=numo[i]/numo[i+1]; 
            numo.splice(i,1);
            operation.splice(i,1);
            numo[i]=answer; i=0;
            console.log(numo);
            console.log(operation);
            
        }

    }

    for(i=0;i<operation.length;i++){
        if(operation[i]=='x'){
            console.log('multiplied '+ numo[i]+'x'+ numo[i+1]+'= ');
            answer=numo[i]*numo[i+1]; 
            operation.splice(i,1);
             numo.splice(i,1);
             numo[i]=answer; i=0;
            console.log(numo);
            console.log(operation);
             
        }

    }

    for(i=0;i<operation.length;i++){
        
        if(operation[i]=='+'){
            console.log('added '+ numo[i]+'+'+ numo[i+1]+'= ');
            answer=numo[i]+numo[i+1]; 
            numo.splice(i,1);
            operation.splice(i,1);
            numo[i]=answer; i=0;
            console.log(numo);
            console.log(operation);

        }

    }

    for(i=0;i<operation.length;i++){
        if(operation[i]=='-'){
            console.log('subtracted '+ numo[i]+'-'+ numo[i+1]+'= ');
            answer=numo[i]-numo[i+1];
            operation.splice(i,1); 
            numo.splice(i,1);
            numo[i]=answer;i=0;
            console.log(numo);
            console.log(operation);
            
        }

    }
    if(operation.length==1){
        operate(operation);
    }
return answer;

}



