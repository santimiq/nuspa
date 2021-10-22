import React from 'react';
import styles from './fadeInSection.scss';

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div className = {`fade-in-section ${isVisible ? 'is-visible' : ''} ${props.className}`} ref = {domRef}>
            {props.children}
        </div>
    );
}
export default FadeInSection;