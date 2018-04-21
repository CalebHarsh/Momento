/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import AddButton from '../src/components/AddButton';
import AlbumSquare from '../src/components/Album-Square';
import Login from '../src/components/Login';
import Navbar from '../src/components/Navbar';
import PhotoCard from '../src/components/PhotoCard';
import PicUpload from '../src/components/PicUpload';
import SignupForm from '../src/components/SignupForm';
import Footer from '../src/components/Footer';

// ==== UI Testing of the Add Button ==========================================
storiesOf('AddButton', module)
  .add('without props', () => (
    <AddButton />
  ));

// ==== UI Testing of the Album Squares =======================================
storiesOf('AlbumSquare', module)
  .add('without props', () => (
    <AlbumSquare />
  ));

// ==== UI Testing of the Login Form ==========================================
storiesOf('Login', module)
  .add('without props', () => (
    <Login />
  ));

// ==== UI Testing of the Navbar ==============================================
storiesOf('Navbar', module)
  .add('without props', () => (
    <Navbar />
  ));

// ==== UI Testing of the Photo Card ==========================================
storiesOf('PhotoCard', module)
  .add('without props', () => (
    <PhotoCard />
  ));

// ==== UI Testing of the Picture Upload ======================================
storiesOf('PicUpload', module)
  .add('without props', () => (
    <PicUpload />
  ));

// ==== UI Testing of the Signup Form =========================================
storiesOf('SignupForm', module)
  .add('without props', () => (
    <SignupForm />
  ));

// ==== UI Testing of the Footer ==============================================
storiesOf('Footer', module)
  .add('without props', () => (
    <Footer />
  ));