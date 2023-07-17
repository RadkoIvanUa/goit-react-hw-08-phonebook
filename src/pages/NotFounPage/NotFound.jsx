import notFound from '../../image/NotFoundPageBackground.png';
import { StyledNotFoundContainer } from './StyledNotFound';

export default function NotFound() {
  return (
    <StyledNotFoundContainer>
      <div>
        <img src={notFound} alt="not found" width={'80%'} />
      </div>
    </StyledNotFoundContainer>
  );
}
