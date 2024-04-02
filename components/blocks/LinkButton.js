import React from 'react';
import Button from '@components/atoms/Button/Button';
import { storyblokEditable } from '@storyblok/react';

export default function LinkButton({ blok }) {
  return (
    <Button url={blok.url} {...storyblokEditable(blok)}>
      <>
        <img src={blok.icon.filename} alt="icon" />
        {blok.text}
      </>
    </Button>
  );
}
