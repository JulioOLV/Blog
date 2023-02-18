import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Navigation from '../src/patterns/Navigation';
import Hero from '../src/patterns/Hero';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Navigation />
        <Hero />
        <article className="container">
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    );
  }
}
