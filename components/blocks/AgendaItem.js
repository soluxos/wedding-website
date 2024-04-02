import React from 'react';
import Button from '@components/atoms/Button/Button';
import { storyblokEditable } from '@storyblok/react';

export default function AgendaItem({ blok }) {
  return (
    <>
      {blok.title}
      {blok.content}
      {blok.time}
    </>
  );
}
