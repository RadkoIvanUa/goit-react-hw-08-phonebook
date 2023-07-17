import { Container } from 'components/StyledContainer';
import notFound from '../../image/NotFoundPageBackground.png';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#FFDE59',
        height: '100vh',
        width: '100vw',
        margin: '50px auto',
      }}
    >
      <img src={notFound} alt="not found" width={'100%'} />
    </div>
  );
}
