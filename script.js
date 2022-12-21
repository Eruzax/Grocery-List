function initialize()
{
    grocery = document.getElementById("groceries");
    groceryListArray = [];
    groceryList = "";

    addItem = document.getElementById("itemname");
    deleteItem = document.getElementById("deleteitemnum");
    moveItem = document.getElementById("moveitemNumber");

    previousIndex = 0;
    previousItem = "";

    display();
}

function addGroceries()
{
    let item = addItem.value;
    if (item != "")
    {
        if (dupeCheck(item))
            groceryListArray.push(item);
            console.log(item);
    }

    display();
}

function deleteGroceries()
{
    let item = deleteItem.value;
    if (deleteItem.value != "" && groceryListArray.length != 0)
    {
        groceryListArray.splice(item - 1, 1);
    }
}

function moveUp()
{
    if (moveItem.value != "" && groceryListArray.length != 0)
    {
        let item = moveItem.value;
        let counter = 0;
        if (item > 0 && item - 1 != 0)
        {
            let temp = groceryListArray[item - 1];
            groceryListArray[item - 1] = groceryListArray[item];
            groceryListArray[item] = temp;
            //move it up
            counter++;
        }
        else if (item - 1 < 0 || item - counter == 0)
        {
            console.log("It is at the top of the list")
        }
    }
}

function moveDown()
{

}

function dupeCheck(item)
{
    for (var i = 0; i < groceryListArray.length; i++)
    {
        if (item === groceryListArray[i])
        {
            return false;
        }
    }
    return true;
}

function display()
{
    groceryList = "";
    for (var i = 0; i < groceryListArray.length; i++)
    {
        groceryList += i + 1 + "." + groceryListArray[i] + "\n";
    }

    grocery.innerHTML = groceryList;
}