import MovieListEntry from "./MovieListEntry.js";

var MovieList = props => React.createElement(
	"ul",
	{ id: "movie-list" },
	props.movies.map((movie, index) => React.createElement(MovieListEntry, { movie: movie, index: index,
		highlightMovie: props.highlightMovie,
		toggleWatched: props.toggleWatched }))
);

export default MovieList;

//know what movie is clicked on
//update the watched property of the clicked movie
//use this.setState to re render.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIk1vdmllTGlzdCIsInByb3BzIiwibW92aWVzIiwibWFwIiwibW92aWUiLCJpbmRleCIsImhpZ2hsaWdodE1vdmllIiwidG9nZ2xlV2F0Y2hlZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsY0FBUCxNQUEyQixxQkFBM0I7O0FBRUEsSUFBSUMsWUFBYUMsS0FBRCxJQUVmO0FBQUE7QUFBQSxHQUFJLElBQUcsWUFBUDtBQUVHQSxPQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEtBRWpCLG9CQUFDLGNBQUQsSUFBZ0IsT0FBT0QsS0FBdkIsRUFBOEIsT0FBT0MsS0FBckM7QUFDQyxrQkFBZ0JKLE1BQU1LLGNBRHZCO0FBRUMsaUJBQWVMLE1BQU1NLGFBRnRCLEdBRkE7QUFGSCxDQUZEOztBQWNBLGVBQWVQLFNBQWY7O0FBSUE7QUFDQTtBQUNBIiwiZmlsZSI6Ik1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3RFbnRyeSBmcm9tIFwiLi9Nb3ZpZUxpc3RFbnRyeS5qc1wiXG5cbnZhciBNb3ZpZUxpc3QgPSAocHJvcHMpXHQ9PiAoXG5cblx0PHVsIGlkPSdtb3ZpZS1saXN0Jz5cblx0XHR7XG5cdFx0ICBwcm9wcy5tb3ZpZXMubWFwKChtb3ZpZSwgaW5kZXgpID0+IFxuXG5cdFx0ICA8TW92aWVMaXN0RW50cnkgbW92aWU9e21vdmllfSBpbmRleD17aW5kZXh9XG5cdFx0ICBcdGhpZ2hsaWdodE1vdmllPXtwcm9wcy5oaWdobGlnaHRNb3ZpZX1cblx0XHQgIFx0dG9nZ2xlV2F0Y2hlZD17cHJvcHMudG9nZ2xlV2F0Y2hlZH0vPlxuXHRcdFxuXHRcdCl9XG5cdDwvdWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcblxuXG5cbi8va25vdyB3aGF0IG1vdmllIGlzIGNsaWNrZWQgb25cbi8vdXBkYXRlIHRoZSB3YXRjaGVkIHByb3BlcnR5IG9mIHRoZSBjbGlja2VkIG1vdmllXG4vL3VzZSB0aGlzLnNldFN0YXRlIHRvIHJlIHJlbmRlci4gIl19