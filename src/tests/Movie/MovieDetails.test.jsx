import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import {MemoisedMovieDetails} from "../../Movie/MovieDetails";

const item = {
    "title": "The Phantom Menace",
    "episode_id": 1,
    "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
    "director": "George Lucas",
    "producer": "Rick McCallum",
    "release_date": "1999-05-19",
    "characters": [],
    "planets": [ ],
    "starships": [],
    "vehicles": [],
    "species": [],
    "created": "2014-12-19T16:52:55.740000Z",
    "edited": "2014-12-20T10:54:07.216000Z",
    "url": "https://swapi.dev/api/films/4/"
}

describe("Test MemoisedMovieDetails", () => {
  it("test if matches the DOM Snapshot", () => {
    const domTree = renderer.create(<MemoisedMovieDetails />).toJSON();
    expect(domTree).toMatchSnapshot();
  });

   it("test if selected prop is not passed default div should render", () => {
    const {getByText} = render(<MemoisedMovieDetails selected={null}/>);
    const element = getByText('No Movie Selected');
    expect(element).toBeInTheDocument();
  });

   it("test if selected prop is passed then movie detail view should render", () => {
    const {getByText} = render(<MemoisedMovieDetails selected={item}/>);

    const Title = getByText("The Phantom Menace");
    expect(Title).toBeInTheDocument();
    expect(screen.getByTestId('description').textContent).toBe(item.opening_crawl)
    expect(screen.getByTestId('directedBy').textContent).toBe('Directed By: ' + item.director)
  });
});
