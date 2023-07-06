let answer = document.getElementById('inp');

    let submit = document.getElementById('bt');

    submit.addEventListener('click', function(){
        if(answer.value === 'salad') {
              location.href = "salad.html";
        } else if(answer.value === 'smoothie') {
             location.href = "smoothie.html";
        }else if (answer.value === 'soup') {
          location.href = "soup.html";
        }
        else{
             location.href = "invalid.html";
        }
    });

 
