import React, { useState } from "react";
import faceBubble2 from './assets/img/faceBubble2.svg';
import uxDesign from './assets/img/uxDesign.webp'
import './App.css'
import ReactDOM from "react-dom";

const articles = [
  {
    id: 0,
    title: "Programming Journey",
    content: "My programming journey has involved learning CSS to style websites, mainly using Flexbox for layout. Creating dynamic web pages with Vanilla JavaScript, utilizing jQuery for easy DOM manipulation and fetching data from APIs to create dynamic content. Moving forward, I am looking to enhance my skills by diving into the world of animations, creating small games and mastering React to build complete web and mobile applications. I want to have a thorough understanding of the entire process and bring engaging user experiences to life.",
    picture: "",
    pictureName: ""
  },
  {
    id: 1,
    title: "Personal Project ideas",
    content: "I'm inspired to create a simple website that calculates the number of letters and words in a sentence entered by the user. As an added bonus, if time allows, I would like to also add a date function that calculates the number of days until the next payment and informs the user of the current week. This assignment will give me a chance to practice handling user input and develop my understanding of how to build and structure a basic React application.",
    picture: "",
    pictureName: ""
  },
  {
    id: 2,
    title: "Design choices",
    content: "I would like to replicate the color scheme in this design by Emran Hossain. A deep blue base, with contrasting accents.",
    picture: uxDesign,
    pictureName: "UI-UX-design"
  },
];


const ArticleComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayAll, setDisplayAll] = useState(false);
  const [activeArticle, setActiveArticle] = useState('page-0');

  const handleDisplayAll = () => {
    setDisplayAll(!displayAll);
  };

  function getActiveClassName(activeArticle, currentArticle) {
    if (activeArticle === currentArticle) {
      return 'active'
    } else {
      return ''
    }
  }

  function Greeting(props) {
    return <h2>Best Regards, {props.name}!</h2>
  }

  return (
    <div id="content-wrapper">
      <div className="header">
        <img className="header-pict" src={faceBubble2} alt="" width="185px" height="auto" />
        <div className="expand-one" onClick={handleDisplayAll}>Expand</div>
      </div>
      <nav>
        <button className={`page-0 ${getActiveClassName(activeArticle, 'page-0')}`}
          onClick={() => {
            setCurrentIndex(0);
            setActiveArticle('page-0');
            setDisplayAll(false)
          }}>About</button>
        <button className={`page-1 ${getActiveClassName(activeArticle, 'page-1')}`}
          onClick={() => {
            setCurrentIndex(1);
            setActiveArticle('page-1');
            setDisplayAll(false)
          }}>Project</button>
        <button className={`page-2 ${getActiveClassName(activeArticle, 'page-2')}`}
          onClick={() => {
            setCurrentIndex(2);
            setActiveArticle('page-2');
            setDisplayAll(false)
          }}>Design</button>

      </nav>
      <main className="content">

        {!displayAll ? (
          <>
            <div key={articles[currentIndex].id}>
              <article className={`article-${currentIndex}`}>
                <h1>{articles[currentIndex].title}</h1>
                <p>{articles[currentIndex].content}</p>
                {!(articles[currentIndex].picture === "") ?
                  (<img src={articles[currentIndex].picture} className={`picture-${currentIndex + 1}`} height="auto" width="auto" alt={articles[currentIndex].pictureName} />) : ("")}
              </article>
            </div>
          </>
        ) : (
          <>
            {
              articles.map(article => (
                <div key={article.id}>
                  <article className={`article ${article.id}`}>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    {!(articles[article.id].picture === "") ?
                      (<img src={articles[article.id].picture} className={`picture-${article.id + 1}`} height="auto" width="auto" alt={articles[article.id].pictureName} />) : ("")}
                  </article>
                </div>
              ))
            }
          </>
        )}
        <Greeting name="Pernilla Widerberg" />
      </main>
      <div class="base-element"></div>
    </div>
  );
};

export default ArticleComponent;
