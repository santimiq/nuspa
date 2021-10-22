import React from 'react';
import PreviewServicios from './previewServicios'
import Carousel from 'nuka-carousel'
import styles from './sliderResponsive.module.scss'
export class PagingDots extends React.Component {
    getIndexes(count, inc) {
        const arr = [];
        for (let i = 0; i < count; i += inc) {
            arr.push(i);
        }
        return arr;
    }
    getListStyles() {
        return {
            position: 'relative',
            margin: 0,
            bottom: '-40px',
            padding: 0,
        };
    }
    getListItemStyles() {
        return {
            listStyleType: 'none',
            display: 'inline-block',
        };
    }
    getButtonStyles(active) {
        return {
            border: 0,
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
            padding: 10,
            outline: 0,
            fontSize: 24,
            opacity: active ? 1 : 0.5,
        };
    }
    render() {
        const indexes = this.getIndexes(
            this.props.slideCount,
            this.props.slidesToScroll,
        );
        return (
            <ul style={this.getListStyles()}>
                {indexes.map(index => {
                    return (
                        <li style={this.getListItemStyles()} key={index}>
                            <button
                                style={this.getButtonStyles(this.props.currentSlide === index)}
                                onClick={this.props.goToSlide.bind(null, index)}
                            >
                                &bull;
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
const Slider = (props) => {
    const slides = props.items.map((item) => {
            return (
                <div key={item.to}>
                    <PreviewServicios to={item.to} img={item.img} text={item.text}/>
                </div>
            );
        });
        return (
                <Carousel 
                renderBottomCenterControls={props => <PagingDots {...props} />}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button className="d-none" onClick={previousSlide}>Previous</button>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <button className="d-none" onClick={nextSlide}>Next</button>
                    )}
                    className={styles.carouselExample} swiping={true} dragging={true}>
                    {slides}
                </Carousel>
            );
    
}

export default Slider;
