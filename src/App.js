import React,{useState} from 'react';
import './App.css';
function App() {

  const [items,setItems]= useState([]);

  var collection={
      "Lunch":["Dal Rice mixVeg","Dal Rice roti paneer","Dosa sambar","Dal roti chicken"],
      "Breakfast":["Oats","Upma","Poha","Egg","Bread omelette","milk"],
      "Snacks":["Toast","French fries","Sandwich","Jhal Murhi","Chips"],
      "Desserts":["Ice cream","Cakes","Cold coffee","Sweet curd","Gulab jamun"]
      }
      var collectionKey=Object.keys(collection);

      var showList=(option)=>{
        var bd=document.getElementById("body");
        console.log(option);
        if(option==="Lunch")
          bd.style.backgroundImage=("url('https://www.responsesource.com/content/uploads/2018/08/Lunch-blog-image.png')");
        if(option==="Breakfast")
          bd.style.backgroundImage=("url('https://image.freepik.com/free-photo/fried-eggs-and-drinks-for-breakfast_23-2147758279.jpg')")
        if(option==="Snacks")
          bd.style.backgroundImage=("url('https://food.fnr.sndimg.com/content/dam/images/food/video/0/02/027/0277/0277192.jpg.rend.hgtvcom.616.347.suffix/1498848428541.jpeg')");
        if(option==="Desserts")
          bd.style.backgroundImage=("url('https://live.staticflickr.com/3347/3579918165_c186e69a88.jpg')");
        setItems(collection[option]);
      }
      
  return (
    
      <div className="App-header">
      <div id="app" className="App">
      <h1>Food Store</h1>
        <p className="mid">Welcome to food plaza!!<br></br>Hungry?Let us know your favourite taste.</p>
      </div>
        <div className="button">
        { collectionKey.map((options,index)=>{
          return (<button key={index} onClick={() => showList(options)}>{options}</button>)
        })}
        </div>
        <div className="list">{
          items.map((item)=>{
           return (<ul><li>{item}</li></ul>)
         })
        }
        </div>
      
        
    </div>
  );
}

export default App;
