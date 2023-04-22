import { Component } from "react";

import fetchImage from '../api/fetchImage';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from "./Loader/Loader";
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
      }, 1000);
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

  handleLoadMore = async () => {
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
        <Loader isLoading={this.state.isLoading} />
        {(this.state.images.length !== 0) && <Button loadMore={this.handleLoadMore} isLoading={this.state.isLoading} />}
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