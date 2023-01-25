import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
