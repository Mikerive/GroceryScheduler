const vegetable = ['tomatoes', 'beans','lettuce','carrots'];

for (let i=0;i<4; i++) {

	const btn = document.getElementById(vegetable[i]);


let index = 0;


const colors = ['green', 'grey'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

	
  if (i==0){
const tomatodays = ['infoSun','infoMon','infoTue','infoWed','infoThu','infoFri','infoSat'];
for (let i=0;i<7; i++) 
  if (index == 0 )
  	document.getElementById(tomatodays[i]).innerHTML="Water tomatoes twice today";
  else
      document.getElementById(tomatodays[i]).innerHTML="";	


}

else if (i==1){
   const beandays = ['beanSun','beanMon','beanTue','beanWed','beanThu','beanFri','beanSat']
  for (let i=0;i<7; i+=3) 
    if (index == 0 )
  	document.getElementById(beandays[i]).innerHTML="Water beans today";
  else
	document.getElementById(beandays[i]).innerHTML="";

	}




else if (i==2){
   const lettucedays = ['letSun','letMon','letTue','letWed','letThu','letFri','letSat']
  for (let i=0;i<7; i+=2) 
    if (index == 0 )
  	document.getElementById(lettucedays[i]).innerHTML="Water lettuce today";
  else
	document.getElementById(lettucedays[i]).innerHTML="";

	}

	


else if (i==3){
   const carrotdays = ['carSun','carMon','carTue','carWed','carThu','carFri','carSat']
  for (let i=0;i<7; i+=3) 
    if (index == 0 )
  	document.getElementById(carrotdays[i]).innerHTML="Water carrots today";
  else
	document.getElementById(carrotdays[i]).innerHTML="";

	}

	



   

  index = index >= colors.length - 1 ? 0 : index + 1;

  
});

}

