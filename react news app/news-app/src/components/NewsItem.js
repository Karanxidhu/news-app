import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl} = this.props;
    return (
      <div>
        
            <div className="w-full p-2 bg-gray-300 rounded-lg dark:bg-gray-700">
                <div className="w-full ">
                <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} alt="" />
                </div>
                
                <h1 className=" mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-lg font-bold text-gray-200">{title}</h1>
                <p className="text-base text-gray-200 bg-gray-200 rounded-lg dark:bg-gray-700">{description}</p>
            </div>
        </div>
    )
  }
}

export default NewsItem
