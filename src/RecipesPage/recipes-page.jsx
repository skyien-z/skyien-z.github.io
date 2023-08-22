import { NewTabLink } from '../utils';
import './recipes-page.css'
function BlogPage() {
    return (
        <div className="rec-page-container">
            <div className='about-container'>
                <h1> Recipes </h1>
                <p>
                    I like experimenting with baking in my free time. Here are a few of my favorite college recipes -- enjoy!
                </p>
                <img className='cake-png' alt="A chocolate cake with whipped cream and a chocolate ganache drizzle positioned above
                a wood table. Empty mixing bowls are positioned in the background." src={require('../resources/img/cakes.png')}/>
            </div>
            <div className='content-container'>
                <h2> Caramelized Onion Brownies </h2>
                <ul>
                    <li>
                        I highly recommend this <NewTabLink 
                        href="https://www.cdkitchen.com/recipes/recs/273/Caramelized_Chocolate_Onion_Ca54320.shtml"
                        linkedText='Carmelized Chocolate Onion Cake'/> recipe by itself. 
                    </li>
                    <li>
                        To make carmelized onion brownies, simply increase the onion ratio by two and reduce the milk ratio by a half.
                    </li>
                    <li>
                        If you don't have sour milk, add a tablespoon of lemon juice to a cup of milk and let sit.
                    </li>
                </ul>
                <h2> Soy Sauce Peanut Butter Cookies </h2>
                <ul>
                    <li>
                        Kikkoman has a nicely balanced <NewTabLink href="https://kikkomanusa.com/homecooks/recipes/soy-sauce-chocolate-chip-cookies/"
                                    linkedText="Soy Sauce Chocolate Chip Cookie"/> recipe.
                    </li>
                    <li>
                        You can add four tablespoons of peanut butter when combining the 
                        wet ingredients to get what my college roommate terms a "really good sesame-flavored cookie."
                    </li>
                </ul>
                <h2> Hot Chocolate Pistachio Cookies </h2>
                <ul>
                    <li>
                         I baked my first ever batch of cookies with Nestle's <NewTabLink href="https://www.nestle.com/stories/timeless-discovery-toll-house-chocolate-chip-cookie-recipe"
                    linkedText="Classical Chocolate Chip Cookie"/> recipe.
                    </li>
                    <li>
                        To make hot chocolate pistachio cookies: <div/>
                        <ul className='inner-list'>
                            <li>
                                Substitute 1/2 cup of hot cocoa mix for 1/4 cup brown sugar and 1/4 cup white sugar.
                            </li>
                            <li>
                                Melt the chocolate chips, cool for one minute, then add to the combined wet and dry ingredients.
                            </li>
                            <li>
                             Use pistachios as your nut of choice and add after chocolate is incorporated.
                            </li>
                            <li>
                                Bake until cracks form.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogPage;