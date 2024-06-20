// -- Defining variables and map array method --
// initialize three arrays
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['steak', 'Pasta', 'Burguer', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// iterate through breakfastMenu array using map method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// -- Defining forEach array method and for loop iteration
let mainCourseItem = '';
//loops through each element in the mainCourseMenu array
//and executes the function inside (item, index =>  )
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});

document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//iterate dessertMenu array using for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}

document.getElementById('dessertMenuItems').innerHTML = dessertItem;

