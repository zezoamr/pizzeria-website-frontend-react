import React from 'react'
import multiplePizzas from "../assets/multiplePizzas.jpeg"
import "../styles/About.css"


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url( ${multiplePizzas} )` }}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Welcome to our pizza shop! We are a family-owned business that has been serving delicious pizza for over 20 years. Our pizza is made with fresh ingredients and cooked to perfection in our wood-fired oven. We offer a variety of toppings to choose from, including pepperoni, sausage, mushrooms, onions, and more. Our menu also includes salads, sandwiches, and desserts. We take pride in providing excellent customer service and creating a warm and welcoming atmosphere for our customers. Come visit us today and experience the best pizza in town!
Our menu is designed to cater to all tastes and preferences. Whether you're in the mood for a classic pepperoni pizza or something more adventurous like our BBQ chicken pizza, we've got you covered. We also offer a range of sides like garlic bread and mozzarella sticks, as well as salads for those looking for something lighter. Our sandwiches are made with fresh ingredients and served on homemade bread. And don't forget to save room for dessert! Our homemade tiramisu is the perfect way to end your meal.
At our pizza shop, we believe that quality ingredients make all the difference. That's why we use only the freshest produce and highest-quality meats in our dishes. We also take pride in our wood-fired oven, which gives our pizzas that authentic taste you won't find anywhere else.
We hope you'll come visit us soon and see why we're the best pizza shop in town!</p>
        </div>
    </div>
  )
}

export default About