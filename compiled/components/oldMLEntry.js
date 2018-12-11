var MovieListEntry = props => {

	if (props.movie.watched) {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'li',
				{ className: 'movie-title watched', value: props.index,
					onClick: event => props.toggleMovie(event.target.value)
				},
				props.movie.title
			),
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
			null,
			React.createElement(
				'li',
				{ className: 'movie-title', value: props.index,
					onClick: event => props.toggleMovie(event.target.value) },
				props.movie.title
			),
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
	}
};

export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvb2xkTUxFbnRyeS5qcyJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwibW92aWUiLCJ3YXRjaGVkIiwiaW5kZXgiLCJldmVudCIsInRvZ2dsZU1vdmllIiwidGFyZ2V0IiwidmFsdWUiLCJ0aXRsZSIsInllYXIiLCJydW50aW1lIiwiaW1kYlJhdGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsaUJBQWtCQyxLQUFELElBQVc7O0FBRS9CLEtBQUlBLE1BQU1DLEtBQU4sQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkIsU0FDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUEsTUFBSSxXQUFVLHFCQUFkLEVBQW9DLE9BQU9GLE1BQU1HLEtBQWpEO0FBQ0MsY0FBVUMsS0FBRCxJQUFXSixNQUFNSyxXQUFOLENBQWtCRCxNQUFNRSxNQUFOLENBQWFDLEtBQS9CO0FBRHJCO0FBRUdQLFVBQU1DLEtBQU4sQ0FBWU87QUFGZixJQURBO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFDUVIsVUFBTUMsS0FBTixDQUFZUSxJQURwQjtBQUFBO0FBQzBCLG1DQUQxQjtBQUFBO0FBRVdULFVBQU1DLEtBQU4sQ0FBWVMsT0FGdkI7QUFBQTtBQUVtQyxtQ0FGbkM7QUFBQTtBQUdlVixVQUFNQyxLQUFOLENBQVlVO0FBSDNCO0FBSkYsR0FEQTtBQWFBLEVBZEYsTUFjUzs7QUFFUCxTQUNBO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxNQUFJLFdBQVUsYUFBZCxFQUE0QixPQUFPWCxNQUFNRyxLQUF6QztBQUNDLGNBQVVDLEtBQUQsSUFBV0osTUFBTUssV0FBTixDQUFrQkQsTUFBTUUsTUFBTixDQUFhQyxLQUEvQixDQURyQjtBQUVJUCxVQUFNQyxLQUFOLENBQVlPO0FBRmhCLElBREQ7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUNTUixVQUFNQyxLQUFOLENBQVlRLElBRHJCO0FBQUE7QUFDMkIsbUNBRDNCO0FBQUE7QUFFWVQsVUFBTUMsS0FBTixDQUFZUyxPQUZ4QjtBQUFBO0FBRW9DLG1DQUZwQztBQUFBO0FBR2dCVixVQUFNQyxLQUFOLENBQVlVO0FBSDVCO0FBSkYsR0FEQTtBQVlBO0FBRUYsQ0FoQ0Q7O0FBb0NBLGVBQWVaLGNBQWYiLCJmaWxlIjoib2xkTUxFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3RFbnRyeSA9IChwcm9wcykgPT4ge1xuXG5cdGlmIChwcm9wcy5tb3ZpZS53YXRjaGVkKSB7XG5cdCAgcmV0dXJuIChcblx0ICA8ZGl2PlxuXHQgIDxsaSBjbGFzc05hbWU9J21vdmllLXRpdGxlIHdhdGNoZWQnIHZhbHVlPXtwcm9wcy5pbmRleH1cblx0ICBcdG9uQ2xpY2s9eyhldmVudCkgPT4gcHJvcHMudG9nZ2xlTW92aWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gXG5cdCAgXHQ+e3Byb3BzLm1vdmllLnRpdGxlfTwvbGk+XG5cdCAgXHRcdDxwPlxuXHQgIFx0XHRcdFllYXI6IHtwcm9wcy5tb3ZpZS55ZWFyfSA8YnIvPlxuXHQgIFx0XHRcdFJ1bnRpbWU6IHtwcm9wcy5tb3ZpZS5ydW50aW1lfW1pbiA8YnIvPlxuXHQgIFx0XHRcdEltZGIgUmF0aW5nOiB7cHJvcHMubW92aWUuaW1kYlJhdGluZ31cblx0ICBcdFx0PC9wPlxuXHQgIDwvZGl2PlxuXHQgIFxuXG5cdCl9IGVsc2UgIHtcblxuXHQgIHJldHVybiAoXG5cdCAgPGRpdj5cblx0XHQgIDxsaSBjbGFzc05hbWU9J21vdmllLXRpdGxlJyB2YWx1ZT17cHJvcHMuaW5kZXh9XG5cdFx0ICBcdG9uQ2xpY2s9eyhldmVudCkgPT4gcHJvcHMudG9nZ2xlTW92aWUoZXZlbnQudGFyZ2V0LnZhbHVlKSBcblx0XHQgIFx0fT57cHJvcHMubW92aWUudGl0bGV9PC9saT5cblx0XHRcdFx0XHQ8cD5cblx0XHQgIFx0XHRcdFllYXI6IHtwcm9wcy5tb3ZpZS55ZWFyfSA8YnIvPlxuXHRcdCAgXHRcdFx0UnVudGltZToge3Byb3BzLm1vdmllLnJ1bnRpbWV9bWluIDxici8+XG5cdFx0ICBcdFx0XHRJbWRiIFJhdGluZzoge3Byb3BzLm1vdmllLmltZGJSYXRpbmd9XG5cdCAgXHRcdCA8L3A+XG5cdCAgPC9kaXY+XG5cblx0KX1cblxufVx0XG5cblxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3RFbnRyeTsiXX0=