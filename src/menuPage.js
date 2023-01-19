import KattiRoll from './images/kattiRoll.jpg';
import Momo from './images/momo.jpeg';
import Chowmein from './images/chowmein.jpg';
import Pizza from './images/pizza.jpg';
import SoftDrinks from './images/softdrinks.jpg';
import HardDrinks from './images/harddrinks.jpg'

export default function getMenuPage(){
    const content = document.querySelector('#content');
    if(content.children.length === 3){
        content.removeChild(content.children[1]);
    }

    const main = document.createElement('main');
    main.classList.add('menu-main');

        const innerContainer = document.createElement('div');
        innerContainer.id = 'inner-container';

            const title = document.createElement('h1');
            title.textContent = 'MENU';

            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');

    // appends
    content.insertBefore(main, content.children[1]);
    main.appendChild(innerContainer);
        innerContainer.appendChild(title);
        innerContainer.appendChild(foodItem);

        for(let i=0;i<6;i+=1){
            const foodItems = document.createElement('div');
            foodItem.appendChild(foodItems).className = `food- ${i}`;
                const foodimages= document.createElement('div');
                foodItems.appendChild(foodimages);

                const foodImage = document.createElement('img');

                const foodlist = document.createElement('div');
                foodItems.appendChild(foodlist);
                    const foodName = document.createElement('h2'); 
                    const foodlist2 = document.createElement('div');
                if(i===0){
                    foodImage.src = KattiRoll;
                    foodName.textContent = 'Katti Roll';
                }
                if(i===1){
                    foodImage.src = Momo;
                    foodName.textContent = 'Momo';
                }
                if(i===2){
                    foodImage.src = Chowmein;
                    foodName.textContent = 'Chowmein';
                }
                if(i===3){
                    foodImage.src = Pizza;
                    foodName.textContent = 'Pizza';
                }
                if(i===4){
                    foodImage.src = SoftDrinks;
                    foodName.textContent = 'Soft Drinks';
                }
                if(i===5){
                    foodImage.src = HardDrinks;
                    foodName.textContent = 'Hard Drinks';
                }
                foodimages.appendChild(foodImage);
                foodlist.appendChild(foodName);
                foodlist.appendChild(foodlist2).className = 'variety';
                for(let j=0;j<4;j+=1){
                    const foodlist3 = document.createElement('div');
                    
                    foodlist2.appendChild(foodlist3);
                    if(j===1 || j===3){
                        foodlist3.classList.add('rupee');
                        for(let k=0;k<5;k+=1){
                            const rupee = document.createElement('p');
                            const randomPrice = Math.floor((Math.random()*280)+120);
                            rupee.textContent = `Rs. ${randomPrice}`;
                            foodlist3.appendChild(rupee);
                        }
                    }
                    if(j===0 || j===2){
                        for(let m=0;m<5;m+=1){
                            const randomFoodname = document.createElement('p');
                            randomFoodname.textContent = 'Some Random Dish';
                            foodlist3.appendChild(randomFoodname);
                        }
                    }
                }
        }
}