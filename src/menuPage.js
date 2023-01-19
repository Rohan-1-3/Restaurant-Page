import KattiRoll from './images/kattiRoll.jpg'
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

                const foodOne = document.createElement('div');
                foodOne.classList.add('food-one');

                    const imageOne = document.createElement('div');
                        const kattiRollImage = new Image();
                        kattiRollImage.src = KattiRoll;

                    const foodListOne = document.createElement('div');
                        const kattiRollName = document.createElement('h2');
                        kattiRollName.textContent = 'Katti Roll'
                        const kattiRollVariety = document.createElement('div');
                        kattiRollVariety.classList.add('variety')
                            const kattiRollVarietyDiv1 = document.createElement('div');
                                const item1 = document.createElement('p');
                                const item2 = document.createElement('p');
                                const item3 = document.createElement('p');
                                const item4 = document.createElement('p');
                                const item5 = document.createElement('p');
                            const kattiRollVarietyDiv2 = document.createElement('div');
                                const rupees1 = document.createElement('p');
                                rupees1.textContent = 'Rs.'
                                const rupees2 = document.createElement('p');
                                rupees2.textContent = 'Rs.'
                                const rupees3 = document.createElement('p');
                                rupees3.textContent = 'Rs.'
                                const rupees4 = document.createElement('p');
                                rupees4.textContent = 'Rs.'
                                const rupees5 = document.createElement('p');
                                rupees5.textContent = 'Rs.'
                            const kattiRollVarietyDiv3 = document.createElement('div');
                                const item6 = document.createElement('p');
                                const item7 = document.createElement('p');
                                const item8 = document.createElement('p');
                                const item9 = document.createElement('p');
                                const item0 = document.createElement('p');
                            const kattiRollVarietyDiv4 = document.createElement('div');
                                const rupees6 = document.createElement('p');
                                rupees6.textContent = 'Rs.'
                                const rupees7 = document.createElement('p');
                                rupees7.textContent = 'Rs.'
                                const rupees8 = document.createElement('p');
                                rupees8.textContent = 'Rs.'
                                const rupees9 = document.createElement('p');
                                rupees9.textContent = 'Rs.'
                                const rupees0 = document.createElement('p');
                                rupees0.textContent = 'Rs.'

    // appends
    content.insertBefore(main, content.children[1]);
    main.appendChild(innerContainer);
        innerContainer.appendChild(title);
        innerContainer.appendChild(foodItem);

            foodItem.appendChild(foodOne);
                foodOne.appendChild(imageOne);
                    imageOne.appendChild(kattiRollImage);
                foodOne.appendChild(foodListOne);
                    foodListOne.appendChild(kattiRollName)
                    foodListOne.appendChild(kattiRollVariety);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv1);
                            kattiRollVarietyDiv1.appendChild(item1);
                            kattiRollVarietyDiv1.appendChild(item2);
                            kattiRollVarietyDiv1.appendChild(item3);
                            kattiRollVarietyDiv1.appendChild(item4);
                            kattiRollVarietyDiv1.appendChild(item5);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv2);
                            kattiRollVarietyDiv2.appendChild(rupees1);
                            kattiRollVarietyDiv2.appendChild(rupees2);
                            kattiRollVarietyDiv2.appendChild(rupees3);
                            kattiRollVarietyDiv2.appendChild(rupees4);
                            kattiRollVarietyDiv2.appendChild(rupees5);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv3);
                            kattiRollVarietyDiv3.appendChild(item6);
                            kattiRollVarietyDiv3.appendChild(item7);
                            kattiRollVarietyDiv3.appendChild(item8);
                            kattiRollVarietyDiv3.appendChild(item9);
                            kattiRollVarietyDiv3.appendChild(item0);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv4);
                            kattiRollVarietyDiv4.appendChild(rupees6);
                            kattiRollVarietyDiv4.appendChild(rupees7);
                            kattiRollVarietyDiv4.appendChild(rupees8);
                            kattiRollVarietyDiv4.appendChild(rupees9);
                            kattiRollVarietyDiv4.appendChild(rupees0);
             foodItem.appendChild(foodOne);
                foodOne.appendChild(imageOne);
                    imageOne.appendChild(kattiRollImage);
                foodOne.appendChild(foodListOne);
                    foodListOne.appendChild(kattiRollName)
                    foodListOne.appendChild(kattiRollVariety);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv1);
                            kattiRollVarietyDiv1.appendChild(item1);
                            kattiRollVarietyDiv1.appendChild(item2);
                            kattiRollVarietyDiv1.appendChild(item3);
                            kattiRollVarietyDiv1.appendChild(item4);
                            kattiRollVarietyDiv1.appendChild(item5);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv2);
                            kattiRollVarietyDiv2.appendChild(rupees1);
                            kattiRollVarietyDiv2.appendChild(rupees2);
                            kattiRollVarietyDiv2.appendChild(rupees3);
                            kattiRollVarietyDiv2.appendChild(rupees4);
                            kattiRollVarietyDiv2.appendChild(rupees5);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv3);
                            kattiRollVarietyDiv3.appendChild(item6);
                            kattiRollVarietyDiv3.appendChild(item7);
                            kattiRollVarietyDiv3.appendChild(item8);
                            kattiRollVarietyDiv3.appendChild(item9);
                            kattiRollVarietyDiv3.appendChild(item0);
                        kattiRollVariety.appendChild(kattiRollVarietyDiv4);
                            kattiRollVarietyDiv4.appendChild(rupees6);
                            kattiRollVarietyDiv4.appendChild(rupees7);
                            kattiRollVarietyDiv4.appendChild(rupees8);
                            kattiRollVarietyDiv4.appendChild(rupees9);
                            kattiRollVarietyDiv4.appendChild(rupees0);
}