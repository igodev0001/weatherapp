import React, { useState } from 'react';

import * as S from './styled';

export default function Details() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <S.Action onClick={() => setShowDetails((prevState) => !prevState)} />

      {showDetails && (
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
          numquam voluptates repellendus est reiciendis neque, aperiam
          molestias, ratione dolores porro voluptate delectus eveniet earum,
          exercitationem assumenda error vitae hic.
        </span>
      )}
    </>
  );
}
