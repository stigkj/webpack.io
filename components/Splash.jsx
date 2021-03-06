import React from 'react';
import Container from './Container';

export default props => {
  let { page } = props;

  return (
    <div className="splash">
      <div className="splash-visualization">

      </div>

      <Container className="splash-content">
        <h1>{ page.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Container>
    </div>
  );
};
