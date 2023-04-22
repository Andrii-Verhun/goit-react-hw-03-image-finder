import { Component } from "react";
import { RotatingLines } from 'react-loader-spinner';

import css from './App.module.css'

import fetchImage from '../api/fetchImage';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ModalComponent } from "./Modal/Modal";

export class App extends Component {
  state = {
    query: '',
    images: [],
    totalHits: null,
    page: null,
    isLoading: false,
    showModal: false,
    modalImg: {
      src: '',
      alt: '',
    },
  };

  componentDidUpdate = (_prevProps, prevState) => {
    if (this.state.images.length !== prevState.images.length) {
      setTimeout(() => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }, 700);
    };
  };

  handleOnSubmit = async (evt) => {
    evt.preventDefault();
    const { query } = evt.target
    this.setState({ isLoading: true });
    const { data: { hits, totalHits } } = await fetchImage(query.value)
    this.setState({
      query: query.value,
      images: hits,
      totalHits,
      page: 2,
      isLoading: false,
    });
  };

  loadMoreImages = async () => {
    this.setState({ isLoading: true });
    const { data: { hits } } = await fetchImage(this.state.query, this.state.page);

    this.setState((state) => {
      return {
        images: [...state.images, ...hits],
        page: state.page + 1,
        isLoading: false,
      };
    });
  };

  handleOpenModal = ({target: {id}}) => {
    const indexImg = this.state.images.findIndex((el) => el.id === Number(id));
    this.setState((state) => {
      return {
        showModal: true,
        modalImg: {
          src: state.images[indexImg].largeImageURL,
          alt: state.images[indexImg].tags,
        },
      };
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <Searchbar submit={this.handleOnSubmit} />
        {this.state.images && <ImageGallery images={this.state.images} onClick={this.handleOpenModal} />}
        <div className={css.spiner}>
          <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="30"
              visible={this.state.isLoading}
          />
        </div>
        {(this.state.images.length !== 0) && <Button loadMore={this.loadMoreImages} isLoading={this.state.isLoading} />}
        <ModalComponent
          showModal={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          imgLink={this.state.modalImg.src}
          alt={this.state.modalImg.alt}
        />
      </>
    );
  };
};