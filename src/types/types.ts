import { ChangeEvent, FormEvent } from 'react';

export type ChangeEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type ChangeInputType = ChangeEvent<HTMLInputElement>;

export type BlurEventType = { target: { name: string } };
export type FormEventType = FormEvent<HTMLFormElement>;
export type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
