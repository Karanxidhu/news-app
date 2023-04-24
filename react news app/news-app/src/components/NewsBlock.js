import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Loading from "./LoadingState";

export class NewsBlock extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [1,2,3,4,5,6,7,8],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=8`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        page: 1
    });
}

handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=8`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
};

handleNextClick = async () => {
    console.log("Next");
    if (
      !(this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize))
      ){
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=8`;
      this.setState({ loading: true });
      console.log(url)
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false,
        });
    }
  };
  render() {
    return (
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className=" mx-auto bg-gray-200 rounded-lg dark:bg-gray-900 font-bold text-4xl text-center text-gray-200">
              Latest News
            </h1>
            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 animate-pulse"></p>
            <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700 animate-pulse"></p>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
            {this.state.loading ? this.state.articles.map((element)=>{
                    
                    return <div>
                        <Loading />
                    </div> 
                }) : !this.state.loading && this.state.articles.map((element)=>{
                    
                    return <div key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })}
                </div>
          </div>
        </section>
        <div>
        <div className="flex items-center dark:bg-gray-900 justify-between p-10">
          <button className="flex px-3 py-2 bg-gray-600 text-white font-semibold rounded" disabled={this.state.page<=1} onClick={this.handlePrevClick}>
            <span className="ml-1">&larr;Previous</span>
          </button>

          <button className="flex px-3 py-2 bg-gray-600 mr-1 text-white font-semibold rounded" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick}>
            <span className="ml-1">Next&rarr;</span>
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default NewsBlock;
