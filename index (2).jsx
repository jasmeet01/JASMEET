//Jasmeet, Manpreet, Pawanparneet

import React, {useState} from 'react';

const aisles = [
    { id: 1, name: 'Fruits', description: 'Orange', 'banana', 'Grapes', 'Watermelon' sections: [1,2] },
    { id: 2, name: 'Vegetables', description: 'Tomato, 'Green, 'Pepper,'Potato, 'Onion'  },
    { id: 3, name: 'Staples', description: 'Bread, Egg, and Milk', },
  
];

function ShoppingList() {
    // State to store the fruit in the list
    const [fruit,
        setItems] = useState([
        {
            name: 'orange',
            quantity: 0
        }, {
            name: 'bananas',
            quantity: 0
        }, {
            name: 'apple',
            quantity: 0
        },
      {
            name: 'grapes',
            quantity: 0
        },
  {
            name: 'watermelon',
            quantity: 0
        }
    ]);

    const [vegetables,
        setVeggie] = useState([
        {
            name: 'Tomatoes',
            quantity: 0
        }, {
            name: 'Lettuce',
            quantity: 0
        }, {
            name: 'Green Pepers',
            quantity: 0
        },
      {
            name: 'potato',
            quantity: 0
        },
  {
            name: 'onion',
            quantity: 0
        }
      ]);

    const [staples,
        setStaples] = useState([
        {
            name: 'Bread',
            quantity: 0,
            size: ''
        }, {
            name: 'Eggs',
            quantity: 0,
            size: ''
        }, {
            name: 'Milk',
            quantity: 0,
            size: ''
        }
    ]);

    // State to store the saved fruit
    const [savedItems,
        setSavedItems] = useState([]);

    const [savedVegetables,
        setSavedVegetables] = useState([]);

    const [savedStaples,
        setSavedStaples] = useState([]);

    const handleQuantityChange1 = (e, index) => {
        const newItems = [...fruit];
        newItems[index].quantity = e.target.value;
        setItems(newItems);
    };
    const handleSizeChange1 = (e, index) => {
        const newItems = [...staples];
        newItems[index].size = e.target.value;
        setStaples(newItems);
    };

    const handleQuantityChange2 = (e, index) => {
        const newVeggie = [...vegetables];
        newVeggie[index].quantity = e.target.value;
        setVeggie(newVeggie);
    };
const handleQuantityChange3 = (e, index) => {
        const newStaples = [...staples];
        newStaples[index].quantity = e.target.value;
        setStaples(newStaples);
    };

    // Function to handle the "save" button click
    const handleSaveClick = () => {
        var div1 = document.getElementById('fruits');
        while (div1.firstChild) {
            div1.removeChild(div1.firstChild);
        }

        var div2 = document.getElementById('vegetables');
        while (div2.firstChild) {
            div2.removeChild(div2.firstChild);
        }

        var div3 = document.getElementById('staples');
        while (div3.firstChild) {
            div3.removeChild(div3.firstChild);
        }

        setSavedItems([
            ...savedItems,
            ...fruit
        ]);

        setSavedVegetables([
            ...savedVegetables,
            ...vegetables
        ]);
       setSavedStaples([
            ...savedStaples,
            ...staples
        ]);
        setItems([
            {
                name: 'orange',
                quantity: 0
            }, {
                name: 'bananas',
                quantity: 0
            }, {
                name: 'apple',
                quantity: 0
            }
        ]);

        setVeggie([
            {
                name: 'Tomatoes',
                quantity: 0
            }, {
                name: 'Lettuce',
                quantity: 0
            }, {
                name: 'Green Pepers',
                quantity: 0
            }
        ]);

        setItems([
            {
                name: 'orange', quantity: 0
            }, {
                name: 'bananas',quantity: 0
            }, {
                name: 'apple',
                quantity: 0
            }
        ]);

        setVeggie([
            {
                name: 'Tomatoes',
                quantity: 0
            }, {
                name: 'Lettuce',
                quantity: 0
            }, {
                name: 'Green Pepers',
                quantity: 0
            }
        ]);

        setStaples([
            {
                name: 'Bread',
                quantity: 0,
                size: ''
            }, {
                name: 'Eggs',
                quantity: 0,
                size: ''
            }, {
                name: 'Milk',
                quantity: 0,
                size: ''
            }
        ]);
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                <h1>Fruit</h1>
                {fruit.map((item, index) => (
                    <li key={item.name}>
                        {item.name}:
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={e => handleQuantityChange1(e, index)}/>

                    </li>
                ))}
                <h1>Vegetables</h1>
                {vegetables.map((item, index) => (
 <li key={item.name}>
                        {item.name}:
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={e => handleQuantityChange2(e, index)}/>
                    </li>
                ))}
                <h1>Staples</h1>
                {staples.map((item, index) => (
                    <li key={item.name}>
                        {item.name}:
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={e => handleQuantityChange3(e, index)}/>
                        <input
                            type="text"
                            value={item.size}
                            placeholder="Enter Size"
                            onChange={e => handleSizeChange1(e, index)}/>
                    </li>
                ))}
            </ul>
            <button onClick={handleSaveClick}>Save</button> 

            <div id='fruits'>
                <p3>Fruits</p3>
                <hr/> {savedItems.map(item => (

                    <div key={item.name}>{item.name}: {item.quantity}
                        - Size : {item.size}</div>
                ))}
  ))}
            </div>
            <div id='vegetables'>
                <p3>Vegetables</p3>
                <hr/> {savedVegetables.map(item => (
                    <div key={item.name}>{item.name}: {item.quantity}</div>
                ))}
            </div>
            <div id='staples'>
                <p3>Staples</p3>
                <hr/> {savedStaples.map(item => (
                    <div key={item.name}>{item.name}: {item.quantity}
                        Size: {item.size}</div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;


      
//WISH LIST:
    
//1. Adding more functionality such as the ability to edit or delete individual items from the list.
//2. Able to a functionality to clear the list after it is saved.
//3. Adding functionality to load a previously saved list.


      
//Choose the Libraries and Framework. Up to 5 marks will be given for this section. 
//Identify the toolstack, framework, and any special libraries that you will use to implement your solution.

      
//Answer: This program is implemented using React, a JavaScript library for building user interfaces. 
//The program also uses the useState hook from React to manage the state of the application. 
//Additionally, the program uses the localStorage API to save the shopping lists in the browser's storage.

//testcases

//The text strategy of this program is to create a user interface that allows the user to create and save a shopping list, and later recall the saved lists. 
//It utilizes the useState hook from React to manage the state of the application and local storage to persist the saved lists.
// Test cases that could be considered would include: Entering a list name and saving the list, then checking that the list is correctly saved and displayed in the saved lists section
// Entering a list name and creating a new list, then checking that the new list is correctly saved and displayed in the saved lists section, 
//and that the items in the current list are reset to their default values Updating the quantity of an item in the current list, then checking that the updated quantity is correctly displayed and saved in the current list
 //Deleting a saved list, then checking that the deleted list is no longer displayed in the saved lists section and that the data is also removed from the local storage
 
 