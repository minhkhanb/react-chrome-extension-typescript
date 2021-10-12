/// <reference types="react-scripts" />
import { Attributes } from 'react';

declare module 'react' {
  interface Attributes {
    path?: string;
    default?: boolean;
  }
}
