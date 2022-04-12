import React from "react"
import {Link} from "react-router-dom"
import github from "./githublogo.png";
import linkedin from "./linkedinlogo.png";

export function Home() {
    return(
        <>
        <header>
            <div className = "navBarDiv">
                <nav className = "navBarBlock">
                    <ul className = "primaryNavBar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="projects">Projects</Link></li>
                    </ul>
                </nav>
                
                <nav className = "navBarBlock">
                    <ul className = "secondaryNavBar">
                        <li><a href = "https://github.com/DavenSantana" target = "_blank" rel="noreferrer">Github</a></li>
                        <li><img src = {github} alt= "github" /></li>
                        <li><a href = "https://www.linkedin.com/in/daven-santana-726254206/" target = "_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><img src = {linkedin} alt= "linkedin" /></li>
                        <li><Link to="/oldwebsite">Old Website</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <footer>
            <div className = "footerNavBarDiv">
                <nav>
                    <ul className = "footerNavBar">
                        <li><a href="mailto:davensantana99@gmail.com">Email Me</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    </>
    );
}

export function Projects() {
    return(
        <>
        <header>
            <div className = "navBarDiv">
                <nav className = "navBarBlock">
                    <ul className = "primaryNavBar">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
                
                <nav className = "navBarBlock">
                    <ul className = "secondaryNavBar">
                        <li><a href = "https://github.com/DavenSantana" target = "_blank" rel="noreferrer">Github</a></li>
                        <li><img src = {github} alt= "github" /></li>
                        <li><a href = "https://www.linkedin.com/in/daven-santana-726254206/" target = "_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><img src = {linkedin} alt= "linkedin" /></li>
                        <li><Link to="/oldwebsite">Old Website</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <body>
            <div> 
                <table className = "projectTable">
                    <tr>
                        <th><a href="https://github.com/DavenSantana/QcFirst" target = "_blank" rel="noreferrer">QcFirst</a></th>
                        <th><a href="https://github.com/DavenSantana/Search-Engine">Search Engine</a></th>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/DavenSantana/QcFirst" target = "_blank" rel="noreferrer">
                            QcFirst is a project I created that replicates CUNY First which is CUNY's website for students 
                            to add and remove classes and for instructors to create courses and to view their rosters. The project
                            was a Full-Stack project where I used HTML and CSS for the front-end with no frameworks and for the
                            backend used JavaScript, Node.js and some of Node.js frameworks and used MongoDB as my database to store 
                            information for students, instructors, classes and more.
                        </a></td>
                        <td><a href="https://github.com/DavenSantana/Search-Engine" target = "_blank" rel="noreferrer">
                            My search engine project was created to imitate an actual search engine like google but on a much
                            smaller scale. This project reads .HTML files and organizes the files by many different types of data. This
                            includes all the words in the document (not including stop words), the location of the word in the .HTML file,
                            how many times a certain word appears, the words before and after a specific word, and so on. After it organizes
                            all of the data you can then ask for it to look up a word and it will return the documents in which the word exists
                            in, the location of that word and all of the other information. The word entered can also be stemmed so for example
                            looking up a word such as "run" will find out information about words such as "running," "runs," and so on. This
                            project is coded in Java and uses OOP in order to organize everything including printing methods and more. 
                        </a></td>
                    </tr>
                    <tr>
                        <th><a href="https://github.com/DavenSantana/Grocery-List-Manager" target = "_blank" rel="noreferrer">Grocery List Manager</a></th>
                        <th><a href="https://github.com/DavenSantana/TipCalculator" target = "_blank" rel="noreferrer">Tip Calculator</a></th>
                    </tr>
                    <tr>
                        <td><a href="https://github.com/DavenSantana/Grocery-List-Manager" target = "_blank" rel="noreferrer">
                            The grocery list manager is an app I created in order to simplify grocery shopping list. It's an app which can be used
                            everyday in order to figure out what groceries you need. The app contains many different features like the ability to
                            have multiple list, this is helpful in having a list possibly for everyday of the week like Monday's List, Tuesday's list
                            and so on. Then the user can edit each individual list with different items from a database of items based off the item type
                            such as dairy, bakery and so on and if the item doesn't exist in the database, a user can then create the item. A user can
                            also look up for items by name to add them so if they searched "beans" they would then be able to add beans. There are other
                            features such as checking off items, clearing all the checks, adding quantity and also deleting the item completely. This app
                            was coded in Android Studios and using Java as the language.
                        </a></td>
                        <td><a href="https://github.com/DavenSantana/TipCalculator" target = "_blank" rel="noreferrer">
                           The tip calculator is another app created with Android Studios which is just to simplify tipping a server after a dinner. The app
                           allows the user to enter how much the total was and how many people are in the group and then it gives you the total tip, the total per person
                           and tells you these numbers for 15%, 20% and 25%.
                        </a></td>
                    </tr>
                </table>

            </div>
        </body>

        <footer>
            <div className = "footerNavBarDiv">
                <nav>
                    <ul className = "footerNavBar">
                        <li><a href="mailto:davensantana99@gmail.com">Email Me</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    </>
    );
}


function Header() {
  return (
    <header>
      <div className = "navBarDiv">
        <nav className = "navBarBlock">
          <ul className = "primaryNavBar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="projects">Projects</Link></li>
          </ul>
        </nav>
        
        <nav className = "navBarBlock">
          <ul className = "secondaryNavBar">
            <li><a href = "https://github.com/DavenSantana" target = "_blank" rel="noreferrer">Github</a></li>
            <li><img src = {github} alt= "github" /></li>
            <li><a href = "https://www.linkedin.com/in/daven-santana-726254206/" target = "_blank" rel="noreferrer">LinkedIn</a></li>
            <li><img src = {linkedin} alt= "linkedin" /></li>
            <li><a href = "https://davensantana.github.io/" target = "_blank" rel="noreferrer">Old Website</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}