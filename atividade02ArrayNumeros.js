    
function elemento(){
    var array = [1,2,3,4,5,6,7,80,87,56,45,34,2,];
    var arrayVazio = -1;

    if (array.length == 0) {
        console.log(arrayVazio);
        } else {
            for (let index = 0; index < array.length; index++) {
                var element = array[index];
            
                if (element % 2 == 0 ) {
                    element = 0;
                    console.log(element);
                }else{
                        console.log(element);
                    }
            }
        }
}
elemento();