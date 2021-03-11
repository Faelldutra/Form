import { BarStyled } from './styled';

const ProgressBar = ({ line, line1, line2, ball, ball1, ball2 }) => {

  return (
    <>
      <BarStyled>
        <div className="progressBar">
          <div className="ballGreen">
          </div>
          <div className="line">
            <div className={line}>
            </div>
          </div>
          <div className={ball}>
          </div>
          <div className="line">
            <div className={line1}>
            </div>
          </div>
          <div className={ball1}>
          </div>
          <div className="line">
            <div className={line2}>
            </div>
          </div>
          <div className={ball2}>
          </div>
        </div>
      </BarStyled>
    </>
  );
}
export default ProgressBar;