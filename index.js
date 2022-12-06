
let listKey = 1

displayList(localStorage)


function addToDo(){
    listKey++;
    let todo = document.getElementById('usrinput').value

    if(todo !== ''){
        let s = document.createElement('span')
            s.innerText = 'x'
            s.setAttribute('class','deleteSpan')
            s.setAttribute('onclick','deleteToDo(this.parentNode)')
           
        let p = document.createElement('p')
              p.setAttribute('id',listKey)  
              p.innerText = todo
              p.appendChild(s)
             
        
        document.body.appendChild(p)
        localStorage.setItem(listKey , todo)
        
        document.getElementById('usrinput').value = ''
    }else{
        document.getElementById('usrinput').placeholder = ' required...'
    }

   
    
    

}


function deleteToDo(todo) {
   
    document.body.removeChild(todo)
    localStorage.removeItem(todo.id)
}

function deleteAll(data){
    data.clear()
}


function displayList(data) {
    
    if(data != null ){
    for (const todo in data) {
        
       if (todo != 'setItem' && todo != 'clear' && todo != 'length' && todo != 'getItem' && todo != 'key' && todo != 'removeItem') {
        
        let s = document.createElement('span')
            s.innerText = 'x'
            s.setAttribute('class','deleteSpan')
            s.setAttribute('onclick','deleteToDo(this.parentNode)')
           
        let p = document.createElement('p')
              p.setAttribute('id' , todo)              
              p.innerText = localStorage.getItem(todo)
              p.appendChild(s)
             
        
        document.body.appendChild(p)

       }
        

    }
        
}
        
    
}

/*

     if(todo !== ''){
        let s = document.createElement('span')
            s.innerText = 'x'
            s.setAttribute('class','deleteSpan')
            s.setAttribute('onclick','deleteToDo(this.parentNode)')
           
        let p = document.createElement('p')
        
              p.innerText = todo
              p.appendChild(s)
             
        
        document.body.appendChild(p)
        
        document.getElementById('usrinput').value = ''
    }

*/