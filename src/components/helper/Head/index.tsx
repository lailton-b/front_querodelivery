import React from 'react';

interface IHeadProps {
  title: string,
  content: string
}

const Head: React.FC<IHeadProps> = ({ title, content }) => {
  React.useEffect(() => {
    const description = document.head.querySelector('meta[name="description"]');
    const ogdescription = document.head.querySelector('meta[property="og:description"]');
    

    document.title = title + ' Entregue conosco | QueroDelivery';
    description?.setAttribute('content', content); // description is possibly null, so '?' is necessary to verify
    ogdescription?.setAttribute('content', content); // ogdescription is possibly null, so '?' is necessary to verify
  }, [content, title]);

  return null;
}

export default Head;