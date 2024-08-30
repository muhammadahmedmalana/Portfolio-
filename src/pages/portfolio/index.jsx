import React from 'react'
import Header from '../../components/Header'
import { FaNetworkWired } from "react-icons/fa";
import imageOne from '../../images/imageone.jpg'
import imageTwo from '../../images/imagetwo.jpg'
import imageThree from '../../images/imagethree.png'
import imageFour from '../../images/imagefour.jpg'
import imageFive from '../../images/imagefive.jpg'
import './style.scss'
import { useState } from 'react'


const portfolioData = [
  {
    id: 2,
    name: 'Ecommerce Website',
    image: imageFive,
    link: "",

  },
  {
    id: 3,
    name: 'Technology Blog',
    image: imageTwo,
    link: "",
  },
  {
    id: 3,
    name: 'Notes App',
    image: imageThree,
    link: "",
  },
  {
    id: 3,
    name: 'Portfolio Website',
    image: imageFour,
    link: "",
  },
  {
    id: 3,
    name: 'Currency Converter',
    image: imageOne,
    link: "",
  }
  
]

const FilterData = [
  {
    id: 1,
    label: 'All',
  },
  {
    id: 2,
    label: 'Design',
  },
  {
    id: 3,
    label: 'Development',
  }
]


const Portfolio = () => {

  const [filterValue, setFilterValue] = useState(1)
  const [hoverValue, setHoverValue] = useState(null)

  const handleMouseHover = (index) =>{
    setHoverValue(index)
  }

  const handleFilter = (currentId) =>{
    setFilterValue(currentId)

  }
 

  const filteredItems = filterValue === 1 ? portfolioData : portfolioData.filter((item) => item.id === filterValue)
  
  return (
    <section className="portfolio" id='portfolio'>
      <Header headerText=" My Portfolio" icon={<FaNetworkWired />} />

      <div className="portfolio__content">
        <ul className='portfolio__content__filter'>
          {FilterData.map((item) => (
            <li  key={item.id} onClick={() => handleFilter(item.id)} className={item.id === filterValue ? 'active' : ''}>
              {item.label}
            </li>
          ))}

        </ul>
        <div className='portfolio__content__imageCards'>
          {filteredItems.map((item, index) => (
            <div className='portfolio__content__imageCards__item' key={`cardItem${item.name.trim()}`}
            onMouseEnter={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseHover(null)}
            >
             <div className='portfolio__content__imageCards__item__imageWrapper'>
              <a>
                <img src={item.image} alt={item.name} />
              </a>
              </div>
              <div className='overlay'>
                {hoverValue === index && (<div className='overlay__content'>
                  <h3>{item.name}</h3>
                  <button>Visit</button>
                </div>) }
              </div>
            </div>
          ))}

        </div>
      </div>
     
    </section>
  )
}

export default Portfolio 
