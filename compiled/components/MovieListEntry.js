import WatchedToggle from './WatchedToggle.js';

var MovieListEntry = props => {

	if (props.movie.highlighted) {
		return React.createElement(
			'div',
			{ className: 'movie-title' },
			React.createElement(
				'li',
				{ className: 'highlighted', value: props.index,
					onClick: event => props.highlightMovie(event.target.value)
				},
				props.movie.title
			),
			React.createElement(WatchedToggle, { movie: props.movie, index: props.index,
				toggleWatched: props.toggleWatched }),
			React.createElement(
				'p',
				null,
				'Year: ',
				props.movie.year,
				' ',
				React.createElement('br', null),
				'Runtime: ',
				props.movie.runtime,
				'min ',
				React.createElement('br', null),
				'Imdb Rating: ',
				props.movie.imdbRating
			)
		);
	} else {

		return React.createElement(
			'div',
			{ className: 'movie-title' },
			React.createElement(
				'li',
				{ value: props.index,
					onClick: event => props.highlightMovie(event.target.value) },
				props.movie.title
			),
			React.createElement(WatchedToggle, { movie: props.movie, index: props.index,
				toggleWatched: props.toggleWatched })
		);
	}
};

export default MovieListEntry;

// <button className='test-button'>Test</button>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIldhdGNoZWRUb2dnbGUiLCJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwibW92aWUiLCJoaWdobGlnaHRlZCIsImluZGV4IiwiZXZlbnQiLCJoaWdobGlnaHRNb3ZpZSIsInRhcmdldCIsInZhbHVlIiwidGl0bGUiLCJ0b2dnbGVXYXRjaGVkIiwieWVhciIsInJ1bnRpbWUiLCJpbWRiUmF0aW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxhQUFQLE1BQTBCLG9CQUExQjs7QUFFQSxJQUFJQyxpQkFBa0JDLEtBQUQsSUFBVzs7QUFFOUIsS0FBSUEsTUFBTUMsS0FBTixDQUFZQyxXQUFoQixFQUE2QjtBQUMzQixTQUNBO0FBQUE7QUFBQSxLQUFLLFdBQVUsYUFBZjtBQUNBO0FBQUE7QUFBQSxNQUFJLFdBQVUsYUFBZCxFQUE0QixPQUFPRixNQUFNRyxLQUF6QztBQUNDLGNBQVVDLEtBQUQsSUFBV0osTUFBTUssY0FBTixDQUFxQkQsTUFBTUUsTUFBTixDQUFhQyxLQUFsQztBQURyQjtBQUVHUCxVQUFNQyxLQUFOLENBQVlPO0FBRmYsSUFEQTtBQUlFLHVCQUFDLGFBQUQsSUFBZSxPQUFPUixNQUFNQyxLQUE1QixFQUFtQyxPQUFPRCxNQUFNRyxLQUFoRDtBQUNDLG1CQUFlSCxNQUFNUyxhQUR0QixHQUpGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFDUVQsVUFBTUMsS0FBTixDQUFZUyxJQURwQjtBQUFBO0FBQzBCLG1DQUQxQjtBQUFBO0FBRVdWLFVBQU1DLEtBQU4sQ0FBWVUsT0FGdkI7QUFBQTtBQUVtQyxtQ0FGbkM7QUFBQTtBQUdlWCxVQUFNQyxLQUFOLENBQVlXO0FBSDNCO0FBTkYsR0FEQTtBQWVBLEVBaEJGLE1BZ0JTOztBQUVQLFNBQ0E7QUFBQTtBQUFBLEtBQUssV0FBVSxhQUFmO0FBQ0M7QUFBQTtBQUFBLE1BQUksT0FBT1osTUFBTUcsS0FBakI7QUFDQyxjQUFVQyxLQUFELElBQVdKLE1BQU1LLGNBQU4sQ0FBcUJELE1BQU1FLE1BQU4sQ0FBYUMsS0FBbEMsQ0FEckI7QUFFSVAsVUFBTUMsS0FBTixDQUFZTztBQUZoQixJQUREO0FBSUMsdUJBQUMsYUFBRCxJQUFlLE9BQU9SLE1BQU1DLEtBQTVCLEVBQW1DLE9BQU9ELE1BQU1HLEtBQWhEO0FBQ0MsbUJBQWVILE1BQU1TLGFBRHRCO0FBSkQsR0FEQTtBQVNBO0FBRUYsQ0EvQkY7O0FBbUNBLGVBQWVWLGNBQWY7O0FBR0kiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2F0Y2hlZFRvZ2dsZSBmcm9tICcuL1dhdGNoZWRUb2dnbGUuanMnXG5cbnZhciBNb3ZpZUxpc3RFbnRyeSA9IChwcm9wcykgPT4ge1xuXG5cdFx0aWYgKHByb3BzLm1vdmllLmhpZ2hsaWdodGVkKSB7XG5cdFx0ICByZXR1cm4gKFxuXHRcdCAgPGRpdiBjbGFzc05hbWU9J21vdmllLXRpdGxlJz5cblx0XHQgIDxsaSBjbGFzc05hbWU9J2hpZ2hsaWdodGVkJyB2YWx1ZT17cHJvcHMuaW5kZXh9XG5cdFx0ICBcdG9uQ2xpY2s9eyhldmVudCkgPT4gcHJvcHMuaGlnaGxpZ2h0TW92aWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gXG5cdFx0ICBcdD57cHJvcHMubW92aWUudGl0bGV9PC9saT5cblx0XHQgIFx0XHQ8V2F0Y2hlZFRvZ2dsZSBtb3ZpZT17cHJvcHMubW92aWV9IGluZGV4PXtwcm9wcy5pbmRleH0gXG5cdFx0XHQgIFx0XHR0b2dnbGVXYXRjaGVkPXtwcm9wcy50b2dnbGVXYXRjaGVkfS8+XG5cdFx0ICBcdFx0PHA+XG5cdFx0ICBcdFx0XHRZZWFyOiB7cHJvcHMubW92aWUueWVhcn0gPGJyLz5cblx0XHQgIFx0XHRcdFJ1bnRpbWU6IHtwcm9wcy5tb3ZpZS5ydW50aW1lfW1pbiA8YnIvPlxuXHRcdCAgXHRcdFx0SW1kYiBSYXRpbmc6IHtwcm9wcy5tb3ZpZS5pbWRiUmF0aW5nfVxuXHRcdCAgXHRcdDwvcD5cblx0XHQgIDwvZGl2PlxuXHRcdCAgXG5cblx0XHQpfSBlbHNlICB7XG5cblx0XHQgIHJldHVybiAoXG5cdFx0ICA8ZGl2IGNsYXNzTmFtZT0nbW92aWUtdGl0bGUnPlxuXHRcdFx0ICA8bGkgdmFsdWU9e3Byb3BzLmluZGV4fVxuXHRcdFx0ICBcdG9uQ2xpY2s9eyhldmVudCkgPT4gcHJvcHMuaGlnaGxpZ2h0TW92aWUoZXZlbnQudGFyZ2V0LnZhbHVlKSBcblx0XHRcdCAgXHR9Pntwcm9wcy5tb3ZpZS50aXRsZX08L2xpPlxuXHRcdFx0ICA8V2F0Y2hlZFRvZ2dsZSBtb3ZpZT17cHJvcHMubW92aWV9IGluZGV4PXtwcm9wcy5pbmRleH0gXG5cdFx0XHQgIFx0dG9nZ2xlV2F0Y2hlZD17cHJvcHMudG9nZ2xlV2F0Y2hlZH0vPlxuXHRcdCAgPC9kaXY+XG5cblx0XHQpfVxuXG5cdH1cdFxuXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0RW50cnk7XG5cblxuXHRcdFx0XHQvLyA8YnV0dG9uIGNsYXNzTmFtZT0ndGVzdC1idXR0b24nPlRlc3Q8L2J1dHRvbj4iXX0=