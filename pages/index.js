import React from 'react'
import Link from 'next/link';

export default () => {
  return (

    <div>

      <style jsx>{`
        * {
          color: red
        }
      `}
      </style>

      Hello world!
      <br />
      <img src={'/static/serverless.svg'} alt={'Serverless logo'} height={50} width={50} />&nbsp;Serverless<br />
      <img src={'/static/nextjs.png'} alt={'Next.js logo'} />

      <a target="_blank" href="/page2">go to Page 2</a>
    </div>
  );
};
