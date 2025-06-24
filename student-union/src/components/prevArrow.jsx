import prevArrow from '../img/arrow_prev.svg';

export default function PrevArrow (props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={prevArrow}></img>
      </div>
    );
};