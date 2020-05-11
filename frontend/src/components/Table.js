import React from 'react';
import styled from 'styled-components';
 

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid black;
  border-right: 1px solid black;
  width: 60%;
  margin: 0px auto;
  margin-top: 10%;
`;

const Value = styled.span`
  padding: 8px 4px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Table = ({data}) => {
  const {
    breaking_bad: {quote} = '', 
    cat: {text} = '',
    dog: {message} = ''
  } = data.result;
  return (
    <Wrapper>
      <Value>
        <strong>EndPoint</strong>
      </Value>
      <Value>
        <strong>Returned Value</strong>
      </Value>
      <Value>Breaking Bad</Value>
      <Value>{quote}</Value>
      <Value>Cat</Value>
      <Value>{text}</Value>
      <Value>Dog</Value>
      <Value>
        <img 
          src={message}
          height={300}
          alt="Just Another dog pic to lighten day"
        />
      </Value>
    </Wrapper>
  )
}